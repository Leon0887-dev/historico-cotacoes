import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
baseUrl='https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/'
  constructor(private http: HttpClient) { }

  getCoins():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}Moedas?$top=100&$format=json`)
  }

  getQuotes(params):Observable<any[]>{  return this.http.get<any[]>(`${this.baseUrl}CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?%40moeda=%27${params.coin}%27&%40dataInicial=%27${params.dateInit}%27&%40dataFinalCotacao=%27${params.dateEnd}%27&%24format=json `)
}
}
