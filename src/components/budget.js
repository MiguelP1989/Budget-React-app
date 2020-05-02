import React from "react"

import BudgetForm from "../components/budgetform"
import BudgetList from "../components/budgetlist"
import Totals from "../components/totals"

export default class Budget extends React.Component {
 state = {
      exp: [],
      inc: [],



    }

 addBudget = (budget) => {
        if (budget.options === "exp") {
            const exp = [budget, ...this.state.exp]

            this.setState({
                exp: exp

            })


        } else if (budget.options === "inc") {
            const inc = [budget, ...this.state.inc]
            this.setState({
                inc: inc

            })
        }

}


handleDeleteBudget = id => {
    console.log("clicking");

    console.log("delete item", `${id}`);
        // this.setState({
        //     exp: this.state.exp.filter(budget => budget.id !== id)
        // })
    }




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



     return (
         <div>
             <Totals totalExp={totalExp} totalInc={totalInc}/>
             <BudgetForm onSubmit={this.addBudget}/>
             <BudgetList inc={inc} exp={exp} totalInc={totalInc} deleteBudget={this.handleDeleteBudget} />



         </div>
     )
 }
}
