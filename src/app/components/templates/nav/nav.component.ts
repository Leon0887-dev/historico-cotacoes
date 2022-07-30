import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/core/services/quotes.service';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  typesCoins:any[] = [];
  form = this.formBuilder.group({
    coin:[''],
    dateInit:[''],
    dateEnd:[''],
  });

  constructor(private quoteService: QuotesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.quoteService.getCoins().subscribe((res:any) => this.typesCoins = res.value);
    

  }

  handleSubmit(): void {
    console.log(this.form.value);
    this.form.value.dateInit = moment(this.form.value.dateInit).format('MM-DD-YYYY')
    this.form.value.dateEnd = moment(this.form.value.dateEnd).format('MM-DD-YYYY')
    this.quoteService.getQuotes(this.form.value).subscribe((res:any) => console.log(res.value))
  }

}
