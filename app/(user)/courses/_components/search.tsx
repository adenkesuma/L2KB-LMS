"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { ITrainingData } from "../page";
import Search from "@/public/assets/icons/search.svg";
import { useRouter, useSearchParams } from "next/navigation";

function SearchComponents() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSetsearchText] = useState(
    searchParams.get("name") ?? ""
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <form className="relative" onSubmit={() => router.push(`/courses`)}>
      <input
        type="text"
        placeholder="Cari Pelatihan..."
        className="mt-4 border border-slate-300 py-2 pl-12 pr-4 rounded-3xl max-w-xs sm:w-96 lg:w-[500px] sm:max-w-2xl text-sm outline-none"
        value={searchText}
        onChange={(e) => {
          setSetsearchText(e.target.value);
          router.push(`/courses?${createQueryString("name", e.target.value)}`);
        }}
      />
      <input type="submit" className="hidden" />
      <Image
        src={Search}
        alt="search icon"
        className="w-4 absolute top-7 left-4"
      />
    </form>
  );
}

export default SearchComponents;
