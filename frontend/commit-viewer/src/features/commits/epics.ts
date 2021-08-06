import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, Observable, of } from 'rxjs';
import { commitsLoadAction } from './actions/load.actions';
import { CommitsService } from '../services/commits.service';

export const commitsLoadEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(isActionOf(commitsLoadAction.request)),
    switchMap(({ payload }) =>
      from(CommitsService.getAll(payload)).pipe(
        map(commitsLoadAction.success),
        catchError(error => of(commitsLoadAction.failure(error)))
      )
    )
  );
