import { prismaClient } from "../prisma";

export class DeleteCustomerService {
  async execute(id: string) {
    if (!id) throw new Error("Id is required");

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomer) throw new Error("Customer not found");

    const customer = await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Customer deleted" };
  }
}
