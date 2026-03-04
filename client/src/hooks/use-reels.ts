import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

export function useDownloadReel() {
  return useMutation({
    mutationFn: async (url: string) => {
      // 1. Client-side validation using shared schema
      const validated = api.reels.download.input.parse({ url });

      // 2. API Request
      const res = await fetch(api.reels.download.path, {
        method: api.reels.download.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      // 3. Handle non-200 responses
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.reels.download.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
          const error = api.reels.download.responses[500].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to process download request");
      }

      // 4. Parse successful response
      return api.reels.download.responses[200].parse(await res.json());
    },
  });
}
