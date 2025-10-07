import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlant, setSelectedPlant] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { 
      icon: 'Sprout', 
      title: 'Посадка растений', 
      description: 'Профессиональная посадка декоративных и плодовых растений с учетом типа почвы',
      details: 'Мы профессионально высаживаем деревья, кустарники, цветы и другие растения. Учитываем тип почвы, освещенность участка, климатические условия. Гарантируем приживаемость растений.',
      priceList: [
        { name: 'Посадка кустарников', price: 'от 500 ₽/шт' },
        { name: 'Посадка деревьев (до 2м)', price: 'от 1 500 ₽/шт' },
        { name: 'Посадка крупномеров (от 2м)', price: 'от 5 000 ₽/шт' },
        { name: 'Посадка многолетников', price: 'от 150 ₽/шт' },
        { name: 'Посадка роз', price: 'от 400 ₽/шт' }
      ]
    },
    { 
      icon: 'Droplets', 
      title: 'Системы полива', 
      description: 'Автополив, капельный полив, дождевание для экономии воды',
      details: 'Проектируем и устанавливаем системы автоматического полива, капельного орошения, системы дождевания. Экономия воды до 40%. Программируемые контроллеры полива.',
      priceList: [
        { name: 'Автополив (под ключ)', price: 'от 3 000 ₽/сотка' },
        { name: 'Капельный полив', price: 'от 2 000 ₽/сотка' },
        { name: 'Система дождевания', price: 'от 2 500 ₽/сотка' },
        { name: 'Контроллер полива', price: 'от 15 000 ₽' },
        { name: 'Монтаж системы', price: 'от 10 000 ₽' }
      ]
    },
    { 
      icon: 'Trees', 
      title: 'Озеленение участка', 
      description: 'Комплексное озеленение, создание альпийских горок, живых изгородей',
      details: 'Полное озеленение территории под ключ: подбор растений, планировка, посадка, мульчирование. Создание композиций, миксбордеров, альпинариев.',
      priceList: [
        { name: 'Озеленение участка (под ключ)', price: 'от 5 000 ₽/сотка' },
        { name: 'Создание миксбордера', price: 'от 3 000 ₽/м²' },
        { name: 'Альпийская горка', price: 'от 15 000 ₽' },
        { name: 'Живая изгородь', price: 'от 2 000 ₽/м.п.' },
        { name: 'Вертикальное озеленение', price: 'от 2 500 ₽/м²' }
      ]
    },
    { 
      icon: 'Scissors', 
      title: 'Уход за растениями', 
      description: 'Обрезка, подкормка, защита от вредителей, сезонный уход',
      details: 'Комплексный уход за садом: санитарная и формирующая обрезка, подкормка, обработка от вредителей и болезней, мульчирование, подготовка к зиме.',
      priceList: [
        { name: 'Обрезка кустарников', price: 'от 300 ₽/шт' },
        { name: 'Обрезка деревьев', price: 'от 800 ₽/шт' },
        { name: 'Подкормка растений', price: 'от 200 ₽/шт' },
        { name: 'Обработка от вредителей', price: 'от 1 500 ₽/участок' },
        { name: 'Комплексный уход (сезон)', price: 'от 15 000 ₽/мес' }
      ]
    },
    { 
      icon: 'Footprints', 
      title: 'Садовые дорожки', 
      description: 'Тротуарная плитка, натуральный камень, гравийные дорожки',
      details: 'Проектирование и укладка садовых дорожек из различных материалов: тротуарная плитка, натуральный камень, гравий, дерево. Подготовка основания, дренаж.',
      priceList: [
        { name: 'Дорожки из плитки', price: 'от 2 500 ₽/м²' },
        { name: 'Дорожки из камня', price: 'от 3 500 ₽/м²' },
        { name: 'Гравийные дорожки', price: 'от 1 500 ₽/м²' },
        { name: 'Деревянные дорожки', price: 'от 2 000 ₽/м²' },
        { name: 'Бордюры', price: 'от 500 ₽/м.п.' }
      ]
    },
    { 
      icon: 'Lightbulb', 
      title: 'Освещение участка', 
      description: 'Садовое освещение, подсветка растений, декоративное освещение',
      details: 'Проектирование и монтаж ландшафтного освещения: садовые светильники, подсветка растений и архитектурных элементов, декоративная иллюминация.',
      priceList: [
        { name: 'Проект освещения', price: 'от 10 000 ₽' },
        { name: 'Садовые светильники', price: 'от 3 000 ₽/шт' },
        { name: 'Подсветка растений', price: 'от 2 500 ₽/точка' },
        { name: 'Прожекторы', price: 'от 5 000 ₽/шт' },
        { name: 'Монтаж системы', price: 'от 15 000 ₽' }
      ]
    },
    { 
      icon: 'Waves', 
      title: 'Дренаж и канализация', 
      description: 'Ливневая канализация, дренажные системы, отвод воды',
      details: 'Проектирование и монтаж дренажных систем, ливневой канализации. Защита участка от застоя воды, отвод дождевых и талых вод.',
      priceList: [
        { name: 'Поверхностный дренаж', price: 'от 1 500 ₽/м.п.' },
        { name: 'Глубинный дренаж', price: 'от 2 500 ₽/м.п.' },
        { name: 'Ливневая канализация', price: 'от 2 000 ₽/м.п.' },
        { name: 'Дренажные колодцы', price: 'от 8 000 ₽/шт' },
        { name: 'Проект системы', price: 'от 15 000 ₽' }
      ]
    },
    { 
      icon: 'Truck', 
      title: 'Доставка', 
      description: 'Доставка растений, грунта и материалов по Твери и области',
      details: 'Бережная доставка растений с сохранением корневой системы. Доставка грунта, мульчи, декоративного камня, песка и других материалов. Собственный транспорт.',
      priceList: [
        { name: 'Доставка по городу', price: 'от 1 000 ₽' },
        { name: 'Доставка по области (до 50км)', price: 'от 2 000 ₽' },
        { name: 'Доставка грунта (1 машина)', price: 'от 5 000 ₽' },
        { name: 'Разгрузка материалов', price: 'от 1 500 ₽' },
        { name: 'Крупногабаритные растения', price: 'от 3 000 ₽' }
      ]
    },
    { 
      icon: 'Leaf', 
      title: 'Газоны под ключ', 
      description: 'Посев газона, рулонный газон, автоматический полив газона',
      details: 'Создание газона под ключ: подготовка почвы, посев или укладка рулонного газона, установка системы полива, первичный уход.',
      priceList: [
        { name: 'Посевной газон (под ключ)', price: 'от 500 ₽/м²' },
        { name: 'Рулонный газон (под ключ)', price: 'от 800 ₽/м²' },
        { name: 'Подготовка почвы', price: 'от 200 ₽/м²' },
        { name: 'Автополив газона', price: 'от 3 000 ₽/сотка' },
        { name: 'Стрижка газона', price: 'от 300 ₽/сотка' }
      ]
    },
    { 
      icon: 'Shovel', 
      title: 'Земляные работы', 
      description: 'Выравнивание участка, раскопка траншей, планировка территории',
      details: 'Земляные работы любой сложности: планировка участка, выравнивание территории, раскопка траншей под коммуникации, котлованы под пруды.',
      priceList: [
        { name: 'Планировка участка', price: 'от 300 ₽/м²' },
        { name: 'Раскопка траншей', price: 'от 500 ₽/м³' },
        { name: 'Котлован под пруд', price: 'от 800 ₽/м³' },
        { name: 'Вывоз грунта', price: 'от 5 000 ₽/машина' },
        { name: 'Завоз плодородного грунта', price: 'от 6 000 ₽/машина' }
      ]
    },
    { 
      icon: 'Flower2', 
      title: 'Цветники и клумбы', 
      description: 'Проектирование и создание цветников, миксбордеров, рабаток',
      details: 'Дизайн и создание красочных цветников: клумбы непрерывного цветения, миксбордеры, рабатки, моноклумбы. Подбор растений по цветовой гамме и срокам цветения.',
      priceList: [
        { name: 'Проект цветника', price: 'от 5 000 ₽' },
        { name: 'Создание клумбы', price: 'от 2 000 ₽/м²' },
        { name: 'Миксбордер', price: 'от 3 000 ₽/м²' },
        { name: 'Рабатка', price: 'от 2 500 ₽/м²' },
        { name: 'Розарий', price: 'от 4 000 ₽/м²' }
      ]
    },
    { 
      icon: 'TreePine', 
      title: 'Посадка крупномеров', 
      description: 'Посадка взрослых деревьев с гарантией приживаемости',
      details: 'Посадка взрослых деревьев высотой от 2 до 8 метров. Подготовка ямы, установка дерева, крепление растяжками, полив. Гарантия приживаемости 1 год.',
      priceList: [
        { name: 'Посадка дерева 2-3м', price: 'от 5 000 ₽/шт' },
        { name: 'Посадка дерева 3-5м', price: 'от 15 000 ₽/шт' },
        { name: 'Посадка дерева 5-8м', price: 'от 35 000 ₽/шт' },
        { name: 'Подготовка ямы', price: 'от 3 000 ₽' },
        { name: 'Крепление растяжками', price: 'от 2 000 ₽' }
      ]
    },
    { 
      icon: 'Fence', 
      title: 'Живые изгороди', 
      description: 'Создание зеленых ограждений из кустарников и вьющихся растений',
      details: 'Посадка и формирование живых изгородей из кустарников и вьющихся растений. Стриженые и свободно растущие изгороди. Подбор растений по высоте и плотности.',
      priceList: [
        { name: 'Живая изгородь (низкая до 1м)', price: 'от 1 500 ₽/м.п.' },
        { name: 'Живая изгородь (средняя 1-2м)', price: 'от 2 500 ₽/м.п.' },
        { name: 'Живая изгородь (высокая от 2м)', price: 'от 4 000 ₽/м.п.' },
        { name: 'Формирующая стрижка', price: 'от 300 ₽/м.п.' },
        { name: 'Восстановление изгороди', price: 'от 800 ₽/м.п.' }
      ]
    },
    { 
      icon: 'Mountain', 
      title: 'Альпийские горки', 
      description: 'Рокарии, каменистые сады с горными растениями',
      details: 'Создание альпийских горок и рокариев: подбор и размещение камней, дренаж, высадка горных и почвопокровных растений. Малоуходные композиции.',
      priceList: [
        { name: 'Альпийская горка (малая до 5м²)', price: 'от 25 000 ₽' },
        { name: 'Альпийская горка (средняя 5-10м²)', price: 'от 50 000 ₽' },
        { name: 'Альпийская горка (большая от 10м²)', price: 'от 100 000 ₽' },
        { name: 'Рокарий', price: 'от 3 000 ₽/м²' },
        { name: 'Доставка камней', price: 'от 5 000 ₽' }
      ]
    },
    { 
      icon: 'Droplet', 
      title: 'Пруды и водоемы', 
      description: 'Декоративные пруды, фонтаны, водопады на участке',
      details: 'Создание декоративных прудов, ручьев, каскадов и фонтанов. Гидроизоляция, установка оборудования, высадка водных растений, запуск рыб.',
      priceList: [
        { name: 'Декоративный пруд (малый до 5м²)', price: 'от 50 000 ₽' },
        { name: 'Декоративный пруд (средний 5-15м²)', price: 'от 150 000 ₽' },
        { name: 'Декоративный пруд (большой от 15м²)', price: 'от 300 000 ₽' },
        { name: 'Фонтан', price: 'от 30 000 ₽' },
        { name: 'Водопад/каскад', price: 'от 80 000 ₽' }
      ]
    }
  ];

  const plantCategories = {
    'Декоративные кустарники': {
      icon: 'Shrub',
      price: 'от 1 200 ₽',
      description: 'Широкий выбор кустарников для вашего сада',
      varieties: [
        { name: 'Спирея японская', price: '1 500 ₽', height: '0.6-0.8 м', bloom: 'Июнь-август' },
        { name: 'Гортензия древовидная', price: '2 200 ₽', height: '1-1.5 м', bloom: 'Июль-сентябрь' },
        { name: 'Гортензия метельчатая', price: '2 500 ₽', height: '1.5-2 м', bloom: 'Июль-октябрь' },
        { name: 'Барбарис Тунберга', price: '1 800 ₽', height: '0.8-1.2 м', bloom: 'Май' },
        { name: 'Пузыреплодник калинолистный', price: '1 600 ₽', height: '1.5-2 м', bloom: 'Июнь' },
        { name: 'Дерен белый', price: '1 700 ₽', height: '1.5-2.5 м', bloom: 'Май-июнь' },
        { name: 'Дерен красный', price: '1 800 ₽', height: '1.5-2 м', bloom: 'Май-июнь' },
        { name: 'Калина обыкновенная', price: '2 000 ₽', height: '2-3 м', bloom: 'Май-июнь' },
        { name: 'Чубушник (Жасмин)', price: '1 900 ₽', height: '1.5-2.5 м', bloom: 'Июнь-июль' },
        { name: 'Форзиция', price: '2 100 ₽', height: '1.5-2 м', bloom: 'Апрель' },
        { name: 'Бересклет крылатый', price: '2 300 ₽', height: '1-1.5 м', bloom: 'Май' },
        { name: 'Лапчатка кустарниковая', price: '1 200 ₽', height: '0.5-1 м', bloom: 'Июнь-сентябрь' },
        { name: 'Вейгела', price: '2 000 ₽', height: '1-1.5 м', bloom: 'Май-июнь' },
        { name: 'Снежноягодник', price: '1 400 ₽', height: '1-1.5 м', bloom: 'Июнь-июль' },
        { name: 'Кизильник блестящий', price: '1 500 ₽', height: '1-2 м', bloom: 'Май-июнь' }
      ]
    },
    'Хвойные растения': {
      icon: 'TreePine',
      price: 'от 2 500 ₽',
      description: 'Ели, сосны, туи различных сортов',
      varieties: [
        { name: 'Туя западная Смарагд', price: '3 500 ₽', height: '1-1.5 м', feature: 'Зимостойкая' },
        { name: 'Туя западная Брабант', price: '3 200 ₽', height: '1-1.5 м', feature: 'Быстрорастущая' },
        { name: 'Туя западная Даника', price: '2 800 ₽', height: '0.4-0.6 м', feature: 'Шаровидная' },
        { name: 'Туя западная Голден Глоб', price: '3 000 ₽', height: '0.6-0.8 м', feature: 'Золотистая' },
        { name: 'Можжевельник казацкий', price: '2 500 ₽', height: '0.5-0.8 м', feature: 'Почвопокровный' },
        { name: 'Можжевельник скальный', price: '3 800 ₽', height: '1-1.5 м', feature: 'Голубой' },
        { name: 'Можжевельник горизонтальный', price: '2 700 ₽', height: '0.3-0.5 м', feature: 'Стелющийся' },
        { name: 'Можжевельник китайский', price: '3 500 ₽', height: '1-1.5 м', feature: 'Раскидистый' },
        { name: 'Ель голубая колючая', price: '5 000 ₽', height: '1.5-2 м', feature: 'Голубая хвоя' },
        { name: 'Ель обыкновенная', price: '4 000 ₽', height: '1.5-2 м', feature: 'Классическая' },
        { name: 'Ель канадская Коника', price: '3 500 ₽', height: '0.6-0.8 м', feature: 'Карликовая' },
        { name: 'Сосна горная', price: '3 200 ₽', height: '0.8-1.2 м', feature: 'Компактная' },
        { name: 'Сосна кедровая', price: '4 500 ₽', height: '1-1.5 м', feature: 'Орехоплодная' },
        { name: 'Сосна обыкновенная', price: '3 000 ₽', height: '1.5-2 м', feature: 'Быстрорастущая' },
        { name: 'Кипарисовик Лавсона', price: '4 000 ₽', height: '1-1.5 м', feature: 'Ароматная' },
        { name: 'Пихта корейская', price: '4 800 ₽', height: '1-1.5 м', feature: 'Декоративная' },
        { name: 'Лиственница', price: '3 500 ₽', height: '1.5-2 м', feature: 'Листопадная' }
      ]
    },
    'Плодовые деревья': {
      icon: 'Apple',
      price: 'от 2 500 ₽',
      description: 'Яблони, груши, сливы и другие',
      varieties: [
        { name: 'Яблоня Антоновка', price: '3 000 ₽', age: '2-3 года', yield: 'Август-сентябрь' },
        { name: 'Яблоня Мелба', price: '3 200 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Яблоня Белый налив', price: '2 800 ₽', age: '2-3 года', yield: 'Июль-август' },
        { name: 'Яблоня Джонатан', price: '3 300 ₽', age: '2-3 года', yield: 'Сентябрь' },
        { name: 'Яблоня Богатырь', price: '3 100 ₽', age: '2-3 года', yield: 'Сентябрь-октябрь' },
        { name: 'Яблоня колоновидная', price: '2 500 ₽', age: '2 года', yield: 'Август-сентябрь' },
        { name: 'Груша Лада', price: '3 500 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Груша Чижовская', price: '3 600 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Груша Конференция', price: '3 800 ₽', age: '2-3 года', yield: 'Сентябрь' },
        { name: 'Груша Велеса', price: '3 700 ₽', age: '2-3 года', yield: 'Сентябрь' },
        { name: 'Слива Медовая', price: '3 200 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Слива Ренклод', price: '3 400 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Слива Венгерка', price: '3 100 ₽', age: '2-3 года', yield: 'Сентябрь' },
        { name: 'Вишня Владимирская', price: '2 800 ₽', age: '2-3 года', yield: 'Июль' },
        { name: 'Вишня Шоколадница', price: '3 000 ₽', age: '2-3 года', yield: 'Июль' },
        { name: 'Черешня Ипуть', price: '4 000 ₽', age: '2-3 года', yield: 'Июнь-июль' },
        { name: 'Черешня Бряночка', price: '4 200 ₽', age: '2-3 года', yield: 'Июнь' },
        { name: 'Абрикос Триумф северный', price: '3 800 ₽', age: '2-3 года', yield: 'Июль-август' },
        { name: 'Персик Краснощёкий', price: '4 500 ₽', age: '2-3 года', yield: 'Август' },
        { name: 'Рябина черноплодная', price: '2 500 ₽', age: '2-3 года', yield: 'Сентябрь' }
      ]
    },
    'Многолетники': {
      icon: 'Flower',
      price: 'от 250 ₽',
      description: 'Цветущие многолетние растения',
      varieties: [
        { name: 'Хоста гибридная', price: '400 ₽', height: '0.3-0.6 м', bloom: 'Июль-август' },
        { name: 'Лилейник гибридный', price: '500 ₽', height: '0.6-0.8 м', bloom: 'Июнь-июль' },
        { name: 'Пион травянистый', price: '800 ₽', height: '0.6-0.9 м', bloom: 'Май-июнь' },
        { name: 'Ирис сибирский', price: '350 ₽', height: '0.6-1 м', bloom: 'Май-июнь' },
        { name: 'Ирис бородатый', price: '400 ₽', height: '0.5-0.8 м', bloom: 'Май-июнь' },
        { name: 'Астильба', price: '450 ₽', height: '0.5-1 м', bloom: 'Июль-август' },
        { name: 'Флокс метельчатый', price: '380 ₽', height: '0.6-1.2 м', bloom: 'Июль-сентябрь' },
        { name: 'Эхинацея пурпурная', price: '320 ₽', height: '0.6-1 м', bloom: 'Июль-сентябрь' },
        { name: 'Рудбекия', price: '300 ₽', height: '0.6-1.5 м', bloom: 'Июль-октябрь' },
        { name: 'Лилия азиатская', price: '350 ₽', height: '0.6-1.2 м', bloom: 'Июнь-июль' },
        { name: 'Лилия восточная', price: '450 ₽', height: '0.8-1.5 м', bloom: 'Июль-август' },
        { name: 'Дельфиниум', price: '420 ₽', height: '1-2 м', bloom: 'Июнь-июль' },
        { name: 'Люпин', price: '280 ₽', height: '0.8-1.2 м', bloom: 'Июнь-июль' },
        { name: 'Колокольчик', price: '250 ₽', height: '0.3-0.8 м', bloom: 'Июнь-август' },
        { name: 'Гейхера', price: '400 ₽', height: '0.3-0.5 м', bloom: 'Июнь-август' },
        { name: 'Очиток (Седум)', price: '300 ₽', height: '0.3-0.6 м', bloom: 'Август-октябрь' },
        { name: 'Нивяник (Ромашка садовая)', price: '280 ₽', height: '0.5-0.8 м', bloom: 'Июнь-август' },
        { name: 'Тысячелистник', price: '270 ₽', height: '0.5-1 м', bloom: 'Июнь-сентябрь' },
        { name: 'Гвоздика садовая', price: '300 ₽', height: '0.3-0.6 м', bloom: 'Июнь-август' },
        { name: 'Аквилегия (Водосбор)', price: '320 ₽', height: '0.5-0.8 м', bloom: 'Май-июнь' }
      ]
    },
    'Газонная трава': {
      icon: 'Leaf',
      price: 'от 350 ₽/м²',
      description: 'Качественные газонные смеси',
      varieties: [
        { name: 'Универсальный газон', price: '500 ₽/м²', type: 'Посевной', feature: 'Износостойкий' },
        { name: 'Партерный газон', price: '800 ₽/м²', type: 'Посевной', feature: 'Элитный' },
        { name: 'Спортивный газон', price: '600 ₽/м²', type: 'Посевной', feature: 'Супер прочный' },
        { name: 'Теневой газон', price: '550 ₽/м²', type: 'Посевной', feature: 'Для тени' },
        { name: 'Луговой газон', price: '400 ₽/м²', type: 'Посевной', feature: 'Натуральный' },
        { name: 'Мавританский газон', price: '450 ₽/м²', type: 'Посевной', feature: 'С цветами' },
        { name: 'Рулонный газон Стандарт', price: '350 ₽/м²', type: 'Рулонный', feature: 'Готовый' },
        { name: 'Рулонный газон Премиум', price: '500 ₽/м²', type: 'Рулонный', feature: 'Элитный' },
        { name: 'Искусственный газон', price: '1200 ₽/м²', type: 'Искусственный', feature: 'Не требует ухода' }
      ]
    },
    'Розы': {
      icon: 'Flower2',
      price: 'от 700 ₽',
      description: 'Элитные сорта роз для вашего сада',
      varieties: [
        { name: 'Роза чайно-гибридная красная', price: '900 ₽', height: '0.8-1.2 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза чайно-гибридная белая', price: '950 ₽', height: '0.8-1.2 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза чайно-гибридная желтая', price: '900 ₽', height: '0.8-1.2 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза чайно-гибридная розовая', price: '900 ₽', height: '0.8-1.2 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза флорибунда', price: '800 ₽', height: '0.6-0.8 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза патио (миниатюрная)', price: '700 ₽', height: '0.3-0.5 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза плетистая', price: '1 200 ₽', height: '2-3 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза плетистая Пьер де Ронсар', price: '1 400 ₽', height: '2-3 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза парковая', price: '1 000 ₽', height: '1-1.5 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза почвопокровная', price: '700 ₽', height: '0.3-0.5 м', bloom: 'Июнь-октябрь' },
        { name: 'Роза английская Дэвида Остина', price: '1 500 ₽', height: '1-1.5 м', bloom: 'Июнь-сентябрь' },
        { name: 'Роза штамбовая', price: '3 000 ₽', height: '1.2-1.5 м', bloom: 'Июнь-октябрь' }
      ]
    },
    'Лиственные деревья': {
      icon: 'Trees',
      price: 'от 3 500 ₽',
      description: 'Декоративные и плодовые деревья',
      varieties: [
        { name: 'Береза повислая', price: '4 000 ₽', height: '2-2.5 м', feature: 'Быстрорастущая' },
        { name: 'Клен остролистный', price: '4 500 ₽', height: '2-2.5 м', feature: 'Яркая осень' },
        { name: 'Клен красный', price: '5 500 ₽', height: '2-2.5 м', feature: 'Красные листья' },
        { name: 'Липа мелколистная', price: '4 800 ₽', height: '2-2.5 м', feature: 'Ароматная' },
        { name: 'Рябина обыкновенная', price: '3 500 ₽', height: '2-2.5 м', feature: 'Декоративная' },
        { name: 'Ива плакучая', price: '4 200 ₽', height: '2-2.5 м', feature: 'Плакучая форма' },
        { name: 'Дуб черешчатый', price: '5 000 ₽', height: '2-2.5 м', feature: 'Долговечный' },
        { name: 'Ясень обыкновенный', price: '4 300 ₽', height: '2-2.5 м', feature: 'Быстрорастущий' },
        { name: 'Каштан конский', price: '5 200 ₽', height: '2-2.5 м', feature: 'Цветущий' },
        { name: 'Черемуха', price: '3 800 ₽', height: '2-2.5 м', feature: 'Ароматная' }
      ]
    },
    'Вьющиеся растения': {
      icon: 'Fence',
      price: 'от 600 ₽',
      description: 'Лианы для вертикального озеленения',
      varieties: [
        { name: 'Клематис крупноцветковый', price: '800 ₽', height: '2-3 м', bloom: 'Июнь-сентябрь' },
        { name: 'Клематис мелкоцветковый', price: '600 ₽', height: '3-5 м', bloom: 'Июль-август' },
        { name: 'Девичий виноград', price: '700 ₽', height: '10-15 м', feature: 'Быстрорастущий' },
        { name: 'Плющ', price: '650 ₽', height: '5-10 м', feature: 'Вечнозеленый' },
        { name: 'Жимолость каприфоль', price: '750 ₽', height: '3-4 м', bloom: 'Май-июнь' },
        { name: 'Актинидия (Киви)', price: '900 ₽', height: '3-5 м', feature: 'Плодовая' },
        { name: 'Хмель обыкновенный', price: '500 ₽', height: '5-7 м', feature: 'Быстрорастущий' },
        { name: 'Гортензия черешковая', price: '1 200 ₽', height: '3-5 м', bloom: 'Июнь-июль' }
      ]
    }
  };

  const allPlants = useMemo(() => {
    const plants: any[] = [];
    Object.entries(plantCategories).forEach(([category, data]) => {
      data.varieties.forEach((variety: any) => {
        plants.push({
          ...variety,
          category,
          categoryIcon: data.icon
        });
      });
    });
    return plants;
  }, []);

  const filteredPlants = useMemo(() => {
    if (!searchQuery.trim()) return allPlants;
    
    const query = searchQuery.toLowerCase();
    return allPlants.filter(plant => 
      plant.name.toLowerCase().includes(query) ||
      plant.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allPlants]);

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
          
          <div className="mb-8 relative max-w-xl mx-auto">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск растений по названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>

          {searchQuery.trim() ? (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Найдено растений: <span className="font-bold text-foreground">{filteredPlants.length}</span>
                </p>
                <Button variant="ghost" size="sm" onClick={() => setSearchQuery('')}>
                  <Icon name="X" size={16} className="mr-2" />
                  Очистить
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredPlants.map((plant, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">{plant.category}</Badge>
                          <CardTitle className="text-lg">{plant.name}</CardTitle>
                          <p className="text-xl font-bold text-primary mt-2">{plant.price}</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                          <Icon name={plant.categoryIcon} className="text-primary" size={24} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {plant.height && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Ruler" size={14} className="text-muted-foreground" />
                          <span>{plant.height}</span>
                        </div>
                      )}
                      {plant.bloom && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={14} className="text-muted-foreground" />
                          <span>{plant.bloom}</span>
                        </div>
                      )}
                      {plant.feature && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Star" size={14} className="text-muted-foreground" />
                          <span>{plant.feature}</span>
                        </div>
                      )}
                      <Button className="w-full mt-2">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Заказать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredPlants.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Растения не найдены. Попробуйте другой запрос.</p>
                </div>
              )}
            </div>
          ) : (
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
          )}
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
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceDialogOpen(true);
                    }}
                  >
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

      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Icon name={selectedService.icon} className="text-secondary" size={24} />
                  </div>
                  <div>
                    <DialogTitle className="font-heading text-2xl">{selectedService.title}</DialogTitle>
                    <DialogDescription>{selectedService.description}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">Что мы делаем</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedService.details}</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">Цены на услуги</h3>
                  <div className="space-y-2">
                    {selectedService.priceList.map((item: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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