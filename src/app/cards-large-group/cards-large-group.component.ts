import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-large-group',
  templateUrl: './cards-large-group.component.html',
  styleUrls: ['./cards-large-group.component.scss']
})
export class CardsLargeGroupComponent implements OnInit {

  constructor() { }
  @Input() public slice: any;

  ngOnInit(): void {
  }

}
