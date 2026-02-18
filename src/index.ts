import { serve } from "bun";
import { Database } from "bun:sqlite";
import index from "./index.html";

const db = new Database("waitlist.db");
db.run(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

const insertEmail = db.prepare("INSERT INTO waitlist (email) VALUES (?)");

const server = serve({
  routes: {
    "/*": index,

    "/api/waitlist": {
      async POST(req) {
        const { email } = await req.json() as { email?: string };
        if (!email || !email.includes("@")) {
          return Response.json({ error: "Invalid email" }, { status: 400 });
        }
        try {
          insertEmail.run(email.trim().toLowerCase());
          return Response.json({ ok: true });
        } catch {
          // UNIQUE constraint — already signed up
          return Response.json({ error: "Already registered" }, { status: 409 });
        }
      },
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);
