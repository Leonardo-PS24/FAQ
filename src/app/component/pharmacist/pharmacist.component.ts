import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent {
  public data = [
    {
      "id": 1,
      "question": "What types of medicines are available in the vending machine?",
      "answer": "The medicine vending machine can offer a wide range of medicines, including over-the-counter and prescription medicines. Additionally, the vending machine can also be used for the retrieval of pre-ordered medicines. Therefore, in practice, any type of medicine can be placed inside the vending machine, depending on the needs and requests of the users. However, it is important to note that the availability of specific medicines may vary depending on the vending machine provider and local laws and regulations regarding the distribution of medicines.",
      "expanded": false
    },
    {
      "id": 2,
      "question": "What are the opening hours of the vending machine?",
      "answer": "Being a vending machine, it is possible that it operates 24 hours a day, 7 days a week.",
      "expanded": false
    },
    {
      "id": 3,
      "question": "Is Pharmaself24 custom-branded?",
      "answer": "Yes, it is possible to customize the vending machine by inserting the name of your pharmacy or your logo. This customization can be done during the installation phase of the vending machine, to make it recognizable and familiar to your patients. However, customization may incur additional costs, as it should be done by the vending machine manufacturer or a specialized technician. Therefore, it is advisable to check the costs and procedures required for the customization of the vending machine before making the purchase.",
      "expanded": false
    },
    {
      "id": 4,
      "question": "How can I start with this business?",
      "answer": "Please contact us through the 'CONTACTS' section for more information.",
      "expanded": false
    },
    {
      "id": 5,
      "question": "What are the sizes of possible medicines?",
      "answer": "Pharmaself24 is available in 6 models of different sizes, all of them can be manufactured with a rear door. The sizes are: Pharmaself24 Stile (approximately 220cm h x 150cm w x 95cm d), Pharmaself24 Midi (approximately 195cm h x 150cm w x 95cm d), Pharmaself24 Mini (approximately 195cm h x 110cm w x 95cm d), Pharmaself24 Slim (approximately 195cm h x 85cm w x 95cm d), Pharmaself24 Midi thin (approximately 195cm h x 150cm w x 68cm d), and Pharmaself24 Mini thin (approximately 195cm h x 110cm w x 68cm d).",
      "expanded": false
    },
    {
      "id": 6,
      "question": "How can people pay for the medicines I have selected?",
      "answer": "The medicine vending machine may offer a variety of payment options to allow people to pay for the selected medicines. These payment options may include cash, credit cards, debit cards, smartphone payment, and other electronic payment methods. If provided, a payment module can be integrated into the appropriate space of the vending machine to simplify and speed up the payment process for users. However, the exact payment options will depend on the specific settings and limitations imposed by the vending machine provider.",
      "expanded": false
    },
    {
      "id": 7,
      "question": "What are the technical requirements for the installation of the medicine vending machine?",
      "answer": "In general, the technical requirements for the installation of a medicine vending machine include: a dedicated space to place the vending machine, which is adequately protected from the weather, secure, and accessible 24/7; a constant 24/",
      "expanded": false
    },
    {
        "id": 8,
        "question": "What are the technical requirements for installing a medication vending machine?",
        "answer": "In general, the technical requirements for installing a medication vending machine include: a suitable space to place the machine, which is adequately protected from the elements, secure, and accessible 24/7; a constant 24/7 power source for the vending machine to function; an internet connection for managing medication reservation and distribution operations; and adequate security and monitoring system to prevent potential intrusions or technical problems. Additionally, a specialized technician will be needed to install, configure, and test the vending machine.",
        "expanded": false
    },
    {
        "id": 9,
        "question": "How does the reservation and retrieval process for medication through the vending machine work?",
        "answer": "In general, the reservation and retrieval process for medication through the vending machine works as follows: the doctor prescribes the medication to the patient and sends the prescription to the pharmacist, as usual; the pharmacist prepares the medication and places it in the vending machine, signaling that it is available for retrieval; the patient receives a notification on the dedicated app, alerting them that the prescribed medication is ready for retrieval from the vending machine; when the patient goes to the vending machine, they use the app to identify themselves and confirm the medication reservation; the vending machine verifies the patient's identity and dispenses the reserved medication. This way, the reservation and retrieval process becomes faster and more efficient for the patient, who can retrieve the medication at any time, even outside the pharmacy's opening hours. Furthermore, the electronic reservation system helps reduce dispensing errors and improve patient safety.",
        "expanded": false
    },
    {
        "id": 10,
        "question": "What are the security checks that the vending machine must have to ensure correct medication distribution?",
        "answer": "The security checks that a medication vending machine must have to ensure correct medication distribution include: secure authentication systems for the patient, to avoid the risk of incorrect medication distribution; secure encryption to protect sensitive patient data, such as health information and medical prescriptions; anti-vandalism protection systems to prevent external attacks or attempts to steal the vending machine; temperature and storage control systems to ensure proper medication storage inside the vending machine; constant monitoring of the vending machine's operation to identify any malfunctions or failures and intervene promptly; and data backup systems to ensure the availability of information even in case of technical problems or service interruptions. This way, the medication vending machine becomes a safe and reliable system for medication distribution, guaranteeing patient data protection and proper medication storage.",
        "expanded": false
      },
    {
        "id": 11,
        "question": "11. Wrong product dispensed?",
        "answer": "In case of dispensing the wrong product, the patient can report the problem to the vending machine by selecting the 'wrong product' option on the vending machine screen. The vending machine will put the wrong product in a separate area and notify the pharmacist through the app. The pharmacist will then be able to respond immediately through the application to verify the problem and provide assistance to the patient. The pharmacist can respond to the patient's request through the app, offering assistance and suggesting necessary actions to resolve the problem, such as replacing the wrong product or correcting the error. This way, it can be ensured that the patient receives the correct medication and any health or safety issues can be avoided.",
        "expanded": false
    }
];
  public results = [...this.data];

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement)?.value?.toLowerCase();
    this.results = this.data.filter(d => d.question.toLowerCase().indexOf(query) > -1 || d.answer.toLowerCase().indexOf(query) > -1);

  }
}
