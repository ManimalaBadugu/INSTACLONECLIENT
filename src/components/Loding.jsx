import React from 'react';
import {Link} from 'react-router-dom';
import "./loding-css.css"

const Loding = () =>{
    return(
        <div className="loding-parent">
        <div className="loding-page">
            <div className="image-section">
                <img className="team-image" src="https://www.myperfectresume.com/wp-content/uploads/2020/05/what-can-you-bring-to-the-team.jpg" alt="Loding..."/>
            </div>
            <div className="enter-section">
                <h2 className="x-heading">10X team 04</h2>
                <p className='text-font'>10x Academy has a structured curriculum which is inline with today’s Industry needs. </p>
                <Link to="/posts"><button className="enter-button">Enter</button></Link>
                
            </div>
        </div>
        </div>
    )
}
export default Loding