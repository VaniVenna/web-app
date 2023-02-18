import { Parallax, Background } from "react-parallax";
import heroImage from "../../../assets/image/approach/background.png";
import styles from "./parallaxImage.module.scss";
import { Container, Header, List } from "semantic-ui-react";

const ParallaxImage = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage="/parallax.png"
    bgImageAlt="the dog"
    strength={800}
    className={styles.parallaxImage}
  >
    <div className={styles.content}>
      <Container id="services" className={styles.approach}>
        <div className={styles.info}>
          <Header as="h2" className={styles.header}>
            FUTURE VISION:
          </Header>
          <p className={styles.para}>
            Our future vision to expand our business through including the
            following machineries.
          </p>
          <List bulleted className={styles.para}>
            <List.Item>Turret Punching</List.Item>
            <List.Item>Laser Cutting</List.Item>
            <List.Item>Robotic Welding</List.Item>
            <List.Item>Powder Coating Line</List.Item>
          </List>
        </div>
        <div className={styles.imgText}>
          <Header as="h2" className={styles.header}>
            In addition to our manufacturing capabilities, TAK also offers:
          </Header>
          <List bulleted className={styles.para}>
            <List.Item>Assembly Support</List.Item>
            <List.Item>Logistics Support</List.Item>
          </List>
        </div>
      </Container>
    </div>

    <div style={{ height: "200px" }} />
  </Parallax>
);
export default ParallaxImage;
