import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {client} from "./client";
import ApolloClient from "apollo-client/ApolloClient";
import {ApolloModule} from "apollo-angular";
import {MaterialModule} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {ConfigEditorComponent} from "./components/config-editor/config-editor.component";
import {ConfigoListComponent} from "./components/configo-list/configo-list.component";
import {FormsModule} from "@angular/forms";
import {JSONEditorModule} from "ng2-jsoneditor";

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [BrowserModule, MaterialModule, FormsModule, HttpModule, ApolloModule.forRoot(provideClient), AppRoutingModule, JSONEditorModule],
  declarations: [AppComponent, ConfigoListComponent, ConfigEditorComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
