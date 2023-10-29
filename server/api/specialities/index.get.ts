import { speciality } from "~/db/schema/speciality";
import { db } from "../sqlite-service";

export default defineEventHandler(async () => {
    try {
        const specResp = db.select().from(speciality).all();
        return { "speciality" : specResp}
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        });
    }
});