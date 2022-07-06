import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepositores";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("userRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
