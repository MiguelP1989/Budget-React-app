import React from "react"

import BudgetForm from "../components/budgetform"
import BudgetList from "../components/budgetlist"
import Totals from "../components/totals"

import { getExp, setExp } from "../utils";
export default class Budget extends React.Component {
 state = {
      exp: [],
      inc: []


    }




 addBudget = (budget) => {
        if (budget.options === "exp") {
            const exp = [budget, ...this.state.exp]

            this.setState({
                exp:exp
            }
)


        } else if (budget.options === "inc") {
            const inc = [budget, ...this.state.inc]
            this.setState({
                inc: inc

            })
        }

}


handleDeleteBudget = id => {
    console.log("delete item", `${id}`);
    const deleteInc = this.state.inc.filter(budget => budget.id !== id)
    const deleteExp = this.state.exp.filter(budget => budget.id !== id)
        this.setState({
            inc: deleteInc,
            exp: deleteExp
        },
            () => setExp(deleteExp)


        )
    }


 formatNumber = (num) => {

            num = Math.abs(num)
               num = num.toFixed(2);
               let numSplit = num.split(".");
               let int = numSplit[0];
               if (int.length > 3) {
                 int =
                   int.substr(0, int.length - 3) +
                   "," +
                   int.substr(int.length - 3, int.length);
                 //input 23510 output 23,510
               }
               let dec = numSplit[1];
               return  int + "." + dec;
             };




 render() {
    let {  inc, exp} = this.state

    let totalInc = 0
     inc.map((curr)=> {
        totalInc += parseInt(curr.number)
        return totalInc
    })
    let totalExp = 0
    exp.map((curr) =>{
        totalExp += parseInt(curr.number)
        return totalExp
    })

    let percentage
    if (totalInc > 0) {
      percentage = Math.round(( totalExp / totalInc) * 100)
      // example: expense = 100 and income 200, spent 50% =  100/200 = 0.5 * 100
    } else {
      percentage = "0";
    }


     return (
         <div>
         <Totals totalExp={totalExp} totalInc={totalInc} percentage={percentage} formatNumber={this.formatNumber} />
         <BudgetForm onSubmit={this.addBudget} totalInc={totalInc} />
         <BudgetList inc={inc} exp={exp} totalInc={totalInc} deleteBudget={this.handleDeleteBudget} percentage={percentage} formatNumber={this.formatNumber}/>



         </div>
     )
 }
}
