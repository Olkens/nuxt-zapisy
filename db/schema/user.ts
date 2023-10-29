import {relations, sql} from 'drizzle-orm'
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {usersToSpecialities} from "./usersToSpecialities";

export const user = sqliteTable("user", {
    id: integer("id").primaryKey(),
    username: text("username").notNull(),
    password: text('password').notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const userRelations = relations(user, ({ many }) => ({
    usersToSpecialities: many(usersToSpecialities),
}));

export type SelectUser = typeof user.$inferSelect;
export type InsertUser = typeof user.$inferInsert;
