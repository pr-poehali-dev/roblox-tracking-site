import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Tab = 'dashboard' | 'players' | 'activity' | 'camera';

interface Player {
  id: string;
  username: string;
  status: 'online' | 'offline';
  lastSeen: string;
  gameTime: string;
  location: string;
  accountAge: string;
  totalGames: number;
  favoriteGames: string[];
  averagePlaytime: string;
  friendsCount: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'username' | 'status' | 'lastSeen'>('username');

  const players: Player[] = [
    {
      id: '1',
      username: 'serehka111',
      status: 'offline',
      lastSeen: '3 hours ago',
      gameTime: '0m',
      location: 'frozen soul (dg)',
      accountAge: '6 years 4 months',
      totalGames: 156,
      favoriteGames: ['frozen soul (dg)', 'Block tales', 'Grace', 'BIAST'],
      averagePlaytime: '3h 24m/day',
      friendsCount: 0
    }
  ];

  const filteredPlayers = players.filter(player =>
    player.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const encodeMessage = (text: string) => {
    return text.split('').map(char => {
      if (char === ' ') return ' ';
      const code = char.charCodeAt(0);
      return String.fromCharCode(code + 1);
    }).join('');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-primary/20 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse">
            <Icon name="Radio" size={20} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold">ROBLOX Monitoring Active</p>
            <p className="text-xs text-muted-foreground">Real-time player tracking enabled</p>
          </div>
        </div>
        <Badge variant="outline" className="gap-2 bg-primary/10">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          LIVE
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Players</p>
              <p className="text-3xl font-bold mt-2">1</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Online Now</p>
              <p className="text-3xl font-bold mt-2">0</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-red-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Tracked Sessions</p>
              <p className="text-3xl font-bold mt-2">47</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Icon name="BarChart3" size={24} className="text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="TrendingUp" size={20} className="text-primary" />
          Player Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Trophy" size={16} className="text-yellow-500" />
              <p className="text-xs text-muted-foreground">Level</p>
            </div>
            <p className="text-2xl font-bold">127</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Zap" size={16} className="text-orange-500" />
              <p className="text-xs text-muted-foreground">Robux Spent</p>
            </div>
            <p className="text-2xl font-bold">2.4K</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Award" size={16} className="text-purple-500" />
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
            <p className="text-2xl font-bold">89</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Target" size={16} className="text-green-500" />
              <p className="text-xs text-muted-foreground">Achievements</p>
            </div>
            <p className="text-2xl font-bold">156</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="Clock" size={20} className="text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              { time: '3h ago', action: 'serehka111 went offline', type: 'leave' },
              { time: '3h ago', action: 'serehka111 left frozen soul (dg)', type: 'leave' },
              { time: '5h ago', action: 'serehka111 joined frozen soul (dg)', type: 'join' },
              { time: '8h ago', action: 'serehka111 left Block tales', type: 'leave' },
              { time: '9h ago', action: 'serehka111 joined Block tales', type: 'join' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${activity.type === 'join' ? 'bg-green-500' : 'bg-orange-500'}`} />
                  <span className="text-sm">{activity.action}</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icon name="Gamepad2" size={20} className="text-primary" />
            Top Games Played
          </h3>
          <div className="space-y-3">
            {[
              { game: 'frozen soul (dg)', hours: 124, percentage: 85 },
              { game: 'Block tales', hours: 89, percentage: 61 },
              { game: 'Grace', hours: 67, percentage: 46 },
              { game: 'BIAST', hours: 43, percentage: 29 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.game}</span>
                  <span className="text-muted-foreground">{item.hours}h</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderPlayers = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={sortBy === 'username' ? 'default' : 'outline'}
            onClick={() => setSortBy('username')}
            className="gap-2"
          >
            <Icon name="User" size={16} />
            Username
          </Button>
          <Button
            variant={sortBy === 'status' ? 'default' : 'outline'}
            onClick={() => setSortBy('status')}
            className="gap-2"
          >
            <Icon name="Signal" size={16} />
            Status
          </Button>
          <Button
            variant={sortBy === 'lastSeen' ? 'default' : 'outline'}
            onClick={() => setSortBy('lastSeen')}
            className="gap-2"
          >
            <Icon name="Clock" size={16} />
            Last Seen
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="space-y-4">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-xl">{player.username}</h3>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                        {player.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Last seen: {player.lastSeen}</p>
                    <p className="text-xs text-muted-foreground mt-1">Account age: {player.accountAge}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span>{player.averagePlaytime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    <span>{player.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-lg font-bold text-primary font-mono">124+89+67+43</p>
                  <p className="text-xs text-muted-foreground mt-1">Games Played (calc)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{player.friendsCount}</p>
                  <p className="text-xs text-muted-foreground mt-1">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">47</p>
                  <p className="text-xs text-muted-foreground mt-1">Sessions</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-primary" />
                  Favorite Games
                </h3>
                <div className="space-y-3">
                  {player.favoriteGames.map((game, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Gamepad2" size={16} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium">{game}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        ⭐ {4 - i}/5
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon name="ShoppingBag" size={20} className="text-primary" />
                  ROBLOX Inventory
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Icon name="Shirt" size={16} className="text-blue-500" />
                      <span className="text-sm">Clothing Items</span>
                    </div>
                    <span className="font-bold">234</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Icon name="Sparkles" size={16} className="text-purple-500" />
                      <span className="text-sm">Accessories</span>
                    </div>
                    <span className="font-bold">89</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Icon name="Package" size={16} className="text-orange-500" />
                      <span className="text-sm">Game Passes</span>
                    </div>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Icon name="Gem" size={16} className="text-cyan-500" />
                      <span className="text-sm">Limited Items</span>
                    </div>
                    <span className="font-bold">7</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCamera = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Icon name="Video" size={20} className="text-primary" />
            Live Camera Feed
          </h3>
          <Badge variant="secondary" className="bg-red-500/20 text-red-400 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            OFFLINE
          </Badge>
        </div>
        
        <div className="aspect-video bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-muted/50" />
          <div className="relative text-center space-y-3">
            <Icon name="VideoOff" size={48} className="text-muted-foreground mx-auto" />
            <div>
              <p className="text-lg font-semibold text-muted-foreground">Camera Feed Unavailable</p>
              <p className="text-sm text-muted-foreground/70 mt-1">Target is not in any game</p>
            </div>
          </div>
          
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded">
            <Icon name="User" size={14} className="text-muted-foreground" />
            <span className="text-xs font-mono">serehka111</span>
          </div>
          
          <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="User" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Target:</span>
            <span className="font-semibold">serehka111</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="MapPin" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Last game:</span>
            <span className="font-semibold">frozen soul (dg)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Signal" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Status:</span>
            <span className="font-semibold text-red-400">Offline</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">Last seen:</span>
            <span className="font-semibold">3 hours ago</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icon name="AlertCircle" size={20} className="text-orange-500" />
          Camera Notice
        </h3>
        <p className="text-sm text-muted-foreground">
          Live camera feed is only available when the target is actively playing a Roblox game. 
          The system will automatically resume monitoring once serehka111 joins any game.
        </p>
      </Card>
    </div>
  );

  const renderActivity = () => (
    <div className="space-y-6">
      <Card className="p-8 bg-card border-border">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Icon name="Lock" size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Activity Log Encrypted</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            This section contains classified information. Access restricted to authorized personnel only.
          </p>
          <div className="pt-4">
            <div className="inline-block p-4 bg-muted/50 rounded-lg font-mono text-sm tracking-widest">
              {encodeMessage('all due in time, andre')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Eye" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ROBLOX TRACKER</h1>
                <p className="text-xs text-muted-foreground">Real-time monitoring system</p>
              </div>
            </div>
            <Badge variant="outline" className="gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              System Active
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 border-b border-border">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('dashboard')}
            className="rounded-b-none"
          >
            <Icon name="LayoutDashboard" size={18} className="mr-2" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === 'players' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('players')}
            className="rounded-b-none"
          >
            <Icon name="Users" size={18} className="mr-2" />
            Players
          </Button>
          <Button
            variant={activeTab === 'camera' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('camera')}
            className="rounded-b-none"
          >
            <Icon name="Video" size={18} className="mr-2" />
            Camera
          </Button>
          <Button
            variant={activeTab === 'activity' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('activity')}
            className="rounded-b-none"
          >
            <Icon name="Activity" size={18} className="mr-2" />
            Activity
          </Button>
        </div>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'players' && renderPlayers()}
        {activeTab === 'camera' && renderCamera()}
        {activeTab === 'activity' && renderActivity()}
      </div>
    </div>
  );
};

export default Index;