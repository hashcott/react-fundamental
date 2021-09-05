import React from 'react'

const TodoItem = () => {
    return (
        <li className="todo-item">
            <input type="checkbox" name="status" id="status" />
            <p className="content">In the morning, I told her i love you, but now we are friends</p>
            <div className="body-todo">
                <div className="info">
                    <div className="tags">
                        <span className="tag-item">Du lịch</span>
                        <span className="tag-item">Uncompleted</span>
                    </div>
                    <div className="time">
                        <span className="start">05/09/2021</span> -
                        <span className="end"> 06/09/2021</span>
                    </div>
                </div>
                <div className="action">
                    <img className="edit" alt="edit" src="https://img.icons8.com/fluency/48/000000/edit-property--v1.png" />
                    <img className="delete" alt="delete" src="https://img.icons8.com/fluency/48/000000/delete-forever.png" />            </div>
            </div>
        </li>
    )
}

export default TodoItem
