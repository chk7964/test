import { Request, Response } from "express";

export async function HomeController(req: Request, res: Response) {
  // Get user's IP
  let userIp = req.ip;

  // Check for 'x-forwarded-for' header (optional for proxies)
  // if (req.headers["x-forwarded-for"]) {
  //   const forwardedIps = req.headers["x-forwarded-for"] as string;
  //   userIp = forwardedIps.split(",")[0];
  // }
  return res.send({
    ips: userIp,
    success: "true",
  });
}
