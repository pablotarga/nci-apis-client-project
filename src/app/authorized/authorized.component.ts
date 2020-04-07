import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }

}
