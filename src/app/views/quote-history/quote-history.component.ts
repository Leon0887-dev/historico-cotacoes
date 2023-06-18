import { Component, Input, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/core/services/quotes.service';

@Component({
  selector: 'app-quote-history',
  templateUrl: './quote-history.component.html',
  styleUrls: ['./quote-history.component.css'],
})
export class QuoteHistoryComponent implements OnInit {
   resultQuotesValues!: any[];

  

  constructor(private qoutesService: QuotesService) {}

  ngOnInit(): void {
    this.qoutesService.listQoute$.subscribe( data =>{
      this.resultQuotesValues = data;
    })
  }

}
