import { Redirect } from "expo-router";
import React from "react";
import "../global.css";
const index = () => {
  return <Redirect href="/(auth)/login" />;
};

export default index;
