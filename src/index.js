import app from "./app.js";
import { connectDB } from "./db.js";


connectDB();

app.listen(app.get("port"), (_) => {
  const mensaje = `Serve Listen on http://localhost:${app.get("port")}`;
  console.log(mensaje);
});

