import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormatterService } from 'src/app/services/formatter.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/classes/experiencia';

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaItems: Array<Experiencia> = [];

  constructor(private service: ExperienciaService) { }

  ngOnInit(): void {
    this.service.getExperiencia().subscribe((data: Array<Experiencia>) => this.experienciaItems = data );
  }

}

@Component({
  selector: 'experiencia-item',
  templateUrl: './experiencia-item.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaItem implements OnInit {

  @Input() data?: any;

  constructor(private dialog: MatDialog, public formatter: FormatterService){ }

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

  constructor(public dialogRef: MatDialogRef<ExperienciaDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public formatter: FormatterService) {

  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
