import './Page.css'

function Page({ personalInfo }) {  
    let {firstName, lastName, email, phone, linkedin, github, university, major, gradDate, schoolLoc, distinctions, courses, company, title, desc, jobLoc, startDate, endDate, projTit, tech, links, projDesc, langs, libs, devTools, curJob} = personalInfo  

    return (
        <>
            <div className="page-cont">
                <div className="page-header">
                    <h1 className="p-name">
                        {firstName} {lastName}
                    </h1>
                    <div className="p-everything">
                        <p>{email}</p> | 
                        <p>{phone}</p> | 
                        <p>{linkedin}</p> | 
                        <p>{github}</p>
                    </div>
                </div>
                <div className="education">
                    <h2 className="p-header">Education</h2>
                    <span className="divider"></span>
                    <div className="p-section">
                        <div className="p-left">
                            <h2 className="p-title">{university}</h2>
                            <p className='p-susb'><i>{major}</i></p>
                            <ul className="p-desc">
                                <li>{distinctions}</li>
                                {/* <li>James A. Edwards Scholarship Recipient</li> */}
                                <li>{courses != '' ? `Courses: ${courses}` : ''}</li>
                            </ul>
                        </div>
                        
                        <div className="p-right">
                            <h2 className="p-date">{gradDate != '' ? `Expected Grad: ${gradDate}` : ''}</h2>
                            <p className='p-loc'><i>{schoolLoc}</i></p>
                        </div>
                    </div>
                </div>




                <div className="experience">
                    <h2 className="p-header">Experience</h2>
                    <span className="divider"></span>
                    <div className="p-section">
                        <div className="p-left">
                            <h2 className="p-title">{title}</h2>
                            <p className='p-susb'><i>{company}</i></p>
                            <ul className="p-desc">
                                <li>{desc}</li>
                            </ul>
                        </div>
                        
                        <div className="p-right">
                            <h2 className="p-date">{startDate || endDate != '' ? `${startDate} - ${endDate}` : ''}</h2>
                            <p className='p-loc'><i>{jobLoc}</i></p>
                        </div>
                    </div>

                </div>

                <div className="projects">
                    <h2 className="p-header">Projects</h2>
                    <span className="divider"></span>
                    <div className="p-section">
                        <div className="p-left">
                            {/* <h2 className="p-title">{projTit} | {links}</h2> */}
                            <h2 className="p-title">{projTit != '' ? `${projTit} | ${links}` : ''}</h2>
                            <ul className="p-desc">
                                <li>{projDesc}</li>
                            </ul>
                        </div>

                        <div className="p-right">
                            <h2 className="p-title">{tech}</h2>
                        </div>
                    </div>
                </div>

                <div className="skills">
                    <h2 className="p-header">Skills</h2>
                    <span className="divider"></span>
                    <div className="p-section">
                        <div className="p-left">
                            <h2 className="p-title">
                                {langs != '' ? `Programming Languages: ` : ''}
                                <span className="no">{langs}</span>
                            </h2>

                            <h2 className="p-title">
                                {libs != '' ? `Libraries/Framwords: ` : ''}
                                <span className="no">{libs}</span>    
                            </h2>

                            <h2 className="p-title">
                                {devTools != '' ? `Developer Tools: : ` : ''}
                                <span className="no">{devTools}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page