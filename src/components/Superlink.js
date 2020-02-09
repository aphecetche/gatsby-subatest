import React from "react";
import { Link } from "gatsby";

const Superlink = ({to,children}) =>  {
    const re = /^http/
    console.log("to=",to,"test=",re.test(to))
    if (re.test(to)) {
    return (<a href={to}>{children}</a>)
    }
        return ( <Link to={to}>{children}</Link>)
}

export default Superlink
