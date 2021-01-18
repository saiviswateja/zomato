import React from 'react';
import '../HomeDescription.css';

function HomeDescription() {
    return (
        <div className="home_description">
            <center>
                <span>How Zomato works</span>
                <span>Ordering food has never been this easy</span>
            </center>
            <div className="home_ads">
                <div className="home_ad_col">
                    <img src="https://b.zmtcdn.com/images/online_ordering/delivery.svg?fit=around%7C200%3A200&crop=200%3A200%3B*%2C*&output-quality=70&output-format=webp"></img>
                    <span><b>Explore Restaurants</b> that deliver to your door step</span>
                </div>
                <div className="home_ad_col">
                    <img src="https://b.zmtcdn.com/images/online_ordering/menu.svg?fit=around%7C200%3A200&crop=200%3A200%3B*%2C*&output-quality=70&output-format=webp"></img>
                    <span>Browse menus and <b>build your order</b> in seconds</span>
                </div>
                <div className="home_ad_col">
                    <img src="https://b.zmtcdn.com/images/online_ordering/notification.svg?fit=around%7C200%3A200&crop=200%3A200%3B*%2C*&output-quality=70&output-format=webp"></img>
                    <span>Follow the status of your order with <b>real-time alerts</b></span>
                </div>
            </div>
        </div>
    )
}

export default HomeDescription;
