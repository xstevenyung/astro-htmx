export default function createPlugin() {
  return {
    name: "astro-htmx",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page",
          `import * as htmx from "htmx.org";
          document.addEventListener('astro:after-swap', () => {
            htmx.process(document.body)
          })`
        );
      },
    },
  };
}
