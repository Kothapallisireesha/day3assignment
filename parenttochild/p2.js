function Parent (props){
    return <div>
         <h1>Welcome, {props.LoggedInUser}</h1>
   <Child Brand="Oneplus" userName={props.LoggedInUser}/>
   </div>
}
//child componet
function Child(props)
{
     console.log("Child props",props);

    return <div>
    <h2>Name of user : {props.userName}</h2>
    <h1>Mobile Brand : {props.Brand}</h1>
</div>}
ReactDOM.render(<Parent LoggedInUser="Sireesha"/>,document.getElementById('container'))