import { Request } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest, IUserUpdate } from "../../interfaces/users";
import { userReturnedDataSchema } from "../../schemas/user.schema";

const updateUserService = async (
  userId: string,
  body: IUserUpdate,
  reqUser: Request
): Promise<IUser> => {
  let keys = Object.keys(body);
  keys.forEach((key) => {
    if (key === "isAdm" || key === "isActive" || key === "id") {
      throw new AppError("it is not possible to change this field", 401);
    }
  });

  const userRepository = AppDataSource.getRepository(User);

  if (!reqUser.user.isAdm && reqUser.user.id != userId) {
    throw new AppError(
      'you do not have permission to change another user"s data',
      401
    );
  }

  const userFind = await userRepository.findOne({
    where: { id: userId },
    withDeleted: true,
  });

  if (!userFind) {
    throw new AppError("User not exists", 404);
  }

  const updateUser = userRepository.create({
    ...userFind,
    ...body,
  });

  await userRepository.save(updateUser);

  const returnedData = await userReturnedDataSchema.validate(updateUser, {
    stripUnknown: true,
  });

  return returnedData;
};

export default updateUserService;
