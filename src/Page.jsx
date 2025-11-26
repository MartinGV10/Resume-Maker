import './Page.css'

function Page({ personalInfo }) {  
    const {firstName, lastName, email, phone, linkedin, github} = personalInfo  
    return (
        <>
            <div className="page-cont">
                <div className="page-header">
                    <h1 className="p-name">
                        {firstName} {lastName}
                    </h1>
                    <p className="p-everything">
                        <p>{email}</p> | 
                        <p>{phone}</p> | 
                        <p>{linkedin}</p> | 
                        <p>{github}</p>
                    </p>
                </div>
                <div className="education">
                    <h2 className="p-title">Education</h2>
                    <span className="divider"></span>
                </div>
                <div className="experience">
                    <h2 className="p-title">Experience</h2>
                    <span className="divider"></span>
                </div>
                <div className="projects">
                    <h2 className="p-title">Projects</h2>
                    <span className="divider"></span>
                </div>
                <div className="skills">
                    <h2 className="p-title">Skills</h2>
                    <span className="divider"></span>
                </div>
            </div>
        </>
    )
}

export default Page