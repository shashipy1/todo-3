import React from 'react';

function Button(props) {
    return (
        <div className='btn_set'>
            <button className="btn_toggle1" onClick={props.showAllTask}>
                show all tasks
            </button>
            <button className="btn_toggle2" onClick={props.showActiveTask}>
                show actives tasks
            </button>
            <button className="btn_toggle3" onClick={props.showCompleteTask}>
                show Completed tasks
            </button>
        </div>
    )
}

export default Button