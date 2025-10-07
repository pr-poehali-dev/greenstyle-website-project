import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    { icon: 'Sprout', title: 'Посадка растений', description: 'Профессиональная посадка декоративных и плодовых растений с учетом типа почвы' },
    { icon: 'Droplets', title: 'Системы полива', description: 'Автополив, капельный полив, дождевание для экономии воды' },
    { icon: 'Trees', title: 'Озеленение участка', description: 'Комплексное озеленение, создание альпийских горок, живых изгородей' },
    { icon: 'Scissors', title: 'Уход за растениями', description: 'Обрезка, подкормка, защита от вредителей, сезонный уход' },
    { icon: 'Footprints', title: 'Садовые дорожки', description: 'Тротуарная плитка, натуральный камень, гравийные дорожки' },
    { icon: 'Lightbulb', title: 'Освещение участка', description: 'Садовое освещение, подсветка растений, декоративное освещение' },
    { icon: 'Waves', title: 'Дренаж и канализация', description: 'Ливневая канализация, дренажные системы, отвод воды' },
    { icon: 'Truck', title: 'Доставка', description: 'Доставка растений, грунта и материалов по Твери и области' },
    { icon: 'Leaf', title: 'Газоны под ключ', description: 'Посев газона, рулонный газон, автоматический полив газона' },
    { icon: 'Shovel', title: 'Земляные работы', description: 'Выравнивание участка, раскопка траншей, планировка территории' },
    { icon: 'Flower2', title: 'Цветники и клумбы', description: 'Проектирование и создание цветников, миксбордеров, рабаток' },
    { icon: 'TreePine', title: 'Посадка крупномеров', description: 'Посадка взрослых деревьев с гарантией приживаемости' },
    { icon: 'Fence', title: 'Живые изгороди', description: 'Создание зеленых ограждений из кустарников и вьющихся растений' },
    { icon: 'Mountain', title: 'Альпийские горки', description: 'Рокарии, каменистые сады с горными растениями' },
    { icon: 'Droplet', title: 'Пруды и водоемы', description: 'Декоративные пруды, фонтаны, водопады на участке' }
  ];

  const plantCategories = {
    'Декоративные кустарники': {
      icon: 'Shrub',
      price: 'от 1 500 ₽',
      description: 'Широкий выбор кустарников для вашего сада',
      varieties: [
        { name: 'Спирея японская', price: '1 500 ₽', height: '0.6-0.8 м', bloom: 'Июнь-август' },
        { name: 'Гортензия древовидная', price: '2 200 ₽', height: '1-1.5 м', bloom: 'Июль-сентябрь' },
        { name: 'Барбарис Тунберга', price: '1 800 ₽', height: '0.8-1.2 м', bloom: 'Май' },
        { name: 'Пузыреплодник', price: '1 600 ₽', height: '1.5-2 м', bloom: 'Июнь' },
        { name: 'Дерен белый', price: '1 700 ₽', height: '1.5-2.5 м', bloom: 'Май-июнь' }
      ]
    },
    'Хвойные растения': {
      icon: 'TreePine',
      price: 'от 2 500 ₽',
      description: 'Ели, сосны, туи различных сортов',
      varieties: [
        { name: 'Туя западная Смарагд', price: '3 500 ₽', height: '1-1.5 м', feature: 'Зимостойкая' },
        { name: 'Можжевельник казацкий', price: '2 500 ₽', height: '0.5-0.8 м', feature: 'Почвопокровный' },
        { name: 'Ель голубая колючая', price: '5 000 ₽', height: '1.5-2 м', feature: 'Голубая хвоя' },
        { name: 'Сосна горная', price: '3 200 ₽', height: '0.8-1.2 м', feature: 'Компактная' },
        { name: 'Кипарисовик Лавсона', price: '4 000 ₽', height: '1-1.5 м', feature: 'Ароматная хвоя' }
      ]
    },
    'Плодовые деревья': {
      icon: 'Apple',
      price: 'от 3 000 ₽',
      description: 'Яблони, груши, сливы и другие',
      varieties: [
        { name: 'Яблоня Антоновка', price: '3 000 ₽', age: '2-3 года', yield: 'Август-сентябрь' },
        { name: 'Груша Лада', price: '3 500 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Слива Медовая', price: '3 200 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Вишня Владимирская', price: '2 800 ₽', age: '2-3 года', yield: 'Июль' },
        { name: 'Черешня Ипуть', price: '4 000 ₽', age: '2-3 года', yield: 'Июнь-июль' }
      ]
    },
    'Многолетники': {
      icon: 'Flower',
      price: 'от 300 ₽',
      description: 'Цветущие многолетние растения',
      varieties: [
        { name: 'Хоста гибридная', price: '400 ₽', height: '0.3-0.6 м', bloom: 'Июль-август' },
        { name: 'Лилейник гибридный', price: '500 ₽', height: '0.6-0.8 м', bloom: 'Июнь-июль' },
        { name: 'Пион травянистый', price: '800 ₽', height: '0.6-0.9 м', bloom: 'Май-июнь' },
        { name: 'Ирис сибирский', price: '350 ₽', height: '0.6-1 м', bloom: 'Май-июнь' },
        { name: 'Астильба', price: '450 ₽', height: '0.5-1 м', bloom: 'Июль-август' }
      ]
    },
    'Газонная трава': {
      icon: 'Leaf',
      price: 'от 500 ₽/м²',
      description: 'Качественные газонные смеси',
      varieties: [
        { name: 'Универсальный газон', price: '500 ₽/м²', type: 'Посевной', feature: 'Износостойкий' },
        { name: 'Партерный газон', price: '800 ₽/м²', type: 'Посевной', feature: 'Элитный' },
        { name: 'Спортивный газон', price: '600 ₽/м²', type: 'Посевной', feature: 'Супер прочный' },
        { name: 'Теневой газон', price: '550 ₽/м²', type: 'Посевной', feature: 'Для тени' },
        { name: 'Рулонный газон', price: '350 ₽/м²', type: 'Рулонный', feature: 'Готовый результат' }
      ]
    },
    'Розы': {
      icon: 'Flower2',
      price: 'от 800 ₽',
      description: 'Элитные сорта роз для вашего сада',
      varieties: [
        { name: 'Роза чайно-гибридная', price: '900 ₽', height: '0.8-1.2 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза флорибунда', price: '800 ₽', height: '0.6-0.8 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза плетистая', price: '1 200 ₽', height: '2-3 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза парковая', price: '1 000 ₽', height: '1-1.5 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза почвопокровная', price: '700 ₽', height: '0.3-0.5 м', bloom: 'Июнь-октябрь' }
      ]
    }
  };

  const openPlantDialog = (categoryName: string) => {
    const category = plantCategories[categoryName as keyof typeof plantCategories];
    setSelectedPlant({ name: categoryName, ...category });
    setIsDialogOpen(true);
  };

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
                {Object.entries(plantCategories).map(([name, data]) => (
                  <Card 
                    key={name} 
                    className="transition-all hover:shadow-lg animate-scale-in cursor-pointer"
                    onClick={() => openPlantDialog(name)}
                  >
                    <CardHeader>
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon name={data.icon} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="font-heading">{name}</CardTitle>
                      <CardDescription>{data.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary mb-2">{data.price}</p>
                      <Badge variant="secondary">{data.varieties.length} сортов</Badge>
                      <Button className="mt-4 w-full">
                        Выбрать сорт
                        <Icon name="ChevronRight" size={16} className="ml-2" />
                      </Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedPlant && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon name={selectedPlant.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <DialogTitle className="font-heading text-2xl">{selectedPlant.name}</DialogTitle>
                    <DialogDescription>{selectedPlant.description}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {selectedPlant.varieties.map((variety: any, index: number) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{variety.name}</CardTitle>
                      <p className="text-2xl font-bold text-primary">{variety.price}</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {variety.height && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Ruler" size={16} className="text-muted-foreground" />
                          <span>Высота: {variety.height}</span>
                        </div>
                      )}
                      {variety.bloom && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} className="text-muted-foreground" />
                          <span>Цветение: {variety.bloom}</span>
                        </div>
                      )}
                      {variety.feature && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Star" size={16} className="text-muted-foreground" />
                          <span>{variety.feature}</span>
                        </div>
                      )}
                      {variety.age && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <span>Возраст: {variety.age}</span>
                        </div>
                      )}
                      {variety.yield && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Apple" size={16} className="text-muted-foreground" />
                          <span>Урожай: {variety.yield}</span>
                        </div>
                      )}
                      {variety.type && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Package" size={16} className="text-muted-foreground" />
                          <span>Тип: {variety.type}</span>
                        </div>
                      )}
                      <Button className="w-full mt-3">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
