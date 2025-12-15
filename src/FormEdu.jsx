import { useState } from "react"

function FormEdu({ personalInfo, onChange, nextStep }) {    
    return (
        <>
            <div className="form-cont">
                <h1>Education</h1>
                <div className="form-item">
                    <label htmlFor="">University</label>
                    <input type="text" value={personalInfo.university} onChange={((e)=> onChange('university', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Major</label>
                    <input type="text" value={personalInfo.major} onChange={((e)=> onChange('major', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Graduation Date</label>
                    <input type="date" value={personalInfo.gradDate} onChange={((e)=> onChange('gradDate', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Location</label>
                    <input type="text" value={personalInfo.schoolLoc} onChange={((e)=> onChange('schoolLoc', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Distinctions</label>
                    <input type="text" value={personalInfo.distinctions} onChange={((e)=> onChange('distinctions', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Relevant Courses</label>
                    <input type="text" value={personalInfo.courses} onChange={((e)=> onChange('courses', e.target.value))}/>
                </div>

                <div className="btns">
                    <button className="add">Add University</button>
                    <button className="next" onClick={nextStep}>Next</button>
                </div>
            </div> 
        </>
    )
}

export default FormEdu