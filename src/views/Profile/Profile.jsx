import React from 'react'
import { useUser } from '../../context/UserContext'
 
export default function Profile() {
    
    const user = useUser();
    console.log(user, 'USER')
    return (
        <div>
            {/* !haveProfile ? (

            {/* create profile form */}
            {/* <form> */}
                {/* name */}
                <input></input>
                {/* email - non editable */}
                <span></span>
                {/* birthday */}
                <input></input>
                {/* bio */}
                <input></input>

            {/* </form> */}
            {/* ) : (  */}
                {/* name */}
                <p></p> 
                {/* email */}
                <p></p> 
                {/* birthday */}
                <p></p> 
                {/* bio */}
                <p></p> 
                {/* ) */} 
            <h1>
                SOME RANDOM PROFILE STUFF??
            </h1>    
        </div>
    )
}
