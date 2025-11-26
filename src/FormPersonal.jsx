function FormPersonal() {
    return (
        <>
            <div className="form-cont">
                <h1>Personal Information</h1>
                <div className="form-item">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="">LinkedIn</label>
                    <input type="text" />                    
                </div>
                <div className="form-item">
                    <label htmlFor="">Github</label>
                    <input type="text" />                    
                </div>

                <button className="next">Next</button>
            </div> 
        </>
    )
}

export default FormPersonal