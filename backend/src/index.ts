import { app } from "./app";
import cors from "cors";
import { PORT, CORS_ALLOWED_ORIGIN } from "./settings";

app.use(
  cors({
    origin: CORS_ALLOWED_ORIGIN,
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
