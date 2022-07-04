import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCsae';

class ListCategoriesController {
    constructor(private createCategoryUseCase: ListCategoriesUseCase){}

    handle(req: Request, res: Response): Response{
        
        const all = this.createCategoryUseCase.execute();

        return res.status(200).json(all);
    };
}

export { ListCategoriesController };