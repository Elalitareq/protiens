import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

interface RequestBody {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

export async function POST (request: Request){
    const body: RequestBody =await request.json();
    if(body.password !== body.confirmPassword){
        return new Response(JSON.stringify({message: 'Password not match'}), {status: 401});    
    }
    const user = await prisma.user.create({
        data:{

            name: body.name,
            email: body.email,
            password:bcrypt.hashSync(body.password, 10),
            role: body.role
        }
    });
    const {password,...userWithoutPassword} = user;
    return new Response(JSON.stringify(user), {status:201});

}