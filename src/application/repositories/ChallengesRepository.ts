import { Chanllenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
    findById(id: string): Promise<Chanllenge | null>
}