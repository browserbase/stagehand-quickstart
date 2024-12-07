import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

async function main() {
  const stagehand = new Stagehand({ env: 'LOCAL', debugDom: true });
  await stagehand.init();
  await stagehand.page.goto("https://www.github.com/browserbase");
  await stagehand.act({
    action: "Click on the stagehand repo",
  });

  const { about } = await stagehand.extract({
    instruction: "extract the repo 'about' value",
    schema: z.object({
      about: z.string(),
    }),
  });

  console.log(`Stagehand: ${about}`);
  await stagehand.close()
}

(async () => {
  await main();
})();
