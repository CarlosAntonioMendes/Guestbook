import prismaCliente from "..//prisma";

interface CreateUserProps{
    username: string;
    post: string;
}

class CreateUser{
    async execute({ username, post }: CreateUserProps){

         if(!username || !post){
             throw new Error("username or post NULL")
         }
  
        const NewUser = await new prismaCliente().user.create({
            data:{
                username,
                post
            }
        })

        return NewUser
    }
}

export { CreateUser }