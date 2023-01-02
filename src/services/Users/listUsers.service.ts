import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { listUsersReturnedData } from "../../schemas/user.schema";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    withDeleted: true,
  });

  const returnedData = listUsersReturnedData.validate(users, {
    stripUnknown: true,
  });

  return returnedData;
};

export default listUsersService;
