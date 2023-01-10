import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  expense:Expense =new Expense();
  
  constructor(private expSer: ExpenseService,
    private router:Router,private activRout:ActivatedRoute){}

  ngOnInit():void{
    const isId=this.activRout.snapshot.paramMap.has('id');
    if(isId){
      const id= Number(this.activRout.snapshot.paramMap.get('id'));
      this.expSer.getExpense(id).subscribe(data=>this.expense=data)
    }
  }

  saveExpense(){
     this.expSer.saveExpense(this.expense).subscribe(data=>{console.log('response',data);
    this.router.navigateByUrl("/expenses");
    })
  }

  deleteExpense(id:number){
    this.expSer.deleteExpense(id).subscribe(data=>{console.log('deleted response',data);
   this.router.navigateByUrl("/expenses");
   })
 }

}
