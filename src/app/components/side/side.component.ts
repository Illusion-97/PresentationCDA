import {Component, OnInit} from '@angular/core';
import {Info, Infos} from "../../statics/infos";


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {

  currentRoute: string = ''
  topics: Info[];

  constructor() {
    this.topics = Infos.getValues();
  }
}
