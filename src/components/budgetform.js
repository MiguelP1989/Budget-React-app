import React from "react"

import shortid from "short-id"

import "../components/budgetform.css"

export default class BudgetForm extends React.Component {
    state = {
        description: "",
        number: "",
        options: "inc",
        style: ""



}
handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    if (e.target.name === "options") {
      return e.target.options.selectedIndex ?
        this.setState({ style: "red-focus" })
        : this.setState({ style: "" })
    }

}


handleSubmit = (e) =>{
    e.preventDefault()
    if (!this.state.description || !this.state.number ) {
            return
        }

    if ( this.state.options === "exp" ) {

    this.props.onSubmit({
                  description: this.state.description,
                  number: this.state.number,
                  options: this.state.options,
                  id: shortid.generate(),
                  percentage: this.props.totalInc ? Math.round((this.state.number / this.props.totalInc) * 100) : Number(this.state.number)


              })
                  return
    }

    this.props.onSubmit({
              description: this.state.description,
              number: this.state.number,
              options: this.state.options,
              id: shortid.generate()

          })
          this.setState({
                  description:"",
                  number: ""
              })
    // console.log(this.state);


}
render () {




return (

    <div>
    <form onSubmit={this.handleSubmit} className="bottom">
      <div className="add">
        <div className="add__container">
          <select name="options"
          value={this.options}
          onChange={this.handleChange}
          className="add__type">
            <option value="inc">+</option>
            <option className={this.state.style} value="exp">-</option>
          </select>
          <input

            name="description"
            type="text"
            value ={this.state.description}
            className={`add__description ${this.state.style}`}
            placeholder="Add description"
            onChange={this.handleChange}
          />
          <input type="number"
          name="number"

          value={this.state.number}
          className="add__value"
          placeholder="Value"
          onChange={this.handleChange}/>
          <button
           onClick={this.handleSubmit}
           className="add__btn">
            <i className="ion-ios-checkmark-outline"></i>
          </button>
        </div>
      </div>
    </form>
    </div>
)

}
}
