import React, { useState } from 'react';
import { ChevronRight, Search, X, Check, Users, Network, Monitor, MapPin, Tag, Smartphone, Layers } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { cn } from './ui/utils';

export interface ResourceItem {
  id: string;
  name: string;
  count: number;
  type: 'user' | 'device' | 'network' | 'location' | 'tag';
}

interface ResourceSelectorProps {
  label: string;
  placeholder?: string;
  selectedItems: ResourceItem[];
  onChange: (items: ResourceItem[]) => void;
}

const CATEGORIES = [
  { name: 'Users', count: 80, icon: Users, type: 'user' },
  { name: 'Groups and Organizational Units', count: 16, icon: Users, type: 'user' },
  { name: 'Roaming Devices', count: 3, icon: Smartphone, type: 'device' },
  { name: 'Endpoint Devices', count: 6, icon: Monitor, type: 'device' },
  { name: 'Networks', count: 3, icon: Network, type: 'network' },
  { name: 'Sites', count: 1, icon: MapPin, type: 'location' },
  { name: 'Network Devices', count: 0, icon: Network, type: 'device' },
  { name: 'Security Group Tags', count: 30, icon: Tag, type: 'tag' },
  { name: 'Network Tunnel Groups', count: 2, icon: Layers, type: 'network' },
];

export function ResourceSelector({ label, placeholder = "Specify one or more...", selectedItems, onChange }: ResourceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (category: typeof CATEGORIES[0]) => {
    // For this demo, we'll treat the category itself as a selectable item
    // In a real app, this might drill down into the category
    const exists = selectedItems.find(i => i.name === category.name);
    if (exists) {
      onChange(selectedItems.filter(i => i.name !== category.name));
    } else {
      onChange([...selectedItems, { 
        id: category.name, 
        name: category.name, 
        count: category.count, 
        type: category.type as any 
      }]);
    }
  };

  const removeItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onChange(selectedItems.filter(i => i.id !== id));
  };

  return (
    <div className="w-full">
      <div className="text-gray-500 text-xs mb-1.5 font-medium">{label}</div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div 
            className="flex flex-wrap items-center gap-1.5 min-h-[42px] p-2 bg-white rounded-md border border-gray-300 hover:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all cursor-text"
            onClick={() => setIsOpen(true)}
          >
            {selectedItems.map((item) => (
              <Badge 
                key={item.id} 
                variant="secondary" 
                className="bg-blue-50 text-blue-700 border-blue-100 h-6 px-1.5 text-xs font-normal flex items-center gap-1"
              >
                {item.name}
                <div 
                  role="button" 
                  className="hover:bg-blue-200 rounded-full p-0.5 cursor-pointer"
                  onClick={(e) => removeItem(e, item.id)}
                >
                  <X className="h-3 w-3" />
                </div>
              </Badge>
            ))}
            {selectedItems.length === 0 && (
               <span className="text-gray-400 text-sm pl-1">{placeholder}</span>
            )}
            <div className="flex-1 min-w-[4px] h-5" /> {/* Caret placeholder area */}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Tabs defaultValue="select" className="w-full">
            <div className="border-b px-4 pt-2">
              <TabsList className="bg-transparent h-9 p-0 gap-6">
                <TabsTrigger 
                  value="select" 
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none px-0 pb-2 text-sm font-medium text-gray-500"
                >
                  Select sources
                </TabsTrigger>
                <TabsTrigger 
                  value="add" 
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none rounded-none px-0 pb-2 text-sm font-medium text-gray-500"
                >
                  Add a source
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="select" className="p-0 m-0">
               {/* Search could go here if needed */}
               <div className="py-2">
                 {CATEGORIES.map((cat, idx) => {
                   const isSelected = selectedItems.some(i => i.name === cat.name);
                   return (
                     <div 
                        key={idx}
                        className={cn(
                          "flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 cursor-pointer text-sm group",
                          isSelected && "bg-blue-50/50"
                        )}
                        onClick={() => toggleItem(cat)}
                     >
                       <div className="flex items-center gap-3">
                         {/* Optional check indicator for selection */}
                         <div className={cn(
                           "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                           isSelected ? "bg-blue-600 border-blue-600" : "border-gray-300 group-hover:border-gray-400"
                         )}>
                           {isSelected && <Check className="h-3 w-3 text-white" />}
                         </div>
                         <span className="text-gray-700">{cat.name}</span>
                       </div>
                       <div className="flex items-center gap-3 text-gray-400">
                         <span className="text-xs font-mono">{cat.count > 0 ? cat.count : 0}</span>
                         <ChevronRight className="h-4 w-4" />
                       </div>
                     </div>
                   );
                 })}
               </div>
            </TabsContent>
            
            <TabsContent value="add" className="p-4 m-0 text-center text-sm text-gray-500 min-h-[200px] flex items-center justify-center">
               Select "Add a source" to create new definitions.
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
}
