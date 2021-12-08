import React from 'react';
import "./TitleMain.scss";

// props = {
//      className: "",
// }
function TitleMain(props) {
    let className = "title-checkout"
    if (props?.className){
        className = props.className + " " + className
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default TitleMain;