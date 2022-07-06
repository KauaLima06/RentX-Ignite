import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/CategoryRepositorie";
import { Specificationrepository } from "../../modules/cars/repositories/implementations/SpecificationsRepositorys";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificatonRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "categoriesRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "specificationRepository",
  Specificationrepository
);
