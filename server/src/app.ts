import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes"
import categoryRoutes from "./routes/category.routes"
import orderRoutes from "./routes/order.routes"
import dashboardRoutes from "./routes/dashboard.routes"

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SmartTrade API Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes)

app.use("/api/categories", categoryRoutes)

app.use("/api/orders", orderRoutes)

app.use("/api/dashboard", dashboardRoutes)

export default app;