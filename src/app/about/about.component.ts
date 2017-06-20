import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[DataServiceService]
})
export class AboutComponent implements OnInit {
  result: Object;
  errorMessage: string;
  someName: string;

  constructor(private dataService: DataServiceService) { 
    this.result = [];
    this.someName = "Arpit";
  }

  setSomeName(name: string): void{
    this.someName = name;
  }

  ngOnInit() {
    this.dataService.getAllFriends().subscribe(response => this.result = response);
    // this.createUser();
  }

  createUser() {
    this.dataService.create({name:'Arpit', mob:'1234567890'})
      .subscribe(response => this.result = response, error => console.log("The error while creating record is :", error));
  }

}
