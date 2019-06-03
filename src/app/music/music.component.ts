import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {LoadMusicService} from './load-music.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit , AfterViewInit {

  public albums: any [] = [];
  public playingTrack: any;
  public seeking = false;
  constructor(private loadMusicService: LoadMusicService, private elementRef: ElementRef ) { }

  ngOnInit() {

    this.loadMusicService.getMusic().subscribe(data => {
      console.log(data['albums']);
      this.albums = data['albums'];

    });


  }


  ngAfterViewInit() {
    setTimeout(() => {

    this.bindEventsToTracks();
  }, 1000);

  }


  bindEventsToTracks() {

    const tracks = document.getElementsByClassName('players');

    for (let t = 0; t < tracks.length; t++) {
//        (<HTMLMediaElement>tracks[t]).addEventListener('timeupdate', this.updateProgressTrack, false);
        const track = tracks[t] as HTMLMediaElement;
        track.ontimeupdate = this.updateProgressTrack;
        const slider = document.getElementById(track.attributes['id'].value  + 'track_progress').previousSibling as HTMLHtmlElement;
        slider.onclick = this.seek;
        slider.onmouseup = this.sliderMouseUp;
        slider.onmouseleave = this.sliderMouseUp;
      }

  }

  
  onClickSubmit(v) {
    
  }

  seek(e) {
    this.seeking = true;

    const seekslider = e.target;

    const track = document.getElementById(e.target.attributes['data-target'].value) as HTMLMediaElement;
    let trackStateChanged = false;


    if (this.seeking) {

      if (!track.paused) {

          track.pause();
          trackStateChanged = true;

      }

      const value = (e.clientX - seekslider.parentElement.offsetLeft) / seekslider.clientWidth;
      const seekto = track.duration * value;
      console.log(seekslider, e.clientX, seekslider.offsetLeft, seekslider.clientWidth);
      track.currentTime = seekto;
      seekslider.nextSibling.style.width = (value * 100) + '%';


      if (trackStateChanged) {
          track.play();
      }

    }


  }

  sliderMouseDown(e) {
    this.seeking = true;

  }

  sliderMouseUp(e) {
    this.seeking = false;
  }


  playtrack(e) {


    const currentTrack = document.getElementById(e.target.attributes['data-target'].nodeValue) as HTMLMediaElement;

    const trackChanged = currentTrack !== this.playingTrack ? true : false;


    if (trackChanged && this.playingTrack !== undefined) {
      this.playingTrack.pause();
      currentTrack.play();
      currentTrack.parentElement.className = 'track playing';
      this.playingTrack.parentElement.className = 'track';
      this.playingTrack = currentTrack;


    }  else if (currentTrack.paused) {
          currentTrack.play();
          currentTrack.parentElement.className = 'track playing';
          this.playingTrack = currentTrack;

    } else  {
      currentTrack.pause();
      currentTrack.parentElement.className = 'track';
    }


  }

  updateProgressTrack(e) {

    const progress = document.getElementById(e.target.attributes['id'].value + 'track_progress');
    const timerProgress = document.getElementById(e.target.attributes['id'].value + 'progress-timer');
    const fullDuaration = document.getElementById(e.target.attributes['id'].value + 'duration');

    const track = document.getElementById(e.target.attributes['id'].value) as HTMLMediaElement;

    let value = 0;
    if (track.currentTime > 0) {
       value = Math.floor((100 / track.duration) * track.currentTime);
    }


    if (!this.seeking) {

      progress.style.width = value + '%';

    }
    function secondsToTime(t) {

      const time = t;
      return padZero(Math.round(Number((Math.round(time) / (60 * 60)) % 24))) + ':' +
            padZero(Math.round(Number((Math.round(time) / (60)) % 60))) + ':' +
            padZero(Math.round(Number((Math.round(time)) % 60)));
    }

    function padZero(v) {
      return (v < 10) ? '0' + v : v;
    }

    timerProgress.innerHTML = secondsToTime(track.currentTime);
    fullDuaration.innerHTML = secondsToTime(track.duration);


  }


}
