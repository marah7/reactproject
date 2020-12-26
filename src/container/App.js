import React, { Component } from 'react';
import Cardlist from '../componnent/Cardlist';
import Erorrboundry from '../componnent/ErorrBoundry';
import Scroll from '../componnent/Scroll';
import Searchbox from '../componnent/Searchbox';
import './App.css';
import ErorrBoundry from '../componnent/ErorrBoundry';
 
class App extends Component {

    constructor(){
        super();
        this.state = { robots: [], searchfield: ''};
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>Response.json())
        .then(users=>this.setState({robots:users}));
    }

    onSearchChange = (Event) => {  
       this.setState({ searchfield: Event.target.value });
    }
        
    render(){
        const {robots,searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        console.log(robots);
        return !robots.length ?

                <div className='tc'>
                    <h1>loading</h1>
                </div>:
            (
                <div className='tc'>
                    <h1 className='f1'>robofriends</h1>
                    <Searchbox searchchange={this.onSearchChange} />
                    <Scroll>
                        <Erorrboundry>
                        <Cardlist robots={filteredRobots}/>
                        </Erorrboundry>
                    </Scroll>
                </div>
            );
    }
}
export default App;
