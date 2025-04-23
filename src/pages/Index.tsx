import Navbar from "@/components/Navbar";
import BiomimicryCard from "@/components/BiomimicryCard";
import { Button } from "@/components/ui/button";
import { Leaf, Bird, Building, Waves, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-biomimicry-blue-light/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-biomimicry-blue-light/30 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-biomimicry-blue-dark mb-4">
              Природа — лучший инженер
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Биомимикрия — это подход к инновациям, который ищет устойчивые решения человеческих проблем, подражая проверенным временем моделям и стратегиям природы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-biomimicry-blue-medium hover:bg-biomimicry-blue-dark text-white">
                Узнать больше
              </Button>
              <Button variant="outline" className="border-biomimicry-blue-medium text-biomimicry-blue-medium hover:bg-biomimicry-blue-light hover:text-biomimicry-blue-dark">
                Примеры биомимикрии
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-biomimicry-blue-light rounded-full opacity-30 animate-float blur-3xl"></div>
        <div className="absolute -left-20 top-3/4 w-80 h-80 bg-biomimicry-blue-medium/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
      </section>
      
      {/* What is Biomimicry */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-biomimicry-blue-dark mb-4">Что такое биомимикрия?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Биомимикрия — это наука и искусство подражания природным стратегиям и моделям для решения человеческих проблем. Природа за 3,8 миллиарда лет эволюции разработала эффективные и устойчивые решения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-biomimicry-blue-light/20 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-medium text-biomimicry-blue-dark mb-2">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Examples */}
      <section className="py-16 px-4 bg-biomimicry-blue-light/10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-biomimicry-blue-dark">Примеры из природы</h2>
            <Button variant="ghost" className="text-biomimicry-blue-medium hover:text-biomimicry-blue-dark flex items-center gap-1">
              Все примеры <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example) => (
              <BiomimicryCard
                key={example.title}
                title={example.title}
                description={example.description}
                image={example.image}
                category={example.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-biomimicry-blue-dark text-white py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-biomimicry-blue-medium" />
                <span className="font-bold text-xl">Биомимикрия</span>
              </div>
              <p className="text-biomimicry-blue-light text-sm">
                Вдохновляйтесь природой для создания устойчивых решений будущего.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-biomimicry-blue-light">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-biomimicry-blue-medium transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">Применения</a></li>
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">О проекте</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-biomimicry-blue-light">Ресурсы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">Книги</a></li>
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">Исследования</a></li>
                <li><a href="#" className="hover:text-biomimicry-blue-medium transition-colors">Видео</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-biomimicry-blue-medium/30 mt-8 pt-8 text-center text-sm text-biomimicry-blue-light/70">
            © 2023 Биомимикрия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

const principles = [
  {
    title: "Подражание природе",
    description: "Изучение природных моделей и систем для применения их принципов в решении человеческих проблем.",
    icon: <Leaf className="h-6 w-6 text-biomimicry-blue-medium" />,
  },
  {
    title: "Экологическая адаптация",
    description: "Создание дизайнов, которые адаптируются к изменяющимся условиям, как это делают живые организмы.",
    icon: <Bird className="h-6 w-6 text-biomimicry-blue-medium" />,
  },
  {
    title: "Устойчивое развитие",
    description: "Разработка систем, которые экономят ресурсы и энергию, минимизируя отходы и загрязнение.",
    icon: <Building className="h-6 w-6 text-biomimicry-blue-medium" />,
  },
  {
    title: "Эффективность ресурсов",
    description: "Оптимизация использования материалов и энергии путем наблюдения за эффективностью природных систем.",
    icon: <Waves className="h-6 w-6 text-biomimicry-blue-medium" />,
  },
];

const examples = [
  {
    title: "Лист лотоса и самоочищающиеся поверхности",
    description: "Лист лотоса обладает удивительной способностью отталкивать воду и самоочищаться. Микроскопические бугорки на поверхности листа создают высокий контактный угол для капель воды, которые скатываются, собирая частицы грязи. Этот принцип, известный как «эффект лотоса», нашел применение в разработке самоочищающихся красок, тканей, стекол и других поверхностей.",
    image: "/placeholder.svg",
    category: "Материалы",
  },
  {
    title: "Морской гребешок и эффективные турбины",
    description: "Форма раковины морского гребешка вдохновила инженеров на создание более эффективных промышленных миксеров и турбин. Рифленая структура раковины позволяет морскому гребешку эффективно перемещаться в воде с минимальным сопротивлением. Используя эту модель, инженеры разработали миксеры, которые потребляют на 40% меньше энергии при перемешивании жидкостей.",
    image: "/placeholder.svg",
    category: "Энергетика",
  },
  {
    title: "Термитники и архитектура",
    description: "Термитники поддерживают стабильную внутреннюю температуру и вентиляцию, несмотря на экстремальные колебания температуры снаружи. Архитекторы используют эти принципы для проектирования зданий с пассивной вентиляцией и системами кондиционирования, которые значительно снижают потребление энергии. Здание Eastgate Centre в Зимбабве — яркий пример такой биомиметической архитектуры.",
    image: "/placeholder.svg",
    category: "Архитектура",
  },
];

export default Index;
