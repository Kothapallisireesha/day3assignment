function Parent (props){
    return <div>
         <h1>Welcome, {props.LoggedInUser}</h1>
   <Child fatherName="Amarendra" userName={props.LoggedInUser}/>
   </div>
}
//child componet
function Child(props)
{
     console.log("Child props",props);

    return <div>
    <h2>Name of th user : {props.userName}</h2>
    <h1>User Father's Name : {props.fatherName}</h1>
</div>}
ReactDOM.render(<Parent LoggedInUser="Bahu"/>,document.getElementById('container'))