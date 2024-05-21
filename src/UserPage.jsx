import React from "react";
import { useParams } from "react-router-dom";


export default function UserPage() {
    let { id } = useParams();
    
    console.log("UserPage component rendered with id:", id); // Debugging log
    return (
      <>
        <h1>Hello there user {id}</h1>
        <p>This is your awesome User Profile page</p>
      </>
    );
}