import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-content-center space-y-4 h-[60vh] my-auto text-center">
      <h2 className="font-bold text-4xl">Pagina no encontrada</h2>
      <Link href="/" className="hover:underline">
        Regresar al inicio
      </Link>
    </div>
  );
}
