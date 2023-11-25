import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateUser } from '../services/UserService'

class CreateUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{username, post} = request.body as {username: string, post: string };
        console.log(username);
        console.log(post);
        const userService = new CreateUser()
        const user = await userService.execute({ username, post })
        reply.send(user)
    }
}

export { CreateUserController }

