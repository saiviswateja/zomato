import React from 'react';

function HomeApp() {
    return (
        <div className="home_app">
            <img src="https://b.zmtcdn.com/images/online_ordering/pfa-banner-graphic.png?output-format=webp"></img>
            <div className="home_app_content"> 
                <h3>Download the Zomato App</h3>
                <span>Get real-time order updates, live chat support, exclusive app-only offers</span>
                <div className="app_links">
                    <img src="https://b.zmtcdn.com/images/online_ordering/play-store.png?output-format=webp"></img>
                    <img src="https://b.zmtcdn.com/images/online_ordering/app-store.png?output-format=webp"></img>
                </div>
                <hr></hr>
                <div className="home_app_inputs">
                    <input placeholder="+91"></input>
                    <input placeholder="Phone Number"></input>
                </div>
                <button>Text App Link</button>
            </div>
        </div>
    )
}

export default HomeApp;
