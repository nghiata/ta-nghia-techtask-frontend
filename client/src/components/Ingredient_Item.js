import React, { Component } from 'react'
import moment from '../../node_modules/moment'

let list_ingredient = []
export class Ingredient_Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list_ingredient: [],
            recipes: {}
        }
    }

    

    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id={this.props.id_item} onChange={this.props.handleCheckbox} title={this.props.title} />
                <label className="form-check-label" htmlFor={this.props.id_item}>{this.props.title}</label>
            </div>
        )
    }
}

export default Ingredient_Item
