import { ok } from "assert";
import { prismaClient } from "../prisma";
import { CreateCustomerServiceProps } from "../../types/types";

export class CreateCustomerService {
    async execute({ name, email }: CreateCustomerServiceProps) {
        if(!name || !email) throw new Error("Name and email are required");

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        });

        return customer
    }
}