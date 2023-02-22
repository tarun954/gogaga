import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  events = [
    { date: 'January 1, 2021', title: 'Event 1', description: 'Description of Event 1' },
    { date: 'February 1, 2021', title: 'Event 2', description: 'Description of Event 2' },
    { date: 'March 1, 2021', title: 'Event 3', description: 'Description of Event 3' },
    { date: 'April 1, 2021', title: 'Event 4', description: 'Description of Event 4' },
    { date: 'May 1, 2021', title: 'Event 5', description: 'Description of Event 5' }
  ];
}
