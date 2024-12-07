import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

async function main() {
  // Initialize stagehand
  // You can mark debugDom: false to hide the debug rectangles
  // You can mark env: 'BROWSERBASE' to run on the cloud,
  //     provided you have BROWSERBASE_API_KEY and BROWSERBASE_PROJECT_ID in your environment
  // Lastly, you can mark headless: true to run in headless mode
  const stagehand = new Stagehand({ env: "LOCAL", debugDom: true });

  // Initialize the stagehand instance
  // This runs on GPT-4o by default. To use Claude, set the `modelName` parameter to `claude-3-5-sonnet-20241022`.
  // Also ensure you have the `ANTHROPIC_API_KEY` environment variable set.
  await stagehand.init();

  // Navigate to a page
  await stagehand.page.goto("https://www.github.com/browserbase");

  // Act on the page
  await stagehand.act({
    action: "Click on the stagehand repo",
  });

  // Extract data from the page
  const { about } = await stagehand.extract({
    instruction: "extract the repo 'about' value",
    schema: z.object({
      about: z.string(),
    }),
  });

  console.log(`Stagehand: ${about}`);

  // Close the stagehand instance
  await stagehand.close();
}

(async () => {
  await main();
})();
