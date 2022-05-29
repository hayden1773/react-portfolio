import React from "react";

import "./style.css";

export default function Navbar(){
    return (
        <div>
    <h1>Welcome to my Portfolio with React!</h1>
    <aside>
        <ul>
            <li h ref={About}>About</li>
        </ul>
    </aside>
</div>
    );
}


