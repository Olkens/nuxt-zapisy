import {sql} from 'drizzle-orm'
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const specialitiesTable = sqliteTable("speciality", {
    id: integer("id").primaryKey(),
    name: text("name"),
    speciality: text('speciality'),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});


export type SelectSpeciality = typeof specialitiesTable.$inferSelect;
export type InsertSpeciality = typeof specialitiesTable.$inferInsert;
