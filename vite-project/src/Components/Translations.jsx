import React from "react";

export default function Translations({submit, setPrompt, result, reset}){
    const nav = useNavigate()
    return (
        <div id="trans-div">
            <textarea className="text-area" onChange={(e) => setPrompt(e.target.value)}></textarea>

            <button className="button" onClick={submit}>SUBMIT!</button>
            <button className="button" onClick={nav(-1)}>RESET</button>

            <h3 className="res">{result.length > 0 ? result : ""}</h3>

        </div>
    )
}