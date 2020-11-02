import React from "react";
import "./ContactList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ContactList(props) {
    const items = props.items;
    // const ListItems = items
    const ListItems = items.map((item) => {
        return (
            <div className="list" key="item.key">
                <p>
                    <input
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => {
                            props.setUpdate(e.target.value, item.key);
                        }}
                    />{" "}
                    <span>
                        <FontAwesomeIcon
                            className="facions"
                            icon="trash"
                            onClick={() => props.deleteItem(item.key)}
                        />{" "}
                    </span>
                </p>
            </div>
        );
    });
    return <div duration={300} easing="ease-in-out"> 
        <FlipMove >  
        {ListItems} 
        </FlipMove>
        </div>;
}
export default ContactList;
