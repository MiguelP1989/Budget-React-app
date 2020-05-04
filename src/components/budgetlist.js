import React from "react"
import "../components/budgetlist.css"


const  BudgetList = ({inc, exp, totalInc, deleteBudget, percentage, formatNumber}) => {



    console.log("exp", exp);
    console.log("totalInc", totalInc);
    console.log("inc", inc);


    return (
//
        <div>
        <div className="container clearfix">
        <div className="income">
        <h2 className="icome__title">Income</h2>
        {inc.map(inc => {
            return(
        <div key={inc.id} className="income__list">
           <div className="item clearfix" id="inc">
           <div className="item__description">{inc.description}</div>
           <div className="right clearfix">
           <div className="item__value">{formatNumber(inc.number)}</div>
           <div className="item__delete">
         <button onClick={() => deleteBudget(inc.id)} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
           </div>
            </div>
           </div>
        </div>
    )
})}
      </div>

      <div className="expenses">
  <h2 className="expenses__title">Expenses</h2>
  {exp.map(exp => {
      return (
          <div  key={exp.id } className="expenses__list">
                <div className="item clearfix" id="exp">
                <div className="item__description">{exp.description}</div>
                <div className="right clearfix">
                <div className="item__value">{formatNumber(exp.number)}</div>

                {(inc.length === 1 ) ? ( <div className="item__percentage">

                 {exp.percentage = percentage}

                 </div> ):
                 ( <div className="item__percentage">

                  {exp.percentage}

                  </div>)}


                <div className="item__delete">
                <button onClick={() => deleteBudget(exp.id)} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
                </div>
                        </div>
          </div>
      )
  })}
  </div>
  </div>
  </div>

    )
}

export default BudgetList
