import React from "react";
import FrontLayout from "../layouts/front.layout";
const Home = () => {
    return (
        <div>
            <FrontLayout>
                <section className="home-page">
                    <div className="home-page-hero">
                     <div className="home-page-hero-inner">
                        <div className="home-page-hero-inner-right">
                            <h1><span>J</span>esse<br /><span>A</span>rigbo<span>.</span> </h1>
                            <button title="Contact Me" className="button hug" type="submit">CONTACT ME</button>
                        </div>
                      <div className="home-page-hero-inner-left">
                      <div className="home-page-hero-inner-left-middle">
                      <i className="fa-solid fa-person"></i>
                        {/* <div className="home-page-hero-inner-left-middle-circle">

                        </div> */}
                       
                        </div>
                        <div className="home-page-hero-inner-left-last">
                            <h2>INTRODUCTION</h2>
                          <h1>FRONTEND WED DEV</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat consectetur natus dolore distinctio ullam repellendus sapiente sit quidem similique.</p>
                        </div>
                      </div>
                     </div>
                    </div>
                </section>
            </FrontLayout>
        </div>
    )
}
export default Home