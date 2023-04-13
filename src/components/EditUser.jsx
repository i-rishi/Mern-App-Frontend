import {
  FormControl,
  FormGroup,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { editUser, getUser } from "../services/api";

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
const EditUser = () => {
  const [user, setUser] = useState(defaultUser);
  const OnUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const res = await getUser(id);
    setUser(res.data);
  };

  const edituserdetails = async () => {
    await editUser(user, id);
    navigate("/alluser");
  };

  return (
    <FormGroupContainer>
      <TypographyContnet variant="h4">Edit User</TypographyContnet>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="name"
          value={user.name}
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="username"
          value={user.username}
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="email"
          value={user.email}
        />
      </FormControlContainer>
      <FormControlContainer>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(e) => OnUserChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControlContainer>
      <FormControlContainer>
        <Button
          variant="contained"
          onClick={() => edituserdetails()}
          navigate={`/edituser/${user.id}`}
        >
          Edit User
        </Button>
      </FormControlContainer>
    </FormGroupContainer>
  );
};

export default EditUser;
