import { ChallengesRepository } from "../../src/application/repositories/ChallengesRepository";
import { Chanllenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {

    public items: Chanllenge[] = []
    async findById(id: string): Promise<Chanllenge | null> {
        const chanllenge = this.items.find(chanllenge => chanllenge.id === id)
        if(!chanllenge) {
            return null
        }
        return chanllenge
    }
}