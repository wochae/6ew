import React from "react";
import { MdAddCircle } from "react-icons/md";

const TodoInsert = ({ onInsertToggle }) => {
    return (
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form>
            <input></input>
            <button type="submidt">
                    <MdAddCircle />
                </button>
        </form>
    </div>
    );
};

export default TodoInsert;