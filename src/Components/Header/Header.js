import React from "react";
import covid19Logo from "../logo/covid19-logo.png"
import "./style.css"

function Header(){

    return(
        <div className="header1">
            <div className="header2">
                <img src={covid19Logo} />
            </div>
            <div className="header3">
                Global and Country Wise Cases of Corona Virüs
            </div>
            <div className="header4">
                (For a Particlar select a Country from below)
            </div>
        </div>
    )
}

export default Header