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
  
public results = [...data];

mostraDiv(){
  if (this.results.length < 1) {
    return true;
  } else {
    return false;
  }

}
  handleInput(event: Event) {
    const x = document.getElementById("nothing");
const query = (event.target as HTMLInputElement)?.value?.toLowerCase();
this.results = data.filter(d => d.question.toLowerCase().indexOf(query) > -1 || d.answer.toLowerCase().indexOf(query) > -1);

    
  }

}
