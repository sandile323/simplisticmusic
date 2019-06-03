import { Component, OnInit, AfterViewInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit, AfterViewInit {

  public body = document.getElementsByTagName('html')[0];
  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.renderer.listenGlobal('window', 'scroll', (evt) => {

      if (this.body.scrollTop === 0) {
      document.getElementById('header').className = 'appear';
    } else {
      document.getElementById('header').className = '';

    }
     });  }

}
