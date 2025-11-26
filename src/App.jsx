import React, { useState, useEffect } from 'react';
import { Home, BookA, Gamepad2, User, Menu, X, Trophy, ChevronRight, Settings, Volume2, Globe, HandshakeIcon, User2, HandFist, Users } from 'lucide-react';
import { translations } from './translations';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [volume, setVolume] = useState(70);
  const [mainFilter, setMainFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const t = translations[language];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // O'yinlar va darslar ma'lumotlari
  const games = [
    { id: 1, title: 'Firestone', rating: 67, image: '🏰', category: 'harflar', type: 'lessons'},
    { id: 2, title: 'Neon Car', rating: 66, image: '🚗', category: 'texnika', type: 'games'},
    { id: 3, title: 'Western Cowboy', rating: 76, image: '🤠', category: 'harflar', type: 'games' },
    { id: 4, title: 'Hidden Objects', rating: 74, image: '🔍', category: 'sonlar', type: 'lessons' },
    { id: 5, title: 'BMW M5', rating: 74, image: '🚙', category: 'texnika', type: 'games' },
    { id: 6, title: 'Racing 3D', rating: 78, image: '🏎️', category: 'texnika', type: 'games' },
    { id: 7, title: 'Love Match', rating: 87, image: '💕', category: 'sonlar', type: 'games', premium: true },
    { id: 8, title: 'Farm Building', rating: 83, image: '🏡', category: 'tabiat', type: 'lessons', premium: true },
    { id: 9, title: 'Desert Shooter', rating: 68, image: '🔫', category: 'harflar', type: 'games' },
    { id: 10, title: 'War Plane', rating: 71, image: '✈️', category: 'tabiat', type: 'games', premium: true },
    { id: 11, title: 'Tetris', rating: 82, image: '🟦', category: 'sonlar', type: 'games' },
    { id: 12, title: 'Fireboy & Watergirl', rating: 74, image: '🔥', category: 'robot', type: 'lessons' },
    { id: 13, title: 'FIFA World Cup', rating: 65, image: '⚽', category: 'informatika', type: 'games' },
    { id: 14, title: 'Card Games', rating: 90, image: '🃏', category: 'math', type: 'lessons' },
    { id: 15, title: '2048', rating: 88, image: '🔢', category: 'math', type: 'games' },
    { id: 16, title: '2+3', rating: 55, image: '🔢', category: 'math', type: 'lessons' },
    { id: 17, title: 'Alifbe Darsi', rating: 91, image: '📖', category: 'alifbe', type: 'lessons' },
    { id: 18, title: 'Robot Yasash', rating: 85, image: '🤖', category: 'robot', type: 'lessons', premium: true },
  ];

  // Sidebar kategoriyalari
  const categories = [
    { id: 'harflar', nameKey: 'letters', icon: '🔤' },
    { id: 'sonlar', nameKey: 'numbers', icon: '🔢' },
    { id: 'alifbe', nameKey: 'alphabet', icon: '📚' },
    { id: 'math', nameKey: 'math', icon: '➕' },
    { id: 'texnika', nameKey: 'technique', icon: '🚗' },
    { id: 'informatika', nameKey: 'informatics', icon: '💻' },
    { id: 'tabiat', nameKey: 'nature', icon: '🌳' },
    { id: 'robot', nameKey: 'robot', icon: '🤖' },
    { id: 'boshqalar', nameKey: 'others', icon: '💎' },
  ];

  // Filtrlangan elementlar
  const filteredItems = games.filter(item => {
    const matchesMainFilter = mainFilter === 'all' || item.type === mainFilter;
    const matchesCategoryFilter = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesMainFilter && matchesCategoryFilter;
  });

  const handleGameClick = (game) => {
    alert(`${game.title} ${game.type === 'lessons' ? 'darsi' : "o'yini"} ochilmoqda...`);
  };

  const handleCategoryClick = (categoryId) => {
    setCategoryFilter(categoryId);
    setSidebarOpen(false);
  };

  const handleMainFilterClick = (filter) => {
    setMainFilter(filter);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar-left">
          <button className="menu-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </button>
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">Alifbe</span>
          </div>
        </div>

        {!isMobile && (
          <>
            <nav className="nav-links">
              <a href="#" className="nav-link">{t.home}</a>
              <a href="#aboutus" className="nav-link">{t.aboutus}</a>
              <a href="#partner" className="nav-link">{t.partner}</a>
              <a href="#profile" className="nav-link">{t.profile}</a>
            </nav>

            <div className="nav-right">
              <div className="trophy">
                <Trophy size={20} color="white" />
                <span>{t.achievements}</span>
              </div>
              <button className="settings-btn" onClick={() => setSettingsOpen(!settingsOpen)}>
                <Settings size={22} />
              </button>
              <div className="profile-btn">
                <span className="profile-text">Arslon01</span>
                <div className="avatar">👤</div>
              </div>
            </div>
          </>
        )}

        {isMobile && (
          <div className="nav-right">
            <div className="trophy">
              <Trophy size={18} color="white" />
              <span>{t.achievements}</span>
            </div>
            <button className="settings-btn" onClick={() => setSettingsOpen(!settingsOpen)}>
              <Settings size={20} />
            </button>
            <div className="profile-btn">
              <span className="profile-text">Arslon01 L1</span>
              <div className="avatar">👤</div>
            </div>
          </div>
        )}
      </header>

      {/* Settings Modal */}
      {settingsOpen && (
        <>
          <div className="settings-overlay" onClick={() => setSettingsOpen(false)} />
          <div className="settings-modal">
            <div className="settings-header">
              <h2 className="settings-title">{t.settings}</h2>
              <button className="close-settings-btn" onClick={() => setSettingsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Language Selection */}
            <div className="setting-section">
              <div className="setting-label">
                <Globe size={20} />
                <span>{t.language}</span>
              </div>
              <div className="language-buttons">
                <button 
                  className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
                  onClick={() => setLanguage('uz')}
                >
                  O'zbek
                </button>
                <button 
                  className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                  onClick={() => setLanguage('ru')}
                >
                  Русский
                </button>
                <button 
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
              </div>
            </div>

            {/* Volume Control */}
            <div className="setting-section">
              <div className="setting-label">
                <Volume2 size={20} />
                <span>{t.volume}</span>
              </div>
              <div className="volume-control">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="volume-slider"
                  style={{
                    background: `linear-gradient(to right, #4b30fb ${volume}%, #e0e0e0 ${volume}%)`
                  }}
                />
                <span className="volume-value">{volume}%</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Menu size={24} color="#4b30fb" />
            <span className="sidebar-title">{t.all}</span>
            <button className="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <button 
            className="category-btn"
            onClick={() => handleCategoryClick('all')}
            style={{
              background: categoryFilter === 'all' ? 'linear-gradient(90deg, #4b30fb 0%, #764ba2 100%)' : 'linear-gradient(90deg, #00ff88 0%, #00d9ff 100%)'
            }}
          >
            <span className="category-icon">📋</span>
            <span className="category-name">{t.all}</span>
            <ChevronRight size={16} className="chevron" />
          </button>

          {categories.map(cat => (
            <button 
              key={cat.id} 
              className="category-btn"
              onClick={() => handleCategoryClick(cat.id)}
              style={{
                background: categoryFilter === cat.id ? 'linear-gradient(90deg, #4b30fb 0%, #764ba2 100%)' : 'linear-gradient(90deg, #00ff88 0%, #00d9ff 100%)'
              }}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{t[cat.nameKey]}</span>
              <ChevronRight size={16} className="chevron" />
            </button>
          ))}
        </aside>

        {/* Games Grid */}
        <main className={`games-section ${!isMobile && sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="section-header">
            <button 
              className={`tab-btn ${mainFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleMainFilterClick('all')}
            >
              <Home size={20} />
              <span>{t.all}</span>
            </button>
            <button 
              className={`tab-btn ${mainFilter === 'lessons' ? 'active' : ''}`}
              onClick={() => handleMainFilterClick('lessons')}
            >
              <BookA size={20} />
              <span>{t.lessons}</span>
            </button>
            <button 
              className={`tab-btn ${mainFilter === 'games' ? 'active' : ''}`}
              onClick={() => handleMainFilterClick('games')}
            >
              <Gamepad2 size={20} />
              <span>{t.games}</span>
            </button>
            <input 
              type="text" 
              placeholder={t.search}
              className="search-input"
            />
          </div>

          <div className={`games-grid ${isMobile ? 'mobile' : ''}`}>
            {filteredItems.map(game => (
              <div 
                key={game.id} 
                className="game-card"
                onClick={() => handleGameClick(game)}
              >
                {game.premium && (
                  <span className="premium-badge">{t.premium}</span>
                )}
                <div className="game-image">
                  <span className="game-emoji">{game.image}</span>
                </div>
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                  <div className="rating">{game.rating}</div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '16px' }}>Hech narsa topilmadi</p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Bottom Navbar */}
      {isMobile && (
        <nav className="mobile-navbar">
          <button 
            className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={22} />
            <span>{t.home}</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'lessons' ? 'active' : ''}`}
            onClick={() => setActiveTab('lessons')}
          >
            <Users size={22} />
            <span>{t.aboutus}</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'games' ? 'active' : ''}`}
            onClick={() => setActiveTab('games')}
          >
            <HandshakeIcon size={22} />
            <span>{t.partner}</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={22} />
            <span>{t.profile}</span>
          </button>
        </nav>
      )}

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default App;
