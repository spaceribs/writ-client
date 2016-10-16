import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {ThreeJsModule} from './modules/threejs';

import {ExampleViewComponent} from './views/example/example';
import {HeaderComponent} from './components/header/header';
import {TitleComponent} from './components/title/title';
import {FooterComponent} from './components/footer/footer';

@Component({
  selector: 'writ-root',
  template: '<router-outlet></router-outlet>'
})
class RootComponent {}

@NgModule({
  imports: [
    BrowserModule,
    ThreeJsModule,
    RouterModule.forRoot([
      {
        path: 'example',
        component: ExampleViewComponent
      }
    ])
  ],
  declarations: [
    RootComponent,
    ExampleViewComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
