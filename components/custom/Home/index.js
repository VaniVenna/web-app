import React from "react";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import styles from "./home.module.scss"

const Home = (props) => {
  return (
    <Container textAlign="center" className={styles.homeContainer} id="home">
      <Header as="h1" className={styles.customHeaderHome}>
        WE PROVIDE HIGH-QUALITY CNC MACHINED PARTS TO ASSIST YOU IN ACHIEVING
        YOUR GOALS
      </Header>
    </Container>
  )
}
export default Home;
