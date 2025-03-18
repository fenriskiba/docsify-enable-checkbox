(function () {
    window.$docsify.markdown = {
        renderer: {
            listitem: function (e) {
                e = e.replace("disabled=\"\"", "")
                return this.origin.listitem.apply(this, arguments);
            }
        }
    };
})();
