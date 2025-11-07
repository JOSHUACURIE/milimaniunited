import React from 'react';
import '../styles/globals.css';

const NewsAndStories: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>News & Stories</span>
        </div>
        <h1 className="page-title">News & Stories</h1>
        <p className="page-subtitle">
          Latest updates, inspiring stories, and impactful news from our community transformation journey
        </p>
      </div>

      <div className="page-content">
        {/* Featured Story */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Story</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-story">
            <div className="story-image">
              <div className="image-placeholder">📖</div>
            </div>
            <div className="story-content">
              <div className="story-meta">
                <span className="category">Success Story</span>
                <span className="date">March 15, 2024</span>
                <span className="read-time">5 min read</span>
              </div>
              <h2>From Street Vendor to Business Owner: Mary's Journey</h2>
              <p className="story-excerpt">
                How our economic empowerment program transformed Mary's life from struggling 
                street vendor to successful business owner, creating opportunities for her 
                entire community in the process.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <strong>Impact:</strong> 15 new jobs created in the community
                </div>
                <div className="highlight">
                  <strong>Duration:</strong> 18-month support program
                </div>
                <div className="highlight">
                  <strong>Location:</strong> Kibera Community
                </div>
              </div>
              <a href="/news/marys-journey" className="read-more-button">
                Read Full Story →
              </a>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="content-section">
          <div className="section-header">
            <h2>Latest News</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="news-grid">
            {/* News 1 */}
            <article className="news-card">
              <div className="news-image">
                <div className="image-placeholder small">🎓</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="category">Education</span>
                  <span className="date">March 12, 2024</span>
                </div>
                <h3>50 Students Receive Scholarships for Higher Education</h3>
                <p>
                  Millimani United awards full scholarships to 50 deserving students from 
                  vulnerable backgrounds to pursue university education.
                </p>
                <a href="/news/scholarships-2024" className="read-more">Read More</a>
              </div>
            </article>

            {/* News 2 */}
            <article className="news-card">
              <div className="news-image">
                <div className="image-placeholder small">🌱</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="category">Environment</span>
                  <span className="date">March 8, 2024</span>
                </div>
                <h3>Community Plants 10,000 Trees in Climate Action Initiative</h3>
                <p>
                  Over 500 community members participate in massive tree planting exercise 
                  to combat climate change and promote environmental conservation.
                </p>
                <a href="/news/tree-planting" className="read-more">Read More</a>
              </div>
            </article>

            {/* News 3 */}
            <article className="news-card">
              <div className="news-image">
                <div className="image-placeholder small">💼</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="category">Economic Empowerment</span>
                  <span className="date">March 5, 2024</span>
                </div>
                <h3>New Vocational Training Center Opens in Rural Community</h3>
                <p>
                  State-of-the-art vocational training facility launched to provide 
                  practical skills to youth and women in underserved communities.
                </p>
                <a href="/news/vocational-center" className="read-more">Read More</a>
              </div>
            </article>

            {/* News 4 */}
            <article className="news-card">
              <div className="news-image">
                <div className="image-placeholder small">🤝</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="category">Partnership</span>
                  <span className="date">February 28, 2024</span>
                </div>
                <h3>Strategic Partnership with Tech Giant Boosts Digital Literacy</h3>
                <p>
                  New collaboration brings digital skills training and technology 
                  resources to 10,000 community members across 20 locations.
                </p>
                <a href="/news/tech-partnership" className="read-more">Read More</a>
              </div>
            </article>
          </div>
        </section>

        {/* Success Stories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Success Stories</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Inspiring stories of transformation from the communities we serve
            </p>
          </div>
          
          <div className="stories-grid">
            {/* Story 1 */}
            <div className="story-card">
              <div className="story-type">Personal Journey</div>
              <h3>Breaking Barriers: John's Path to Education</h3>
              <p>
                Overcoming poverty and disability to become the first university graduate 
                in his family, inspiring his entire community to value education.
              </p>
              <div className="story-stats">
                <span>📚 First graduate in family</span>
                <span>🌟 10 siblings inspired</span>
              </div>
              <a href="/stories/john-education" className="story-link">Read Story →</a>
            </div>

            {/* Story 2 */}
            <div className="story-card">
              <div className="story-type">Community Impact</div>
              <h3>Women's Cooperative Transforms Local Economy</h3>
              <p>
                How a group of 30 women started a successful agricultural cooperative 
                that now supplies produce to major markets in the region.
              </p>
              <div className="story-stats">
                <span>👩‍🌾 30 women empowered</span>
                <span>💰 Income increased by 300%</span>
              </div>
              <a href="/stories/women-cooperative" className="story-link">Read Story →</a>
            </div>

            {/* Story 3 */}
            <div className="story-card">
              <div className="story-type">Youth Empowerment</div>
              <h3>From Dropout to Tech Entrepreneur</h3>
              <p>
                A young man's journey from school dropout to successful tech entrepreneur 
                through our digital skills training program.
              </p>
              <div className="story-stats">
                <span>💻 Tech business started</span>
                <span>👥 5 employees hired</span>
              </div>
              <a href="/stories/youth-tech" className="story-link">Read Story →</a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Stay Updated</h2>
            <p>
              Never miss a story or important update from Millimani United. 
              Subscribe to our newsletter and be the first to know about our impact.
            </p>
            <div className="newsletter-signup">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsAndStories;