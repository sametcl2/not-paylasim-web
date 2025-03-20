import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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
    <Card className="bg-gray-100 rounded-md shadow-md flex-none w-64 pt-0">
      <CardHeader className="p-0">
        <img src={image} className="w-full" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm ">{`${pageCount} sayfa - ${rate} puan`}</p>
        </div>
        <div className="flex justify-between">
          <div className="bg-sky-300 px-4 py-2 rounded-lg font-bold">
            {category}
          </div>
          <div className="bg-sky-300 px-4 py-2 rounded-lg font-bold">
            {price}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-gray-400">
          <strong>{author}</strong> - {date}
        </p>
      </CardFooter>
    </Card>
  );
};
