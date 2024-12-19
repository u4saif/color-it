export default function log(message, style = "default") {
    const styles = {
      default: "color:green;font-size:xx-large;font-weight:bold",
      blueLarge: "color:blue;font-size:56px;font-weight:bold",
      redSmall: "color:red;font-size:12px;font-weight:normal",
      danger: "color:red;font-size:large;font-weight:bold",
      warning: "color:orange;font-size:large;font-weight:bold",
      info: "color:blue;font-size:large;font-weight:bold",
      error: "color:darkred;font-size:large;font-weight:bold",
      success: "color:green;font-size:large;font-weight:bold",
      custom: "" // For fully custom styles
    };
  
    // If `style` is an object, convert it to a CSS string dynamically
    let styleString = styles[style] || style;
    if (typeof style === "object") {
      styleString = Object.entries(style)
        .map(([key, value]) => `${key}:${value}`)
        .join(";");
    }
  
    console.log(`%c${message}`, styleString);
  }
  
// Usage examples:
//   log("Hello Saif"); // Default style
//   log("Hello Raja", "blueLarge"); // Predefined blue large style
//   log("Custom styled log", { color: "#51c2f0", fontSize: "20px", fontWeight: "bold" }); // Custom style object
//   log("Simple red message", "color:red;font-size:14px"); // Direct CSS string