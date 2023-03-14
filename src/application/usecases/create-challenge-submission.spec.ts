import { describe, test, it, expect } from 'vitest'
import { InMemoryChallengesRepository } from '../../../test/repositories/in-memory-challenges-repository'
import { InMemoryStudentRepository } from '../../../test/repositories/in-memory-students-repository'
import { Chanllenge } from '../../domain/entities/challenge'
import { Student } from '../../domain/entities/student'
import { CreateChallengeSubmission } from './create-challenge-submission'


describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentRepository = new InMemoryStudentRepository()
        const challengeRepository = new InMemoryChallengesRepository()

        const student = Student.create({email: 'leander@hotmail.com', nome: 'leander'})
        const challenge = Chanllenge.create({title: 'Challemge 01', instructionsUrl: 'youtube.com'})

        studentRepository.items.push(student)
        challengeRepository.items.push(challenge)
        const sut = new CreateChallengeSubmission(studentRepository, challengeRepository)

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        }) 

        expect(response).toBeTruthy()
    })
 })