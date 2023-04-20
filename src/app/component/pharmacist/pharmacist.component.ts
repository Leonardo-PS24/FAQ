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


