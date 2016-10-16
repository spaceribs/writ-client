import {Component, Input} from '@angular/core';
import {Tech} from '../techs/techs';

@Component({
  selector: 'writ-tech',
  template: require('./tech.html')
})
export class TechComponent {
  @Input() public tech: Tech;
}
