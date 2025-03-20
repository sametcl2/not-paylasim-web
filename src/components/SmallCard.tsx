import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SmallCardProps = {
  id: number;
  name: string;
  itemCount: number;
  color: string;
};

export const SmallCard: React.FC<SmallCardProps> = ({
  id,
  name,
  itemCount,
  color,
}) => {
  return (
    <Card key={id} className={`${color}`}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{itemCount} not</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" variant="default">
          Not Ara
        </Button>
      </CardFooter>
    </Card>
  );
};
