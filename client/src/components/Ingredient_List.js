import React, { Component } from 'react'
import Ingredient_Item from './Ingredient_Item'

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

class Ingredient_List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list_ingredient: [],
            recipes: []
        }
    }

    async updateList(isChecked, values) {
        let ingredient_arr = this.state.list_ingredient
        if (isChecked) {
            ingredient_arr.push(values)
        }
        else {
            ingredient_arr.remove(values)
        }
        await this.setState({ list_ingredient: ingredient_arr })
        // call api
        await this.props.list_product(this.state.list_ingredient)

    }

    componentWillReceiveProps() {
        if (this.props.is_ordered) {
            this.setState({
                list_ingredient: [],
                recipes: []
            })
        }
    }

    render() {

        const li_list = []
        const ingredient_on_date = this.props.ingredient_on_date
        let title = ''
        let use_by = ''

        for (let i = 0; i < ingredient_on_date.length; i++) {
            title = ingredient_on_date[i]['title']
            use_by = ingredient_on_date[i]['use-by']
            li_list.push(<Ingredient_Item title={title} use_by={use_by} key={i} id_item={i} updateList={this.updateList.bind(this)} is_ordered={this.props.is_ordered} />)
        }

        return (
            <div>
                {li_list}
            </div>
        )
    }
}

export default Ingredient_List
