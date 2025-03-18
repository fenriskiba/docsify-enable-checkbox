# Docsify Enable Checkbox
A simple Docsify extension to make rendered checkboxes enabled.

## Features
Docsify used Github Flavored Markdown, which supports the use of [checkboxes/task lists](https://www.markdownguide.org/extended-syntax/#task-lists). However, it only ever renders them as disabled inputs. In some cases, it can be helpful to enable them to provide users a checklist they can use to visually mark things as complete as they go through it.

!> **Important:** This does not save the users progress, so this is only recommended for lists that users can go through in the span of a single browser session.

## Setup
To add docsify-enable-checkbox to your Docsify site, add the following line to your `index.html` after Docsify.

```html
<script src='//cdn.jsdelivr.net/npm/docsify-enable-checkbox@latest'></script>
```

Then any files containing checkboxes will automatically have them enabled (see [examples/included.md](/examples/included.md) for an example).

### Configuration
By default, all pages will have checkboxes enabled, but you can use the following configurations in you `index.html` to either exclude certain pages or only enable it for specified pages.

This example will leave any checkboxes in the `/test` page disabled, but will enable all other checkboxes in the site.
```javascript
window.$docsify = {
    docsifyEnableCheckbox: {
        includeAll: true,
        excludedPagesList: ["/test"]
    }
}
```

This example will only enable checkboxes that are in the `/test` page.
```javascript
window.$docsify = {
    docsifyEnableCheckbox: {
        includeAll: false,
        includedPagesList: ["/test"]
    }
}
```

For an example of a page with checkboxes disabled by these configs, please see [examples/excluded.md](/examples/excluded.md) 

## License
[MIT License](LICENSE)