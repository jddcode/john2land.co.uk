import {Redirect} from "react-router-dom";
import React from "react";
import Data from "./Data";

export default function Session(props) {

    if(!props?.state?.session?.ID && window.location.pathname.includes("/acct")) {

        return <Redirect to='/' />

    } else if(props?.state?.session?.ID && !window.location.pathname.includes("/acct")) {

        return <Redirect to='/acct/elections' />
    }

    return (

        <>
            <Data state={props.state} />
            {props.children}
        </>
    )
}