import { Card } from './ui/card';

const destinations = [
  { name: 'salesforce.com', visits: '12.5k', trend: '+12%', type: 'SaaS' },
  { name: 'google.com', visits: '10.2k', trend: '+5%', type: 'Search' },
  { name: 'aws.amazon.com', visits: '8.4k', trend: '+15%', type: 'Cloud' },
  { name: 'slack.com', visits: '6.1k', trend: '-2%', type: 'Collab' },
  { name: 'atlassian.net', visits: '4.8k', trend: '+8%', type: 'Dev' },
];

export function TopDestinations() {
  return (
    <Card className="p-6 rounded-lg shadow-sm border-gray-200 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 font-bold">Top Destinations</h3>
          <p className="text-sm text-gray-500">Most visited domains by volume</p>
        </div>
        <span className="text-xs text-[#0066CC] font-medium cursor-pointer hover:underline">View All</span>
      </div>
      <div className="space-y-4">
        {destinations.map((item, i) => (
          <div key={item.name} className="flex items-center justify-between py-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-xs font-medium text-gray-500 border border-gray-100">
                {i + 1}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.type}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{item.visits}</div>
              <div className={`text-xs ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {item.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}