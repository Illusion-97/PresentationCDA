import {Compiler, Component, Injector, NgModuleRef, ViewContainerRef,} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Topic} from "../../statics/topic";
import {Info, Infos} from "../../statics/infos";
import {MatDialog} from "@angular/material/dialog";
import {NotesComponent} from "../../components/modal/notes/notes.component";

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  topic?: Topic;
  info?: Info;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute, private router: Router) {
    try {
      this.topic = (+this.route.snapshot.data['topic']);
      this.info = Infos.getInfo(this.topic);
    } catch (exception) {
      this.router.navigateByUrl('');
    }
  }

  openDialog() {
    if (this.info) {
      this.dialog.open<NotesComponent, Topic>(NotesComponent, {
        data: this.topic,
        autoFocus: false
      });
    }
  }
}

