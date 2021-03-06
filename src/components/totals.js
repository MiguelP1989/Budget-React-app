import React from "react"


const  Totals = ({totalInc, totalExp, percentage, formatNumber}) => {


    const  displayMounth = () =>{
     let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December"
      ];
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth();
     return months[month] + " " + year;
    }



return (

       <div className="top">
     <div className="budget">
       <div className="budget__title">
         Available Budget in <span className="budget__title--month">{displayMounth()}</span>
       </div>

       {(formatNumber(totalInc - totalExp) <= 0 || !totalInc || totalInc < totalExp ) ? (
           <div className="budget__value">{"- " + formatNumber(totalInc - totalExp)}</div>
       ) : (
           <div className="budget__value">{"+ " + formatNumber(totalInc - totalExp)}</div>)}

       <div className="budget__income clearfix">
         <div className="budget__income--text">Income</div>
         <div className="right">
           <div className="budget__income--value">+&nbsp;{formatNumber(totalInc)}</div>
           <div className="budget__income--percentage">&nbsp;</div>
         </div>
       </div>

       <div className="budget__expenses clearfix">
         <div className="budget__expenses--text">Expenses</div>
         <div className="right clearfix">
           <div className="budget__expenses--value">-&nbsp;{formatNumber(totalExp)}</div>
           <div className="budget__expenses--percentage">
          {`${percentage} %`}</div>
         </div>
       </div>
     </div>
   </div>
)

}

export default Totals
