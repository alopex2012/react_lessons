import React, { useState } from "react";

export default function InputText() {
    let [sometext, setSometext] = useState("Техт");
    return (
        <div className="text">
            <h3>{sometext}</h3>
            <input value={sometext} onChange={event => setSometext(event.target.value)} />
        </div>
    )
}