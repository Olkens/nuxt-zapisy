import {integer, primaryKey, sqliteTable} from "drizzle-orm/sqlite-core";
import {user} from "./user";
import {speciality} from "./speciality";
import {relations} from "drizzle-orm";

export const usersToSpecialities = sqliteTable('users_to_specialities', {
        userId: integer('user_id').notNull().references(() => user.id),
        specialityId: integer('speciality_id').notNull().references(() => speciality.id),
    }, (t) => ({
        pk: primaryKey(t.userId, t.specialityId),
    }),
);

export const usersToSpecialitiesRelations = relations(usersToSpecialities, ({ one }) => ({
    speciality: one(speciality, {
        fields: [usersToSpecialities.specialityId],
        references: [speciality.id],
    }),
    user: one(user, {
        fields: [usersToSpecialities.userId],
        references: [user.id],
    }),
}));