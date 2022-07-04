import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log(this.http.get('http://rickandmortyapi.com/api/location/20').subscribe((data: any) => console.log(data)));
  }
  
  title = 'portfolio-argprograma';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let current: any = "";
    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        if (section.getAttribute("id") != null){
          current = section.getAttribute("id");
        }
      }
    });
    
    document.querySelectorAll('.nb').forEach((nb) => {
      nb.classList.remove('active');
      if (nb.classList.contains(current)){
        nb.classList.add('active');
      }
    })
  }
}
