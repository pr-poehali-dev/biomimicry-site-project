import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 text-biomimicry-blue-dark font-bold text-xl">
          <Leaf className="h-6 w-6 text-biomimicry-blue-medium" />
          <span>Биомимикрия</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Примеры</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {examples.map((example) => (
                    <div
                      key={example.title}
                      className="p-4 hover:bg-biomimicry-blue-light rounded-md transition-colors"
                    >
                      <div className="font-medium text-biomimicry-blue-dark mb-1">{example.title}</div>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/applications">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Применения
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  О проекте
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const examples = [
  {
    title: "Отталкивающая воду поверхность",
    description: "Поверхность листьев лотоса, которая отталкивает воду и самоочищается",
  },
  {
    title: "Липучка Velcro",
    description: "Создана на основе наблюдений за семенами репейника",
  },
  {
    title: "Аэродинамика скоростных поездов",
    description: "Клюв зимородка вдохновил дизайн японских поездов-пуль",
  },
  {
    title: "Энергоэффективные здания",
    description: "Термитники вдохновили архитекторов на создание зданий с пассивным охлаждением",
  },
];

export default Navbar;
