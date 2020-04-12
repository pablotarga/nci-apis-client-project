import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(
        ':enter',
        [
          style({
            opacity: 0,
            height: 0,
            display: 'block',
            transform: 'translateY(1rem)'
          }),
          animate('600ms 200ms ease-out',
            style({
              opacity: 1,
              display: 'block',
              transform: 'translateY(0)',
            })
          )
        ]
      ),
      transition(
        ':leave',
        [
          style({
            opacity: 1,
            display: 'block',
            transform: 'translateY(0)',
          }),
          animate('200ms 0s ease-in',
            style({
              height: 0,
              opacity: 0,
              // display: 'block',
              transform: 'translateY(-1rem)',
            })
          )
        ]
      )
    ])

  ]
})
export class AuthorizedComponent implements OnInit {

  constructor(public s: SystemService) { }
  ngOnInit(): void {
  }

  public get showing(): string {
    if (this.s.activeAccount === null) {
      return 'list';
    } else if (!this.s.activeAccount.id) {
      return 'new';
    } else {
      return 'details';
    }
  }

  public get accountDetailState(): string {
    return this.showing === 'details' ? 'open' : 'closed';
  }

  public get accountsListState(): string {
    return this.showing === 'list' ? 'open' : 'closed';
  }

  public get accountsNewState(): string {
    return this.showing === 'new' ? 'open' : 'closed';
  }
}
