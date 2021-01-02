import React, {Component} from 'react';
import './style.css';
import About, {AboutComponent} from '../AboutScreen/About'

// using class
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            angka : 1
        }
    }

    UpdateAngka () {
        this.setState({
            angka : this.state.angka + 1
        })
    }

    render() {
        return (
            <div className="home">
                <h1 onclick={() => this.UpdateAngka()}>Hello home {this.state.angka} </h1>
                <About />   {/* default */}
                <AboutComponent />
            </div>
        )
    }
}

export default Home;