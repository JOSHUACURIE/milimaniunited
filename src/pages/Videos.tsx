import React from 'react';
import '../styles/globals.css';

const Videos: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/media">Media</a> &gt; <span>Videos</span>
        </div>
        <h1 className="page-title">Videos</h1>
        <p className="page-subtitle">
          Watch our journey, impact stories, and community transformations in motion
        </p>
      </div>

      <div className="page-content">
        {/* Featured Video */}
        <section className="content-section">
          <div className="section-header">
            <h2>Featured Video</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-video">
            <div className="video-container">
              <div className="video-placeholder">
                <div className="play-icon">▶</div>
                <div className="video-overlay">
                  <h3>Millimani United: Our Impact Story</h3>
                  <p>Watch how we're transforming communities across the region</p>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h3>Our Impact Story</h3>
              <p>
                This documentary showcases the incredible journey of Millimani United over the past 
                five years. From humble beginnings to becoming a catalyst for community transformation, 
                witness the stories of hope, resilience, and empowerment.
              </p>
              <div className="video-meta">
                <span className="duration">15:30</span>
                <span className="views">2,500+ views</span>
                <span className="date">Posted: March 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Categories */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Categories</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="video-categories">
            <div className="category-card">
              <div className="category-icon">🎓</div>
              <h3>Education Programs</h3>
              <p>Classroom transformations, scholarship stories, and learning initiatives</p>
              <span className="video-count">12 videos</span>
            </div>
            
            <div className="category-card">
              <div className="category-icon">💼</div>
              <h3>Economic Empowerment</h3>
              <p>Entrepreneurship success stories and vocational training highlights</p>
              <span className="video-count">8 videos</span>
            </div>
            
            <div className="category-card">
              <div className="category-icon">🌱</div>
              <h3>Environmental Projects</h3>
              <p>Sustainability initiatives and community conservation efforts</p>
              <span className="video-count">6 videos</span>
            </div>
            
            <div className="category-card">
              <div className="category-icon">🤝</div>
              <h3>Community Stories</h3>
              <p>Personal journeys and community transformation narratives</p>
              <span className="video-count">15 videos</span>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="content-section">
          <div className="section-header">
            <h2>Video Gallery</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Explore our collection of videos showcasing programs, events, and success stories
            </p>
          </div>
          
          <div className="video-gallery">
            {/* Video 1 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">5:30</div>
              </div>
              <div className="video-details">
                <h3>Scholarship Award Ceremony 2024</h3>
                <p>Celebrating 50 students receiving educational scholarships</p>
                <div className="video-meta">
                  <span className="views">1.2K views</span>
                  <span className="date">2 weeks ago</span>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">8:15</div>
              </div>
              <div className="video-details">
                <h3>Women Entrepreneurship Program</h3>
                <p>Empowering women through business skills training</p>
                <div className="video-meta">
                  <span className="views">2.1K views</span>
                  <span className="date">1 month ago</span>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">12:45</div>
              </div>
              <div className="video-details">
                <h3>Tree Planting Initiative</h3>
                <p>Community coming together for environmental conservation</p>
                <div className="video-meta">
                  <span className="views">3.5K views</span>
                  <span className="date">2 months ago</span>
                </div>
              </div>
            </div>

            {/* Video 4 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">6:20</div>
              </div>
              <div className="video-details">
                <h3>Digital Literacy Program</h3>
                <p>Bridging the digital divide in rural communities</p>
                <div className="video-meta">
                  <span className="views">1.8K views</span>
                  <span className="date">3 months ago</span>
                </div>
              </div>
            </div>

            {/* Video 5 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">10:10</div>
              </div>
              <div className="video-details">
                <h3>Health Camp Success Story</h3>
                <p>Medical outreach serving 500+ community members</p>
                <div className="video-meta">
                  <span className="views">4.2K views</span>
                  <span className="date">4 months ago</span>
                </div>
              </div>
            </div>

            {/* Video 6 */}
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="play-button">▶</div>
                </div>
                <div className="video-duration">7:35</div>
              </div>
              <div className="video-details">
                <h3>Youth Leadership Forum</h3>
                <p>Empowering the next generation of community leaders</p>
                <div className="video-meta">
                  <span className="views">2.9K views</span>
                  <span className="date">5 months ago</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Channel CTA */}
        <section className="cta-section youtube-cta">
          <div className="cta-content">
            <div className="youtube-icon">📺</div>
            <h2>Subscribe to Our YouTube Channel</h2>
            <p>
              Stay updated with our latest videos, success stories, and community impact updates. 
              Be the first to watch new content and join our growing community of supporters.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary"
              >
                Visit Our Channel
              </a>
              <a href="/media/gallery" className="cta-button secondary">
                View Photo Gallery
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;