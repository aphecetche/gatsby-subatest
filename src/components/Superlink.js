import React from "react";
import { Link } from "gatsby";

const Superlink = ({to,children,onClick}) =>  {
    // if we provide an onClick function, then
    // it's not a "regular" link, i.e. we
    // disable the href
    if (onClick) {
        return (<a onClick={onClick}>{children}</a>)
    }
    // if it's an external link
    // use a regular <a href="">
    const re = /^http/
    if (re.test(to)) {
        return (<a href={to}>{children}</a>)
    }
    // internal link : use Gatsby own Link component
    return ( <Link to={to}>{children}</Link>)
}

export default Superlink
