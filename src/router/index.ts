import { NextFunction, Request, Response, Router } from "express";
import { HomeController } from "../controllers/home/index";
import { AgeCalculatorController } from "../controllers/public-api/age-calculator/index";

const router = Router();

router.get("/test", (_req: Request, res: Response, _next: NextFunction) => {
  const a = "a";
  if (a === "a") {
    return res.send(" message: a");
  }
  return res.send({ message: "hii" });
});
router.get("/1", HomeController);
router.get("/2", AgeCalculatorController);

export default router;
