import Colors from "./colors"

const Theme = {
  colors: Colors,
  spacing: {
    small: "4px",
    medium: "8px",
    default: "16px",
    large: "32px"
  },
  font: {
    small: "12px",
    medium: "14px",
    default: "16px",
    title: "18px",
  }
}
export type ThemeType = (typeof Theme);

export default Theme