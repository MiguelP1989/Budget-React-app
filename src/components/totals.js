import React from "react"


const  Totals = ({totalInc, totalExp}) => {


    let percentage
    if (totalInc > 0) {
      percentage = Math.round(( totalExp / totalInc) * 100) + "%"
      // example: expense = 100 and income 200, spent 50% =  100/200 = 0.5 * 100
    } else {
      percentage = "---";
    }


return (

       <div className="top">
     <div className="budget">
       <div className="budget__title">
         Available Budget in <span className="budget__title--month">%Month%</span>
       </div>

       <div className="budget__value">{totalInc - totalExp}</div>

       <div className="budget__income clearfix">
         <div className="budget__income--text">Income</div>
         <div className="right">
           <div className="budget__income--value">{totalInc}</div>
           <div className="budget__income--percentage">&nbsp;</div>
         </div>
       </div>

       <div className="budget__expenses clearfix">
         <div className="budget__expenses--text">Expenses</div>
         <div className="right clearfix">
           <div className="budget__expenses--value">{totalExp}</div>
           <div className="budget__expenses--percentage">
          {percentage}</div>
         </div>
       </div>
     </div>
   </div>
)

}

export default Totals
