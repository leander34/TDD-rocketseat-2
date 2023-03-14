import { Entity } from "../../core/domain/Entity"

type ChanllengeProps = {
    title: string
    instructionsUrl: string
}

export class Chanllenge extends Entity<ChanllengeProps> {
    private constructor(props: ChanllengeProps, id?: string) {
        super(props, id)
    }


    static create(props: ChanllengeProps, id?: string) {
        const chanllenge = new Chanllenge(props, id)
        return chanllenge
    }
}