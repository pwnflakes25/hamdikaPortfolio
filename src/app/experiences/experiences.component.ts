import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, AfterViewInit {
experiences = [
  {
    company: 'experience1',
    position: 'Engineer',
    date: '2018-2019',
    tasks: [
      'task1',
      'task2',
      'task3'
    ]
  },
  {
    company: 'experience2',
    position: 'Engineer',
    date: '2019-2020',
    tasks: [
      'task1',
      'task2',
      'task3'
    ]
  },
  {
    company: 'experience3',
    position: 'Engineer',
    date: '2020-present',
    tasks: [
      'task1',
      'task2',
      'task3'
    ]
  }
];

selectedIndex: number = 0;
expDetails: Object = {...this.experiences[this.selectedIndex]};

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this._platformId)) {
      this.isOnViewPortObserve();
    }
  }

  onShowDetail(exp, index) {
   this.expDetails = {...exp};
   this.selectedIndex = index;
  }

  isOnViewPortObserve() {
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
