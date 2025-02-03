import React from "react";

const Container = ({ children, icon, title }) => {
    return (
        <div
            className="w-full p-[77px] rounded-[32px]"
            style={{
                boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
                background: `linear-gradient(163deg, rgba(255, 255, 255, 0.50) -1.51%, rgba(255, 255, 255, 0.80) 143.73%)`
            }}
        >
            <div className="flex items-center gap-2 mb-4 font-medium text-black">
                {icon && <div>{icon}</div>}
                {title && <div className="text-md">{title}</div>}
            </div>
            <div className="text-black">{children}</div>
        </div>
    );
};

export default Container;