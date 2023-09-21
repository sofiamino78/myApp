import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  nombre="Sofía";
  apellido="Miño";
  edad=15;
  //empresa="Amazon"

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario() {
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event) {
    //alert("El usuario se acaba de registrar");
    
    if((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }
  }


  constructor() { }
  
  ngOnInit(): void {
    
  }
}
