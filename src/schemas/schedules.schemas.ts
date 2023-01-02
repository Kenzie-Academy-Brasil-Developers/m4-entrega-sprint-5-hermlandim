import { isDate, parse } from "date-fns";
import * as yup from "yup";

const today = new Date();

export const schedulesSchema = yup.object().shape({
  id: yup.string().notRequired(),
  date: yup.string().notRequired(),
  hour: yup.string().notRequired(),
  user: yup.string().notRequired(),
});

const teste = {
  schedules: [
    {
      id: "e2499ba9-efae-455e-adbd-5df9998ed5f1",
      date: "2022-08-12",
      hour: "10:30:00",
      user: "1234455",
    },
  ],
};

export const schedulesHoursSchema = yup.object().shape({
  hour: yup.number().min(8).max(18),
  minutes: yup.number().min(0).max(59),
});
