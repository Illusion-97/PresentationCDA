import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from "@angular/material/dialog";
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SideComponent} from './components/side/side.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from "ngx-highlightjs";
import {SafePipe} from "./pipes/safe-pipe.pipe";
import {PortalModule} from "@angular/cdk/portal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";
import {ExerciceComponent} from "./pages/exercice/exercice.component";
import {StylePipe} from './pipes/style.pipe';
import {HighlightsDirective} from './directives/highlights.directive';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NotesComponent} from './components/modal/notes/notes.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    SafePipe,
    StylePipe,
    HighlightsDirective,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    HighlightModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    DatePipe,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      },
    },
  ],
  bootstrap: [AppComponent, SideComponent, HeaderComponent]
})
export class AppModule {
}
