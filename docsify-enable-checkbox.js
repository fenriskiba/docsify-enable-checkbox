(function () {
    window.$docsify.markdown = {
        renderer: {
            listitem: function (e) {
                // Find the path, minus the "#" Docsify adds or any query strings 
                let currentPath = window.location.hash.split("?")[0].slice(1)

                // Determine which lists the current page is in
                let isInIncludedList = ($props.includedPagesList || []).includes(currentPath);
                let isInExcludedList = ($props.excludedPagesList || []).includes(currentPath);

                // If the page can have checkboxes enabled, remove the disabled tag
                if (($props.includeAll && !isInExcludedList) || isInIncludedList) {
                    e = e.replace("disabled=\"\"", "")
                }

                // Continue to render the checkboxes
                return this.origin.listitem.apply(this, arguments);
            }
        }
    };

    // Setup configs
    $docsify = window.$docsify || {};
    $props = $docsify.docsifyEnableCheckbox || { includeAll: true };
})();
