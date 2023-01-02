import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUsersProperties } from "../../entities/schedulesUsersProperties.entity";
import { AppError } from "../../errors/AppError";

export const listAllSchedulesByPropertyService = async (idProperty: string) => {
  const propertieRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const findProperties = await propertieRepository.findOneBy({
    id: idProperty,
  });

  if (!findProperties) {
    throw new AppError("properties not exists", 404);
  }
  const findSchedules = await schedulesRepository.find({
    where: {
      property: {
        id: idProperty,
      },
    },
    relations: {
      user: true,
    },
  });

  const schedules = {
    schedules: findSchedules,
  };

  return schedules;
};
