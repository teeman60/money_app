import React, { Component } from 'react'

export class Welcome extends Component {

    constructor() {
        this.state = {
            category: null
        }
    }


    changeCategory = () => {
        this.setState({
            category: !this.state.category
        })
    }
    render() {
        return (
            <div>
                <p>there are different ways you can contribute money together, depending on the category you choose to go with. Some members save $50 a month, some save up to $500 monthly. The category you choose depends on how big you want to go or how much you can afford to give up after every monthly paycheck</p>
                <h3>Choose A Category</h3>
                <div onClick={this.changeCategory}>$50 category</div>
                <div>%100 category</div>
                <div>$200 category</div>
                <div>$500 category</div>
            </div>
        )
    }
}

export default Welcome
