import type { AstroIntegration } from "astro";
import pkg from "../package.json";

export default function createPlugin(): AstroIntegration {
  return {
    name: pkg.name,
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript("page", `import "htmx.org"`);
      },
    },
  };
}
