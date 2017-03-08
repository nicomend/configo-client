import {Component} from "@angular/core";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag/index"; import {Router} from "@angular/router";

const configoQuery = gql`
  query {
    configo{
      config
      appName
      _id
    }
  }
`;

@Component({
  moduleId: module.id,
  selector: 'configo-list',
  templateUrl: 'configo-list.component.html',
  styleUrls: ['configo-list.component.css'],
})
export class ConfigoListComponent {
  configo: any;

  constructor(private apollo: Apollo, private router: Router) {
    this.configo = apollo.watchQuery({query: configoQuery, forceFetch: true});
  }

  openConfig(id: string) {
    this.router.navigate(['/app', id]);
  }
}
