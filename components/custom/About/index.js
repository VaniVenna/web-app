import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'
import styles from '../../../styles/About.module.scss'

const About = () => (
  <div class={`ui stackable two column divided grid container ${styles.aboutContainer}`}>
    <div class="eight wide column">
      <div class="ui segment">
        <img />
      </div>
    </div>
    <div class="eight wide column">
      <Container className="box">
        <Header as='h2' className={styles.header6}>CNC Machinist Pty Ltd is a customary machine shop.</Header>
        <p>
          Small but highly practical in our hands-on approach. CNC Machinist is filling the gap between mass production and design. Quantities from 10 – 1000 or just a 1 off component can be produced in our workshop.
        </p>
        <p>Our Services Include:</p>
        <List bulleted>
          <List.Item>CNC turning with c axis capability and bar feeding.</List.Item>
          <List.Item>CNC milling twin pallet vertical.</List.Item>
          <List.Item>CNC milling with 4th Axis capability.</List.Item>
          <List.Item>Prototyping one offs utilising CNC machining,  conventional milling, turning, surface grinding and 3d printing.</List.Item>
        </List>
        <p>
          Small repetition runs keep your component costs affordable for you. We have found the  balance between “Just in time” and “mass production” can keep business workflow at a level that does not stress the end consumer with long delivery schedules and does not require warehouses full of stock.
        </p>
      </Container>
    </div>
  </div>
)

export default About