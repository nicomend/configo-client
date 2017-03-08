import {join} from 'path';

import {SeedConfig} from './seed.config';
import {ExtendPackages} from "./seed.config.interfaces";
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'jsoneditor/dist/jsoneditor.min.css', inject: true}
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      {
        name: 'apollo-angular',
        path: 'node_modules/apollo-angular/build/bundles/apollo.umd.js'
      },
      {
        name: 'apollo-client',
        path: 'node_modules/apollo-client/apollo.umd.js'
      },
      {
        name: 'apollo-client-rxjs',
        path: 'node_modules/apollo-client-rxjs/build/bundles/apollo-rxjs.umd.js'
      },
      {
        name: 'whatwg-fetch',
        path: 'node_modules/whatwg-fetch/fetch.js'
      },
      {
        name: 'redux',
        path: 'node_modules/redux/dist/redux.js'
      },
      {
        name: 'graphql-anywhere',
        path: 'node_modules/graphql-anywhere/lib/src/index.js'
      },
      {
        name: 'symbol-observable',
        path: 'node_modules/symbol-observable/index.js'
      },
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js'
      },
      {
        name: 'ng2-jsoneditor',
        path: 'node_modules/ng2-jsoneditor/index.js'
      },
      {
        name: 'jsoneditor',
        path: 'node_modules/jsoneditor/dist/jsoneditor.js'
      },
      {
        name: 'jsoneditor/dist/jsoneditor.min.css.js',
        path: 'node_modules/jsoneditor/dist/jsoneditor.min.css'
      }
    ];

    this.addPackagesBundles(additionalPackages);

    /* Add proxy middlewar */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
