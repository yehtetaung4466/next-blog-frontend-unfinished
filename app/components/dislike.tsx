"use client"
import { useState } from "react"
export default function Dislike() {
    const filled = <div onClick={()=>setClicked(false)} className=" reaction_switch ">
    <svg role="filled" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-840h400v520L360-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 1.5-15t4.5-15l120-282q9-20 30-34t44-14Zm480 520v-520h160v520H720Z" /></svg>
</div>;

    const unfilled = <div onClick={()=>setClicked(true)} className=" reaction_switch">
    <svg role="unfilled" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" /></svg>
</div>;

    const [clicked,setClicked] = useState<Boolean>(false);
    
    return(
        <div className="flex z-50">
            {clicked ? filled:unfilled}
            <div className=" text-xs" style={{marginTop:"3px"}}>999</div>
        </div>
    )
}