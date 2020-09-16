import { Component, OnInit, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from rxjs;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

projects: Array<any> = [
  {
    title: 'project 1',
    imageUrl: 'https://azeemoo.files.wordpress.com/2014/06/azeemo-engineering-projects.jpg',
    description: 'Here is my first project'
  },
  {
    title: 'project 2',
    imageUrl: 'https://lase.mer.utexas.edu/images/EE302_Final_Project.JPG',
    description: 'Here is my second project'
  },
  {
    title: 'project 3',
    imageUrl: 'https://www.thyson.com/wp-content/uploads/2014/04/large-electrical-3.jpg',
    description: 'Here is my third project'
  },
];

isDekstop: boolean;
breakPoint: Observable;


  constructor(breakpointObserver: BreakpointObserver) {
    this.breakPoint = breakpointObserver.observe([
        Breakpoints.WebLandscape,
        Breakpoints.WebPortrait
      ]);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.breakPoint.subscribe(result => {
      if (result.matches) {
        this.isDekstop = true;
        this.alternateProjectsView();
      } else {
        this.isDekstop = false;
        this.alternateProjectsView();
      }
    });
  }

  alternateProjectsView() {
    if(this.isDekstop) {
      let descriptions = document.getElementsByClassName('descriptionBox');
      for(let i = 0; i < descriptions.length; i++)  {
        if(i % 2 === 0) {
          (<any>descriptions[i]).style.right = '10%';
           (<any>descriptions[i]).style.left = 'auto';
            (<any>descriptions[i]).style.bottom = 'auto';
           (<any>descriptions[i]).style.textAlign = 'right';

        }
      }
       let images = document.getElementsByClassName('imageBox');
       for(let i = 0; i < images.length; i++)  {
         if(i % 2 === 0) {
           (<any>images[i]).style.right = '36%';
            (<any>images[i]).style.left = 'auto';
         }
       }
    } else {

      let descriptions = document.getElementsByClassName('descriptionBox');
      for(let i = 0; i < descriptions.length; i++)  {
        if(i % 2 === 0) {
          (<any>descriptions[i]).style.top = 'auto';
           (<any>descriptions[i]).style.bottom = '10%';
           (<any>descriptions[i]).style.left = '0';
           (<any>descriptions[i]).style.textAlign = 'right';
        }
      }
       let images = document.getElementsByClassName('imageBox');
       for(let i = 0; i < images.length; i++)  {
         if(i % 2 === 0) {
           (<any>images[i]).style.top = '0';
            (<any>images[i]).style.right = 'auto';
            (<any>images[i]).style.left = '0';
         }
       }

    }

  }

}
