import { Component } from '@angular/core';
import data from './faqpharma.json';

interface Question {
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']

})

export class PharmacistComponent {

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
    // A variable query is declared and initialized with the lowercased value of the input target, split into separate keywords
const query = (event.target as HTMLInputElement)?.value?.toLowerCase().split(' ');

// The results property is assigned a filtered array based on whether all the keywords in the query string are found in the question or answer property of each object in data
this.results = data.filter(d => {
  return query.every(keyword => {
    return d.question.toLowerCase().includes(keyword) || d.answer.toLowerCase().includes(keyword);
  });
});

  
}
}

