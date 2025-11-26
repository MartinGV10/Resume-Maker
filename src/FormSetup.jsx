import './FormSetup.css'
import FormPersonal from './FormPersonal'
import { Link } from 'react-router-dom'
import Page from './Page'
function FormSetup() {
    return (
        <>
            {/* Section Headers */}
            <div className="sec-headers">
                <div className="head">
                    <h3 className="head-tit">Personal Information</h3>
                    <div className="indicator active"></div>
                </div>    
                <div className="head">
                    <h3 className="head-tit">Education</h3>
                    <div className="indicator inactive"></div>
                </div>
                <div className="head">
                    <h3 className="head-tit">Experience</h3>
                    <div className="indicator inactive"></div>
                </div>
                <div className="head">
                    <h3 className="head-tit">Skills</h3>
                    <div className="indicator inactive"></div>
                </div>
            </div>
            
            <div className="content">
                {/* Form Content */}
                <div className="setup-left">
                    <FormPersonal />
                </div>

                {/* Page */}
                <div className="setup-right">
                    <Page />
                </div>
            </div>
        </>
    )
}

export default FormSetup