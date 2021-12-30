class Parent extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            
            <h2>Happy: {this.state.text} </h2>
            <Child action= {this.getDataFromChild.bind(this)}/>
        </div>
    }

//chocolate

getDataFromChild(childData){
    console.log(childData);
    this.setState({
        text:childData
    })}
}

//child component

function Child(props){
    let str="Unhappy";

    return <div>
        <h1>Welcome Here</h1>
        <button onClick={()=>{props.action(str)}}>Showcase</button>
    </div>
}
ReactDOM.render(<Parent/>,document.getElementById('container'))