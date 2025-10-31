import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);

const app = express();

app.use(express.static("public"));

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim;
    req.send(`Ini routing GET /mahasiswa/${nim} dengan NIM : ${nim}`);
});

app.post("/mahasiswa", (req, res) => {
    req.send(`Ini routing POST /mahasiswa untuk menambahkan mahasiswa baru`);
});

app.put("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim;
    req.send(`Ini routing PUT /mahasiswa/${nim} untuk memperbarui data mahasiswa dengan NIM : ${nim}`);
});

app.delete("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim;
    req.send(`Ini routing DELETE /mahasiswa/${nim} untuk menghapus data mahasiswa dengan NIM : ${nim}`);
});

const hostname = "127.0.0.1";
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});

// import express from "express";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// app.use(express.static("public"));

// // ✅ Routing tanpa parameter
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/about", (req, res) => {
//     res.sendFile(__dirname + "/public/about.html");
// });

// app.get("/contact", (req, res) => {
//     res.send("<h2>Halaman Kontak</h2><p>Hubungi kami di: email@kampus.ac.id</p>");
// });

// app.get("/services", (req, res) => {
//     res.send("<h2>Halaman Layanan</h2><p>Kami menyediakan berbagai layanan web development.</p>");
// });

// // ✅ Routing dengan parameter
// app.get("/mahasiswa/:nim", (req, res) => {
//     const nim = req.params.nim;
//     res.send(`Detail mahasiswa dengan NIM: ${nim}`);
// });

// const hostname = "127.0.0.1";
// const port = 3000;

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });
