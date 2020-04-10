import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

 
 public  nombrePersona:string;
  public apellidoPersona: string;
  public edad:number;
  constructor(nombre:string,apellido:string, edad:number)
  {
    this.nombrePersona=nombre;
    this.apellidoPersona=apellido;
    this.edad=edad;
  }
  getEdad():number
  {
    return this.edad;
  }
  getApellidoPersona():string
  {
    return this.apellidoPersona;
  }
  getNombrePersona():string
  {
    return this.nombrePersona;
  }
}
