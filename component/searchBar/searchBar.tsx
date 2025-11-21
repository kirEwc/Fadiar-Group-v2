"use client";
import { IcSharpSearch } from "@/icons/icons";
import { useState } from "react";

export default function Serchbar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <div className="flex justify-center w-full md:w-xl  ">
          <div className="flex items-end w-full max-w-xl border-b border-gray-400 pb-1">
            <input
              type="text"
              placeholder="Buscar producto"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-base text-black placeholder-gray-400 bg-transparent px-4"
            />
            <button className="cursor-pointer pr-4">
              <IcSharpSearch className="w-7 h-7 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
