import React, { useState } from 'react';

function Navbar() {
    // State to toggle dropdown visibility
    const [showDropdown, setShowDropdown] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    //state to control the navbar when screen size is minimum
    const [showContents,setShowContents]=useState(false);

    //function to expand the contents visibilty 
    const expand=()=>
    {
        setShowContents(!showContents);
    };


    return (
        <div className="navbar">
            <div className="navbar_logo">
                <img src={require('./images/logo.png')} alt="logo" />
            </div>
            <div className="navbar_contents">
                <ul>
                    <li>List your practice |</li>
                    <li>For Employers |</li>
                    <li>Courses |</li>
                    <li>Books |</li>
                    <li>Speakers |</li>
                    <li>Doctors |</li>
                    <li onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                        Login/Signup{' '}
                        <img
                            src={require('./images/dropdown.png')}
                            alt="dropdown"
                            style={{ width: '10px', height: '15px' }}
                        />
                    </li>
                </ul>
                {showDropdown && (
                    <div className="dropdownd">
                        <div className="dropdowndi">
                            <h5>Doctor</h5>
                            <a href="login.js">Login</a>
                            <a href="signup.js">Sign Up</a> 
                        </div>
                        <div className="dropdowndi2">
                            <h5>Patient</h5>
                            <a href="login.js">Login</a>
                            <a href="signup.js">Sign Up</a> 
                        </div>
                    </div>
                )}
            </div>
            <div className='navbar_short'>
                <img onClick={expand}src={require('./images/hamburger.png')} alt='hamburger' style={{width:'50px'}}></img>
            </div>
            { showContents && 
            <div className='navbar_min'>
                <div className='exit'>
                    <img src={require('./images/exit.png')} alt='exit' style={{width:'20px'}} onClick={expand}></img>
                </div>
                <div className='navbar_min_i1'>
                    <div className="navbar_min_1">
                            <h5>Doctor</h5>
                            <a href="login.js">Login</a>
                            <a href="signup.js">Sign Up</a> 
                    </div>
                    <div className="navbar_min_2">
                            <h5>Patient</h5>
                            <a href="login.js">Login</a>
                            <a href="signup.js">Sign Up</a> 
                    </div>
                </div>
                <div className='navbar_min_i2'>
                    <p>Doctors</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>
                <div className='navbar_min_i2'>
                    <p>List your Practice</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>
                <div className='navbar_min_i2'>
                    <p>For Employers</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>
                <div className='navbar_min_i2'>
                    <p>Courses</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>
                <div className='navbar_min_i2'>
                    <p>Books</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>
                <div className='navbar_min_i2'>
                    <p>Speakers</p>
                    <img src={require('./images/rightarrow.png')} alt='rightarrow' style={{width:"20px"}}></img>
                </div>

            </div>
}
        </div>
    );
}

export default Navbar;