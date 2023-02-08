import React, { Component, useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Header,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import locationImage from "../../../assets/image/location/location.png";
import styles from "./Form.module.scss";
import MainForm from "../MainForm";

const FormExampleFieldControl = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e, data) => {
    if (data === "Fname") {
      setFormData({ ...formData, Fname: e.target.value });
    }
    if (data === "Lname") {
      setFormData({ ...formData, Lname: e.target.value });
    }
    if (data === "Email") {
      setFormData({ ...formData, Email: e.target.value });
    }
    if (data === "Phone") {
      setFormData({ ...formData, Phone: e.target.value });
    }
    if (data === "Message") {
      setFormData({ ...formData, Message: e.target.value });
    }
  };
  const url =
    "https://www.google.com/maps/place/Tak+Fabrications+and+Precision+Engg/@-38.0368691,145.2040785,20z/data=!4m5!3m4!1s0x6ad613654a2dff81:0x986e3aba0b0f8f20!8m2!3d-38.0367851!4d145.2043024!5m1!1e2";
  return (
    <Container className={styles.contactUs} id="contactUs">
      <div className={styles.form}>
        <Header as="h2"> Contact Us</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name *"
              placeholder="First name"
              onChange={(e) => handleChange(e, "Fname")}
            />
            <Form.Field
              control={Input}
              label="Last name *"
              placeholder="Last name"
              onChange={(e) => handleChange(e, "Lname")}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Email *"
              placeholder="Email"
              onChange={(e) => handleChange(e, "Email")}
            />
            <Form.Field
              type="number"
              control={Input}
              label="Phone *"
              placeholder="Phone"
              onChange={(e) => handleChange(e, "Phone")}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="Message *"
            placeholder="Tell us more..."
            onChange={(e) => handleChange(e, "Message")}
          />

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Send Message"
            // label="Submit"
          />
        </Form>
      </div>
      <div className={styles.location}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <Image
            src={locationImage}
            alt="N Image"
            width={500}
            height={450}
          ></Image>
        </a>
      </div>

      {/* <MainForm /> */}
    </Container>
  );
};

export default FormExampleFieldControl;
