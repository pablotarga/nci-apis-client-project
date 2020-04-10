import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeInOut', [

      state('open', style({
        opacity: 1,
        display: 'block',
        transform: 'translateY(0)',
      })),

      state('closed', style({
        opacity: 0,
        height: 0,
        display: 'block',
        transform: 'translateY(5rem)',
      })),

      transition('open => closed', [
        animate('10ms 0s ease-out')
      ]),

      transition('closed => open', [
        animate('300ms 0s ease-out')
      ]),
    ])
  ]
})
export class AuthorizedComponent implements OnInit {

  constructor(public s: SystemService) { }
  ngOnInit(): void {
  }

  public get accountDetailState(): string {
    return (this.s.activeAccount !== null) ? 'open' : 'closed';
  }

  public get accountsListState(): string {
    return (this.s.activeAccount === null) ? 'open' : 'closed';
  }
}
