import { Module } from "@medusajs/utils";
import CompetitionService from "./services/competition-service";

export const COMPETITION_GEOGUESSER_MODULE = "geoguesser";

export default Module(COMPETITION_GEOGUESSER_MODULE, {
    service: CompetitionService
});
