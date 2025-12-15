import { Link } from "react-router-dom"

function FormExp({ personalInfo, onChange, nextStep }) {
    const handleStart = (e) => {
        const raw = e.target.value; // "2025-05"
        onChange("gradDateRaw", raw);

        if (!raw) {
            onChange("startDate", "");
            return;
        }

        const [year, month] = raw.split("-");
        const formatted = new Date(year, month - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
        });

        onChange("startDate", formatted); // "May 2025"
    };

    const handleEnd = (e) => {
        const raw = e.target.value; // "2025-05"
        onChange("gradDateRaw", raw);

        if (!raw) {
            onChange("endDate", "");
            return;
        }

        const [year, month] = raw.split("-");
        const formatted = new Date(year, month - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
        });

        onChange("endDate", formatted); // "May 2025"
    };

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
                    <input type="month" value={personalInfo.startDate} onChange={handleStart}/>
                </div>
                <div className="form-item">
                    <label htmlFor="">Date Ended</label>
                    <input type="month" value={personalInfo.endDate} onChange={handleEnd}/>
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