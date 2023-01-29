import React from "react";

export default function OptionSelection({arrayItems, selectOption}){
    return(
        <>
            <h1>React OpenAI APP</h1>

            <div className="div-options">
                {
                arrayItems.map((item) => {
                    return(
                        <div id="grid-child" onClick={() => selectOption(item.option)}>
                            <h3>{item.key}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
                }
            </div>
            
        </>
    )
}