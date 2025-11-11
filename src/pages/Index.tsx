import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const candles = [
  {
    id: 1,
    name: 'Лаванда',
    category: 'Релаксация',
    description: 'Нежный аромат лаванды успокаивает нервную систему и помогает расслабиться после напряженного дня',
    effects: ['Снимает стресс', 'Улучшает сон', 'Успокаивает'],
    notes: ['Лаванда', 'Бергамот', 'Ваниль'],
    intensity: 'Средняя',
    color: 'bg-purple-100',
  },
  {
    id: 2,
    name: 'Цитрусовый бриз',
    category: 'Энергия',
    description: 'Свежий цитрусовый аромат бодрит и наполняет энергией, повышает концентрацию внимания',
    effects: ['Тонизирует', 'Улучшает настроение', 'Повышает продуктивность'],
    notes: ['Апельсин', 'Лимон', 'Грейпфрут'],
    intensity: 'Высокая',
    color: 'bg-orange-100',
  },
  {
    id: 3,
    name: 'Ванильный уют',
    category: 'Комфорт',
    description: 'Теплый ванильный аромат создает атмосферу уюта и спокойствия в доме',
    effects: ['Создает уют', 'Снижает тревожность', 'Согревает'],
    notes: ['Ваниль', 'Карамель', 'Сандал'],
    intensity: 'Средняя',
    color: 'bg-amber-100',
  },
  {
    id: 4,
    name: 'Эвкалипт & Мята',
    category: 'Свежесть',
    description: 'Освежающая комбинация эвкалипта и мяты очищает воздух и облегчает дыхание',
    effects: ['Освежает', 'Очищает воздух', 'Концентрирует внимание'],
    notes: ['Эвкалипт', 'Мята', 'Розмарин'],
    intensity: 'Высокая',
    color: 'bg-green-100',
  },
  {
    id: 5,
    name: 'Роза & Пион',
    category: 'Романтика',
    description: 'Нежный цветочный букет создает романтическую атмосферу и поднимает настроение',
    effects: ['Вдохновляет', 'Улучшает настроение', 'Создает романтику'],
    notes: ['Роза', 'Пион', 'Жасмин'],
    intensity: 'Средняя',
    color: 'bg-pink-100',
  },
  {
    id: 6,
    name: 'Кедр & Пачули',
    category: 'Медитация',
    description: 'Древесный аромат помогает погрузиться в медитативное состояние и обрести гармонию',
    effects: ['Заземляет', 'Помогает медитации', 'Успокаивает ум'],
    notes: ['Кедр', 'Пачули', 'Мох'],
    intensity: 'Низкая',
    color: 'bg-emerald-100',
  },
];

const benefits = [
  {
    icon: 'Brain',
    title: 'Улучшает концентрацию',
    description: 'Ароматы помогают сфокусироваться на важных задачах',
  },
  {
    icon: 'Heart',
    title: 'Снижает стресс',
    description: 'Успокаивающие ароматы нормализуют эмоциональное состояние',
  },
  {
    icon: 'Moon',
    title: 'Качественный сон',
    description: 'Расслабляющие ароматы способствуют глубокому отдыху',
  },
  {
    icon: 'Sparkles',
    title: 'Создает атмосферу',
    description: 'Превращает пространство в уютное место для жизни',
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const categories = ['Все', 'Релаксация', 'Энергия', 'Комфорт', 'Свежесть', 'Романтика', 'Медитация'];

  const filteredCandles = selectedCategory === 'Все' 
    ? candles 
    : candles.filter(candle => candle.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-transparent rounded-[0_0_50%_50%] opacity-60"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-300 via-purple-200 to-transparent rounded-full opacity-40 blur-3xl"></div>

        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Flame" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">CANDLE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition">Каталог</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition">О свечах</a>
              <a href="#aromatherapy" className="text-foreground hover:text-primary transition">Ароматерапия</a>
              <Button>Связаться</Button>
            </div>
          </div>
        </nav>

        <section className="relative z-10 container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Почувствуй силу <span className="text-primary">ароматов</span> в лучших свечах
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Мы создаем свечи, которые преображают пространство и влияют на ваше эмоциональное состояние. Каждый аромат имеет уникальное воздействие на организм и настроение.
            </p>
            <Button size="lg" className="text-lg px-8">
              Выбрать свечу
            </Button>
          </div>
        </section>
      </div>

      <section id="benefits" className="py-20 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Как ароматы влияют на нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow border-2 border-purple-100">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Icon name={benefit.icon} size={36} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши ароматы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая свеча создана с учетом ароматерапевтических свойств компонентов
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCandles.map((candle) => (
              <Card key={candle.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100">
                <div className={`h-48 ${candle.color} flex items-center justify-center`}>
                  <Icon name="Flame" size={64} className="text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-sm">{candle.category}</Badge>
                    <span className="text-sm text-muted-foreground">{candle.intensity} интенсивность</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{candle.name}</h3>
                  <p className="text-muted-foreground mb-4">{candle.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Icon name="Sparkles" size={16} />
                      Воздействие:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {candle.effects.map((effect, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Icon name="Flower2" size={16} />
                      Ноты аромата:
                    </h4>
                    <p className="text-sm text-muted-foreground">{candle.notes.join(', ')}</p>
                  </div>

                  <Button className="w-full">Подробнее</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="aromatherapy" className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Что такое ароматерапия?</h2>
            <Card className="p-8 border-2 border-purple-200">
              <p className="text-lg mb-6 leading-relaxed">
                Ароматерапия — это древняя практика использования натуральных ароматов для улучшения физического и эмоционального состояния. Молекулы ароматических веществ, попадая в наш организм через обоняние, влияют на лимбическую систему мозга, отвечающую за эмоции, память и настроение.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Натуральные компоненты</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">60+</div>
                  <p className="text-sm text-muted-foreground">Часов горения</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">Eco</div>
                  <p className="text-sm text-muted-foreground">Безопасный воск</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Icon name="Flame" size={28} className="text-primary" />
              <span className="text-xl font-bold">CANDLE</span>
            </div>
            <div className="flex gap-6">
              <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition" />
              <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition" />
              <Icon name="Mail" size={24} className="cursor-pointer hover:text-primary transition" />
            </div>
          </div>
          <div className="text-center mt-8 text-sm opacity-70">
            © 2024 CANDLE. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
