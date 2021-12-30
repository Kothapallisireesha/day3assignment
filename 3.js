class Parent extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            <h2>Company</h2>
            <h2>Mobile: {this.state.text} </h2>
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
    let str="vivo";

    return <div>
        <h1>Welcome shop</h1>
        <button onClick={()=>{props.action(str)}}>Select Mobile</button>
    </div>
}
ReactDOM.render(<Parent/>,document.getElementById('container'))