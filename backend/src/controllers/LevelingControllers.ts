import { Request, Response } from "express";

export default {

    async ascencionStandart(request: Request, response: Response){
        try{
            const data = {
                ascension: {
                    stone_2: 1,
                    stone_3: 9,
                    stone_4: 9,
                    stone_5: 6,
                    boss_item_4: 46,
                    local_1: 168,
                    world_1: 18,
                    world_2: 30,
                    world_3: 36,
                    level_1: 420000
                },
                talent: {
                    world_1: 18,
                    world_2: 66,
                    world_3: 93,
                    book_2: 9,
                    book_3: 63,
                    book_4: 114,
                    boss_item_5: 18,
                    event_5: 3,
                    level_1: 4950000
                },
                level: {
                    level_1: 1670000,
                    level_4: 418
                }
            }

            return response.status(200).json(data);
        } catch (error: any){
            console.log("ascencionStandart error >>:", error.message);
            return response.sendStatus(404);
        }
    }

}