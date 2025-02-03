import React from "react";

const Card = ({ children }) => {
    return (
        <div className="bg-white w-full shadow rounded-[18px]">
            <div>{children}</div>
        </div>
    );
};

export default Card;