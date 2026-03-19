import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import partyRoutes from "./modules/party/party.routes.js";
import challanRoutes from "./modules/partyChallan/partyChallan.routes.js";
import karigerRouter from "./modules/kariger/kariger.routes.js";
import karigerWorkEntry from "./modules/karigerWorkEntry/karigerWorkEntry.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
 
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/parties", partyRoutes);
app.use("/api/challans", challanRoutes);
app.use("/api/kariger", karigerRouter);
app.use("/api/kariger-work", karigerWorkEntry);

app.get("/", (req, res) => {
  res.send("ERP Backend Running 🚀");
});

// Error Handler
app.use(errorHandler);

export default app;