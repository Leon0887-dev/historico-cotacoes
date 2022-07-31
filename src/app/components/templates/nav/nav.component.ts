import { Component, Input, Output, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/core/services/quotes.service';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  typesCoins: any[] = [];
  form = this.formBuilder.group({
    coin: ['', Validators.required],
    dateInit: ['', Validators.required],
    dateEnd: ['', Validators.required],
  });

  @Output() resultQuotes: any;

  constructor(
    private quoteService: QuotesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.quoteService
      .getCoins()
      .subscribe((res: any) => (this.typesCoins = res.value));
  }

  handleSubmit() {
    if (this.validateDate()) {
      this.getQuotes();
    } else {
      alert('Data inválida');
    }
  }

  validateDate() {
    this.form.value.dateInit = moment(this.form.value.dateInit).format(
      'MM-DD-YYYY'
    );
    this.form.value.dateEnd = moment(this.form.value.dateEnd).format(
      'MM-DD-YYYY'
    );

    if (moment(this.form.value.dateInit) === moment(this.form.value.dateEnd)) {
      return true;
    } else if (moment(this.form.value.dateInit).isBefore(this.form.value.dateEnd)){
      return true;
    }else{
      return false;
    }
  }

  getQuotes() {
    this.form.value.dateInit = moment(this.form.value.dateInit).format(
      'MM-DD-YYYY'
    );
    this.form.value.dateEnd = moment(this.form.value.dateEnd).format(
      'MM-DD-YYYY'
    );
    this.quoteService.getQuotes(this.form.value).subscribe((res: any) => {
      this.resultQuotes = res.value;
    });
  }
}
