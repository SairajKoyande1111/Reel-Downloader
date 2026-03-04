import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.reels.download.path, async (req, res) => {
    try {
      const input = api.reels.download.input.parse(req.body);
      
      // In a real application, you would use an Instagram downloader service or API here.
      // For this MVP, we will mock a successful response.
      const mockVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; 
      
      // Save the download attempt to the database
      await storage.createDownload({
        url: input.url,
        status: "success"
      });

      res.status(200).json({
        success: true,
        videoUrl: mockVideoUrl,
        message: "Reel processed successfully"
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      
      console.error("Error downloading reel:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
