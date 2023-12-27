import { Button } from "@/components/Button";
import Buttons from "@/components/Buttons";
import Layout from "@/components/Layout";
import prisma from "@/script/prisma";
import Image from "next/image";

type FotoType = {
  id: number;
  url: string;
  title: string;
};

type DetailFotoProps = {
  photo: FotoType;
};

export default function DetailFoto(prop: DetailFotoProps) {
  const { photo } = prop;
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
        <p className="pt-10 text-center font-bold text-3XL">{photo.title}</p>
      <div className="relative h-[744px] group overflow-hidden md:mx-24 rounded-md  mx-2 mt-6">
        <Image
          className=""
          src={photo.url}
          fill
          alt={photo.title}
        />
      </div>
      <div className=" pt-6 pl-2 md:pl-24 flex md:pb-6">
      <Buttons text="Kembali" href="/galeri" roundedfull type="primary" size="medium" />
      </div>
      
    </Layout>
  );
}

export async function getServerSideProps(context: {
  params: { index: string };
}) {
  const id = parseInt(context.params.index);
  const photo = await prisma.fotos.findUnique({
    where: { id },
  });

  return {
    props: {
      photo,
    },
  };
}
