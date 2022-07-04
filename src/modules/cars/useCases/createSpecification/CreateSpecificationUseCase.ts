import { ISpecificationsRepository } from "../../repositories/ISpecificatonRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationsRepository){}

    execute({ name, description }: IRequest): void{
        const specificationAlreadyexist = this.specificationsRepository.findByName(name);
        if(specificationAlreadyexist){
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };