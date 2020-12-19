import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-small-group',
  templateUrl: './cards-small-group.component.html',
  styleUrls: ['./cards-small-group.component.scss']
})
export class CardsSmallGroupComponent implements OnInit {

  constructor() { }
  @Input() public slice: any;
  @Input() ngSwitch: any;
  //@Input() public ngClass: string ;

  ngOnInit(): void {
  }

}
