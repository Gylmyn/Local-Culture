import Image from 'next/image';

type imagesType = {
    images : string[]
}

const ImageGrid = (prop : imagesType) => {
  return (
    <div className="grid-container">
      {prop.images.map((image, index) => (
        <div key={index} className="grid-item">
          <Image
            src={`/${image}`}
            alt={`Image ${index}`}
            width={300}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
