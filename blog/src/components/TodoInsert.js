import React from "react";
import { MdAddCircle } from "react-icons/md";

const TodoInsert = () => {
    return (
    <div>
        <div className="background"></div>
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