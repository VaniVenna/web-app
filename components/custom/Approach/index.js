import { Container, Header, List } from "semantic-ui-react"
import styles from './approach.module.scss'

const Approach = props => {
  return (
    <Container id="services" className={styles.approach}>
      <div className={styles.info}>
        <Header as="h2" className={styles.header}>Our approach is very simple.</Header>
        <List bulleted>
          <List.Item>
            Straight talk about what we can do and when we can do it.
          </List.Item>
          <List.Item>
            Focusing on coordinating a clients priorities and fulfilling their
            needs.
          </List.Item>
          <List.Item>
            Our customers requirements drive every aspect of our business
          </List.Item>
        </List>
      </div>
      <div className={styles.values}>
        <Header as="h2" className={styles.header}>
          When you work with CNC Machinist as your preferred component supplier,
          you will get the following production and efficiency benefits:
        </Header>
        <List bulleted>
          <List.Item>Competitive pricing</List.Item>
          <List.Item>Precision components</List.Item>
          <List.Item>Fine tolerances and accuracy</List.Item>
          <List.Item>Quality workmanship with Repeatability</List.Item>
        </List>
      </div>
    </Container>
  )
}

export default Approach