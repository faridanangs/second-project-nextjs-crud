"use client";

import { useState } from "react";

export const metadata = {
  title: "Nyelot Loll",
};

export default function Slot() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  function handleLod() {
    setTimeout(() => {
      setLoading(false);
      setCount(count + 1);
    }, 1500);
    setLoading(true);
  }
  return (
    <div>
      <h1 className="text-[2rem] font-bold text-center mt-[3rem]">
        Ayok Depo Orang" Sukses, Gak Depo Gak Sukses
      </h1>
      <div className=" mt-[5rem] ">
        <h1 className="text-[2rem] text-red-500 text-center">Om Jeuz</h1>
        {count == 2 || count == 7 ? (
          <div>
            {loading ? (
              ""
            ) : (
              <div>
              <h1 className="text-2xl font-bold mt-4 text-center text-[#40ff00]">
                Lu Menang 2jt! "lu bakal Kalah 200jt jika lu berfikir lagi
                sekali pasti menang"
              </h1>

              </div>
            )}
            <div className="flex border items-center justify-center p-4 gap-8 my-10">
              <h1 className="border bg-[#40ff00] px-2 text-2xl font-bold text-[#000000]">
                {count}
              </h1>
              {!loading ? (
                <div className="flex gap-4 border p-2 font-bold text-[#48f742]">
                  <h1>Apel</h1>
                  <h1>Apel</h1>
                  <h1>Apel</h1>
                  <h1>Apel</h1>
                  <h1>Apel</h1>
                </div>
              ) : (
                <h1 className="btn loading">Masih Muter Lol</h1>
              )}
              <button className="btn btn-info font-bold" onClick={handleLod}>
                Main Lagi
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mt-4 text-center text-red-600">
              {loading ? "" : "Lu Kalah Lol !!"}
              {count > 10 ? alert("Uang Lu Abis TopUp Sana") : ""}
            </h1>
            <div className="flex border items-center justify-center p-4 gap-8 my-10">
              <h1 className="border bg-[#d44f4f] px-2 text-2xl font-bold text-[#000000]">
                {count}
              </h1>
              {!loading ? (
                <div className="flex gap-4 border p-2 font-bold text-[#d44f4f]">
                  <h1>Nanas</h1>
                  <h1>Apel</h1>
                  <h1>Jeruk</h1>
                  <h1>Apel</h1>
                  <h1>Jeruk</h1>
                </div>
              ) : (
                <h1 className="btn loading">Masih Muter Lol</h1>
              )}
              <button className="btn btn-info font-bold" onClick={handleLod}>
                Main Lagi
              </button>
            </div>
          </div>
        )}
      </div>
      <h1 className="text-2xl text-center text-red-600 mx-10">
        Kira Kira seperti ini cara kerjanya slot Versi Simple di sini ANGGAP
        saya SEBAGAI BANDAR saya atur agar si user menang ketika dia udah spin
        ke <span className="text-3xl">2</span> dan ke{" "}
        <span className="text-3xl">7</span> selain itu kalah terus
      </h1>
    </div>
  );
}
