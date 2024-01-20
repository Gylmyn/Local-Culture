import { useRouter } from 'next/router';
import Bread from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';


type DetailProps = {
  id: number;
  title: string;
  desc: string;
};

export default function DetailPin() {
  const router = useRouter();
  const [detail, setDetail] = useState<DetailProps | null>({ id: 0, title: '', desc: '' });

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        const id = parseInt(router.query.index as string);

        try {
          const detail = await axios.get<DetailProps>(`/api/pins?id=${id}`);
          const result = detail.data;

          if (result) {
            setDetail({
              id: result.id,
              title: result.title,
              desc: result.desc 
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
            <Title title={detail.title} iconSrc="/Map2.svg" />
          </div>
          <div className="flex gap-[15px]">
            <Bread breadTitle="Beranda" href="/" logo="/Home.svg" />
            <Bread breadTitle="Galeri" href="/galeri" logo="/Galery.svg" />
            <Bread breadTitle="Map Budaya" href="/mapbudaya" logo="/Map.svg" />
          </div>
        </div>
        <div className="md:mx-[100px] md:pb-40 pb-10 pl-6 md:pl-0 md:max-w-3xl">
          <h1 className="font-semibold text-XL pt-[27px]"> {detail.title}</h1>
          <p className="text-M">{detail.desc}</p>
        </div>
      </div>
    </Layout>
  );
}
