import { Migration } from "@mikro-orm/migrations";

export class Migration20241217210922 extends Migration {
  async up(): Promise<void> {
    this.addSql(`
            ALTER TABLE "product_variant"
            ADD COLUMN "geo_guesser_image_id" text;
        `);
  }

  async down(): Promise<void> {
    this.addSql(`
            ALTER TABLE "product_variant"
            DROP COLUMN "geo_guesser_image_id";    
        `);
  }
}
