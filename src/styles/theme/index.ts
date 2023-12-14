// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Component style overrides
import * as components from "./components";

const overrides = {
  styles,
  // Other foundational style overrides go here
  components: {
    ...components,
    // Other components go here
  },
};

export default extendTheme(overrides);
