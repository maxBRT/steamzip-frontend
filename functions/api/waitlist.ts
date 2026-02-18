interface Env {
    DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    let email: string | undefined;
    try {
        const body = await request.json() as { email?: string };
        email = body.email;
    } catch {
        return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
        return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    try {
        await env.DB.prepare("INSERT INTO waitlist (email) VALUES (?)")
            .bind(email.trim().toLowerCase())
            .run();
        return Response.json({ ok: true });
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (message.includes("UNIQUE") || message.includes("SQLITE_CONSTRAINT")) {
            return Response.json({ error: "Already registered" }, { status: 409 });
        }
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
};
