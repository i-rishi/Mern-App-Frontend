import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

import { ExternalLink } from "react-external-link";

// CUSTOM CSS FOR TABLE

const TABLE = styled("div")`
  width: 70%;
  margin: 5% auto;
`;

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

const TypographyContnet = styled(Typography)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <TABLE>
      <TypographyContnet variant="h4">My Projects</TypographyContnet>
      <Table>
        <TableHead>
          <THEAD>
            <TableCell>Projects</TableCell>
            <TableCell>Source Code</TableCell>
            <TableCell>Link</TableCell>
          </THEAD>
        </TableHead>
        <TableBody>
          <TBODY>
            <TableCell>To Do List</TableCell>
            <TableCell>
              <ExternalLink href="https://github.com/i-rishi/ToDoList-v1">
                <Button variant="outlined">Code!</Button>
              </ExternalLink>
            </TableCell>
            <TableCell>
              <ExternalLink href="https://todolist-ioci.onrender.com/">
                <Button variant="contained">Try!</Button>
              </ExternalLink>
            </TableCell>
          </TBODY>
          <TBODY>
            <TableCell>Simon Game</TableCell>
            <TableCell>
              <ExternalLink href="https://github.com/i-rishi/Simon-game">
                <Button variant="outlined">Code!</Button>
              </ExternalLink>
            </TableCell>
            <TableCell>
              <ExternalLink href="https://simon-game03.netlify.app/">
                <Button variant="contained">Try!</Button>
              </ExternalLink>
            </TableCell>
          </TBODY>
          <TBODY>
            <TableCell>Newseletter Web App</TableCell>
            <TableCell>
              <ExternalLink href="https://github.com/i-rishi/newsLetterWebApp">
                <Button variant="outlined">Code!</Button>
              </ExternalLink>
            </TableCell>
            <TableCell>
              <ExternalLink href="https://newsletterwebapp-i-rishi.onrender.com/">
                <Button variant="contained">Try!</Button>
              </ExternalLink>
            </TableCell>
          </TBODY>
          <TBODY>
            <TableCell>Wister Web App</TableCell>
            <TableCell>
              <ExternalLink href="https://github.com/i-rishi/wisper_web_app">
                <Button variant="outlined">Code!</Button>
              </ExternalLink>
            </TableCell>
            <TableCell>
              <ExternalLink href="https://github.com/i-rishi/wisper_web_app/archive/refs/heads/master.zip">
                <Button variant="contained">Try!</Button>
              </ExternalLink>
            </TableCell>
          </TBODY>
        </TableBody>
      </Table>
    </TABLE>
  );
};

export default Home;
