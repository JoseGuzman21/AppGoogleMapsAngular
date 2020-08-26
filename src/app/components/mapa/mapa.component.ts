import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = 51.678418;
  lng = 7.809007;

  // tslint:disable-next-line: variable-name
  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {
    this.loadMarcadoresOfLocalStorage();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  agregarMarcador(evento) {
    const coords: { lat: number, lng: number} = evento.coords;
    console.log(evento.coords);
    /* const nuevoMarcador = new Marcador(131.121212, 123.123121);
    this.marcadores.push(nuevoMarcador);
    this.saveStorage(); */
  }

  // tslint:disable-next-line: typedef
  loadMarcadoresOfLocalStorage() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  // tslint:disable-next-line: typedef
  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 2000 });
  }

  // tslint:disable-next-line: typedef
  deleteMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 2000 });
  }

  // tslint:disable-next-line: typedef
  updateMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion}
    });
  }
}
