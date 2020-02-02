import React, { Component } from 'react'

export class Recipes extends Component {
    render() {
        return (
            <div>
                {this.props.recipe}
            </div>
        )
    }
}

export default Recipes
