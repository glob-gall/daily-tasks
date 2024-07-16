import Colors from "./colors"

const Theme = {
  colors: Colors,
  spacing: {
    small: "4px",
    medium: "8px",
    default: "16px",
    large: "32px",
    xlarge: "48px",
    xxlarge: "64px",
  },
  font: {
    small: "12px",
    medium: "14px",
    default: "16px",
    title: "18px",
    large: "24px",
    xlarge: "38px",
  },
  background: {
    pr:Colors.neutral['100'],
    sc:Colors.neutral['200'],
    th:Colors.neutral['300'],
    base:Colors.neutral['50'],
    error:Colors.red['200'],
    wh:'#FFFFFF',
    shadow:'#0005'
  },
  feedback: {
    success: Colors.green['500'],
    error: Colors.red['500'],
    warning: Colors.yellow['500'],
    neutral: Colors.slate['500'],
  },
  text : {
    pr: Colors.neutral['700'],
    sc: Colors.neutral['500'],
    th: Colors.neutral['300'],
    inverted:Colors.neutral['50'],
    placeholder: Colors.neutral['400'],
  },
  border:{
    radius: "4px",
  }
}
export type ThemeType = (typeof Theme);

export default Theme