import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <>
            <div className="header">
                <div className="nav-left">
                    <Link to='/'>
                        <h2 className='title'>Re:sumé.io</h2>
                    </Link>
                </div>
                <div className="nav-right">
                    <h2>Create Resume</h2>
                </div>
            </div>
        </>
    )
}

export default Nav