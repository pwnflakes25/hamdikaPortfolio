import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
]

  constructor() { }

  ngOnInit(): void {
  }

}
