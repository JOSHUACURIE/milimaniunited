import React from 'react';
import './news.css'
const NewsAndStories: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <div className="news-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>News & Stories</span>
        </div>
        <h1 className="news-main-title">News & Stories</h1>
        <p className="news-subtitle">
          Latest updates, inspiring stories, and impactful news from our community transformation journey
        </p>
      </div>

      <div className="news-main-content">
        {/* Featured Story */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Featured Story</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="highlight-story">
            <div className="story-visual">
              <div className="visual-placeholder">📖</div>
            </div>
            <div className="story-info">
              <div className="story-tags">
                <span className="tag-category">Success Story</span>
                <span className="tag-date">March 15, 2024</span>
                <span className="tag-duration">5 min read</span>
              </div>
              <h2 className="story-headline">From Street Vendor to Business Owner: Mary's Journey</h2>
              <p className="story-summary">
                How our economic empowerment program transformed Mary's life from struggling 
                street vendor to successful business owner, creating opportunities for her 
                entire community in the process.
              </p>
              <div className="story-facts">
                <div className="fact-item">
                  <strong>Impact:</strong> 15 new jobs created in the community
                </div>
                <div className="fact-item">
                  <strong>Duration:</strong> 18-month support program
                </div>
                <div className="fact-item">
                  <strong>Location:</strong> Kibera Community
                </div>
              </div>
              <a href="/news/marys-journey" className="action-button">
                Read Full Story →
              </a>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Latest News</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="articles-grid">
            {/* News 1 */}
            <article className="article-card">
              <div className="article-image">
                <div className="image-box small">🎓</div>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span className="meta-category">Education</span>
                  <span className="meta-date">March 12, 2024</span>
                </div>
                <h3 className="article-title">50 Students Receive Scholarships for Higher Education</h3>
                <p className="article-preview">
                  Millimani United awards full scholarships to 50 deserving students from 
                  vulnerable backgrounds to pursue university education.
                </p>
                <a href="/news/scholarships-2024" className="link-more">Read More</a>
              </div>
            </article>

            {/* News 2 */}
            <article className="article-card">
              <div className="article-image">
                <div className="image-box small">🌱</div>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span className="meta-category">Environment</span>
                  <span className="meta-date">March 8, 2024</span>
                </div>
                <h3 className="article-title">Community Plants 10,000 Trees in Climate Action Initiative</h3>
                <p className="article-preview">
                  Over 500 community members participate in massive tree planting exercise 
                  to combat climate change and promote environmental conservation.
                </p>
                <a href="/news/tree-planting" className="link-more">Read More</a>
              </div>
            </article>

            {/* News 3 */}
            <article className="article-card">
              <div className="article-image">
                <div className="image-box small">💼</div>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span className="meta-category">Economic Empowerment</span>
                  <span className="meta-date">March 5, 2024</span>
                </div>
                <h3 className="article-title">New Vocational Training Center Opens in Rural Community</h3>
                <p className="article-preview">
                  State-of-the-art vocational training facility launched to provide 
                  practical skills to youth and women in underserved communities.
                </p>
                <a href="/news/vocational-center" className="link-more">Read More</a>
              </div>
            </article>

            {/* News 4 */}
            <article className="article-card">
              <div className="article-image">
                <div className="image-box small">🤝</div>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <span className="meta-category">Partnership</span>
                  <span className="meta-date">February 28, 2024</span>
                </div>
                <h3 className="article-title">Strategic Partnership with Tech Giant Boosts Digital Literacy</h3>
                <p className="article-preview">
                  New collaboration brings digital skills training and technology 
                  resources to 10,000 community members across 20 locations.
                </p>
                <a href="/news/tech-partnership" className="link-more">Read More</a>
              </div>
            </article>
          </div>
        </section>

        {/* Success Stories */}
        <section className="news-section">
          <div className="section-title-block">
            <h2 className="section-main-title">Success Stories</h2>
            <div className="title-underline"></div>
            <p className="section-description-text">
              Inspiring stories of transformation from the communities we serve
            </p>
          </div>
          
          <div className="stories-cards-grid">
            {/* Story 1 */}
            <div className="story-block">
              <div className="story-label">Personal Journey</div>
              <h3 className="story-block-title">Breaking Barriers: John's Path to Education</h3>
              <p className="story-block-text">
                Overcoming poverty and disability to become the first university graduate 
                in his family, inspiring his entire community to value education.
              </p>
              <div className="story-details">
                <span>📚 First graduate in family</span>
                <span>🌟 10 siblings inspired</span>
              </div>
              <a href="/stories/john-education" className="story-action-link">Read Story →</a>
            </div>

            {/* Story 2 */}
            <div className="story-block">
              <div className="story-label">Community Impact</div>
              <h3 className="story-block-title">Women's Cooperative Transforms Local Economy</h3>
              <p className="story-block-text">
                How a group of 30 women started a successful agricultural cooperative 
                that now supplies produce to major markets in the region.
              </p>
              <div className="story-details">
                <span>👩‍🌾 30 women empowered</span>
                <span>💰 Income increased by 300%</span>
              </div>
              <a href="/stories/women-cooperative" className="story-action-link">Read Story →</a>
            </div>

            {/* Story 3 */}
            <div className="story-block">
              <div className="story-label">Youth Empowerment</div>
              <h3 className="story-block-title">From Dropout to Tech Entrepreneur</h3>
              <p className="story-block-text">
                A young man's journey from school dropout to successful tech entrepreneur 
                through our digital skills training program.
              </p>
              <div className="story-details">
                <span>💻 Tech business started</span>
                <span>👥 5 employees hired</span>
              </div>
              <a href="/stories/youth-tech" className="story-action-link">Read Story →</a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="subscribe-section">
          <div className="subscribe-content">
            <h2 className="subscribe-title">Stay Updated</h2>
            <p className="subscribe-text">
              Never miss a story or important update from Millimani United. 
              Subscribe to our newsletter and be the first to know about our impact.
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button className="submit-button">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsAndStories;