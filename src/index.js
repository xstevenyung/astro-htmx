export default function createPlugin() {
  return {
    name: "astro-htmx",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript("page", `import "htmx.org"`);
      },
    },
  };
}
