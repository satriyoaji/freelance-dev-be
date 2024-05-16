import {FormCreate} from "../validations/CreateDataValidation";
import {z} from "zod";

export type FormType = z.infer<typeof FormCreate>

type FormModel = {
  name: string;
  email: string;
  company?: string | undefined;
  address?: string | undefined;
  password: string;
  percentage: number;
  isAdmin: boolean;
}
