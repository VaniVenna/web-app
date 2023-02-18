import { Container, Header, List } from "semantic-ui-react";
import styles from "./approach.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import heroImage from "../../../assets/image/approach/background.png";
const Approach = (props) => {
  return (
    <>
      {/* <Container id="services" className={styles.approach}>
        <div className={styles.info}>
          <Header as="h2" className={styles.header}>
            FUTURE VISION:
          </Header>
          <p>
            Our future vision to expand our business through including the
            following machineries.
          </p>
          <List bulleted>
            <List.Item>Turret Punching</List.Item>
            <List.Item>Laser Cutting</List.Item>
            <List.Item>Robotic Welding</List.Item>
            <List.Item>Powder Coating Line</List.Item>
          </List>
        </div>
        <div className={styles.values}>
          <Header as="h2" className={styles.header}>
            In addition to our manufacturing capabilities, TAK also offers:
          </Header>
          <List bulleted>
            <List.Item>Assembly Support</List.Item>
            <List.Item>Logistics Support</List.Item>
          </List>
        </div>
      </Container> */}
      <ParallaxBanner
        layers={[
          { image: {heroImage}, speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
              </div>
            ),
          },
          { image: {heroImage}, speed: -10 },
        ]}
        className="aspect-[2/1]"
      />
    </>
  );
};

export default Approach;
