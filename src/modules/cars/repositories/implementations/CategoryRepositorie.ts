import { Category } from "../../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

/*
    DTO => Data transfer object

    Objeto responsável pela tranferênci de dados entre classes
*/
class CategoryRepository implements ICategoriesRepository {

    private categories: Category[];

    private static INSTANCE: CategoryRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance(): CategoryRepository{
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void{
        //void => define que o tipo será uma função sem retorno
        const category = new Category();
        console.log('category')
        console.log(category)
        
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
            //Atribui as propiedades do objeto para 
            //'category' que é uma instancia de Category
        });
    
        this.categories.push(category);
    }

    list(): Category[]{
        return this.categories;
    }

    findByName(name: string): Category{
        const category = this.categories.find(category => category.name === name)
        return category;
    }
}

export { CategoryRepository }