import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomerController } from "./controllers/listCustomerController";
import { DeleteCustomerController } from "./controllers/deleteCustomerController";

export async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {

    fastify.get("/customer/list", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    });

    fastify.post("/customer/create", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    })

    fastify.delete("/customer/delete", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })
}