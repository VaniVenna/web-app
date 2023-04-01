import { Container, Header, List } from "semantic-ui-react";
import styles from "./approach.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import heroImage from "../../../assets/image/approach/background.png";
const Approach = (props) => {
  return (
    <ParallaxBanner
      layers={[
        { image: { heroImage }, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: { heroImage }, speed: -10 },
      ]}
      className="aspect-[2/1]"
    />
  );
};

export default Approach;
