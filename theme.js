import "./styles.css";
import { prism, aspect, future } from "@mdx-deck/themes";

export default {
  ...future,
  colors: {
    ...future.colors,
    background: "none"
  },

  styles: {
    code: {
      fontSize: "22px"
    }
  }
};
