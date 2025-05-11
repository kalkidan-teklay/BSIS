import {Component, inject, OnInit} from '@angular/core';
import {BloodComponentStore} from '../../store/blood-components.store';

@Component({
  selector: 'app-blood-components-detail',
  imports: [],
  templateUrl: './blood-components-detail.component.html',
  styleUrl: './blood-components-detail.component.scss'
})
export class BloodComponentsDetailComponent implements OnInit {

  bloodComponentStore = inject(BloodComponentStore)

  ngOnInit() {
    this.bloodComponentStore.getBloodComponents();
  }

}
