"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenuComponent = void 0;
var core_1 = require("@angular/core");
//import { LojaCarrinhoCompras } from '../loja/carrinho-compras/loja.carrinho.compras';
var NavMenuComponent = exports.NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, usuarioServico) {
        this.router = router;
        this.usuarioServico = usuarioServico;
        this.isExpanded = false;
    }
    //public carrinhoCompras: LojaCarrinhoCompras;
    NavMenuComponent.prototype.ngOnInit = function () {
        //this.carrinhoCompras = new LojaCarrinhoCompras();
    };
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent.prototype.usuarioLogado = function () {
        return sessionStorage.getItem("usuario-autenticado") == "1";
    };
    NavMenuComponent.prototype.sair = function () {
        //this.usuarioServico.limpar_sessao();
        sessionStorage.setItem("usuario-autenticado", "");
        this.router.navigate(['/']);
    };
    Object.defineProperty(NavMenuComponent.prototype, "usuario", {
        get: function () {
            return this.usuarioServico.usuario;
        },
        enumerable: false,
        configurable: true
    });
    NavMenuComponent.prototype.temItensCarrinhoCompras = function () {
        return null; //this.carrinhoCompras.temItensCarrinhoCompras();
    };
    NavMenuComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
//# sourceMappingURL=nav-menu.component.js.map