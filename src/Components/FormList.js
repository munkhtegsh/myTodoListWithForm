import React from 'react';

export const FormList = ({todoList, deleteList}) => {
    const list = todoList.map((e, i) => {
        return <li key={i} onClick={deleteList.bind(this, i)}>{e}</li>
    });

    return (
        <ul>{list}</ul>
    )
}

