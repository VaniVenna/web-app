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
import styles from "./Quote.module.scss";
import DropdownUI from "../../components/common/DropdownUI";
// import { InputFile } from "semantic-ui-react-input-file";
const Quote = () => {
  return (
    <div className={styles.form}>
      <Form className={styles.form_Data}>
        <Header as="h2" className={styles.header}>
          Quote Request
        </Header>
        <Form.Group widths="equal" className={styles.form_Data_Group1}>
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
            //   value={formData?.Fname}
            className={styles.form_Data_Group_Field}
            required
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
            //   value={formData?.Lname}
            className={styles.form_Data_Group_Field}
            required
          />
        </Form.Group>
        <Form.Group widths="equal" className={styles.form_Data_Group2}>
          <Form.Field
            control={Input}
            label="Company"
            placeholder="Company"
            //   value={formData?.Fname}
            className={styles.form_Data_Group_Field}
            required
          />
        </Form.Group>
        <Form.Group widths="equal" className={styles.form_Data_Group3}>
          <Form.Field
            control={Input}
            label="Email"
            placeholder="Email"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="email"
          />
          <Form.Field
            type="number"
            control={Input}
            label="Phone"
            placeholder="Phone"
            //   value={formData?.Phone}
            className={styles.form_Data_Group_Field}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </Form.Group>
        <Form.Group widths="equal" className={styles.form_Data_Group4}>
          <Form.Field
            control={Input}
            label="Street Address"
            placeholder="Street Address"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="text"
          />
        </Form.Group>
        <Form.Group widths="equal" className={styles.form_Data_Group5}>
          <Form.Field
            control={Input}
            label="City / Suburb"
            placeholder="City / Suburb"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="email"
          />
          <Form.Field
            control={Input}
            label="State / Province"
            placeholder="State / Province"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="email"
          />
        </Form.Group>
        <Form.Group widths="equal" className={styles.form_Data_Group6}>
          <Form.Field
            control={Input}
            label="ZIP / Postal Code"
            placeholder="ZIP / Postal Code"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="text"
          />
          <DropdownUI defaultValue="au" className = {styles.form_Data_Group6_Dropdown}/>
        </Form.Group>

        <Header as="h4" className={styles.header}>
          Design Files
        </Header>
        <Form.Group widths="equal" className={styles.form_Data_Group7}>
          <Form.Field
            control={Input}
            label="Attachment"
            placeholder="Attachment"
            //   value={formData?.Email}
            className={styles.form_Data_Group_Field}
            required
            type="file"
          />
        </Form.Group>
        <p className={styles.form_Data_File_Type}>
          Accepted file types: jpg, jpeg, jpe, png, tiff, tif, pdf, psd, Max.
          file size: 8 MB.
        </p>
        <Form.Field
          control={TextArea}
          label="Message"
          placeholder="Additional Notes"
          // value={formData?.Message}
          className={styles.form_Data_Group_Field}
        />

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Request Quote"
          // onClick={submitHandler}
          type="submit"
          // label="Submit"
        />
      </Form>
      {/* <InputFile
          // button={{ ...buttonProps }}
          input={{
            id: "input-control-id",
            // onChange: handleUpload,
          }}
        /> */}
    </div>
  );
};
export default Quote;
