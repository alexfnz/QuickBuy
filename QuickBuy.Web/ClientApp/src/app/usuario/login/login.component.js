"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var usuario_1 = require("../../modelo/usuario");
var LoginComponent = exports.LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRouter, usuarioServico) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.usuarioServico = usuarioServico;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.usuario = new usuario_1.Usuario();
    };
    LoginComponent.prototype.entrar = function () {
        var _this = this;
        this.ativar_spinner = true;
        this.usuarioServico.verificarUsuario(this.usuario).subscribe(function (usuario_json) {
            _this.usuarioServico.usuario = usuario_json;
            if (_this.returnUrl == null) {
                _this.router.navigate(['/']);
            }
            else {
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (err) {
            console.log(err.error);
            _this.mensagem = err.error;
            _this.ativar_spinner = false;
        });
    };
    LoginComponent = __decorate([
        (0, core_1.Component)({
            templateUrl: "./login.component.html",
            selector: "app-login",
            styleUrls: ["./login.component.css"]
        })
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map