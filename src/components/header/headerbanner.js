import './headerbanner.css';
import {Row, Col, Image} from 'antd';

function HeaderBanner(){
  return(
     <div className="container">
       <Row>
         <Col span={8}>
           <h1 className="text">Shop</h1>
         </Col>
         <Col span={8}>
           <Image
               style={{justifyContent:"center",width:50,height:50,marginLeft:250}}
               src={require('../../images/index.png')}
           />
         </Col>
         <Col span={8}>
           <Image
               style={{color:"white",width:40,height:30,marginLeft:250}}
               src={require('../../images/twitter-logo.png')}
           />
           <Image
               style={{color:"white",width:30,height:30,marginLeft:20}}
               src={require('../../images/instagram.png')}
           />
           <Image
               style={{color:"white",width:40,height:30,marginLeft:20}}
               src={require('../../images/dc.png')}
           />
         </Col>
       </Row>
     </div>
  );
}

export default HeaderBanner;