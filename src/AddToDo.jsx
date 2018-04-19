import React from "react";

const AddTodo = props => (
    <div style={{ padding: "5px", marginTop: "5px" }}>
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                name="addtodo"
                onChange={props.handleChange}
                value={props.name}
            />

            <button type="submit">Add To-do Item</button>
        </form>
    </div>
);

export default AddTodo;
