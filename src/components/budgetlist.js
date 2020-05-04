import React from "react"
import "../components/budgetlist.css"




const  BudgetList = ({inc, exp, totalInc, deleteBudget, formatNumber}) => {



    console.log("exp", exp);
    console.log("totalInc", totalInc);
    console.log("inc", inc);


    if (exp) {
        exp.map((items) => {
            return items.percentage = totalInc ? (Math.round(Number(items.number) / totalInc) * 100) : 0
        })


    }


    return (
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
  {exp.map(item => {
      return (
          <div  key={item.id} className="expenses__list">
                <div className="item clearfix" id="exp">
                <div className="item__description">{item.description}</div>
                <div className="right clearfix">
                <div className="item__value">{formatNumber(item.number)}</div>

                <div className="item__percentage">
                    {`${item.percentage} %`}
                </div>


                <div className="item__delete">
                <button onClick={() => deleteBudget(item.id)} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
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
