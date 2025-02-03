import React from "react";

const Container = ({ children, icon, title }) => {
    return (
        <div className="bg-white/50 w-full shadow p-[77px] rounded-[32px]">
            <div className="flex items-center gap-2 mb-4 font-medium text-black">
                {icon && <div>{icon}</div>}
                {title && <div className="text-md">{title}</div>}
            </div>
            <div className="text-black">{children}</div>
        </div>
    );
};

export default Container;