import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent {
  subtitulo: string = 'Este es un ejemplo de interpolacion mediante {{ }}';
  variable1: number = 7;

  estudianteActual: Estudiante = {
    nombre: 'Eliseo',
    edad: 27,
    estaActivo: true,
  };

  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'Eliseo',
      edad: 27,
      estaActivo: true,
    },
    {
      nombre: 'Monica',
      edad: 25,
      estaActivo: false,
    },
    {
      nombre: 'Edgardo',
      edad: 30,
      estaActivo: true,
    },
  ];

  listaEstudiantes2: Estudiante[] = [
    {
      nombre: 'Nadia',
      edad: 27,
      estaActivo: true,
    },
    {
      nombre: 'Matias',
      edad: 25,
      estaActivo: false,
    },
    {
      nombre: 'Octavio',
      edad: 30,
      estaActivo: false,
    },
  ];
}
