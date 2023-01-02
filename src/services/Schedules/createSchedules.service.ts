import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUsersProperties } from "../../entities/schedulesUsersProperties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";
import { IUserAuthRequest } from "../../interfaces/users";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../../middlewares/ensureDataIsValid.middleware";
import { schedulesHoursSchema } from "../../schemas/schedules.schemas";

export const createScheduleService = async (
  scheduleData: IScheduleRequest,
  userId: IUserAuthRequest
) => {
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const propertiesRepository = AppDataSource.getRepository(Properties);

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: scheduleData.userId,
  });

  const querySchedules = await AppDataSource.createQueryBuilder()
    .select(["schedules"])
    .from(SchedulesUsersProperties, "schedules")
    .where(
      "schedules.property = :id_property AND schedules.hour = :hour_schedules",
      {
        id_property: scheduleData.propertyId,
        hour_schedules: scheduleData.hour,
      }
    )
    .getOne();

  if (querySchedules) {
    throw new AppError("schedule unavailable!", 409);
  }

  const verifyHour = scheduleData.hour.split(":");
  const verifyObjHours = {
    hour: parseInt(verifyHour[0]),
    minutes: parseInt(verifyHour[1]),
  };

  if (
    verifyObjHours.hour < 8 ||
    verifyObjHours.hour >= 18 ||
    verifyObjHours.minutes < 0 ||
    verifyObjHours.minutes > 59
  ) {
    throw new AppError("Hours for appointments only from 08:00 to 18:00", 400);
  }

  const findPropertyExists = await propertiesRepository.findOneBy({
    id: scheduleData.propertyId,
  });

  if (!findPropertyExists) {
    throw new AppError("Property not found", 404);
  }

  const day = new Date(scheduleData.date).getDay();

  if (day == 6 || day == 0) {
    throw new AppError("Appointments allowed only from Monday - Friday", 400);
  }

  const newSchedule = schedulesRepository.create({
    date: scheduleData.date,
    hour: scheduleData.hour,
    property: findPropertyExists!,
    user: findUser!,
  });

  await schedulesRepository.save(newSchedule);

  return newSchedule;
};
