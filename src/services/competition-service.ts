import { MedusaService } from "@medusajs/utils";

class CompetitionService extends MedusaService({
}) {
  async helloWorld(data: any): Promise<string> {
    console.log(`Hello World`);
    return `Hello World`;
  }
}

export default CompetitionService;
