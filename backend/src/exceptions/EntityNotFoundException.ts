import HTTPException from "./HttpExceptions";

class EntityNotFoundException extends HTTPException {
    constructor(entity: string, property: string, value: number | string){
        super(404, `${entity} with ${property} ${value} not found`);
    }
}

export default EntityNotFoundException;