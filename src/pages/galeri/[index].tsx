import { Button } from "@/components/Button";
import Buttons from "@/components/Buttons";

import Layout from "@/components/Layout";
import Image from "next/image";
import prisma from "@/script/prisma";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

type FotoType = {
  id: number;
  url: string;
  title: string;
};

export default function Index() {
  const router = useRouter();
  const [detail, setDetail] = useState<FotoType | null>({ id: 0, url: '', title: '' });

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        const id = parseInt(router.query.index as string);

        try {
          const detail = await axios.get<FotoType>(`/api/foto?id=${id}`);
          const result = detail.data;

          if (result) {
            setDetail({
              id: result.id,
              url: result.url, 
              title: result.title,
            });
          } else {
            // Handle case when data is not found
            console.error(`Data with id ${id} not found`);
          }
        } catch (error) {
          // Handle error from API request
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [router]);

  if (!detail) {
    // Menangani kasus ketika detail adalah null
    return <p>null</p>;
  }
  return (
    <Layout>
    <div className="banner md:h-[480px] h-80 relative mt-[100px] md:mx-[100px] mx-2  object-cover">
      <Image src="/Galery.png" alt="error" fill></Image>
      <div className="absolute text-white text-center left-[100px] right-[100px] md:top-[150px] top-[100px]">
        <p className="text-S font-bold">Banyak Gambar Yang Menarik</p>
        <p className="text-XS font-normal py-[10px]">
          Temukan Lebih dari 100 Foto dan Video terkait budaya Lombok
        </p>
        <div>
          <input
            className="h-medium rounded-full text-black p-6"
            type="search"
            name=""
            id=""
            placeholder="Search Foto"
          />
        </div>
      </div>
    </div>
    <div className="md:flex gap-[20px] md:pl-[100px] mx-6  pt-[40px] grid grid-cols-5">
      <Buttons text="Kesenian" type="borderprimary" size="small" href="" />
      <Buttons text="pameran" type="borderprimary" size="small" href="" />
      <Buttons text="Budaya" type="borderprimary" size="small" href="" />
      <Buttons text="Warisan" type="borderprimary" size="small" href="" />
      <Buttons text="Tradisi" type="borderprimary" size="small" href="" />
      <Buttons text="Pantai" type="borderprimary" size="small" href="" />
    </div>
    <p className="pt-10 text-center font-bold text-3XL">
      {detail.title}
    </p>
    <div className="relative h-[744px] group overflow-hidden md:mx-24 rounded-md  mx-2 mt-6">
    
        <Image
          className=""
          src={detail.url}
          fill
          alt={detail.title}
        />

    </div>
    <div className=" pt-6 pl-2 md:pl-24 flex md:pb-6">
      <Buttons
        text="Kembali"
        href="/galeri"
        roundedfull
        type="primary"
        size="medium"
      />
    </div>
  </Layout>
  );
}

