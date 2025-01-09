import { Request, Response } from "express";
import { ApiResponse } from "../../../types/ApiResponse";
import { z } from "zod";

// Define Zod schema for query parameters
const dateSchema = z.object({
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "'from' must be in YYYY-MM-DD format",
  }),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "'to' must be in YYYY-MM-DD format",
  }),
});

export const AgeCalculatorController = (req: Request, res: Response) => {
  const query = req.query;

  const parseResult = dateSchema.safeParse(query);
  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map((issue) => ({
      path: issue.path.join("."), // Join path array for readability
      message: issue.message,
    }));
    return res.status(400).send({
      success: false,
      message: parseResult.error.issues[0].message,
      errors: parseResult.error.errors.map((err) => ({
        path: err.path,
        message: errorMessages,
      })),
    });
  }

  const fromParam = parseResult.data.from;
  const toParam = parseResult.data.to;

  const from = new Date(fromParam as string);
  const to = new Date(toParam as string);

  try {
    let yearDiff = to.getFullYear() - from.getFullYear();
    let monthDiff = to.getMonth() - from.getMonth();
    let dayDiff = to.getDate() - from.getDate();

    return res.send({
      success: true,
      age: {
        years: yearDiff,
        months: monthDiff,
        days: dayDiff,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, message: ApiResponse.InternalServerError });
  }
};
