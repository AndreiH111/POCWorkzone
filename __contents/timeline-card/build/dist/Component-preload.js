//@ui5-bundle ns/users_timeline_card/Component-preload.js
sap.ui.require.preload({
	"ns/users_timeline_card/i18n/i18n.properties":'\n',
	"ns/users_timeline_card/i18n/i18n_en.properties":'',
	"ns/users_timeline_card/manifest.json":'{"_version":"1.14.0","sap.app":{"id":"ns.users_timeline_card","type":"card","title":"User Action Timeline Card","subTitle":"UI5 Integration Card of Type Timeline","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"phone":true,"tablet":true},"icons":{"icon":"sap-icon://list"}},"sap.card":{"type":"Timeline","header":{"title":"User Actions Timeline","icon":{"src":"sap-icon://account"}},"content":{"data":{"path":"/activitiesTimeline"},"item":{"dateTime":{"value":"{time}"},"description":{"value":"{description}"},"title":{"value":"{title}"},"icon":{"src":"{icon}"}}},"configuration":{"destinations":{"key":{"name":"AKH_CARDS2"}}},"data":{"request":{"url":"{{destinations.key}}/api/noAuth/timeline"},"path":"/"}},"sap.platform.mobilecards":{"compatible":false}}'
});
//# sourceMappingURL=Component-preload.js.map
