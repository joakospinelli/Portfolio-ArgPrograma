import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
          console.log(current);
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
