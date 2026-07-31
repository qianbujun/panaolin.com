import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

// Use Vite's ?raw suffix to import the markdown file as a plain string
import materialisticWorld from './articles/materialistic_world.md?raw';
import lifeMeanings from './articles/life_meanings.md?raw';

const articlesMap = {
  'materialistic-world': materialisticWorld,
  'life-meanings': lifeMeanings
};

function ArticleView() {
  const { id } = useParams();
  const content = articlesMap[id];

  if (!content) {
    return (
      <div className="main-content visible" style={{paddingTop: '40px'}}>
        <div className="section article-section">
          <div className="glass-panel content-container animate-fade-in">
            <Link to="/" className="btn btn-glass" style={{marginBottom: '20px'}}>
              <ArrowLeft size={20} /> 返回主页
            </Link>
            <h2>未找到该文章</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content visible" style={{paddingTop: '40px'}}>
      <div className="section article-section">
        <div className="glass-panel content-container animate-fade-in">
          <Link to="/" className="btn btn-glass" style={{marginBottom: '30px'}}>
            <ArrowLeft size={20} /> 返回主页
          </Link>
          <div className="article-body text-content">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleView;
