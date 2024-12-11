function HowitWorks(){
    return(
        <div className="HowitWorks">
            <div className="HowitWorks_content">
                <div className="HowitWorks_content_c1">
                    <h4 style={{color:'#707070'}}>HOW IT WORKS</h4>
                    <p style={{fontSize: '28px',fontFamily: 'Inter',fontStyle:'italic',color:'#707070'}}><span style={{ background: 'linear-gradient(to right, #F1CA72, #E5688C)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Lifestyle as medicine:</span>The six pillars</p>
                </div>
                <div className="HowitWorks_content_c2">
                    <div>
                    <img src={require('./images/leftarrow.png')} alt="leftarrow" style={{backgroundColor:'white',width:'20px',border:'solid 2px LightGray',borderRadius:'50%',margin:'10px',padding:'10px'}}></img>
                    </div>
                    <div>
                    <img src={require('./images/rightarrow.png')} alt="rightarrow" style={{backgroundColor:'white',width:'20px',border:'solid 2px LightGray',borderRadius:'50%',marign:'10px',padding:'10px'}}></img>
                    </div>
                </div>
            </div>
            <div className='HowitWorks_content_c2'>
                <p style={{ color: 'grey' }}>Nutrition</p>
                <p style={{ color: 'grey' }}>Physical Activity</p>
                <p style={{ color: 'grey' }}>Restorative Sleep</p>
                <p style={{ color: 'grey' }}>Stress Management</p>
                <p style={{ color: 'grey' }}>Soical Connection</p>
                <p style={{ color: 'grey' }}>Substance abuse</p>
            </div>
            <div className='HowitWorks_content_cards'>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/nutrition.png')} alt='nutrition' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'180px',padding:'2px'}}>
                        <img src={require('./images/heartbeat.png')} alt='heartbeat' style={{width:'30px',height: '30px',marginTop: '5px'}}></img>
                        <p>
                        121/80 <span style={{ color: 'grey' }}>mmHg</span>
                        </p>
                    </div>
                    <h4>Nutrition</h4>
                    <p style={{ color: 'grey' }}>
                    Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.
                    </p>
                </div>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/physicalactivity.png')} alt='physicalactivity' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'150px',padding:'2px'}}>
                        <img src={require('./images/redheart.png')} alt='redheart' style={{width:'30px',height: '30px',marginTop: '5px'}}></img>
                        <p>
                        32 <span style={{ color: 'grey' }}>minutes</span>
                        </p>
                    </div>
                    <h4>Physical Activity</h4>
                    <p style={{ color: 'grey' }}>
                    Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.
                    </p>
                </div>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/restorativesleep.png')} alt='restorativesleep' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'120px',padding:'2px'}}>
                        <img src={require('./images/night.png')} alt='night' style={{width:'20px',height: '20px',marginTop: '10px'}}></img>
                        <p>
                        8 <span style={{ color: 'grey' }}>hours</span>
                        </p>
                    </div>
                    <h4>Restorative Sleep</h4>
                    <p style={{ color: 'grey' }}>
                    Consistent, quality sleep is essential for cognitive function and physical health.
                    </p>
                </div>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/stressmanagement.png')} alt='stressmanagement' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'110px',padding:'2px'}}>
                        <img src={require('./images/blueheart.png')} alt='blueheart' style={{width:'30px',height: '30px',marginTop: '5px'}}></img>
                        <p>
                        60 <span style={{ color: 'grey' }}>bpm</span>
                        </p>
                    </div>
                    <h4>Stress Management</h4>
                    <p style={{ color: 'grey' }}>
                    Effective stress management techniques are crucial for mental well-being and overall health.
                    </p>
                </div>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/socialconnection.png')} alt='socialconnection' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'170px',padding:'2px'}}>
                        <img src={require('./images/redheart.png')} alt='redheart' style={{width:'30px',height: '30px',marginTop: '5px'}}></img>
                        <p>
                        Feeling <span style={{ color: 'grey' }}>better</span>
                        </p>
                    </div>
                    <h4>Social Connection</h4>
                    <p style={{ color: 'grey' }}>
                    Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.
                    </p>
                </div>
                <div className='HowitWorks_content_cards_c1'>
                    <img src={require('./images/substanceabuse.png')} alt='substanceabuse' style={{width:'400px'}}></img>
                    <div className='HowitWorks__c1__icon' style={{display:"flex",backgroundColor:'#FFFFFFDE',borderRadius:'20px',position:'relative',left:'10px',top:'-50px',width:'120px',padding:'2px'}}>
                        <img src={require('./images/clock.png')} alt='clock' style={{width:'30px',height: '30px',marginTop: '5px'}}></img>
                        <p>
                        62 <span style={{ color: 'grey' }}>days</span>
                        </p>

                    </div>
                    <h4>Substance Abuse</h4>
                    <p style={{ color: 'grey' }}>
                    Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default HowitWorks