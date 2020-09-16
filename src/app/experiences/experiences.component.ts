import { Component, OnInit, AfterViewInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onShowDetail(exp, index) {
   this.expDetails = {...exp};
   this.selectedIndex = index;
  }

}
