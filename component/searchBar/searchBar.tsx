"use client";
import { IcSharpSearch } from "@/icons/icons";
import { useState } from "react";

export default function Serchbar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <div className="flex justify-center w-full md:w-160  ">
          <div className="relative w-full max-w-160">
            <input
              type="text"
              placeholder="Buscar producto"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full outline-none text-base text-black placeholder-gray-400 bg-transparent px-4 pb-1 border-b border-[#022954]"
            />
            <button className="absolute right-3 top-0 cursor-pointer">
              <IcSharpSearch className="w-7 h-7 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
