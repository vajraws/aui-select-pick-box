import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aui';

  userForm: FormGroup;

  list:string[] = [];

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'movies': new FormControl(null)
    });

    this.list.push("Django");
    this.list.push("Blood Diamonds");
    this.list.push("The Beach");
    this.list.push("Titanic");
    this.list.push("The Revenant");
    this.list.push("The Wolf of Wall Street");
    this.list.push("The Great Gatsby");
    this.list.push("Inception");
    this.list.push("Shutter Island");
    this.list.push("The Departed");
    this.list.push("The Gangs of NewYork");
    this.list.push("Catch Me if you Can");
    this.list = this.list.sort();
  }

  submit(){
    console.log(this.userForm.value);
  }
}
