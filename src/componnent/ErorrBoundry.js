import React,{Component} from 'react';


class Erorrboundry extends Component{
    constructor(props){
        super(props);
        this.state={
            haserorr:false
        }

    }
    

componentDidCatch(){
    this.setState({ haserorr:true })


}
render(){
    if(this.state.haserorr){
        return (
            <div> <h1>its not greaaaaat shit</h1></div>

        )
        
        
    }
    
    return this.props.children
     

}
}
export default Erorrboundry;