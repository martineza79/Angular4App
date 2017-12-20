import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // name = 'Julius Caesar';
  name:string;
  age:number;
  email:string;
  address:Address;
  // {
  //   street:string,
  //   city:string,
  //   state:string;
  // }
  hobbies:string[];
  hello:any;
  
  constructor() { 
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    
    //this[same as C#].local variable overrides name global variable
    this.name = 'Julius Caesar';
    this.email = 'test@test.com';
    this.age = 32;
    this.address = {
      street:'50 Main st',
      city:'Rome',
      state:'Lazio'
    }
    this.hobbies = ['Write Code', 'Drink Coffee', 'Write Code'];
    this.hello = 'hello';
  }

  onClick(){
    this.name='Napoleon';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string;
}
