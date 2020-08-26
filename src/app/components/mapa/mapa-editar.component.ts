import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: FormBuilder) {
    this.form = fb.group({
      titulo: data.titulo,
      descripcion: data.descripcion
  });
}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  saveChanges() {
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
