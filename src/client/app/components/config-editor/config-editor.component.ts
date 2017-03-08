import {Component, OnInit, ViewChild} from "@angular/core";
import {Location} from "@angular/common";
import {Params, ActivatedRoute, Router} from "@angular/router";
import gql from "graphql-tag/index"; import {Apollo} from "apollo-angular"; import {Observable} from "rxjs"; import {JsonEditorOptions,
  JsonEditorComponent
} from "ng2-jsoneditor";

const configoQuery = gql`
  query getConfig($id: String) {
    configo(id: $id){
      config
      appName
      _id
    }
  }
`;

const updateMutation = gql`
  mutation updateConfig($id: String!, $config: JSON!) {
    updateConfig(id: $id, config: $config){
      config
      appName
      _id
    }
  }
`;

const createMutation = gql`
  mutation createConfig($appName: String!, $config: JSON!) {
    createConfig(appName: $appName, config: $config){
      config
      appName
      _id
    }
  }
`;

@Component({
  moduleId: module.id,
  selector: 'config-editor',
  templateUrl: 'config-editor.component.html',
  styleUrls: ['config-editor.component.css'],
})
export class ConfigEditorComponent implements OnInit {
  loading: boolean;
  config: any;
  options: JsonEditorOptions;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(private location: Location, private route: ActivatedRoute, private apollo: Apollo, private router: Router) {
  }

  ngOnInit(): void {
    this.options = new JsonEditorOptions();
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
        if (params['id']) {
          this.apollo.watchQuery({
            query: configoQuery,
            variables: {
              'id': params['id']
            },
            forceFetch: true
          }).subscribe((result: any) => {
            this.config = result.data.configo[0] || {};
            this.loading = false;
          }, () => {
            this.config = {};
            this.loading = false;
          });
        }
        else {
          this.config = {};
          this.loading = false;
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['']);
  }

  save(config: any) {
    let query: Observable<any> = undefined;
    if (config._id) {
      query = this.apollo.mutate({mutation: updateMutation, variables: {id: config._id, config: this.editor.get()}});
    } else {
      query = this.apollo.mutate({
        mutation: createMutation,
        variables: {appName: config.appName, config: this.editor.get()}
      });
    }
    query.subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
