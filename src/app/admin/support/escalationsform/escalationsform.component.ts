import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-escalationsform',
  templateUrl: './escalationsform.component.html',
  styleUrls: ['./escalationsform.component.css']
})
export class EscalationsformComponent {
  escalationsregarding = [
    {name:'Process', value:'process'},
    {name:'Sales', value:'sales'},
    {name:'Marketing', value:'marketing'},
    {name:'HR', value:'hr'},
    {name:'Bookings', value:'bookings'},
    {name:'Recruitment', value:'recruitment'}
  ]
  concernspecific = [
    {name:'Delay in Itinerary', value:'delay in itinerary'},
    {name:'Prices are High', value:'prices are high'},
    {name:'Itinerary Turn Over Time', value:'itinerary turn over time'},
    {name:'Employee Behaviour', value:'employee behaviour'},
    {name:'Delay in Recruitment', value:'delay in recruitment'},
    {name:'Operational Support', value:'operational support'},
    {name:'Information Technology', value:'information technology'},
    {name:'Delay in Promotions', value:'delay in promotions'}
  ]
  EscalationsForm : FormGroup
  constructor(){
    this.EscalationsForm = new FormGroup({
      partnername: new FormControl('',[Validators.required]),
      partnerlocation : new FormControl('',[Validators.required]),
      partnercode: new FormControl('',[Validators.required]),
      escalationregarding: new FormControl('',[Validators.required]),
      concernspecific: new FormControl('',[Validators.required]),
      regardingrequest: new FormControl('',[Validators.required]),
      regardingemployee: new FormControl('',[Validators.required]),
      requestconcern: new FormControl('',[Validators.required])

    })
  }
  OnSubmit(){
    console.log("Escalations Form",this.EscalationsForm.value)
    alert("Dear Partner, Soon your request will be reviewed by the marketing team and advise you the best possible options.")
  }
}
