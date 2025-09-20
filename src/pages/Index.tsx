import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Index = () => {
  const clanMembers = [
    { name: "TankCommander", rank: "Командир", battles: 15420, winRate: 62.5, status: "online" },
    { name: "SteelWarrior", rank: "Заместитель", battles: 12890, winRate: 58.3, status: "online" },
    { name: "ArmorBreaker", rank: "Офицер", battles: 9650, winRate: 55.7, status: "offline" },
    { name: "HeavyGunner", rank: "Сержант", battles: 8200, winRate: 52.1, status: "online" },
    { name: "LightScout", rank: "Рядовой", battles: 6750, winRate: 49.8, status: "offline" },
    { name: "TankDestroyer", rank: "Рядовой", battles: 5420, winRate: 51.2, status: "online" },
  ]

  const clanStats = {
    totalMembers: 42,
    avgWinRate: 56.2,
    totalBattles: 485650,
    clanRating: 2850,
    territory: "Провинция Рур"
  }

  const getRankBadgeColor = (rank: string) => {
    switch (rank) {
      case "Командир": return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "Заместитель": return "bg-gradient-to-r from-orange-500 to-red-500"
      case "Офицер": return "bg-gradient-to-r from-blue-500 to-purple-500"
      case "Сержант": return "bg-gradient-to-r from-green-500 to-blue-500"
      default: return "bg-gradient-to-r from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <img 
                  src="/img/d025c2a3-b2ee-4f0e-9a6b-bbf2e54057ef.jpg" 
                  alt="RGK Clan" 
                  className="w-12 h-12 object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-primary">RGK CLAN</h1>
                <p className="text-muted-foreground uppercase tracking-wide">Элитные танкисты</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="clan-badge">
                <Icon name="Shield" size={16} />
                Рейтинг: {clanStats.clanRating}
              </span>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Users" size={16} className="mr-2" />
                Вступить в клан
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Обзор клана
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Состав клана
            </TabsTrigger>
            <TabsTrigger value="battles" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Боевые операции
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Clan Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="tank-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase">Участники</CardTitle>
                  <Icon name="Users" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{clanStats.totalMembers}</div>
                  <p className="text-xs text-muted-foreground">Активных бойцов</p>
                </CardContent>
              </Card>

              <Card className="tank-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase">Процент побед</CardTitle>
                  <Icon name="Target" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{clanStats.avgWinRate}%</div>
                  <p className="text-xs text-muted-foreground">Средний по клану</p>
                </CardContent>
              </Card>

              <Card className="tank-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase">Боев проведено</CardTitle>
                  <Icon name="Zap" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{clanStats.totalBattles.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Всего боев</p>
                </CardContent>
              </Card>

              <Card className="tank-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase">Территория</CardTitle>
                  <Icon name="Map" size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-primary">{clanStats.territory}</div>
                  <p className="text-xs text-muted-foreground">Под контролем</p>
                </CardContent>
              </Card>
            </div>

            {/* Clan Description */}
            <Card className="tank-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-primary" />
                  О клане RGK
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-primary">RGK</strong> — элитный танковый клан, объединяющий опытных командиров 
                  со всего мира. Мы специализируемся на клановых войнах, турнирах и совместных операциях.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary uppercase">Наши принципы:</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        Командная работа превыше всего
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        Постоянное развитие навыков
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-primary" />
                        Активное участие в событиях
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary uppercase">Требования:</h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-primary" />
                        Минимум 5000 боев
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-primary" />
                        Процент побед от 50%
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-primary" />
                        Активность в Discord
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card className="tank-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-primary" />
                  Состав клана ({clanMembers.length} из {clanStats.totalMembers})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clanMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border hover:bg-accent/70 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <Icon name="User" size={24} className="text-muted-foreground" />
                          </div>
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            member.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{member.name}</h3>
                          <Badge className={`${getRankBadgeColor(member.rank)} text-white border-0`}>
                            {member.rank}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 text-sm">
                        <div className="text-center">
                          <div className="text-foreground font-medium">{member.battles.toLocaleString()}</div>
                          <div className="text-muted-foreground">Боев</div>
                        </div>
                        <div className="text-center">
                          <div className={`font-medium ${member.winRate >= 55 ? 'text-green-400' : member.winRate >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {member.winRate}%
                          </div>
                          <div className="text-muted-foreground">Побед</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="battles" className="space-y-6">
            <Card className="tank-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sword" size={24} className="text-primary" />
                  Боевые операции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="Construction" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Раздел в разработке</h3>
                  <p className="text-muted-foreground">
                    Здесь будет отображаться информация о текущих и прошедших боевых операциях клана
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Index