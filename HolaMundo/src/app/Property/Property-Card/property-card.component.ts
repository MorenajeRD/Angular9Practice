import { Component, Input } from '@angular/core'
import { ICasa } from '../ICasa.interface'

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

  @Input() Property : ICasa

}
