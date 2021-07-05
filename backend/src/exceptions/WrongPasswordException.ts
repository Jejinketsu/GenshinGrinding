import HTTPException from "./HttpExceptions";

class WrongPasswordException extends HTTPException {
    constructor(username: string){
        super(401, `Wrong password for user ${username}`);
    }
}

export default WrongPasswordException;