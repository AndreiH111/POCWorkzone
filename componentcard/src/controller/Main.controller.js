sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ns.componentcard.controller.Main", {
        onInit: function () {
            this.getView().byId("helloText").setText("Hello World");
        },

        onClearInput: function () {
            this.byId("userInput").setValue("");
         
        }
    });
});