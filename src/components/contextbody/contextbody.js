import {Button, Image} from 'antd';
import { Row, Col } from 'antd';
import './contextbody.css';


function ContextBody() {
  return (
      <div className='container-body1'>
        <Row>
         <Col span={24}>
           <div className="hero-image">
             <h1>INVISIBLE<br/> FRIENDS</h1>
           </div>
           <Image
              style={{marginTop:-180}}
               src={require('../../images/invisible-montage-600w-c3zLxbZQSZq2Cdu9FuY5m7bAsDLUxpYtAcT4MOAkjgBViiZyKagnbn6wJEwNN0fbvs2Dg7gpLJK92JRwhquCBaE7avOMN297Ht6o.gif')}
           />
           <div className="hero-container">
             <h1>3459/5000 </h1>
             <h2>MINTED</h2>
             <h3 className="hero-button">
               Mint
             </h3>
           </div>
         </Col>
        </Row>
        <div className="second-body">
        <Row>
          <Col span={4} >
            <video className="pictures" autoPlay loop>
              <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_1.mp4"
                      type="video/mp4"/>
            </video>
          </Col>
          <Col span={4} offset={1}>
              <video className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_2.mp4"
                        type="video/mp4"/>
              </video>
          </Col>
          <Col span={4} offset={1}>
            <video className="pictures" autoPlay loop>
              <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_3.mp4"
                      type="video/mp4"/>
            </video>
          </Col>
          <Col span={4} offset={1}>
            <video className="pictures" autoPlay loop>
              <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_4.mp4"
                      type="video/mp4"/>
            </video>
          </Col>
          <Col span={4} offset={1}>
            <video className="pictures" autoPlay loop>
              <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_5.mp4"
                      type="video/mp4"/>
            </video>
          </Col>
        </Row>
          <Row gutter={[0, 40]}>
            <Col span={4} offset={2}>
              <video  style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_6.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_7.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_8.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_9.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
          </Row>
          <Row >
            <Col span={4} >
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_10.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video  style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_11.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_12.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_13.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
            <Col span={4} offset={1}>
              <video style={{marginTop:30}} className="pictures" autoPlay loop>
                <source src="https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_14.mp4"
                        type="video/mp4"/>
              </video>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text2">These are previews, not actual tokens. More on Twitter.</h1>
            </Col>
          </Row>
        </div>
      </div>

  );
}

export default ContextBody;