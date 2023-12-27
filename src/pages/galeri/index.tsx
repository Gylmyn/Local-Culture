import Buttons from "@/components/Buttons";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

type fotosType = {
  id: number;
  url: string;
  title: string;
};

const images = [
  "https://source.unsplash.com/random/?culture",
];


export default function Index() {
  const [showPhotos, setShowPhotos] = useState(true);
  const [Foto, setFoto] = useState<fotosType[]>([]);
  const fetchData = async () => {
    const response = await fetch("/api/foto");
    const dataFotos = await response.json();
    setFoto(dataFotos);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [showMoreText, setShowMoreText] = useState("Tampilkan Lebih Banyak");
  const [Switch, setSwitch] = useState(false);

  const switchToPhotos = () => {
    setSwitch(false);
    setShowPhotos(true);
  };

  const switchToVideos = () => {
    setSwitch(true);
    setShowPhotos(false);
  };


  const initialItemCount = 8; // Jumlah item pertama kali ditampilkan
  const additionalItemCount = 4;
  const [displayedImages, setDisplayedImages] = useState(initialItemCount);
  const handleShowMoreClick = () => {
    if (displayedImages == initialItemCount + additionalItemCount) {
      setDisplayedImages(initialItemCount);
      setShowMoreText("Tampilkan Lebih Banyak");
    } else {
      // Tampilkan lebih banyak item
      setDisplayedImages((prevCount) => prevCount + additionalItemCount);
      setShowMoreText("Tampilkan Lebih Sedikit");
      console.log(displayedImages);
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
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

        <div className="flex justify-center gap-[50px] pt-[30px]">
          <button
            autoFocus
            className={` border-primary-800 transition duration-300 ease-in-out 
             ${showPhotos ? "text-primary-800 border-b-4" : ""}
          `}
            onClick={switchToPhotos}
          >
            <p>Foto</p>
          </button>
          <button
            className={` border-primary-800 transition duration-300 ease-in-out 
            ${!showPhotos ? "text-primary-800 border-b-4" : ""}
            `}
            onClick={switchToVideos}
          >
            <p>Video</p>
          </button>
        </div>

        <div ref={contentRef}>
          {!Switch ? (
            <div className="pt-[20px] grid md:grid-cols-4 grid-cols-3 md:mx-[100px] mx-6 gap-[10px]">
              {Foto.slice(0, displayedImages).map((image, index) => (
                <Link key={index} href={`/galeri/${image.id}`}>
                  <div className="relative md:h-[340px] h-44 group overflow-hidden rounded ">
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
          ) : (
            <div className="text-center pt-10">
              <p>Comming Soon</p>
            </div>
          )}
        </div>

        <div className="flex justify-center pt-[37px] pb-[71px]">
          <button
            onClick={handleShowMoreClick}
            className="border-primary-800 border-2 h-[48px] rounded-full px-[14px] "
          >
            <p>{showMoreText}</p>
          </button>
        </div>
      </Layout>
    </div>
  );
}
