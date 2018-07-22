import React from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const Setup = () => (
  <StyleProvider style={getTheme(variables)}>
    <App />
  </StyleProvider>
);

export default Setup;