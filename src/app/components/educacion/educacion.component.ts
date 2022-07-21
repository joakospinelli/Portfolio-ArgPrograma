import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducacionFormatterService } from 'src/app/services/educacion-formatter.service';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionItems: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/educacion').subscribe((data: any) => this.educacionItems = data.sort( (a: any,b: any) =>{ return a.terminado - b.terminado; }));
  }

}

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionItem implements OnInit {

  @Input() item?: any;

  constructor (private dialog: MatDialog, public formatter: EducacionFormatterService) {

  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducacionDialog, {
      data: this.item,
      width: '30%',
    })

    dialogRef.afterClosed().subscribe( () => {
    })
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

  constructor(public dialogRef: MatDialogRef<EducacionDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public formatter: EducacionFormatterService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
