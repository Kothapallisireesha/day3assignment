class Parent extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            <h2>Fruit shop</h2>
            <h2>Fruits available: {this.state.text} </h2>
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
    let str=['Apple'];

    return <div>
        <h1>Welcome shop</h1>
        <button onClick={()=>{props.action(str)}}>fruits are</button>
    </div>
}
ReactDOM.render(<Parent/>,document.getElementById('container'))