import prisma from "@/app/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const product = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    return new Response(
      JSON.stringify({ message: "product deleted successfully" })
    );
  } catch (e) {
    return new Response(JSON.stringify(null), { status: 404 });
  }
}
