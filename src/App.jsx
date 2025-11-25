import Nav from './Nav'
import Footer from './Footer'
import amazon from './assets/amazon-web-services-2.svg'
import citi from './assets/citi-2.svg'
import jp from './assets/jp-morgan-chase.svg'
import meta from './assets/meta-3.svg'
import nvidia from './assets/nvidia.svg'
import microsoft from './assets/microsoft-6.svg'
import apple from './assets/apple-11.svg'
import tesla from './assets/tesla-9.svg'
import './App.css'

function App() {
  return (
    <>
        <Nav />
        <div className="start">
            <h1>Re:sumé.io</h1>
            <p className="desc">Why waste time manually creating your resume, when this app completely does it for you!</p>
            <button className="get-started">Click here to get started!</button>
        </div>

        <div className="body">
            <div className="sec1">
                <div className="stuff">
                    <h1>Get Hired!</h1>
                </div>
                <div className="boxes">
                    <div className="box-items">
                        <h2>ATS Friendly</h2>
                        <p>Your resume will be 100% compliant with ATS systems</p>
                    </div>
                    <div className="box-items">
                        <h2>Zero Mistakes</h2>
                        <p>Our system is specifically designed to avoid any typos</p>
                    </div>
                    <div className="box-items">
                        <h2>Move quick</h2>
                        <p>Just give your info, and be on your way in minutes!</p>
                    </div>
                    <div className="box-items">
                        <h2>Professional Look</h2>
                        <p>Look like a Google employee with your professional CV!</p>
                    </div>
                </div>
            </div>

            <div className="sec2">
                <h1>See where our users have been employed at!</h1>
                <div className="pics">
                    <div className="pics-top">
                        <img src={amazon} alt="" className="home-pics" />
                        <img src={apple} alt="" className="home-pics" />
                        <img src={microsoft} alt="" className="home-pics" />
                        <img src={jp} alt="" className="home-pics" />
                    </div>
                    <div className="pics-bottom">
                        <img src={tesla} alt="" className="home-pics" />
                        <img src={nvidia} alt="" className="home-pics" />
                        <img src={citi} alt="" className="home-pics" />
                        <img src={meta} alt="" className="home-pics" />

                    </div>
                    {/* <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" />
                    <img src={} alt="" className="home-pics" /> */}

                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default App
