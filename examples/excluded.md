# Disabled Example
**If you are viewing this from the Github code view, please go to [the Github Pages site](https://fenriskiba.github.io/docsify-enable-checkbox/#/examples/excluded.md) to see the example in action.**

Since the [index.html](https://github.com/fenriskiba/docsify-enable-checkbox/blob/main/index.html) for this site included the following configuration, any checkboxes included in this `/examples/excluded` page will remain disabled.

```javascript
window.$docsify = {
    docsifyEnableCheckbox: {
        includeAll: true,
        excludedPagesList: ["/examples/excluded", "/examples/excluded.md"]
    }
}
```

And so they are disabled with the preset checks included:

- [x] test
- [ ] check
- [ ] boxes