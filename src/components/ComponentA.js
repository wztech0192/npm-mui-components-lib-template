import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
window.React1 = require('react');


export default function ComponentA() {
    const [text, setText] = useState("");
    return (
        <div>
            THis is component A
            <TextField label="This is a text field" value={text} onChange={e=>{setText(e.target.value)}}/>
            <hr/>
        </div>
    )
}
