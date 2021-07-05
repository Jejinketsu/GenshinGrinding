import HTTPException from "./HttpExceptions";

class EntityAlreadyExistsException extends HTTPException {
    constructor(entity: string, property: string, value: number | string){
        super(409, `${entity} with ${property} ${value} already exists`);
    }
}

export default EntityAlreadyExistsException;