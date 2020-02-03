import React, { Component } from "react";
import moment from '../node_modules/moment'
import DateTimePicker from 'react-datetime-picker';
import Ingredient_List from "./components/Ingredient_List";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            date: new Date()
        };
    }

    onChange = date => {
        this.callAPI(date)
    }

    callAPI(date = '') {
        let use_by = moment(date).format('YYYY-MM-DD')
        fetch(`http://localhost:9000/ingredients?use_by=${use_by}`)
            .then(res => res.text())
            .then(res => {
                let apiResponse = JSON.parse(res)
                this.setState({ apiResponse: apiResponse, date: date })
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI(this.state.date)
    }

    render() {
        return (
            <div>
                <DateTimePicker
                    onChange={(date) => this.onChange(date)}
                    value={this.state.date}
                    disableClock={true}
                    format="dd/MM/y"
                />
                <Ingredient_List ingredient_on_date={this.state.apiResponse} ref="list" />
            </div>
        );
    }
}

export default App;
