import React from "react"

import BudgetForm from "../components/budgetform"
import BudgetList from "../components/budgetlist"
import Totals from "../components/totals"

export default class Budget extends React.Component {
 state = {
      exp: [],
      inc: [],
      totalExp: 0

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
    ;



 render() {
    let { budget, inc, exp, totalExp } = this.state





     return (
         <div>
             <Totals inc={inc} exp={exp}/>
         <BudgetForm onSubmit={this.addBudget}/>
             <BudgetList inc={inc} exp={exp}/>



         </div>
     )
 }
}
