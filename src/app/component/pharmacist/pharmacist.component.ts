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


