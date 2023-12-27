import React, { useEffect, useState } from "react";
import Image from "next/image";
import Divider from "@/components/Divider";
import ArtikleCard from "@/components/ArtikleCard";
import Layout from "@/components/Layout";
import Buttons from "@/components/Buttons";
import Link from "next/link";

type artikelData = {
  id: number;
  url: string;
  desc: string;
  content: string;
  createdAt: Date;
};

type fotosType = {
  id: number;
  url: string;
  title: string;
};

export default function Home() {
  const [Foto, setFoto] = useState<fotosType[]>([]);
  const fetchData = async () => {
    const response = await fetch("/api/foto");
    const dataFotos = await response.json();
    setFoto(dataFotos);
  };

  const [Artikel, setArtikel] = useState<artikelData[]>([]);
  const fetchDataArtikel = async () => {
    const response = await fetch("/api/artikel");
    const dataArtikels = await response.json();
    setArtikel(dataArtikels);
  };

  useEffect(() => {
    fetchData();
    fetchDataArtikel();
  }, []);

  const newArtikel = Artikel.map((item) => {
    const date = new Date(item.createdAt);
    const formattedDate = new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(date);

    return {
      ...item,
      date: formattedDate,
    };
  });
  return (
    <Layout>
      <div className="hero w-full bg-primary-50 flex justify-between md:flex-row flex-col py-[110px] items-center md:px-[100px] mt-8 md:mt-20">
        <div className="px-20 md:px-0" >
          <p
            className={`md:text-[48px] text-3XL font-bold md:max-w-2xl md:leading-[55px] leading-tight text-[#323539]`}
          >
            Eksplorasi Kekayaan Budaya & Warisan Lokal Yang
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21409A] to-[#E33B32]">
              Menginspirasi
            </span>
          </p>
          <p
            className={`text-neutral-600 md:max-w-xl font-normal md:text-M text-XS pt-[24px]`}
          >
            Selamat Datang di website LocalCulture. Temukan Cerita Menarik,
            Tradisi yang Memukau, dan Seni yang Menginspirasi. Mari bersama
            menjaga keragaman budaya yang membentuk identitas kita.
          </p>
          <div className="pt-[32px] pb-[16px] flex gap-[16px] items-center">
            <Buttons
              text="Get Started"
              type="primary"
              size="large"
              textCustom="font-semibold"
            />
          
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src="/HeroLogo.svg"
            width={436}
            height={395}
            alt="tamvan"
          ></Image>
        </div>
      </div>
      <div className="pt-[93px]">
        <Divider
          title="Galeri Budaya Terkini"
          desc=" Mengenal tradisi, budaya, kesenian dan segala macam warisan lokal melalui dokumentasi galeri budaya"
        />
      </div>
      <div className="pt-[48px] grid md:grid-cols-4 grid-cols-2 justify-center items-center md:mx-[111px] mx-4 gap-[21px] z-[100]">
        {Foto.slice(0, 8).map((image, index) => (
          <Link key={index} href={`/galeri/${image.id}`}>
            <div className="relative md:h-[219px] h-44  group overflow-hidden rounded ">
              <Image
                className="transform hover:scale-110 transition-all ease-in-out duration-300"
                src={image.url}
                fill
                alt={image.title}
              />
              <div className="absolute hidden group-hover:block bg-neutral-500 bg-opacity-80 text-white p-6 rounded-md bottom-0 left-0 right-0 text-center">
                {image.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-[119px] w-full bg-primary-50 md:gap-[100px] py-[87px] flex justify-center md:flex-row flex-col ">
        <div className="h-[270px] md:w-[656px] mx-6  relative ">
          <Image
            src="/Map.png"
            alt="tamvan"
            fill
            className="rounded-[5px]"
          ></Image>
        </div>
        <div className="mx-8">
          <p className={`md:text-4XL text-3XL font-semibold text-[#323539]`}>Map Budaya</p>
          <p className={`md:text-M text-XS text-neutral-600 max-w-xl`}>
            Cari tahu informasi menarik serta menginspirasi tentang warisan dan
            budaya lokal di setiap daerah pulau Lombok melalui fitur Map Budaya!
          </p>
          <div className="md:pt-[32px] pt-4 flex items-center ">
            <Buttons
              text="Explorasi"
              href="/mapbudaya"
              type="primary"
              size="large"
              icon="/Map2.svg"
            />
          </div>
        </div>
      </div>
      <div className="pt-[93px]">
        <Divider
          title="Artikel Terkini"
          desc="Temukan artikel terbaru untuk mengetahui informasi terkini tentang kebudayaan dan warisan llokal"
        />
      </div>
      <div className="pt-[30px] mb-[115px] grid md:grid-cols-3 grid-cols-2 gap-4  md:gap-[32px] md:px-[112px] mx-6">
        {newArtikel.map((item, index) => (
          <div key={index}>
            <ArtikleCard
              img={item.url}
              date={item.date}
              desc={item.desc}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
