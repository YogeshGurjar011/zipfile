import { Component } from "react";

export default class First extends Component
{
    constructor ()
    {
        super()
        console.log ("First Constructer Run...")
        this.state ={
            num :125
        }
    }

    componentDidMount()
    {
        console.log("First Did Mount Run......")
    }

    componentWillUnmount()
    {
        console.log("First will UnMount Run......")
    }

    componentDidUpdate()
    {
        console.log("First Did Update Run......")
    }

    shouldComponentUpdate(newProps, newState)
    {
        console.log(newProps)
        console.log(newState)
        if(newState.num%2==0)
        return false;
        else
        return true;
    }
    render(){
        console.log("Render is Run....")
        return <>
            <h2> First Component : {this.state.num}</h2>
            <br/>
            <button onClick={()=>this.setState({num:this.state.num+1})}>Change</button>
        </>
    }
}