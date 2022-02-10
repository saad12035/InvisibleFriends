import './footersite.css';
import {Col, Image} from "antd";
import { Row } from 'antd';

function FooterSite() {

  return (
    <div className="footer-container">
      <Row>
        <Col span={8}offset={4}>
          <div className="footer1">
          <Image style={{width:100,height:100}}
              src={require('../../images/index.png')}/>
          <h1>Markus<br/> Magnusson</h1>
          <h2>INVISIBLE FRIENDS are thought up, drawn and animated by this one Swedish dude.</h2>
          <Image style={{width:40,height:30}}
                 src={require('../../images/twitter-logo.png')}/>
          </div>
        </Col>
        <Col span={8} offset={2}>
          <div className="footer1">
            <Image style={{width:100,height:100}}
                   src={require('../../images/rcc.png')}/>
            <h1>Random Character
            <br/>   Collective</h1>
            <h2>INVISIBLE FRIENDS are a proud member of Random Character Collective. The internet's friendliest animator collective.</h2>
            <Image style={{width:40,height:30}}
                   src={require('../../images/twitter-logo.png')}/>
          </div>
        </Col>
      </Row>
      <hr style={{marginTop:80,marginBottom:80,color:"#A2B5C3"}} className="solid"/>
      <Row>
        <Col span={8}offset={8}>
          <Image style={{width:100,height:130}}
                 src={require('../../images/3.png')}/>
        </Col>
      </Row>
      <Row>
        <Col span={8}offset={8}>
          <Image style={{width:30,height:50,paddingTop:20}}
                 src={require('../../images/twitter-logo.png')}/>
          <Image style={{width:30,height:50,paddingTop:20,marginLeft:30}}
                 src={require('../../images/instagram.png')}/>
          <Image style={{width:30,height:50,paddingTop:20,marginLeft:30}}
                 src={require('../../images/dc.png')}/>
        </Col>
      </Row>
      <br/>
      <br/>
    </div>
  );
}

export default FooterSite;