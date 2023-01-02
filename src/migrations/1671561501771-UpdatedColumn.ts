import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedColumn1671561501771 implements MigrationInterface {
    name = 'UpdatedColumn1671561501771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
