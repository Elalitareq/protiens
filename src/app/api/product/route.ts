import prisma from "@/app/lib/prisma";

interface RequestBody {
  name: string;
  description: string;
  image: string;
  userId: number;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image,
      },
    });
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e }));
  }
}
export async function GET(req: Request) {
  try {
    const products = await prisma.product.findMany();
    if (products.length <= 0) {
      return new Response(JSON.stringify(null), { status: 404 });
    }
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e }));
  }
}
