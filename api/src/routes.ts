import fastify, {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controllers/UserController";
import { ListUsersController } from "./controllers/ListUsersController"

export async function  routes(fastify: FastifyInstance, opitions: FastifyPluginOptions) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply)  => {
        return {ok: true}
    })
    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })
    fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply)
    })
}
