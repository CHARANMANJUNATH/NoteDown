import React from "react";

function Footer(){
    const dateFetched=new Date();
const year=dateFetched.getFullYear();

    return(<footer>
        <p style={{color:"white"}}>Copyright Ⓒ {year}</p>
    </footer>)
};

export default Footer;
