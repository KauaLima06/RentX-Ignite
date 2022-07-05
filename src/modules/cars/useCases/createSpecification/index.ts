import { Specificationrepository } from "../../repositories/implementations/SpecificationsRepositorys";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationrepository = new Specificationrepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationrepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
