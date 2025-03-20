import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaArrowRight } from "react-icons/fa";

type SectionHeaderProps = {
  title: string;
  seeAllText: string;
  onSeeAllClick: () => void;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  seeAllText,
}) => {
  return (
    <>
      <div className="flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="link" className="p-6">
          {seeAllText}
          <FaArrowRight className="inline-block" />
        </Button>
      </div>
      <Separator />
    </>
  );
};
