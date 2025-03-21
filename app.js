const express = require("express");
const app = express();
const path = require("path");

// добавляем статичную директорию с билдом фронта
app.use(express.static(path.join(__dirname, "static")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "static", "index.html"))
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`Server is running on ${PORT}`));
