import { isDate, parse } from "date-fns";
import * as yup from "yup";
import { ISchedulesReturned } from "../interfaces/schedules";
import { userReturnedDataSchema } from "../schemas/user.schema";

const today = new Date();

export const schedulesSchema: yup.SchemaOf<ISchedulesReturned> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    date: yup.string().notRequired(),
    hour: yup.string().notRequired(),
    user: userReturnedDataSchema,
  });

export const listAllSchedulesSchema = yup.object().shape({
  schedules: yup.array(schedulesSchema),
});
