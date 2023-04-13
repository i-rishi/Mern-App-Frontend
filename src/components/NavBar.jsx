import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Appbar = styled(AppBar)`
  background-color: black;
`;

const Tabs = styled(NavLink)`
  color: white;
  &:hover {
    color: Yellow;
  }
  margin-left: 20px;
  font-size: 20px;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Appbar position="static">
      <Toolbar>
        <Tabs to="/">MERN APP</Tabs>
        <Tabs to="/alluser">All Users</Tabs>
        <Tabs to="/adduser">Add Users</Tabs>
      </Toolbar>
    </Appbar>
  );
};

export default NavBar;
