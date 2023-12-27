import ArtikleCard from '@/components/ArtikleCard';
import Bread from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import prisma from '@/script/prisma';
import Image from 'next/image';



type DetailProps = {
  detail: {
    id: number;
    url: string;
    desc: string;
    content: string;
    // createdAt: Date;
  };
};

export async function getServerSideProps(context: { params: { index: string } }) {
  const id = parseInt(context.params.index);
  const artikel = await prisma.artikel.findUnique({
    where: { id },
  });

  
  const details = {
    id: artikel?.id || 0, 
    url: artikel?.url || 'No Title',
    desc: artikel?.desc || 'null',
    content: artikel?.content || 'null',
    // cretedAt: artikel?.createdAt || 'null',
  };

  return {
    props: {
      detail: details,
    },
  };
}

export default function DetailFoto(prop: DetailProps) {
  const { detail } = prop;

  if (!detail) {
    // Menangani kasus ketika detail adalah null
    return <div>detail not found</div>;
  }

  return (
    <Layout>

    <div>
    <div className="flex flex-col md:pl-[100px] pl-6 pt-24 md:pt-[137px]">
        <div>
          <Title title={detail.desc} iconSrc="/Map2.svg" />
        </div>
        <div className="md:flex grid grid-cols-3 gap-[15px] mx-2">
          <Bread breadTitle="Beranda" href="/" logo="/Home.svg" />
          <Bread breadTitle="Galeri" href="/galeri" logo="/Galery.svg" />
          <Bread breadTitle="Map" href="/mapbudaya" logo="/Map.svg" />
          <Bread breadTitle="Artikel" href="/artikel" logo="/Map.svg" />
        </div>
      </div>
      <div className='md:mx-[100px] mx-6 pt-[23px] md:pb-20 pb-10'>
      <div className='relative h-[500px] md:h-[760px] w-auto object-fill'>
        <Image alt='error' src={detail.url} fill/>
      </div>
      <h1 className='font-bold text-2XL pt-4'>{detail.desc}</h1>
      <h1 className='font-normal text-M pt-[18px]'>{detail.content}</h1>
      </div>
      
    </div>
    </Layout>
  );
}
