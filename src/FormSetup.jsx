import './FormSetup.css'
import FormPersonal from './FormPersonal'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Page from './Page'
import FormEdu from './FormEdu'

function FormSetup() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        university: '',
        major: '',
        gradDate: '',
        location: '',
        achievements: '',
        courses: '',
    });

    const handlePersonalChange = (field, value) => {
        setPersonalInfo(prev => ({...prev, [field]: value}))
    }

    const [step, setStep] = useState('personal')

    const nextStep = () => {
        if (step === 'personal') setStep('education')
        if (step === 'education') setStep('experience')
        if (step === 'experience') setStep('projects')
        if (step === 'projects') setStep('skills')
    }

    return (
        <>
            {/* Section Headers */}
            <div className="sec-headers">
                <div className={`head`} onClick={() => setStep('personal')}>
                    <h3 className="head-tit">Personal Information</h3>
                    <div className={`indicator ${step === 'personal' ? 'active' : 'inactive'}`}></div>
                </div>    
                <div className={`head`} onClick={() => setStep('education')}>
                    <h3 className="head-tit">Education</h3>
                    <div className={`indicator ${step === 'education' ? 'active' : 'inactive'}`}></div>
                </div>
                <div className={`head`} onClick={() => setStep('experience')}>
                    <h3 className="head-tit">Experience</h3>
                    <div className={`indicator ${step === 'experience' ? 'active' : 'inactive'}`}></div>
                </div>
                <div className={`head`} onClick={() => setStep('projects')}>
                    <h3 className="head-tit">Projects</h3>
                    <div className={`indicator ${step === 'projects' ? 'active' : 'inactive'}`}></div>
                </div>
                <div className={`head`} onClick={() => setStep('skills')}>
                    <h3 className="head-tit">Skills</h3>
                    <div className={`indicator ${step === 'skills' ? 'active' : 'inactive'}`}></div>
                </div>
            </div>
            
            <div className="content">
                {/* Form Content */}
                <div className="setup-left">
                    { step === 'personal' && <FormPersonal personalInfo={personalInfo} onChange={handlePersonalChange} nextStep={nextStep}/> }
                    { step === 'education' && <FormEdu personalInfo={personalInfo} onChange={handlePersonalChange} nextStep={nextStep}/>}
                    { step === 'experience' && <FormPersonal personalInfo={personalInfo} onChange={handlePersonalChange} nextStep={nextStep}/>}
                    { step === 'projects' && <FormPersonal personalInfo={personalInfo} onChange={handlePersonalChange} nextStep={nextStep}/>}
                    { step === 'skills' && <FormPersonal personalInfo={personalInfo} onChange={handlePersonalChange} nextStep={nextStep}/>}
                </div>

                {/* Page */}
                <div className="setup-right">
                    <Page personalInfo={personalInfo}/>
                </div>
            </div>
        </>
    )
}

export default FormSetup