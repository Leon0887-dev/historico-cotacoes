import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css'],
})
export class QuoteHistoryComponent implements OnInit {
  @Input() resultQuotesValues: any;

  

  constructor() {}

  ngOnInit(): void {}

}
