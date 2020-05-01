import React from "react"

import BudgetForm from "../components/budgetform"

export default class BudgetList extends React.Component {
 state = {
     income : [],
     expenses : []

 }

 addExpenses = (income) => {
     const newIncome = [income, ...this.state.income]
     this.setState({
         income: newIncome
     })
     console.log("icnome", income);
 }

 render() {
     return (
         <BudgetForm onSubmit={this.addExpenses}/>
     )
 }
}
