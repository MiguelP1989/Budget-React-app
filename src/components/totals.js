import React from "react"


const  Totals = ({inc, exp}) => {

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
           <div className="budget__expenses--percentage">45%</div>
         </div>
       </div>
     </div>
   </div>
)

}

export default Totals
