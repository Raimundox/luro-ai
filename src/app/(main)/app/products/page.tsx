
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { DataTable } from "@/components/data-table-components/data-table";
import { columns } from "@/components/data-table-components/columns";
import { PlusCircleIcon, TrashIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Expenses",
  description: "A Expense tracker build using Tanstack Table."
};

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "src/components/data-table-components",
    "data.json"
  );
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Page() {
  const data = await getData();

  return (
<div className="flex flex-col flex-1 h-full p-8 space-y-4 md:flex">
  {/* HEADER BAR */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="text-xl font-semibold">Clientes</h1>
    <div className="flex gap-4">
      {/* Botão de adicionar cliente */}
      <button
        className="flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        <PlusCircleIcon className="w-5 h-5 mr-2 text-gray-200" />
        Novo cliente
      </button>

      {/* Botão de deletar clientes, visível apenas se houver clientes */}
      {1 > 0 && (
        <button
          className="flex items-center px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          <TrashIcon className="w-5 h-5 text-gray-200" />
        </button>
      )}
    </div>
  </div>

  {/* Tabela de dados */}
  <DataTable data={data} columns={columns} />
</div>

  );
}

