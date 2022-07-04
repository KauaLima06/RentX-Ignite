import { v4 as uuidv4 } from 'uuid';

class Category {
    id?: String;
    name: String;
    description: String;
    created_at: Date;

    constructor(){
        //constructor é uma função que é chamada toda vez que
        //a classe é instanceada
        if(!this.id){
            this.id = uuidv4();
            //this se refere ao própio objeto
        }
    }
}

export { Category }