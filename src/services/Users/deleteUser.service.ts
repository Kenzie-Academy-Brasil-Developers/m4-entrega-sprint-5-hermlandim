import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { validate as uuidValidate } from "uuid";
import { version as uuidVersion } from "uuid";

const deleteUserService = async (userId: string): Promise<{}> => {
  const idValidate = uuidValidate(userId);

  if (!idValidate) {
    throw new AppError("Invalid id", 404);
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    withDeleted: true,
  });

  if (!user) {
    throw new AppError("User not exists", 404);
  }

  if (!user.isActive) {
    throw new AppError("cannot delete user with isActive=false", 400);
  }

  user.isActive = false;

  await userRepository.softRemove(user);

  await userRepository.save(user);

  return {};
};

export default deleteUserService;
