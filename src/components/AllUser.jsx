import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Typography,
} from "@mui/material";

import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api.js";

// Custom CSS for Table

const THEAD = styled(TableRow)`
  background: #0096ff;

  & > th {
    color: white;
    font-size: 20px;
    text-align: center;
  }
`;

const TBODY = styled(TableRow)`
  background: #f0ffff;
  & > td {
    font-size: 17px;
    text-align: center;
  }
`;

const TABLE = styled("div")`
  width: 80%;
  margin: 5% auto;
`;

const TypographyContnet = styled(Typography)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin-bottom: 10px;
`;

// functions
const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const userData = await getUsers();
    setUsers(userData.data);
  };

  const delUser = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <TABLE>
      <TypographyContnet variant="h4">All Users</TypographyContnet>
      <Table>
        <TableHead>
          <THEAD>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </THEAD>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBODY>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edituser/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => delUser(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBODY>
          ))}
        </TableBody>
      </Table>
    </TABLE>
  );
};

export default AllUser;
