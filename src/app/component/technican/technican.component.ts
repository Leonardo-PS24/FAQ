import { Component } from '@angular/core';

@Component({
  selector: 'app-technican',
  templateUrl: './technican.component.html',
  styleUrls: ['./technican.component.css']
})
export class TechnicanComponent {
  public data = [
    {
    "question": "What are the technical specifications of the Pharmaself24 dispenser and what components are used?",
    "answer": "The technical specifications of the Pharmaself24 dispenser include its dimensions, weight, power supply requirements, storage capacity, and dispensing mechanisms. The components used in the dispenser include the user interface, dispensing unit, storage unit, and control system."
    },
    {
    "question": "How can I access the control panel of the Pharmaself24 dispenser?",
    "answer": "The control panel of the Pharmaself24 dispenser can be accessed by authorized personnel using a secure login and password. The specific steps to access the control panel will depend on the model and software version of the dispenser."
    },
    {
    "question": "What are the maintenance and repair procedures for the Pharmaself24 dispenser?",
    "answer": "The maintenance procedures for the Pharmaself24 dispenser include regular cleaning, inspection of the dispensing unit and storage unit, and replacement of worn components. The repair procedures for the dispenser may involve replacement of malfunctioning components or reprogramming of the software."
    },
    {
    "question": "What tools and equipment are required to perform maintenance or repairs on the Pharmaself24 dispenser?",
    "answer": "The tools and equipment required to perform maintenance or repairs on the Pharmaself24 dispenser may include screwdrivers, pliers, replacement parts, and diagnostic software. The specific tools and equipment needed will depend on the nature of the maintenance or repair task."
    },
    {
    "question": "What are the safety procedures for accessing the Pharmaself24 dispenser?",
    "answer": "The safety procedures for accessing the Pharmaself24 dispenser may include wearing protective gear such as gloves and goggles, turning off the power supply before performing maintenance or repairs, and following all relevant safety protocols and regulations."
    },
    {
    "question": "What are the testing and verification procedures for the operation of the Pharmaself24 dispenser?",
    "answer": "The testing and verification procedures for the operation of the Pharmaself24 dispenser may involve running diagnostic tests on the dispensing unit, storage unit, and control system, as well as conducting user tests to verify that the dispenser is functioning properly."
    },
    {
    "question": "How can I obtain technical assistance in case of problems during the installation or maintenance of the Pharmaself24 dispenser?",
    "answer": "Technical assistance for the installation or maintenance of the Pharmaself24 dispenser may be available through the manufacturer's customer support hotline or online help center. The specific procedures for obtaining technical assistance will depend on the manufacturer's policies and procedures."
    },
    {
    "question": "What are the procedures for updating the software of the Pharmaself24 dispenser?",
    "answer": "The procedures for updating the software of the Pharmaself24 dispenser may involve downloading and installing software updates from the manufacturer's website, or using a USB drive to transfer the updates to the dispenser. The specific procedures for updating the software will depend on the model and software version of the dispenser."
    },
    {
    "question": "What are the safety and compliance regulations that the Pharmaself24 dispenser must adhere to?",
    "answer": "The Pharmaself24 dispenser must adhere to relevant safety and compliance regulations, which may include FDA regulations, ISO standards, and local laws and regulations. The specific regulations will depend on the location and intended use of the dispenser."
    },
    {
    "question": "What are the monitoring and fault detection methods for the Pharmaself24 dispenser?",
    "answer": "The monitoring and fault detection methods for the Pharmaself24 dispenser may include real-time monitoring ofthe dispenser's performance, periodic system checks and maintenance, and automated fault detection systems that can identify and report malfunctions or errors. The specific methods used will depend on the model and software version of the dispenser, as well as the manufacturer's policies and procedures."
    }
    ];
  public results = [...this.data];

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement)?.value?.toLowerCase();
    this.results = this.data.filter(d => d.question.toLowerCase().indexOf(query) > -1 || d.answer.toLowerCase().indexOf(query) > -1);

  }
  
}
