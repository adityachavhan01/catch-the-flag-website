import React from 'react';
import './Body.css';
// import Rules from './Rules';
import lock from './Lock.jpg';

function Body() {
    const handleClick = () => {
        alert("View Challenges");
    };
    
    return (
        <div className="body-wrapper" style={{ backgroundImage: `url(${lock})` }}>
            
            <div className="text-and-logo-container">
                <div className="body-container">
                    <div className="body-text" style={{ marginBottom: '10px' }}>
                        Capture The Flag
                    </div>
                    <div className="body-text" style={{ marginTop: '10px' }}>
                        SemiColon Tech Club
                    </div>
                    <div className="challenge-button" style={{ marginTop: '10px' }}>
                    <button type="button" autoFocus onClick={handleClick} >VIEW CHALLENGES</button>
                    </div>
                </div >
                <div className="logo-container" >
                     {/* background-image: url(Lock.jpg); */}

                    {/* <Rules /> */}
                    {/* <img src={lock} /> */}
                </div>
            </div>
        </div>
    );
}

export default Body;
