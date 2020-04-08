import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent
{
    agregarPersona=false;
    agregarPersonaStatus="No se ha agregado ninguna persona";
    tituloPersona="Ingeniero";
   constructor()
   {
       setTimeout(
        ()=>{this.agregarPersona=true;}   
        ,3000);
   }
   onCrearPersona()
   {
        this.agregarPersonaStatus="Persona Agregada";
   }
   onModificarPersona(event: Event)
   {
        this.tituloPersona=(<HTMLInputElement>event.target).value;
   }
}