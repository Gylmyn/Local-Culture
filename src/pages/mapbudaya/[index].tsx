import ArtikleCard from '@/components/ArtikleCard';
import Bread from '@/components/Breadcrumb';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import prisma from '@/script/prisma';



type DetailProps = {
  detail: {
    id: number;
    title: string;
    desc:string;
  };
};

export async function getServerSideProps(context: { params: { index: string } }) {
  const id = parseInt(context.params.index);
  const photo = await prisma.pin.findUnique({
    where: { id },
  });

  
  const details = {
    id: photo?.id || 0, 
    title: photo?.title || 'No Title',
    desc: photo?.desc || 'null'
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
          <Title title={detail.title} iconSrc="/Map2.svg" />
        </div>
        <div className="flex gap-[15px]">
          <Bread breadTitle="Beranda" href="/" logo="/Home.svg" />
          <Bread breadTitle="Galeri" href="/galeri" logo="/Galery.svg" />
          <Bread breadTitle="Map Budaya" href="/mapbudaya" logo="/Map.svg" />
        </div>
      </div>
      <div className='md:mx-[100px] md:pb-40 pb-10 pl-6 md:pl-0 md:max-w-3xl'>
      <h1 className='font-semibold text-XL pt-[27px]'> {detail.title}</h1>
      <p className='text-M'>{detail.desc}</p>
      </div>
     
    </div>
    </Layout>
  );
}
