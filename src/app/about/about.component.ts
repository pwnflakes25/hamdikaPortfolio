import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
userInfo: Object = {
  fullName: 'Hamdika',
  about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imageUrl: 'Image'
}

  constructor() { }



  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  addSlideUp() {
  const targets = document.querySelectorAll(".slide-up-entry");

  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-up');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, {threshold: 0.75});


    targets.forEach((target) => {
      observer.observe(target);
    });

}

}
