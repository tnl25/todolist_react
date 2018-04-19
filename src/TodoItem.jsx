import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    padding: 5px;
    text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

const TodoItem = props => {
    console.log(props);
    return (
        <div>
            <input
                type="checkbox"
                onChange={props.toggleTodo}
                checked={props.completed}
                value={props.id}
            />
            <StyledLi completed={props.completed}> {props.name} </StyledLi>
        </div>
    );
};

export default TodoItem;
