
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { ICasa } from '../ICasa.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  Casas: Array<ICasa>;

  constructor(private route: ActivatedRoute,private ServicioCasas: HousingService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.ServicioCasas.GetTodasLasCasas(this.SellRent).subscribe(
      data => {
        this.Casas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
