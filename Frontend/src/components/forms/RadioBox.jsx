import React from "react";
function RadioBox(props){
    let h = props.name;
    let joinName = h.replaceAll("-",""); // removing "-" from name to access for object of formData
    // console.log(joinName);

    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
        });
        // console.log(props.set)
    }

    return(<div className="box">
    <p className="sub_title">{props.name+":"}</p>
    <br/>
    <div className="radio-buttons-container">
    <input type="radio" name={joinName} className="radio-button__input" onChange={handle} value="Yes" id={props.yes} />
    <label htmlFor={props.yes} className="radio-button__label">
        <span className="radio-button__custom"></span>{"Yes"}
        
        </label>

        <input type="radio" name={joinName} className="radio-button__input" onChange={handle} value="No" id={props.no}/>
        <label htmlFor={props.no} className="radio-button__label">
            <span className="radio-button__custom"></span>{"No"}
            
        </label>
</div>
</div> 
);
}

export default RadioBox;