import { CategoryRepository } from "../../repositories/implementations/CategoryRepositorie";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./IportCategoryUseCase";

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
