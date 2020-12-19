import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-medium-group',
  templateUrl: './cards-medium-group.component.html',
  styleUrls: ['./cards-medium-group.component.scss']
})
export class CardsMediumGroupComponent implements OnInit {

  
  constructor() { }
  
  @Input() public slice: any;

  ngOnInit(): void {
  }

}
