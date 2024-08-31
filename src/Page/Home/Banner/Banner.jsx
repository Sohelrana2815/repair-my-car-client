import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    //
    <Carousel className="w-3/4 mx-auto">
      <div>
        <img src={img1} className="rounded-xl" />
      </div>
      <div>
        <img src={img2} className="rounded-xl" />
      </div>
      <div>
        <img src={img3} className="rounded-xl" />
      </div>
      <div>
        <img src={img4} className="rounded-xl" />
      </div>
      <div>
        <img src={img5} className="rounded-xl" />
      </div>
      <div>
        <img src={img6} className="rounded-xl" />
      </div>
    </Carousel>
  );
};

export default Banner;
