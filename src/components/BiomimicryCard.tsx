import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BiomimicryCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readMoreLink?: string;
}

const BiomimicryCard = ({
  title,
  description,
  image,
  category,
  readMoreLink = "#",
}: BiomimicryCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-biomimicry-blue-medium text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-biomimicry-blue-dark">{title}</CardTitle>
        <CardDescription className="text-slate-500">{description.slice(0, 80)}...</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-600">{description.slice(80, 180)}...</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="text-biomimicry-blue-medium hover:text-biomimicry-blue-dark hover:bg-biomimicry-blue-light flex items-center gap-1"
          asChild
        >
          <a href={readMoreLink}>
            Подробнее <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BiomimicryCard;
