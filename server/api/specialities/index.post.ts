import {  InsertSpeciality } from "@/db/schema/speciality";
import { db } from "@/server/api/sqlite-service";
import {speciality} from "~/db/schema/speciality";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const newSpeciality: InsertSpeciality = {
            ...body
        }
        console.log(newSpeciality)
        const result = db.insert(speciality).values(newSpeciality).run();
        return { newSpeciality : result}
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        });
    }
});

