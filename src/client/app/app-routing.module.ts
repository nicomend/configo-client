import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ConfigEditorComponent} from "./components/config-editor/config-editor.component";
import {ConfigoListComponent} from "./components/configo-list/configo-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ConfigoListComponent
      },
      {
        path:'app/:id',
        component: ConfigEditorComponent
      },
      {
        path:'app',
        component: ConfigEditorComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

