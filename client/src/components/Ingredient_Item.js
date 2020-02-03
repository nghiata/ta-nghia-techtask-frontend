import React, { Component } from 'react'

export class Ingredient_Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
        }
    }

    async handleCheckbox() {
        await this.setState({ isChecked: !this.state.isChecked })
        let target = this.refs.checkbox

        await this.props.updateList(this.state.isChecked, target.title)

    }

    componentWillReceiveProps() {
        if (this.props.is_ordered) {
            this.setState({ isChecked: false, })
        }
    }

    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" ref="checkbox" checked={this.state.isChecked} id={this.props.id_item} onChange={this.handleCheckbox.bind(this)} title={this.props.title} />
                <label className="form-check-label" htmlFor={this.props.id_item}>{this.props.title}</label>
            </div>
        )
    }
}

export default Ingredient_Item
