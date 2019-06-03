  import { Component, OnInit, AfterViewInit } from '@angular/core';
  import {ImageserviceService} from './imageservice.service';

  @Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    providers: [ImageserviceService]

  })
  export class GalleryComponent implements OnInit, AfterViewInit {

    public images: any;
    public layouts: string[] = ['galleryitem1', 'galleryitem2', 'galleryitem3'
    , 'galleryitem4', 'galleryitem5', 'galleryitem6'];
    public renderedImages: any[];
    constructor(private imageserviceService: ImageserviceService) { }

    ngOnInit() {
      this.loadImages();

    }

    ngAfterViewInit() {

      setTimeout(() => {

      }, 2000);
    }


    onClickSubmit(v) {

    }

    loadImages() {

      this.images =[];
      this.renderedImages = [];
      this.imageserviceService.fatchImages().subscribe((response) =>  {
      let content ='';

        this.images = response['getImageNamesResult'];

        console.log(this.images.length);


       let k = 0;
        while (!(k ===  response['getImageNamesResult'].length)) {

          if (k === 0) {

            content += '<div class="gallery">';

          }

           content += '<img src="../../assets/Gallery/' + this.images[k] + '" alt="Gallery image 1" class="galleryimg" />';


          if ((k === response['getImageNamesResult'].length - 1)) {
            content += '</div>';
          }

          k++;

        }

        document.getElementById('gal-content').innerHTML = content;
        });


    }

  }
