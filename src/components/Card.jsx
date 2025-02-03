import React from "react";

const Card = ({ children }) => {
    return (
        <div className="bg-white w-full rounded-[18px]" style={{ boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)` }}>
            <div>{children}</div>
        </div>
    );
};

export default Card;