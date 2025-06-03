import { Card } from "flowbite-react";
import Button from "@/components/elements/button";

type DetailedCardProps = {
  id: number;
  image: string;
  category: string;
  price: string;
  title: string;
  pageCount: number;
  rate: number;
  author: string;
  date: string;
};

export const DetailedCard: React.FC<DetailedCardProps> = ({
  id,
  image,
  category,
  price,
  title,
  pageCount,
  rate,
  author,
  date,
}) => {
  return (
    <Card className="bg-heading border-white rounded-lg shadow-md w-96 pt-0">
      <div className="flex flex-col mb-4">
        <img src={image} className="w-full rounded-tl-lg rounded-tr-lg" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white">{category}</p>
        <p className="text-sm text-white">{`${pageCount} sayfa • ${rate} puan`}</p>
        <Button>İncele</Button>
      </div>
    </Card>
  );
};
