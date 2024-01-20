import Bread from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import prisma from '@/script/prisma';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';



type DetailProps = {
    id: number;
    url: string;
    desc: string;
    content: string;
    // createdAt: Date;
}

export default function Index() {

  const router = useRouter();
  const [detail, setDetail] = useState<DetailProps | null>({ id: 0, url: '', desc: '',content:'' });

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        const id = parseInt(router.query.index as string);

        try {
          const detail = await axios.get<DetailProps>(`/api/artikel?id=${id}`);
          const result = detail.data;

          if (result) {
            setDetail({
              id: result.id,
              url: result.url, 
              desc: result.desc,
              content: result.content
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
