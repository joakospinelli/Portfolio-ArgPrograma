import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionItems: any;
  prueba: String = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/educacion').subscribe((data: any) => this.educacionItems = data);
  }

}

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionItem implements OnInit {

  @Input() item?: any;

  constructor (private dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducacionDialog, {
      width: '25%',
    })

    dialogRef.afterClosed().subscribe( () => {
    })
  }

  getStatus(): String {
    return this.item.terminado ? 'Completado' : 'En curso'
  }

  private getFecha(fecha: Date): String {
    let act = new Date(fecha).toISOString().split('T')[0].split('-');
    act.pop();
    act.reverse();
    return act.join('/');
  }

  getFechaInicial(): String {
    return this.getFecha(this.item.fechaInicio);
  }

  getFechaFinal(): String {
    if (this.item.fechaFin) {
      return this.getFecha(this.item.fechaFin);
    } else {
      return 'Actualidad';
    }
  }

}

@Component({
  selector: 'educacion-dialog',
  templateUrl: './educacion-dialog.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionDialog implements OnInit {

  ngOnInit(): void {

  }

  constructor(public dialogRef: MatDialogRef<EducacionDialog>) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
