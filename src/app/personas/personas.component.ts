import { Component, Input } from "@angular/core";
import { PersonaComponent } from '../persona/persona.component';
import { Persona } from '../persona.model';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent
{
     
     agregarPersona=false;
    personaCreada=false;
    agregarPersonaStatus="No se ha agregado ninguna persona";
    tituloPersona="Ingeniero";
    arrayPersonas: Persona[]=[new Persona("Jhonatan","Zuniga",27), new Persona("Julieta","Zuniga",4), new Persona("Maritza","Jimenez",46)];
    nombreInput:string;
    apellidoInput:string;
    edadInput:number;
    constructor()
   {
       setTimeout(
        ()=>{this.agregarPersona=true;}   
        ,3000);
   }
   onAgregarPersona():void
   {
    let persona1= new Persona(this.nombreInput,this.apellidoInput,this.edadInput);
    this.arrayPersonas.push(persona1);
    this.personaCreada=true;
    console.log("HOLA, YA SE AGREGÓ LA PERSONA"+this.nombreInput);
   }
   onCrearPersona()
   {
        this.agregarPersonaStatus="Persona Agregada";
        this.personaCreada=true;
   }
   onModificarPersona(event: Event)
   {
        this.tituloPersona=(<HTMLInputElement>event.target).value;
   }
}