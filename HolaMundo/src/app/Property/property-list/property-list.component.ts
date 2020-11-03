
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ICasa } from '../ICasa.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {


  Casas: Array<ICasa>;

  constructor(private ServicioCasas: HousingService) { }

  ngOnInit(): void {
    this.ServicioCasas.GetTodasLasCasas().subscribe(
      data => {
        this.Casas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
