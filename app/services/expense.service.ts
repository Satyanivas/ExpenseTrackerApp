import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl:string="http://localhost:8080/etproject/expenses";

  constructor(private httpclient:HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this.httpclient.get<Expense[]>(this.getUrl).pipe(
      map(response=>response))

  }
  saveExpense(expense: Expense): Observable<Expense>{
    return this.httpclient.post<Expense>(this.getUrl,expense);
  }

getExpense(id:number):Observable<Expense>{
    return this.httpclient.get<Expense>(`${this.getUrl}/${id}`).pipe(map(response=>response))
}

deleteExpense(id:number):Observable<any>{
  return this.httpclient.delete(`${this.getUrl}/${id}`,{responseType:'text'})
}

}
