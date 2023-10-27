ALTER TABLE `speciality` RENAME COLUMN `first_name` TO `name`;--> statement-breakpoint
ALTER TABLE `speciality` RENAME COLUMN `last_name` TO `speciality`;--> statement-breakpoint
ALTER TABLE `speciality` DROP COLUMN `age`;