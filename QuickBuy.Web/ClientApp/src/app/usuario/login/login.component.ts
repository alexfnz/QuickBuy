import { Component } from "@angular/core";
import { Usuario } from "../../modelo/usuario";

@Component({
  templateUrl: "./login.component.html",
  selector: "app-login",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent{
  public usuario;

  constructor(){
    this.usuario = new Usuario();
  }
}
