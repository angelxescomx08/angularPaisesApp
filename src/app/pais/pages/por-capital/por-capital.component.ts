import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino :string = '';
  hayError:boolean = false;
  paises  : Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(busqueda: string){
    this.hayError = false;
    this.paisService.buscarCapital(busqueda)
      .subscribe({
        next: paises=>{
          console.log(paises);
          this.paises = paises;
        },
        error: err=>{
          this.hayError = true;
          this.paises = [];
          console.info(err);
        }
      })
  }

  sugerencias(busqueda:string){
    this.hayError = false;
  }

}
