import {relations, sql} from 'drizzle-orm'
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {usersToSpecialities} from "./usersToSpecialities";

export const speciality = sqliteTable("speciality", {
    id: integer("id").primaryKey(),
    speciality: text('speciality').notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const specialityRelations = relations(speciality, ({ many }) => ({
    usersToSpecialities: many(usersToSpecialities),
}));

export type SelectSpeciality = typeof speciality.$inferSelect;
export type InsertSpeciality = typeof speciality.$inferInsert;
