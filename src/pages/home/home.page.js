// const HomePage =(props)=>{

import React from "react";
import { useState } from "react";
import HeaderComponent from "../../components/header.component";
//     return (
//         <div>
//             <div>{props.name}</div>
//             <div>Menu</div>
//             <div>Menu</div>
//             <div>Menu</div>
//         </div>
           
//     );
// }

class HomePage extends React.Component{
    constructor(props){
        super(props); 
        //componemt  class call
    console.log("1.i am first call")
        this.state={
            users: [
                {
                    name:"Sagar Sunar",
                    email:"sagar.sunar411@gmail.com",
                    phone:123454
                },
                {
                    name:"Ajay Sunar",
                    email:"ajay.sunar411@gmail.com",
                    phone:123454
                },{
                    name:"Ajay Sunar",
                    email:"ajay.sunar411@gmail.com",
                    phone:123454
                },{
                    name:"Sahil",
                    email:"sagh8il@gfmai;ll",
                    phone:4554
                }
            ],
            loading:false
        }
    }

    componentDidMount =()=>{
        console.log("3. I am third call");
        this.setState((pre)=>{
            return{
                ...pre,
                loading:false
                
            }
        },()=>{
            console.log("from second parameneter")
        })



    }

    componentDidUpdate =()=>{
        console.log("4.componentDidUpdate i am after second and every render call")
    }
    
    componentWillUnmount =()=>{
        console.log("5. lAST COMPONENT DID UNMOUNT")
    }
    render =()=>{
        console.log("2.Render-i am second call and every stateUpdate Call")
        return(
            <>
             
            <HeaderComponent></HeaderComponent>
            
           <UserTable users={this.state.users} title = "Table"></UserTable>
            </>    
           
            // <div>{this.props.name}
            // <div>{this.state.name}</div>
            // {/* {this.props.counter()} */}
        

        )
    }
}

// const UserTable =(props)=>{ //losely coupled
const UserTable =({users,title})=>{ //tightly coupled
    let [loading] = useState(false);
    // setLoading(true);
    return(
        <div>
            <h1>{title}</h1>
        <table border="1" width="100%" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <td>Sn</td>
                            <td>Name</td>
                            <td>email</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody >
                        {
                           !loading && users && users.map((data,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

    )
}
export default HomePage;