import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {


  private title: string;

  constructor(){
    this.title = 'petinder'
  }

  get _title() : string{
    return this.title;
  }

  // title = 'header';

  ngOnInit(): void {
  }

}
