class Parent extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            <h1>i m parent</h1>
            <h2>data from child : {this.state.text} </h2>
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
    let str="i have ur phone";

    return <div>
        <h1>i m child</h1>
        <button onClick={()=>{props.action(str)}}>Send data to parent</button>
    </div>
}
ReactDOM.render(<Parent/>,document.getElementById('container'))