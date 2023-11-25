import prismaCliente from "..//prisma";

class ListUsersService{
    async execute(){
        const users = await new prismaCliente().user.findMany();

        return users;
    }
    
}

export { ListUsersService }