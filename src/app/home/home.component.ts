import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
profession: string = 'a student';
codeletters = "&#*+%?£@§$";
message = 0;
current_length = 0;
fadeBuffer = null;
messages = [
  'An electrical engineer',
  'An egyptian',
  'A human',
  'Cool.'
];
isSwitchOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const cursor = (<any>document).querySelector('.cursor');
    document.addEventListener('mousemove', e => {
       // cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
       cursor.style.left = `${e.clientX}px`;
       cursor.style.top = `${e.clientY}px`;
    })
  }

  onActive() {
    if(this.isSwitchOn) {
      this.isSwitchOn = false;
    } else {
      this.isSwitchOn = true;
      this.animateIn();
    }
  }


  generateRandomString(length) {
    let random_text = '';
    while(random_text.length < length){
      random_text += this.codeletters.charAt(Math.floor(Math.random()*this.codeletters.length));
    }
    return random_text;
  };

  animateIn() {
      if(this.current_length < this.messages[this.message].length){
          this.current_length = this.current_length + 2;
        if(this.current_length > this.messages[this.message].length) {
          this.current_length = this.messages[this.message].length;
        }

        const message = this.generateRandomString(this.current_length);
        document.getElementById('profession').innerHTML = message;

        setTimeout(this.animateIn.bind(this), 20);
      } else {
        setTimeout(this.animateFadeBuffer.bind(this), 20);
      }
  };

  animateFadeBuffer() {
    if(this.fadeBuffer === null || this.fadeBuffer === undefined || this.fadeBuffer === false) {
      this.fadeBuffer = [];
      for (let i = 0; i < this.messages[this.message].length; i++){
        this.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: this.messages[this.message].charAt(i)});
      }
    }

    let do_cycles = false;
    let message = '';

    for(let i = 0; i < (<any>this.fadeBuffer).length; i++) {
      let fader = this.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += this.codeletters.charAt(Math.floor(Math.random()*this.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    // this.fadeBuffer.forEach(object => {
    //     let fader = object;
    //     if(fader.c > 0) {
    //       do_cycles = true;
    //       fader.c--;
    //       message += this.codeletters.charAt(Math.floor(Math.random()*this.codeletters.length));
    //     } else {
    //       message += fader.l;
    //     }
    //   })

    document.getElementById('profession').innerHTML = message;

    if(do_cycles === true) {
      setTimeout(this.animateFadeBuffer.bind(this), 50);
    } else {
      setTimeout(this.cycleText.bind(this), 2500);
    }
  };

  cycleText() {
    this.message +=  1;
    if(this.message >= this.messages.length){
      this.message = 0;
    }

    this.current_length = 0;
    this.fadeBuffer = null;
    document.getElementById('profession').innerHTML = '';

    setTimeout(this.animateIn.bind(this), 200);
  };

}
