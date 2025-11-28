import { Link } from "react-router-dom"

function FormExp({ personalInfo, onChange, nextStep }) {
    return (
        <>
            <div className="form-cont">
                <h1>Experience</h1>
                <div className="form-item">
                    <label htmlFor="">Company</label>
                    <input type="text" value={personalInfo.company} onChange={((e)=> onChange('firstName', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Job Title</label>
                    <input type="text" value={personalInfo.title} onChange={((e)=> onChange('lastName', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Description</label>
                    <input type="textbox" value={personalInfo.jobDesc} onChange={((e)=> onChange('email', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Location</label>
                    <input type="text" value={personalInfo.jobLoc} onChange={((e)=> onChange('github', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Date Started</label>
                    <input type="text" value={personalInfo.startDate} onChange={((e)=> onChange('phone', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Date Ended</label>
                    <input type="text" value={personalInfo.endDate} onChange={((e)=> onChange('linkedin', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Current Role?</label>
                    <input type="checkbox" value={personalInfo.linkedin} onChange={((e)=> onChange('linkedin', e.target.value))}/>
                </div>

                <button className="next" onClick={nextStep}>Next</button>

            </div> 
        </>
    )
}

export default FormExp