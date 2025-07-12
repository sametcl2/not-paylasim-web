import Card from "@/components/elements/card";
import Button from "@/components/elements/button";

type SmallCardProps = {
  id: number;
  name: string;
  itemCount: number;
  color: string;
  image: string;
};

export const SmallCard: React.FC<SmallCardProps> = ({
  id,
  name,
  itemCount,
  color,
  image,
}) => {
  return (
    <Card key={id} className="pt-0 border-0 shadow-xl">
      <img src={image} className="w-full rounded-tl-lg rounded-tr-lg" />
      <p>GELLOP</p>
      <Button>Not Ara</Button>
    </Card>
  );
};
