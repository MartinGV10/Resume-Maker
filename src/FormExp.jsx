import { Link } from "react-router-dom"

function FormExp({ personalInfo, onChange, nextStep }) {
    return (
        <>
            <div className="form-cont">
                <h1>Experience</h1>
                <div className="form-item">
                    <label htmlFor="">Company</label>
                    <input type="text" value={personalInfo.company} onChange={((e)=> onChange('company', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Job Title</label>
                    <input type="text" value={personalInfo.title} onChange={((e)=> onChange('title', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Description</label>
                    <input type="textbox" value={personalInfo.desc} onChange={((e)=> onChange('desc', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Location</label>
                    <input type="text" value={personalInfo.jobLoc} onChange={((e)=> onChange('jobLoc', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Date Started</label>
                    <input type="date" value={personalInfo.startDate} onChange={((e)=> onChange('startDate', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Date Ended</label>
                    <input type="date" value={personalInfo.endDate} onChange={((e)=> onChange('endDate', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Current Role?</label>
                    <input type="checkbox" value={personalInfo.linkedin} onChange={((e)=> onChange('linkedin', e.target.value))}/>
                </div>

                <div className="btns">
                    <button className="add">Add Description</button>
                    <button className="next" onClick={nextStep}>Next</button>
                </div>

            </div> 
        </>
    )
}

export default FormExp