// //import  "/../node_modules/bootstrap/dist/css/bootstrap.min.css";



import { Carousel } from 'antd';
const contentStyle = {
  height: '50vh',
  width : '80vw',
 
  margin : "auto"
 
};
const Slider = () => (
  <Carousel autoplay>
    <div>
      <img src="https://picsum.photos/203/301" style={contentStyle}/>
    </div>
    <div>
      <img src="https://picsum.photos/203/302" style={contentStyle}/>
    </div>
    <div>
     <img src="https://picsum.photos/203/303" style={contentStyle}/>
    </div>
    <div>
    <img src="https://picsum.photos/203/304" style={contentStyle}/>
    </div>
  </Carousel>
);
export default Slider;
