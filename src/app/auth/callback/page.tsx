import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {

    const user = await currentUser();

    if (!user?.id || !user.emailAddresses[0].emailAddress) {
        return redirect("/auth/signin");
    }

    const existingUser = await db.user.findUnique({
        where: {
            clerkId: user.id,
        },
    });

    if (!existingUser) {
        const userName = user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.username || "User";

        await db.user.create({
            data: {
                id: user.id,
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: userName,
                avatar: user.imageUrl,
            },
        });

        console.log("criando usuario");
        redirect("/app/dashboard");
    }

    redirect("/app/dashboard");
};

export default AuthCallbackPage
