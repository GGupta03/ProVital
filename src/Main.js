function Main() {
    return (
        <div>
            <div className="container">
                <div className="main_img_container">
                    
                    <div className="column1">
                        <img src={require('./images/image1.png')} alt="image1"></img>
                        <img src={require('./images/image2.png')} alt="image2"></img>
                        <img src={require('./images/image3.png')} alt="image3"></img>
                        <img src={require('./images/image4.png')} alt="image4"></img>
                    </div>
                    
                    <div className="column2">
                        <img src={require('./images/image5.png')} alt="image5"></img>
                        <img src={require('./images/image6.png')} alt="image6"></img>
                        <img src={require('./images/image7.png')} alt="image7"></img>
                        <img src={require('./images/image8.png')} alt="image8"></img>
                    </div>
                </div>
                <div className="container_header">
                    <h1>
                        Book an Appointment with <span>lifestyle medicine</span> experts.
                    </h1>
                    <div className="container_header2">
                        <p>Optimize your lifestyle and reverse chronic diseases.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
