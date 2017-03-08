import {Component} from '@angular/core';
import './operators';
import {Router} from "@angular/router";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {
  }

  createConfig(){
    this.router.navigate(['/app']);
  }
}
