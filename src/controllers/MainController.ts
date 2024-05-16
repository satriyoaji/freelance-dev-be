import { Request, Response } from 'express';
import {FormCreate} from "../validations/CreateDataValidation";
import {validationResult} from "express-validator";

export const createNewData = async (req: Request, res: Response) => {
  try {
    // using express-validator
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     success: false,
    //     errors: errors.array()
    //   });
    // }

    // using zod
    const body = FormCreate.safeParse(req.body)
    if (!body.success) {
      res.status(400).json({ errors: body.error.issues, success: false })
      return
    }

    res.status(201).json({ message: 'Data created successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', success: false });
  }
};
