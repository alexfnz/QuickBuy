"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardaRotas = void 0;
var core_1 = require("@angular/core");
var GuardaRotas = exports.GuardaRotas = /** @class */ (function () {
    function GuardaRotas(router, usuarioServico) {
        this.router = router;
        this.usuarioServico = usuarioServico;
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        if (this.usuarioServico.usuario_autenticado()) {
            return true;
        }
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    GuardaRotas = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], GuardaRotas);
    return GuardaRotas;
}());
//# sourceMappingURL=guarda.rotas.js.map