import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Det } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // status: Math.random() < 0.5 Любое значение status (50% вероятность, что true)

  constructor() {
    for(let i = 0 ; i < 11; i++) {
      let det = new Det();
      det.id = i;
      det.name = "any";
      this.dets.push(det);
    }
  }

  dets: Det[] = [];

  deleteDet(e: any) {
    console.log(e);
    for(var i = 0; i < this.dets.length; i++){
      if(this.dets[i].id == e)
        this.dets.splice(i, 1)
    }
  }

  addDet(name: any) {
      if (this.dets.length === 0) {
        this.dets.push({id: 1, name: name.value, status: (Math.random() >= 0.5)})
      } else {
        this.dets.push({id: this.dets[this.dets.length - 1].id + 1, name: name.value, status: (Math.random() >= 0.5)})

      }
  }
}
