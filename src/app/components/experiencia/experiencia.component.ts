import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducacionFormatterService } from 'src/app/services/educacion-formatter.service';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaItems: Array<any>;

  constructor(private http: HttpClient) {
    this.experienciaItems = [];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/trabajos').subscribe((data: any) => this.experienciaItems = data );
  }

}

@Component({
  selector: 'experiencia-item',
  templateUrl: './experiencia-item.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaItem implements OnInit {

  @Input() data?: any;

  constructor(private dialog: MatDialog, public formatter: EducacionFormatterService){ }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExperienciaDialog, {
      data: this.data,
      width: '30%',
    })

    dialogRef.afterClosed().subscribe( () => {
    })
  }

}

@Component({
  selector: 'experiencia-dialog',
  templateUrl: './experiencia-dialog.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExperienciaDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public formatter: EducacionFormatterService) {

  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
