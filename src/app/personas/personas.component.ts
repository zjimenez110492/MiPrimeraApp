import { Component } from "@angular/core";
import { PersonaComponent } from '../persona/persona.component';
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
    arrayPersonas: PersonaComponent[]=[new PersonaComponent("Jhonatan","Zuniga",27), new PersonaComponent("Julieta","Zuniga",4), new PersonaComponent("Maritza","Jimenez",46)];
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
    let persona1= new PersonaComponent(this.nombreInput,this.apellidoInput,this.edadInput);
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