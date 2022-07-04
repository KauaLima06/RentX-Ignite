import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string,
}

class CreateCategoryUseCase{

    constructor(private categoriesRepository: ICategoriesRepository){
        console.log(categoriesRepository)
    }

    execute({ name, description }: IRequest): void{

        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExist){
            //retorna um erro
            throw new Error("Category already exist");
        }
        
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };