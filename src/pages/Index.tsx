import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { icon: 'Sprout', title: 'Посадка растений', description: 'Профессиональная посадка декоративных и плодовых растений' },
    { icon: 'Droplets', title: 'Системы полива', description: 'Автополив и капельный полив для вашего участка' },
    { icon: 'Trees', title: 'Озеленение', description: 'Комплексное озеленение территории любой сложности' },
    { icon: 'Scissors', title: 'Уход за растениями', description: 'Регулярный уход, обрезка, подкормка растений' },
    { icon: 'Footprints', title: 'Дорожки', description: 'Создание красивых и функциональных садовых дорожек' },
    { icon: 'Lightbulb', title: 'Освещение участка', description: 'Дизайн и установка ландшафтного освещения' },
    { icon: 'Waves', title: 'Канализация', description: 'Проектирование и монтаж систем водоотведения' },
    { icon: 'Truck', title: 'Доставка', description: 'Доставка растений и материалов прямо к вам' },
    { icon: 'Leaf', title: 'Посев газона', description: 'Создание идеального газонного покрытия' },
    { icon: 'Shovel', title: 'Земляные работы', description: 'Раскопка траншей и подготовка участка' }
  ];

  const catalog = [
    { name: 'Декоративные кустарники', price: 'от 1 500 ₽', description: 'Широкий выбор кустарников для вашего сада' },
    { name: 'Хвойные растения', price: 'от 2 500 ₽', description: 'Ели, сосны, туи различных сортов' },
    { name: 'Плодовые деревья', price: 'от 3 000 ₽', description: 'Яблони, груши, сливы и другие' },
    { name: 'Многолетники', price: 'от 300 ₽', description: 'Цветущие многолетние растения' },
    { name: 'Газонная трава', price: 'от 500 ₽/м²', description: 'Качественные газонные смеси' },
    { name: 'Розы', price: 'от 800 ₽', description: 'Элитные сорта роз для вашего сада' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" className="text-primary" size={32} />
            <span className="font-heading text-2xl font-bold text-primary">GREENSTYLE69</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {['Главная', 'Каталог', 'Услуги', 'О нас', 'Контакты', 'Блог'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 animate-fade-in">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-12 text-center">
            <div className="relative z-10">
              <h1 className="mb-4 font-heading text-5xl font-bold text-primary md:text-6xl">
                GREENSTYLE69
              </h1>
              <p className="mb-8 text-xl text-foreground md:text-2xl">
                Преобразим ваш участок в райский уголок! 🌿
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Sprout" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  8 909 265 33 34
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-heading text-4xl font-bold text-primary">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Icon name="Trees" size={80} className="text-primary/30" />
                </div>
                <CardContent className="p-4">
                  <p className="text-center text-muted-foreground">Проект благоустройства #{i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-heading text-4xl font-bold text-primary">
            Каталог
          </h2>
          <Tabs defaultValue="plants" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="plants">Растения</TabsTrigger>
              <TabsTrigger value="materials">Материалы</TabsTrigger>
            </TabsList>
            <TabsContent value="plants">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {catalog.map((item) => (
                  <Card key={item.name} className="transition-all hover:shadow-lg animate-scale-in">
                    <CardHeader>
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon name="Leaf" className="text-primary" size={32} />
                      </div>
                      <CardTitle className="font-heading">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                      <Button className="mt-4 w-full">Заказать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="materials">
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Каталог материалов в разработке</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-heading text-4xl font-bold text-primary">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                    <Icon name={service.icon} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-3xl">О нас</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <Icon name="Users" className="text-primary" size={48} />
              </div>
              <p className="text-lg leading-relaxed">
                Мы — команда, влюбленная в природу и мастерство ландшафтного дизайна. 
                GREENSTYLE69 создает гармонию между вашим домом и окружающим миром, 
                превращая обычные участки в цветущие оазисы. От ухоженного газона до 
                живописных композиций – мы воплощаем ваши мечты об идеальном саде в реальность.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-3xl">Контакты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Icon name="Phone" size={48} />
                <a href="tel:89092653334" className="text-3xl font-bold hover:underline">
                  8 909 265 33 34
                </a>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
                <Button variant="secondary" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-center font-heading text-4xl font-bold text-primary">
            Доставка
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Icon name="Truck" className="text-accent" size={32} />
                </div>
                <CardTitle className="font-heading">Доставка растений</CardTitle>
                <CardDescription>
                  Бережная доставка растений с сохранением корневой системы
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Icon name="Package" className="text-accent" size={32} />
                </div>
                <CardTitle className="font-heading">Доставка материалов</CardTitle>
                <CardDescription>
                  Доставка грунта, мульчи, декоративного камня и других материалов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Icon name="BookOpen" className="text-primary" size={32} />
              </div>
              <CardTitle className="font-heading text-3xl">Блог</CardTitle>
              <CardDescription>
                Полезные статьи и советы по уходу за садом
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4 text-muted-foreground">
                Подробности и статьи доступны по запросу в личных сообщениях
              </p>
              <Button>
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать нам
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-16 border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Icon name="Sprout" className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold text-primary">GREENSTYLE69</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 GREENSTYLE69. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
