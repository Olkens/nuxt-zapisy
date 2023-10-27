import { specialitiesTable, InsertSpeciality } from "@/db/schema";
import { db } from "@/server/api/sqlite-service";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const newSpeciality: InsertSpeciality = {
            ...body
        }
        console.log(newSpeciality)
        const result = db.insert(specialitiesTable).values(newSpeciality).run();
        return { newSpeciality : result}
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        });
    }
});

