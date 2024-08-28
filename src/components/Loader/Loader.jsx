import { Backdrop } from "@mui/material";
import LoadAnimation from "../../assets/loading-animation.gif";

function Loader() {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      open={true}
    >
      <img width={100} src={LoadAnimation} alt="loader" />
    </Backdrop>
  );
}

export default Loader;
