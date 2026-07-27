import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, Github, Twitter, Tv } from 'lucide-react';
import ArticleView from './ArticleView';
import './App.css';

// Configuration for Background and BGM pairs.
// Add your files to the public/media/ folder and update this array.
const MEDIA_PAIRS = [
  { bg: '/media/bg1.png', bgm: '/media/bgm1.mp3' },
  { bg: '/media/bg2.jpg', bgm: '/media/bgm2.mp3' },
];

function Home() {
  return (
    <div className="main-content visible">
      {/* Toki Pona Section */}
      <section id="toki-pona" className="section toki-pona-section">
        <div className="glass-panel content-container animate-fade-in delay-100">
          <h2>关于 "panaolin.com"</h2>
          <h3>tawa ma jaki ni la, mi pana e olin ali mi.</h3>
          <div className="text-content">
            <p>
              在 <strong>toki pona</strong> 这门非常简单的语言里，<code>pana olin</code> 是由两个词组成的：<br/>
              <code>pana</code> = 给、送出、分享<br/>
              <code>olin</code> = 爱、关心、温暖的情感<br/>
              把它们放在一起，<code>pana olin</code> 的字面意思就是 <strong>“把爱给出去”</strong>。
            </p>
            
            <h4>toki pona 是什么？</h4>
            <p>
              toki pona 是一门非常迷你的“人造语言”，由加拿大的 Sonja Lang 在 2001 年创造。它的名字直译就是“好的语言”。
            </p>
            <p>它的核心特点很突出：</p>
            <ul>
              <li><strong>词汇极少</strong>：词汇总量只有 120 到 137 个左右，需要表达复杂意思时，就得把简单词组合起来。</li>
              <li><strong>规则极简</strong>：发音、语法都非常规律，没有例外。</li>
              <li><strong>背后的哲学</strong>：它不是追求精确描述世界，而是引导人抓住事物的本质，用最简单、积极的方式去思考和生活。它鼓励你说话时专注于善良、和谐与当下。</li>
            </ul>
            <p>
              所以，toki pona 表达一个意思，往往不是给出现成的复杂词汇，而是用最简单的词，从“根”上描述一个概念。<code>pana olin</code> 就是这种思维的典型例子。
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="glass-panel content-container animate-fade-in delay-200">
          <h2>项目 / Projects</h2>
          <div className="projects-grid">
            
            <a href="https://thfuda.panaolin.com" target="_blank" rel="noreferrer" className="glass-card project-card">
              <h3>东方札</h3>
              <p>thfuda.panaolin.com</p>
              <span className="desc">东方Project主题花札游戏。</span>
            </a>

            <a href="https://fagent.panaolin.com" target="_blank" rel="noreferrer" className="glass-card project-card">
              <h3>金融助手</h3>
              <p>fagent.panaolin.com</p>
              <span className="desc">个人理财与金融数据辅助工具。（暂不对外开放）</span>
            </a>

            <a href="https://pud.panaolin.com" target="_blank" rel="noreferrer" className="glass-card project-card">
              <h3>谁偷了我的布丁？</h3>
              <p>pud.panaolin.com</p>
              <span className="desc">东方Project二创推理游戏。邀请码可以通过twitter、bilibili等私信我获取！</span>
            </a>

            <a href="https://th1.panaolin.com" target="_blank" rel="noreferrer" className="glass-card project-card">
              <h3>東方ミニゲーム MARISA-HIGHLOW </h3>
              <p>th1.panaolin.com</p>
              <span className="desc">【R-15 Attention!】一款非常小的小游戏，关于魔理沙的猜大小游戏。非本人创作。略恐怖。</span>
            </a>
          </div>
        </div>
      </section>

      {/* Personal & Articles Section */}
      <section id="about" className="section personal-section">
        <div className="glass-panel content-container animate-fade-in delay-300">
          <h2>关于我 / About Me</h2>
          <div className="personal-content">
            <div className="bio">
              <p>我是qianbujun，主业程序员。喜欢开发一些有趣的东西。平常还写一些文章，希望你喜欢！</p>
              
              <div className="social-links">
                <a href="https://github.com/qianbujun" target="_blank" rel="noreferrer" className="btn btn-glass">
                  <Github size={20} /> GitHub
                </a>
                <a href="https://x.com/qian_bu_jun" target="_blank" rel="noreferrer" className="btn btn-glass">
                  <Twitter size={20} /> Twitter
                </a>
                <a href="https://bangumi.tv/user/qianbujun" target="_blank" rel="noreferrer" className="btn btn-glass">
                  <Tv size={20} /> Bangumi
                </a>
                <a href="https://space.bilibili.com/352690154" target="_blank" rel="noreferrer" className="btn btn-glass">
                  <Tv size={20} /> Bilibili
                </a>
              </div>
            </div>

            <div className="articles">
              <h3>文章 / Articles</h3>
              <div className="articles-list">
                <Link to="/article/materialistic-world" className="glass-card article-card" style={{display: 'block', textDecoration: 'none'}}>
                  <h4>世界是唯物的</h4>
                  <p>一篇关于物质与意识谁为本原的思考的小说。</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} panaolin. o pana e olin a.</p>
      </footer>
    </div>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Select a random media pair on load
    const randomIndex = Math.floor(Math.random() * MEDIA_PAIRS.length);
    setMediaIndex(randomIndex);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const currentMedia = MEDIA_PAIRS[mediaIndex] || { bg: '', bgm: '' };

  return (
    <div className="app-container with-sidebar">
      {/* Background Image */}
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${currentMedia.bg})` }}
      />
      
      {/* Fallback color if image is missing */}
      <div className="background-fallback" />

      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src={currentMedia.bgm} 
        loop 
      />

      {/* Music Toggle Button (Fixed) */}
      <button className="music-toggle btn-glass" onClick={toggleMusic} aria-label="Toggle Music">
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Mobile Sidebar Toggle Button */}
      <button className="sidebar-toggle btn-glass" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle Sidebar">
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`sidebar glass-panel ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1>panaolin</h1>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={closeSidebar} className="btn btn-glass">首页 Home</Link>
          <a href="/#toki-pona" onClick={closeSidebar} className="btn btn-glass">关于 panaolin.com</a>
          <a href="/#projects" onClick={closeSidebar} className="btn btn-glass">项目 Projects</a>
          <a href="/#about" onClick={closeSidebar} className="btn btn-glass">关于我 About Me</a>
        </nav>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
