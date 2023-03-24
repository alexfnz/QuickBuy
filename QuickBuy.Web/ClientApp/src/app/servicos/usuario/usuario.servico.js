"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioServico = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UsuarioServico = exports.UsuarioServico = /** @class */ (function () {
    function UsuarioServico(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    Object.defineProperty(UsuarioServico.prototype, "usuario", {
        get: function () {
            var usuario_json = sessionStorage.getItem("usuario-autenticado");
            this._usuario = JSON.parse(usuario_json);
            return this._usuario;
        },
        set: function (usuario) {
            sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
            this._usuario = usuario;
        },
        enumerable: false,
        configurable: true
    });
    UsuarioServico.prototype.usuario_autenticado = function () {
        return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
    };
    /*
    public usuario_administrador(): boolean {
      return this.usuario_autenticado() && this.usuario.ehAdministrador;
    }*/
    UsuarioServico.prototype.limparSessao = function () {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    };
    Object.defineProperty(UsuarioServico.prototype, "headers", {
        get: function () {
            return new http_1.HttpHeaders().set('content-type', 'application/json');
        },
        enumerable: false,
        configurable: true
    });
    UsuarioServico.prototype.verificarUsuario = function (usuario) {
        var headers = new http_1.HttpHeaders().set('content-type', 'application/json');
        var body = {
            email: usuario.email,
            senha: usuario.senha
        };
        return this.http.post(this.baseUrl + "api/usuario/verificarUsuario", body, { headers: headers });
    };
    UsuarioServico.prototype.cadastrarUsuario = function (usuario) {
        return this.http.post(this.baseUrl + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
    };
    UsuarioServico = __decorate([
        (0, core_1.Injectable)({
            providedIn: "root"
        }),
        __param(1, (0, core_1.Inject)('BASE_URL'))
    ], UsuarioServico);
    return UsuarioServico;
}());
//# sourceMappingURL=usuario.servico.js.map