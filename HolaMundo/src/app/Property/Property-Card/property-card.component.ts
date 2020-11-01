import { Component } from '@angular/core'

@Component(
  {
    selector: 'app-property-card',
    //template: `<h1> SOY TARJETA </h1>`,
    templateUrl: 'property-card.component.html',
    //styles:['h1 {  color:red;}']
    styleUrls: ['property-card.component.css']
  }
)

export class PropertyCardComponent {
  Property: any = {
    "Id": 1,
    "Name" : "Casa Club MorenajeRD",
    "Type": "House",
    "Price": 12000
  }

}
