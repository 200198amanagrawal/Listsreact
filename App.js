import React,{Component} from "react";

export default class App extends Component
{
    state={
        user:[
            {id:101,name:"Aman",pass:"abc"},
            {id:102,name:"Shreya",pass:"123"},
            {id:103,name:"Donnowhichgirl",pass:"lsd"}
        ],
        islogged:false
    };
    render()
    {
        const newmem=this.state.user.map((newuser)=>{
            return <h3>
            ID:{newuser.id} Name: {newuser.name} Password: {newuser.pass}
            </h3>
        })
        
        return (
        <>
            {newmem}
        </>
        )
    }
}