import React, { useState } from 'react';
import { Menu, X, TrendingUp, DollarSign, BookOpen, Shield, Users, Building, Briefcase, Target, Award, AlertTriangle, CreditCard, PiggyBank, Lightbulb, GraduationCap } from 'lucide-react';

const FinanceWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Home', icon: TrendingUp },
    { id: 'advice', name: '15 Financial Tips', icon: Lightbulb },
    { id: 'crises', name: 'Financial Crises', icon: AlertTriangle },
    { id: 'idols', name: 'Financial Icons', icon: Award },
    { id: 'history', name: 'Finance History', icon: BookOpen },
    { id: 'crypto-scams', name: 'Crypto Scams', icon: Shield },
    { id: 'scams', name: 'Financial Scams', icon: AlertTriangle },
    { id: 'banking', name: 'Banking System', icon: Building },
    { id: 'daily-finance', name: 'Finance in Life', icon: CreditCard },
    { id: 'assets', name: 'Asset Holding', icon: Briefcase },
    { id: 'asset-companies', name: 'Top Asset Managers', icon: Building },
    { id: 'asset-mgmt', name: 'Asset Management', icon: Target },
    { id: 'discipline', name: 'Financial Discipline', icon: GraduationCap },
    { id: 'compound', name: 'Compound Interest', icon: TrendingUp },
    { id: 'investing', name: 'Start Investing', icon: PiggyBank },
  ];

  const AdSpace = ({ size = 'large' }) => (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center my-6 ${size === 'large' ? 'h-32' : 'h-24'}`}>
      <p className="text-gray-400 font-medium">Advertisement Space</p>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Financial Education Hub</h1>
        <p className="text-xl mb-6">Your comprehensive guide to mastering personal finance and building wealth</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Start Learning
        </button>
      </div>

      <AdSpace />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Learn the Basics</h3>
          <p className="text-gray-600">Start your financial journey with essential concepts and practical advice.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <Shield className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Stay Protected</h3>
          <p className="text-gray-600">Learn about common scams and how to protect your hard-earned money.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Build Wealth</h3>
          <p className="text-gray-600">Discover strategies to grow your wealth and achieve financial freedom.</p>
        </div>
      </div>

      <AdSpace size="small" />

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6">Featured Topics</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {navigation.slice(1, 9).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition text-left"
              >
                <Icon className="w-8 h-8 text-blue-600 mr-3" />
                <span className="font-semibold">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AdSpace />
    </div>
  );

  const FinancialAdvicePage = () => (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">15 Essential Financial Tips</h1>
      <p className="text-lg text-gray-600">Master these fundamental principles to build a strong financial foundation.</p>
      
      <AdSpace />

      {[
        { title: "Create a Budget and Track Expenses", desc: "Understanding where your money goes is the first step to financial success. Use budgeting apps or spreadsheets to monitor every dollar. The 50/30/20 rule is a great starting point: allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment." },
        { title: "Build an Emergency Fund", desc: "Aim to save 3-6 months of living expenses in a readily accessible account. This safety net protects you from unexpected job loss, medical emergencies, or urgent home repairs without resorting to high-interest debt." },
        { title: "Pay Yourself First", desc: "Treat savings as a non-negotiable expense. Set up automatic transfers to your savings account right after receiving your paycheck. This ensures you save consistently before spending on discretionary items." },
        { title: "Eliminate High-Interest Debt", desc: "Credit card debt with 15-25% interest rates can cripple your finances. Use the avalanche method (paying highest interest first) or snowball method (paying smallest balances first) to systematically eliminate debt." },
        { title: "Start Investing Early", desc: "Thanks to compound interest, starting in your 20s versus 30s can result in hundreds of thousands more at retirement. Even small amounts invested consistently grow significantly over decades." },
        { title: "Maximize Employer Retirement Contributions", desc: "If your employer offers matching contributions to a 401(k), contribute at least enough to get the full match. It's essentially free money that significantly boosts your retirement savings." },
        { title: "Diversify Your Investments", desc: "Don't put all eggs in one basket. Spread investments across stocks, bonds, real estate, and other assets. Diversification reduces risk and smooths returns over time." },
      ].map((tip, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-3">{idx + 1}. {tip.title}</h3>
          <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
        </div>
      ))}

      <AdSpace size="small" />

      {[
        { title: "Live Below Your Means", desc: "Just because you can afford something doesn't mean you should buy it. Maintain a lifestyle below your income level to create margin for savings and investments. Avoid lifestyle inflation as your income grows." },
        { title: "Understand Tax-Advantaged Accounts", desc: "Utilize IRAs, HSAs, and 529 plans to minimize taxes while saving for retirement, healthcare, and education. These accounts offer significant tax benefits that accelerate wealth building." },
        { title: "Invest in Yourself", desc: "Education, skills training, and health are investments with lifelong returns. A higher income from career advancement can dwarf investment returns, especially early in your career." },
        { title: "Review and Adjust Insurance Coverage", desc: "Ensure adequate health, life, disability, and property insurance. Review policies annually to avoid being underinsured or overpaying for coverage you don't need." },
        { title: "Avoid Emotional Financial Decisions", desc: "Fear and greed drive poor investment choices. Stick to your long-term plan during market volatility. The best investors remain calm and disciplined through ups and downs." },
        { title: "Set Clear Financial Goals", desc: "Define specific, measurable goals with timelines—like saving $50,000 for a home down payment in 5 years. Clear goals provide motivation and direction for your financial decisions." },
        { title: "Practice Delayed Gratification", desc: "Wait 24-48 hours before major purchases. This cooling-off period helps distinguish between wants and needs, preventing impulse purchases that derail your budget." },
        { title: "Continuously Educate Yourself", desc: "Financial literacy is a lifelong journey. Read books, follow reputable financial blogs, and stay informed about economic trends. Knowledge empowers better financial decisions throughout your life." },
      ].map((tip, idx) => (
        <div key={idx + 7} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold text-blue-600 mb-3">{idx + 8}. {tip.title}</h3>
          <p className="text-gray-700 leading-relaxed">{tip.desc}</p>
        </div>
      ))}

      <AdSpace />
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'advice':
        return <FinancialAdvicePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <DollarSign className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">FinanceHub</span>
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className="hidden md:flex space-x-1">
              {navigation.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    currentPage === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Sidebar for desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">All Topics</h3>
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                        currentPage === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {renderPage()}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">About FinanceHub</h4>
              <p className="text-gray-300 text-sm">Your trusted resource for financial education and wealth building strategies.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Disclaimer</h4>
              <p className="text-gray-300 text-sm">This website provides educational content only. Always consult a financial advisor before making investment decisions.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 FinanceHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinanceWebsite;