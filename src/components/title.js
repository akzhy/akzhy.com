import React from "react";

export default ({data, tag, className}) => {
    tag = tag ? tag : "h2";
    className = className ? className : "";
    const h = `<${tag} class="h ${className}"><span>${data}</span></${tag}>`;
    return(
        <div className="title color-primary" dangerouslySetInnerHTML={{ __html : h}}></div>
    )
}