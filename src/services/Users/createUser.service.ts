import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users";
import { userReturnedDataSchema } from "../../schemas/user.schema";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUserVerification = await userRepository.findOneBy({
    email: userData.email,
  });

  if (findUserVerification) {
    throw new AppError("User already exists!", 409);
  }

  const user = userRepository.create(userData);

  await userRepository.save(user);

  const returnedData = await userReturnedDataSchema.validate(user, {
    stripUnknown: true,
  });

  return returnedData;
};

export default createUserService;
