import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import { IUserAuthRequest } from "../interfaces/users";
import { createScheduleService } from "../services/Schedules/createSchedules.service";
import { listAllSchedulesByPropertyService } from "../services/Schedules/listAllSchedulesByPropertie.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const scheduleData: IScheduleRequest = req.body;
  const userId: IUserAuthRequest = req.user;

  const schedule = await createScheduleService(scheduleData, userId);

  return res.status(201).json({ message: schedule });
};

export const listAllSchedulesByPropertieController = async (
  req: Request,
  res: Response
) => {
  const propertyId: string = req.params.id;

  console.log(propertyId);

  const schedulesByProperty = await listAllSchedulesByPropertyService(
    propertyId
  );

  return res.status(200).json(schedulesByProperty);
};
