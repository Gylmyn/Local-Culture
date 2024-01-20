import BoxDrop from "@/components/BoxDrop";
import Bread from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
const Pin = dynamic(() => import("@/components/Pin"), { ssr: false });

type pinsType = {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
};

export default function Index() {
  const [pins, setPins] = useState<pinsType[]>([]);

  const fetchData = async () => {
    const response = await fetch("/api/pins");
    const pinData = await response.json();
    setPins(pinData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const zoom = 10;
  return (
    <Layout>
      <div className="flex flex-col md:pl-[100px] pl-6 pt-24 md:pt-[137px]">
        <div>
          <Title title="Map" iconSrc="/Map2.svg" />
        </div>
        <div className="flex gap-[15px]">
          <Bread breadTitle="Beranda" href="/" logo="/Home.svg" />
          <Bread breadTitle="Galeri" href="/galeri" logo="/Galery.svg" />
          <Bread breadTitle="Map" href="/mapbudaya" logo="/Map.svg" />
        </div>
      </div>
      <div className="h-[700px] md:mx-28 mx-4 z-0 relative mt-[27px] mb-[200px]">
        <Map center={[-8.583069, 116.320251]} zoom={zoom}>
          {pins.map((pin) => (
            <Pin
              id={pin.id}
              key={pin.id}
              position={[pin.latitude, pin.longitude]}
              title={pin.title}
            />
          ))}
        </Map>
        {/* <div className="absolute -bottom-44 right-[100px] left-[100px] z-50 ">
          <BoxDrop />
        </div> */}
      </div>
    </Layout>
  );
}
