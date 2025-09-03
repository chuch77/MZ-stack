
import React, { useState } from 'react';
import { 
  useStockData, useMarketIndices, useCurrencyPairs, 
  mockStocks, mockIndices, mockCurrencies, mockNews,
  generatePriceHistory 
} from '@/utils/stocksApi';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { StockCard } from '@/components/stocks/StockCard';
import { StockChart } from '@/components/stocks/StockChart';
import { MarketOverview } from '@/components/markets/MarketOverview';
import { CurrencyExchange } from '@/components/currencies/CurrencyExchange';
import { NewsCard } from '@/components/news/NewsCard';
import { StatsCard } from '@/components/ui/StatsCard';
import { ShoppingCart, TrendingDown, TrendingUp, Package } from 'lucide-react';

export function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedStock, setSelectedStock] = useState(mockStocks[0]);
  
  // Use our hooks to get real-time mock data
  const stocks = useStockData(mockStocks);
  const indices = useMarketIndices(mockIndices);
  const currencies = useCurrencyPairs(mockCurrencies);
  
  // Generate chart data for the selected stock
  const selectedStockHistory = generatePriceHistory(30, selectedStock.price, 2);
  
  // Generate chart data for stock cards
  const stocksWithHistory = stocks.map(stock => {
    return {
      ...stock,
      priceHistory: generatePriceHistory(30, stock.price, 2)
    };
  });
  
  // Calculate market statistics
  const gainers = stocks.filter(stock => stock.changePercent > 0);
  const losers = stocks.filter(stock => stock.changePercent < 0);
  
  const topGainer = [...stocks].sort((a, b) => b.changePercent - a.changePercent)[0];
  const topLoser = [...stocks].sort((a, b) => a.changePercent - b.changePercent)[0];
  
  const totalMarketCap = stocks.reduce((sum, stock) => sum + stock.marketCap, 0);
  const totalVolume = stocks.reduce((sum, stock) => sum + stock.volume, 0);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex">
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className="flex-1 transition-all duration-300">
          <div className="container max-w-full p-2 sm:p-4 lg:p-6 animate-fade-in">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">StyleHub Dashboard</h1>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6 animate-slide-up" style={{ '--delay': '100ms' } as React.CSSProperties}>
              <StatsCard 
                title="Total Sales" 
                value="$2.8M"
                trend={0.47}
                icon={<Package />}
                className="bg-primary/5"
              />
              <StatsCard 
                title="Orders Today" 
                value="1,247"
                description="Orders processed"
                icon={<ShoppingCart />}
                className="bg-primary/5"
              />
              <StatsCard 
                title="Best Seller" 
                value={topGainer.symbol}
                trend={topGainer.changePercent}
                trendLabel={topGainer.name}
                icon={<TrendingUp />}
                className="bg-success/5"
              />
              <StatsCard 
                title="Least Sold" 
                value={topLoser.symbol}
                trend={topLoser.changePercent}
                trendLabel={topLoser.name}
                icon={<TrendingDown />}
                className="bg-danger/5"
              />
            </div>
            
            {/* Main Content Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-6">
              {/* Left column - Stock list */}
              <div className="xl:col-span-1 order-2 xl:order-1 space-y-3 sm:space-y-4 animate-slide-up" style={{ '--delay': '200ms' } as React.CSSProperties}>
                <h2 className="text-lg sm:text-xl font-semibold">Featured Products</h2>
                <div className="space-y-3 sm:space-y-4">
                  {stocksWithHistory.slice(0, 5).map((stock) => (
                    <StockCard 
                      key={stock.symbol} 
                      stock={stock} 
                      priceHistory={stock.priceHistory}
                      onClick={() => setSelectedStock(stock)}
                      className={selectedStock.symbol === stock.symbol ? "ring-2 ring-primary" : ""}
                    />
                  ))}
                </div>
              </div>
              
              {/* Middle column - Chart and news */}
              <div className="xl:col-span-2 order-1 xl:order-2 space-y-3 sm:space-y-4 animate-slide-up" style={{ '--delay': '300ms' } as React.CSSProperties}>
                <StockChart 
                  symbol={selectedStock.symbol} 
                  name={selectedStock.name} 
                  currentPrice={selectedStock.price}
                  volatility={2.5}
                />
                <NewsCard news={mockNews} className="mt-3 sm:mt-6" />
              </div>
              
              {/* Right column - Markets and currencies */}
              <div className="xl:col-span-1 order-3 space-y-3 sm:space-y-4 animate-slide-up" style={{ '--delay': '400ms' } as React.CSSProperties}>
                <MarketOverview indices={indices} />
                <CurrencyExchange currencies={currencies} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
