import React from "react";

const CardContainer = ({ innerContent, outerContent }) => {
    return (
        <div className="perspective w-full max-w-md relative">
            <div className="flip-card bg-neutral-200 dark:bg-neutral-800 shadow-xl rounded-xl overflow-hidden p-4 h-[640px]">

                    <div className="flex justify-center mb-4 p-4">
                        <div className="w-96 h-96 dark:bg-neutral-700 overflow-hidden rounded-lg shadow-lg">
                            {innerContent}
                        </div>
                    </div>
                    <div className="outerContent">
                        {outerContent}
                    </div>
                </div>
            </div>

    );
};

export default CardContainer;