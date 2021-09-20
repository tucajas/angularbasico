import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes:string[]=['spiderman', 'ironman', 'hulk', 'thor'];
  heroeborrado: string='';
  borrarHeroe(){
    this.heroeborrado = this.heroes.shift() ||'';
  }

}
