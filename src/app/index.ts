import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {ThreeModule} from './modules/three';
import {TechsModule} from './components/tech';

import {ExampleViewComponent} from './views/example/example';
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
    RouterModule.forRoot([
      {
        path: '',
        component: MainViewComponent
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
    MainViewComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
