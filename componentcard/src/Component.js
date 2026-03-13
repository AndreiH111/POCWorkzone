sap.ui.define([
    "sap/ui/core/UIComponent",
    "ns/componentcard/localService/mockserver"
], function (UIComponent, mockserver) {
    "use strict";

    const Component = UIComponent.extend("ns.componentcard.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Initialize mock server (for local/dev usage)
            mockserver.init();

            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
        }
    });

    return Component;
});