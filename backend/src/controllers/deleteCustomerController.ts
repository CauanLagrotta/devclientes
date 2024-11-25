import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/deleteCustomerService";

export class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const costumerService = new DeleteCustomerService();
        const costumer = await costumerService.execute( id );

        reply.send(costumer);
    }
}