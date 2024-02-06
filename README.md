# astro-htmx

This **[Astro integration](https://astro.build/integrations/)** adds [HTMX.org](https://htmx.org) to your project so that you can use HTMX.org anywhere on your page.

- <strong>[Inst**al**lation](#installation)</strong>
- <strong>[Usage](#usage)</strong>
- <strong>[Configuration](#configuration)</strong>
- <strong>[Examples](#examples)</strong>
- <strong>[Troubleshooting](#troubleshooting)</strong>
- <strong>[Contributing](#contributing)</strong>
- <strong>[Changelog](#changelog)</strong>

## Installation

### Manual Install

First, install the `astro-htmx` package using your package manager. If you're using npm or aren't sure, run this in the terminal:

```sh
npm install astro-htmx htmx.org
```

Then, apply this integration to your `astro.config.*` file using the `integrations` property:

```diff lang="js" "htmx()"
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
+ import htmx from 'astro-htmx';

  export default defineConfig({
    // ...
    integrations: [htmx()],
    //             ^^^^^^^^
  });
```

## Usage

Once the integration is installed, you can use [HTMX.org](https://htmx.org) directives and syntax inside any Astro component. The HTMX.org script is automatically added and enabled on every page of your website.

Check [Astro Integration Documentation](https://astro.build/integrations/) for more on integrations.

## Limitations

The HTMX.org integration does not give you control over how the script is loaded or initialized. If you require this control, consider [installing and using HTMX.org manually](https://htmx.org/docs/#installing). Astro supports all officially documented HTMX.org manual setup instructions, using `<script>` tags inside of an Astro component.

```astro
---
// src/pages/index.astro
---

<!-- Example: Load HTMX on a single page. -->
<script>
  import "htmx.org";
</script>
```

## Configuration

The HTMX.org integration does not support any custom configuration at this time.

## Examples

- The [Astro HTMX example](https://github.com/xstevenyung/astro-htmx/tree/main/example) shows how to use HTMX in an Astro project.

## Contributing

This package is maintained by [xstevenyung](https://github.com/xstevenyung). You're welcome to submit an issue or PR!

[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
[astro-ui-frameworks]: https://docs.astro.build/en/core-concepts/framework-components/#using-framework-components
[htmx]: https://htmx.org/
