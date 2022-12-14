import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { QuoteHistoryComponent } from './views/quote-history/quote-history.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/templates/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, QuoteHistoryComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
