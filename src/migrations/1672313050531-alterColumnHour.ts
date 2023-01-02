import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColumnHour1672313050531 implements MigrationInterface {
    name = 'alterColumnHour1672313050531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "time" TO "hour"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" RENAME COLUMN "hour" TO "time"`);
    }

}
