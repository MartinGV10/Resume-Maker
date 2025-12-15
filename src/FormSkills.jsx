import { useState } from "react"

function FormSkills({ personalInfo, onChange, nextStep }) {
    const data = [
        {
            id: 1,
            label: 'Programming Languages',
            input: '',
            val: personalInfo.langs,
            field: 'langs'
        },
        {
            id: 2,
            label: 'Libraries/Frameworks',
            input: '',
            val: personalInfo.libs,
            field: 'libs',
        },
        {
            id: 3,
            label: 'Developer Tools',
            input: '',
            val: personalInfo.devTools,
            field: 'devTools'
        }
    ]
    
    return (
        <>
            <div className="form-cont">
                <h1>Skills</h1>
                {/* <div className="form-item"> */}

                {data.map(m => (
                    <div className="form-item" key={m.id}>
                        <label htmlFor="">{m.label}</label>
                        <input type="text" value={m.val} onChange={((e) => onChange(m.field, e.target.value))}/>
                    </div>
                ))}

                <div className="btns">
                    <button className="next" onClick={nextStep}>Next</button>
                </div>
            </div> 
        </>
    )
}

export default FormSkills