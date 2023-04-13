import {
  FormControl,
  FormGroup,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { addUser } from "../services/api";

// CSS for the react compnents
const FormGroupContainer = styled(FormGroup)`
  width: 50%;
  margin: 10% auto;
`;

const FormControlContainer = styled(FormControl)`
  margin-top: 12px;
`;

const TypographyContnet = styled(Typography)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
`;

// default object for user Information

const defaultUser = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const [user, setUser] = useState(defaultUser);
  const OnUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const adduserdetails = async () => {
    await addUser(user);
    navigate("/alluser");
  };

  return (
    <FormGroupContainer>
      <TypographyContnet variant="h4">Add User</TypographyContnet>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="name"
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="username"
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="email"
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="phone"
        />
      </FormControlContainer>
      <FormControlContainer>
        <Button variant="contained" onClick={() => adduserdetails()}>
          Add User
        </Button>
      </FormControlContainer>
    </FormGroupContainer>
  );
};

export default AddUser;
