import Navbar from "@/components/Navbar";
import BiomimicryCard from "@/components/BiomimicryCard";
import { Button } from "@/components/ui/button";
import { Leaf, Bird, Building, Waves, ChevronRight, Droplet, PawPrint, Wind } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-biomimicry-green-light/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-biomimicry-green-light/30 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-biomimicry-green-dark mb-4">
              Природа — лучший инженер
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Биомимикрия — это подход к инновациям, который ищет устойчивые решения человеческих проблем, подражая проверенным временем моделям и стратегиям природы.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-biomimicry-green-medium hover:bg-biomimicry-green-dark text-white">
                Узнать больше
              </Button>
              <Button variant="outline" className="border-biomimicry-green-medium text-biomimicry-green-medium hover:bg-biomimicry-green-light hover:text-biomimicry-green-dark">
                Примеры биомимикрии
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-biomimicry-green-light rounded-full opacity-30 animate-float blur-3xl"></div>
        <div className="absolute -left-20 top-3/4 w-80 h-80 bg-biomimicry-green-medium/20 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
      </section>
      
      {/* What is Biomimicry */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-biomimicry-green-dark mb-4">Что такое биомимикрия?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Биомимикрия — это наука и искусство подражания природным стратегиям и моделям для решения человеческих проблем. Природа за 3,8 миллиарда лет эволюции разработала эффективные и устойчивые решения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-biomimicry-green-light/20 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-medium text-biomimicry-green-dark mb-2">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="py-10 bg-biomimicry-green-medium/10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-biomimicry-green-dark mb-6 text-center">Удивительные примеры биомимикрии</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt={image.alt} 
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-2 bg-white text-xs text-biomimicry-green-dark font-medium">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg" alt="Природные структуры" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-biomimicry-green-dark mb-4">Вдохновение от природы</h2>
            <p className="text-lg text-biomimicry-green-dark/80">
              Природа создала идеальный баланс между эффективностью, устойчивостью и красотой. Мы учимся у неё создавать технологии будущего.
            </p>
          </div>
        </div>
      </section>
      
      {/* Examples */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-biomimicry-green-dark">Примеры из природы</h2>
            <Button variant="ghost" className="text-biomimicry-green-medium hover:text-biomimicry-green-dark flex items-center gap-1">
              Все примеры <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example) => (
              <BiomimicryCard
                key={example.title}
                title={example.title}
                description={example.description}
                image="/placeholder.svg"
                category={example.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Image Showcase */}
      <section className="py-12 bg-biomimicry-green-light/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-biomimicry-green-dark mb-8 text-center">Галерея биомимикрии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalImages.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/placeholder.svg" alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-biomimicry-green-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nature Inspiration Quote */}
      <section className="py-20 bg-biomimicry-green-dark text-white">
        <div className="container mx-auto text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl italic font-light mb-6">
              "Нам нужно смотреть на природу как на модель, меру и наставника."
            </p>
            <footer className="text-biomimicry-green-light">— Джанин Бенюс, автор книги "Биомимикрия"</footer>
          </blockquote>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-biomimicry-green-dark text-white py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-biomimicry-green-medium" />
                <span className="font-bold text-xl">Биомимикрия</span>
              </div>
              <p className="text-biomimicry-green-light text-sm">
                Вдохновляйтесь природой для создания устойчивых решений будущего.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-biomimicry-green-light">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-biomimicry-green-medium transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">Применения</a></li>
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">О проекте</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-biomimicry-green-light">Ресурсы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">Книги</a></li>
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">Исследования</a></li>
                <li><a href="#" className="hover:text-biomimicry-green-medium transition-colors">Видео</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-biomimicry-green-medium/30 mt-8 pt-8 text-center text-sm text-biomimicry-green-light/70">
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
    icon: <Leaf className="h-6 w-6 text-biomimicry-green-medium" />,
  },
  {
    title: "Экологическая адаптация",
    description: "Создание дизайнов, которые адаптируются к изменяющимся условиям, как это делают живые организмы.",
    icon: <Bird className="h-6 w-6 text-biomimicry-green-medium" />,
  },
  {
    title: "Устойчивое развитие",
    description: "Разработка систем, которые экономят ресурсы и энергию, минимизируя отходы и загрязнение.",
    icon: <Building className="h-6 w-6 text-biomimicry-green-medium" />,
  },
  {
    title: "Эффективность ресурсов",
    description: "Оптимизация использования материалов и энергии путем наблюдения за эффективностью природных систем.",
    icon: <Waves className="h-6 w-6 text-biomimicry-green-medium" />,
  },
];

const featuredImages = [
  {
    src: "/placeholder.svg", 
    alt: "Структура листа лотоса"
  },
  {
    src: "/placeholder.svg", 
    alt: "Крыло бабочки"
  },
  {
    src: "/placeholder.svg", 
    alt: "Термитник"
  },
  {
    src: "/placeholder.svg", 
    alt: "Скоростной поезд"
  },
  {
    src: "/placeholder.svg", 
    alt: "Геккон"
  },
  {
    src: "/placeholder.svg", 
    alt: "Акулья кожа"
  }
];

const additionalImages = [
  {
    title: "Паутина паука",
    description: "Паутина в 5 раз прочнее стали и вдохновляет создание сверхпрочных материалов.",
    src: "/placeholder.svg",
  },
  {
    title: "Крылья стрекозы",
    description: "Аэродинамика крыльев стрекозы помогает создавать более эффективные ветряные турбины.",
    src: "/placeholder.svg",
  },
  {
    title: "Морские раковины",
    description: "Структура раковин помогает создавать прочные и легкие строительные материалы.",
    src: "/placeholder.svg",
  },
  {
    title: "Цветок лотоса",
    description: "Самоочищающиеся свойства листьев лотоса применяются в современных материалах.",
    src: "/placeholder.svg",
  }
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
  {
    title: "Кожа акулы и гидродинамика",
    description: "Микроскопическая структура кожи акулы состоит из маленьких зубчатых чешуек, которые снижают сопротивление воды и предотвращают прикрепление бактерий. Эта особенность вдохновила создание специальных тканей для плавательных костюмов, сокращающих сопротивление воды, а также антибактериальных поверхностей для медицинских учреждений.",
    image: "/placeholder.svg",
    category: "Материалы",
  },
  {
    title: "Лапы геккона и адгезивы",
    description: "Геккон может подниматься по гладким вертикальным поверхностям и даже ходить по потолку благодаря миллионам микроскопических щетинок на лапах. Эти щетинки используют межмолекулярные силы Ван-дер-Ваальса для прикрепления к поверхностям. Ученые создали аналогичные адгезивы, которые не теряют свойства после многократного использования и не оставляют следов.",
    image: "/placeholder.svg",
    category: "Технологии",
  },
  {
    title: "Глаз мотылька и антибликовые покрытия",
    description: "Глаза ночных мотыльков покрыты наноструктурами, которые минимизируют отражение света, позволяя мотылькам видеть в темноте и оставаться незаметными для хищников. Эти наноструктуры вдохновили создание высокоэффективных антибликовых покрытий для солнечных панелей, дисплеев и объективов камер, что значительно улучшает их характеристики.",
    image: "/placeholder.svg",
    category: "Оптика",
  },
];

export default Index;
