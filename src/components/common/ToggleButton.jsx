import { useRef } from "react"
import './ToggleButton.css'

export function ToggleButton({ id, onChange, default_checked=false }){
    if (id){
        return(
            <>
                <input type="checkbox" id={id} className="toggle-btn-checkbox" onChange={onChange} checked={default_checked}/>
                <label htmlFor={id} className="toggle-btn"></label>
            </>
        )
    }else{
        return(
            <span>Please provide ID prop</span>
        )
    }
}