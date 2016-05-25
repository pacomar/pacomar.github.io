"use strict";
var testing_1 = require('@angular/core/testing');
var pruebas_component_1 = require('../app/pruebas.component');
testing_1.beforeEachProviders(function () { return [pruebas_component_1.PruebasAppComponent]; });
testing_1.describe('App: Pruebas', function () {
    testing_1.it('should create the app', testing_1.inject([pruebas_component_1.PruebasAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'pruebas works!\'', testing_1.inject([pruebas_component_1.PruebasAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('pruebas works!');
    }));
});
//# sourceMappingURL=pruebas.component.spec.js.map