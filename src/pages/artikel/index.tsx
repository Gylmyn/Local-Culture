
import { CiSearch } from 'react-icons/ci';
import { Button } from '@/components/Button'
import Buttons from '@/components/Buttons'
import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout';
import ArtikleCard from '@/components/ArtikleCard';


type artikelData = {
  id : number
  url : string
  desc : string
  content: string 
  createdAt : Date
}

export default function Index() {

  const [Artikel, setArtikel] = useState<artikelData[]>([]);
  const fetchData = async () => {
    const response = await fetch("/api/artikel");
    const dataArtikels = await response.json();
    setArtikel(dataArtikels);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newArtikel = Artikel.map((item) => {
    const date = new Date(item.createdAt);
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(date);

    return {
      ...item,
      date: formattedDate,
    };
  });

  
  return (
    
    <div>
      <Layout >
        
        
        <div className='pt-[130px] text-center text-2XL font-bold'>
          <p>Artikel Terbaru</p>
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


    </div>
  )
}
