// Architecture: game logic runs in Supabase Edge Functions (Deno).
// This Express server exists solely to serve the static client in production
// and provide the /health endpoint. The WebSocket game engine (gameLogic.ts)
// was removed — it was never wired to the client.
import express, { type Request, Response } from "express";
import { Server, createServer } from "http";

export async function registerRoutes(app: express.Express): Promise<Server> {
  // Health check endpoint
  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "healthy" });
  });

  return createServer(app);
}