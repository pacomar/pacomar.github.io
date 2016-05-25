"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var angularfire2_1 = require('angularfire2');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.PruebasAppComponent, [
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase('https://pruebasangular2.firebaseio.com/'),
    angularfire2_1.firebaseAuthConfig({
        provider: angularfire2_1.AuthProviders.Google,
        method: angularfire2_1.AuthMethods.Redirect
    })
]);
//# sourceMappingURL=main.js.map