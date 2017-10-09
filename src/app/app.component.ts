import {Component, Inject} from '@angular/core';
import * as CounterActions from './counter.actions';
import {AppStore} from './app.store';
import {Store} from 'redux';
import {AppState} from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  readState(): void {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }
}
