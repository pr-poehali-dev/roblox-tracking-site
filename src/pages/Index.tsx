import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type Tab = 'dashboard' | 'players' | 'activity';

interface Player {
  id: string;
  username: string;
  status: 'online' | 'offline';
  lastSeen: string;
  gameTime: string;
  location: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'username' | 'status' | 'lastSeen'>('username');

  const players: Player[] = [
    {
      id: '1',
      username: 'serehka111',
      status: 'online',
      lastSeen: 'Now',
      gameTime: '2h 34m',
      location: 'Brookhaven RP'
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
              <p className="text-3xl font-bold mt-2">1</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-green-500" />
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
          <Icon name="Clock" size={20} className="text-primary" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {[
            { time: '2m ago', action: 'serehka111 joined Brookhaven RP', type: 'join' },
            { time: '1h ago', action: 'serehka111 left Arsenal', type: 'leave' },
            { time: '3h ago', action: 'serehka111 joined Arsenal', type: 'join' }
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
          <Card key={player.id} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{player.username}</h3>
                    <Badge variant={player.status === 'online' ? 'default' : 'secondary'} className={player.status === 'online' ? 'bg-green-500' : ''}>
                      {player.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Last seen: {player.lastSeen}</p>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span>{player.gameTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} />
                  <span>{player.location}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
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
        {activeTab === 'activity' && renderActivity()}
      </div>
    </div>
  );
};

export default Index;
