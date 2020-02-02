import React, { Component } from 'react'
import Ingredient_Item from './Ingredient_Item'
import Recipes from './Recipes'

class Ingredient_List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list_ingredient: [],
            recipes: []
        }
    }

    async handleCheckbox(event) {
        const target = event.target
        let value = target.type === 'checkbox' ? target.checked : target.value        
        
        let ingredient_arr = [...this.state.list_ingredient]
        if (value) {
            ingredient_arr.push(target.title)
        }
        else {
            ingredient_arr.splice(target.id, 1)
        }

        await this.setState({ 'list_ingredient': ingredient_arr })
        // call api
        await fetch(`http://localhost:9000/recipes?ingredients=${this.state.list_ingredient.join(',')}`)
        .then(res => res.text())
        .then(res => this.setState({recipes: JSON.parse(res)}))
        .catch(err => err)
        
    }

    render() {
        
        const li_list = []
        const ingredient_on_date = this.props.ingredient_on_date
        let title = ''
        let use_by = ''

        for (let i = 0; i < ingredient_on_date.length; i++) {
            title = ingredient_on_date[i]['title']
            use_by = ingredient_on_date[i]['use-by']
            li_list.push(<Ingredient_Item title={title} use_by={use_by} key={i} id_item={i} handleCheckbox={this.handleCheckbox.bind(this)} />)
        }

        let recipe = this.state.recipes.length > 0 ? this.state.recipes[0]['title'] : ''

        return (
            <div>
                {li_list}
                <Recipes recipe={recipe} />
            </div>
        )
    }
}

export default Ingredient_List
