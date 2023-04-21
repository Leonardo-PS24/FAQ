import { Component } from '@angular/core';
import data from './faqtech.json';

interface Question {
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-technican',
  templateUrl: './technican.component.html',
  styleUrls: ['./technican.component.css']
})

export class TechnicanComponent {

  // A public property results is declared and initialized with an array of data
  public results = [...data];
  
  // A method showDiv is declared which checks if the length of results array is less than 1 and returns true, else returns false
  showDiv(){
    if (this.results.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  
  // A method handleInput is declared which takes an event as input
  handleInput(event: Event) {
  
    // A variable x is declared and initialized with an HTML element using its ID
    const x = document.getElementById("nothing");
    
    // A variable query is declared and initialized with the lowercased value of the input target
    const query = (event.target as HTMLInputElement)?.value?.toLowerCase();
    
    // The results property is assigned a filtered array based on whether the question or answer property of each object in data contains the query string
    this.results = data.filter(d => d.question.toLowerCase().indexOf(query) > -1 || d.answer.toLowerCase().indexOf(query) > -1);
  }
}
  
