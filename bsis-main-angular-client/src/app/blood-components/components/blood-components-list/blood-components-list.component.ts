import { Component } from '@angular/core';
import {Comp1Component} from '../comp1/comp1.component';

@Component({
  selector: 'app-blood-components-list',
  imports: [
    Comp1Component
  ],
  templateUrl: './blood-components-list.component.html',
  styleUrl: './blood-components-list.component.scss'
})
export class BloodComponentsListComponent {



}
