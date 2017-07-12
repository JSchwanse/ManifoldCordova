var hostedwebapp = {
    loadManifest: function (successCallback, errorCallback, manifestFileName) {
        cordova.exec(successCallback, errorCallback, "HostedWebApp", "loadManifest", [manifestFileName]);
    },
    getManifest: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "HostedWebApp", "getManifest", []);
    },
    enableOfflinePage: function () {
        cordova.exec(undefined, undefined, "HostedWebApp", "enableOfflinePage", []);
    },
    disableOfflinePage: function () {
        cordova.exec(undefined, undefined, "HostedWebApp", "disableOfflinePage", []);
    },
    connectToWebapp: function(url, successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, 'HostedWebApp', 'connectToWebapp', [url]);
    },
    injectScript: function(pathToScript, successCallback, errorCallback){
        cordova.exec(successCallback, errorCallback, 'HostedWebApp', 'injectPluginScript', [pathToScript]);
    }
};

module.exports = hostedwebapp;
