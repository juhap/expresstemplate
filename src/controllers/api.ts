import express from "express";
import bunyan from "bunyan";

const router = express.Router();
const logger = bunyan.createLogger({name: "api"});

router.get("/hello/:name", async (req, res) => {
    logger.debug("Hello request");
    res.status(200);
    res.json({"message": `Hello ${req.params.name}`})
});

export default router;