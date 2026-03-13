sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ns.componentcard.controller.Main", {
        onInit: function () {

        },

        onClearInput: function () {
            const oInput = this.byId("userInput");
            oInput.setValue("");
        },

        onAddUser: function () {
            const oInput = this.byId("userInput");
            const sValue = oInput.getValue();

            if (!sValue) {
                MessageToast.show("Please enter a user name before adding.");
                return;
            }

            const oModel = this.getView().getModel(); // default OData model

            if (!oModel) {
                MessageToast.show("No OData model found.");
                return;
            }

            // Simple mock create payload
            const oNewUser = {
                ID: Date.now().toString(), // mock ID
                Name: sValue,
                Email: `${sValue.toLowerCase().replace(/\s+/g, ".")}@accenture.com`
            };

            oModel.create("/Users", oNewUser, {
                success: () => {
                    MessageToast.show("User created.");
                    // Optionally refresh the list to see the new record
                    const oList = this.byId("userList");
                    const oBinding = oList.getBinding("items");
                    if (oBinding) {
                        oBinding.refresh();
                    }
                },
                error: () => {
                    MessageToast.show("Error while creating user.");
                }
            });

            oInput.setValue("");
        }
    });
});
