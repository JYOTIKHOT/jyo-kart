import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HyperLink(props) {
  return (
    <Link component={RouterLink} {...props}>
      {props.children}
    </Link>
  );
}
