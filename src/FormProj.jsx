import { useState } from "react"

function FormProj({ personalInfo, onChange, nextStep }) {    
    return (
        <>
            <div className="form-cont">
                <h1>Projects</h1>
                <div className="form-item">
                    <label htmlFor="">Project Title</label>
                    <input type="text" value={personalInfo.projTit} onChange={((e)=> onChange('projTit', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Tech Stack</label>
                    <input type="text" value={personalInfo.tech} onChange={((e)=> onChange('tech', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Links</label>
                    <input type="text" value={personalInfo.links} onChange={((e)=> onChange('links', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Description</label>
                    <input type="text" value={personalInfo.projDesc} onChange={((e)=> onChange('projDesc', e.target.value))}/>
                </div>


                <div className="btns">
                    {/* <button className="add">Add Project</button>
                    <button className="add">Add Description</button> */}
                    <button className="next" onClick={nextStep}>Next</button>
                </div>
            </div> 
        </>
    )
}

export default FormProj