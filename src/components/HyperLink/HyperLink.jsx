import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HyperLink(props) {
  return (
    <Button style={{ textTransform: "none" }} component={RouterLink} {...props}>
      {props.children}
    </Button>
  );
}
