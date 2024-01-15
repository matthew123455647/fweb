import express from "express";
import cors from "cors";
import records from "./routes/route.mjs";
import events from "./routes/event.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use("/record", records);

app.use("/event", events);

//start the Express server
app.listen(PORT, () => {
    console.log('Server is running on port: https://localhost:${PORT}');
});