import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Informacion } from 'src/app/classes/informacion';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  titulo: string = '_';
  data: Informacion = new Informacion(0,'','','');


  constructor() { }

  ngOnInit(): void {

    this.write('Joaquín Spinelli');

  }

  private write(msg: string): void{
    for (let i=0;i < msg.length;i++){

      setTimeout(() => {
        const chars = [ ...this.titulo];
        chars[i] = msg[i];
        if (i < (msg.length - 1)){
          chars[i + 1] = '_';
        }
        this.titulo = chars.join("");
      }, 100 * i);
    }

  }

}
