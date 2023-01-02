import { MigrationInterface, QueryRunner } from "typeorm";

export class includeDeletedAtColumn1671740608228 implements MigrationInterface {
    name = 'includeDeletedAtColumn1671740608228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
