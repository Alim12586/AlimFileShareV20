
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 2020;

// Statik dosyalar
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// API: Dosya yükleme
app.post("/upload", upload.single("file"), (req, res) => {
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ link: fileUrl });
});

app.listen(PORT, () => {
  console.log(`🚀 AlimFileShareV20 running at http://localhost:${PORT}`);
});
