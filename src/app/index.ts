import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {ThreeModule} from './modules/three';
import {PixijsModule} from './modules/pixijs';
import {TechsModule} from './components/tech';

import {ExampleViewComponent} from './views/example/example';
import {ThreeViewComponent} from './views/three';
import {MainViewComponent} from './views/main';

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
    ThreeModule,
    TechsModule,
    PixijsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainViewComponent
      },
      {
        path: 'three',
        component: ThreeViewComponent
      },
      {
        path: 'example',
        component: ExampleViewComponent
      }
    ])
  ],
  declarations: [
    RootComponent,
    ExampleViewComponent,
    ThreeViewComponent,
    MainViewComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
