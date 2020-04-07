import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }

}
