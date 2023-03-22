import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  templateUrl: "./login.component.html",
  selector: "app-login",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
  public usuario;
  private returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {
    
  }
    ngOnInit(): void {
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
      this.usuario = new Usuario();
    }

  entrar() {
    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      data => {

      },
      err => {

      }
    );
  }
}
