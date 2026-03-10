sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    // The ID here must match the "sap.app/id" in your manifest.json
    var Component = UIComponent.extend("ns.componentcard.Component", {
        metadata: {
            manifest: "json"
        },
		
    });

    return Component;
});