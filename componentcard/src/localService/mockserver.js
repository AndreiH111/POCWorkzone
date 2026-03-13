sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/Log"
], function (MockServer, Log) {
    "use strict";

    const SERVICE_URL = "/mockservice/";

    const MockServerInitializer = {
        init: function () {
            // Create mock server instance
            const oMockServer = new MockServer({
                rootUri: SERVICE_URL
            });

            // Global MockServer configuration
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: 500 // ms
            });

            // Resolve path to localService folder
            const sLocalServicePath = sap.ui.require.toUrl("ns/users_component_card/localService");
            const sMetadataUrl = `${sLocalServicePath}/metadata.xml`;
            const sMockdataBaseUrl = `${sLocalServicePath}/mockdata`;

            // Simulate OData service based on metadata + mockdata
            oMockServer.simulate(sMetadataUrl, {
                sMockdataBaseUrl,
                bGenerateMissingMockData: true
            });

            // Start mock server
            oMockServer.start();

            Log.info(
                `MockServer for ${SERVICE_URL} started`,
                "ns.users_component_card.localService.mockserver"
            );
        }
    };

    return MockServerInitializer;
});
``