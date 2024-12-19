# 📝 Console Logger Utility

A 🛠️ simple and 🎨 customizable logging utility for styled 🖥️ console messages. This utility provides predefined styles for different log 📊 levels (e.g., `ℹ️ info`, `⚠️ warning`, `🚨 danger`, `❌ error`, `✅ success`) and allows full 🛠️ customization for additional ⚡ flexibility.

## 📥 Installation

Install the 📦 package via npm:

```bash
npm install log101
```

## 🖱️ Usage

Import the package into your 🖥️ project:

```javascript
import log from "log101";
```

### 🔍 Logging with Predefined Styles

```javascript
// ✅ Default style (🟢 green, 🟢 bold, 📏 large text)
log("This is a default message");

// 🎨 Predefined styles for log 📊 levels
log("ℹ️ Information message", "info");      // 🔵 Blue text for ℹ️ informational logs
log("⚠️ Warning message", "warning");        // 🟠 Orange text for ⚠️ warnings
log("🚨 Critical issue detected!", "danger"); // 🔴 Red text for 🚨 critical issues
log("❌ An error occurred!", "error");        // 🛑 Dark 🔴 red text for ❌ errors
log("✅ Operation was successful!", "success"); // 🟢 Green text for ✅ success
```

### 🛠️ Logging with Custom Styles

You can pass a 🎨 custom style object to override the predefined styles:

```javascript
log("🖌️ Custom styled message", {
  color: "#FF5733",
  fontSize: "18px",
  fontWeight: "normal",
  fontStyle: "italic"
});
```

### 🎨 Predefined Styles

| Style      | 📝 Description                                      |
|------------|--------------------------------------------------|
| `default`  | 🟢 Green, 🟢 bold, 📏 xx-large text                |
| `info`     | 🔵 Blue, 🔵 bold, 📏 large text                    |
| `warning`  | 🟠 Orange, 🟠 bold, 📏 large text                  |
| `danger`   | 🔴 Red, 🔴 bold, 📏 large text                     |
| `error`    | 🛑 Dark 🔴 red, 🛑 bold, 📏 large text             |
| `success`  | 🟢 Green, 🟢 bold, 📏 large text                    |

### 🎨 Dynamic CSS String

You can also pass a ✍️ raw CSS string if you prefer:

```javascript
log("🔮 Direct CSS example", "color:purple;font-size:24px;font-weight:bold;text-decoration:underline");
```
<img src="https://github.com/u4saif/color-it/blob/fef2eab04cbda91607f6c5ece04b7eee182b64c0/image.png" width="500px" height="400px" />
 
## 📜 License

This project is licensed under the ⚖️ MIT License.

