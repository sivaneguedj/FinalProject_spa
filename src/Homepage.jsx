import React from 'react';
import { Link } from 'react-router-dom'

export default function HomePage() {
console.log("HomePage component rendered");
return (
<div classname="container">
    <h1>Hey from HomePage</h1>
    <p>
        <Link to="/user/1">This is my awesome HomePage subtitle</Link>
    </p>
</div>
);
}