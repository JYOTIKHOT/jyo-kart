import { Skeleton } from "@mui/material";
import React from "react";

function SkeletonWrapper({ loading, children, ...props }) {
  return loading ? <Skeleton animation="wave" {...props} /> : children;
}

export default SkeletonWrapper;
