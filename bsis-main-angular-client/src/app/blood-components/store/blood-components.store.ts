import {BloodComponent} from '../models/blood-component.model';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {BloodComponentService} from '../services/blood-component.service';
import {inject} from '@angular/core';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {switchMap} from 'rxjs';
import {tapResponse} from '@ngrx/operators';

type BloodComponentState = {
  bloodComponents: BloodComponent[];
  filter: { query: string; order: 'asc' | 'desc' };
  page: number;
  pageSize: number;
  totalCount: number;
}

const initialState: BloodComponentState = {
  bloodComponents: [],
  filter: {query: '', order: 'asc'},
  page: 1,
  pageSize: 10,
  totalCount: 0
}

export const BloodComponentStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, bloodComponentService = inject(BloodComponentService)) => {
      let getBloodComponents = rxMethod<void>(
        switchMap(() => {
          return bloodComponentService
            .getBloodComponents()
            .pipe(
              tapResponse((response) => {
                const {bloodComponents, page, totalCount} = response || {};
                patchState(store, {
                  bloodComponents: bloodComponents || [],
                });
              }, console.error),
            );
        }),
      );

      let getBloodComponent = rxMethod<void>(
        switchMap(() => {
          return bloodComponentService
            .getBloodComponent()
            .pipe();
        })
      );
      return {
        getBloodComponents,
        getBloodComponent
      }
    })
);
