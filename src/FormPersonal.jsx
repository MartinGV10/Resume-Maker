import FormEdu from "./FormEdu"
import { Link } from "react-router-dom"

function FormPersonal({ personalInfo, onChange, nextStep }) {
    return (
        <>
            <div className="form-cont">
                <h1>Personal Information</h1>
                <div className="form-item">
                    <label htmlFor="">First Name</label>
                    <input type="text" value={personalInfo.firstName} onChange={((e)=> onChange('firstName', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Last Name</label>
                    <input type="text" value={personalInfo.lastName} onChange={((e)=> onChange('lastName', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Email</label>
                    <input type="text" value={personalInfo.email} onChange={((e)=> onChange('email', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" value={personalInfo.phone} onChange={((e)=> onChange('phone', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">LinkedIn</label>
                    <input type="text" value={personalInfo.linkedin} onChange={((e)=> onChange('linkedin', e.target.value))}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Github</label>
                    <input type="text" value={personalInfo.github} onChange={((e)=> onChange('github', e.target.value))}/>
                </div>

                {/* <Link to='/'> */}
                    <button className="next" onClick={nextStep}>Next</button>

                {/* </Link> */}
            </div> 
        </>
    )
}

export default FormPersonal