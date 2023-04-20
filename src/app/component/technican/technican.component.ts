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
messaggio(){
  window.alert(this.results[0].expanded);
}
  handleInput(event: Event) {
   console.log(this.results[0].expanded);
    const query = (event.target as HTMLInputElement)?.value?.toLowerCase();
    this.results = data.filter(d => d.question.toLowerCase().indexOf(query) > -1 || d.answer.toLowerCase().indexOf(query) > -1);

  }

}
