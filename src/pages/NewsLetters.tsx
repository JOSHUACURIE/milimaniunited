import React from 'react';
import '../styles/globals.css';

const Newsletters: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Newsletters</span>
        </div>
        <h1 className="page-title">Newsletters</h1>
        <p className="page-subtitle">
          Monthly updates, inspiring stories, and impact reports delivered straight to your inbox
        </p>
      </div>

      <div className="page-content">
        {/* Latest Newsletter */}
        <section className="content-section">
          <div className="section-header">
            <h2>Latest Edition</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-newsletter">
            <div className="newsletter-cover">
              <div className="edition-info">
                <div className="edition-month">March 2024</div>
                <div className="edition-title">Spring of Transformation</div>
                <div className="edition-theme">Celebrating Women's Impact & Environmental Stewardship</div>
                <div className="edition-badge">New</div>
              </div>
            </div>
            <div className="newsletter-content">
              <div className="content-highlights">
                <h3>In This Edition</h3>
                <ul>
                  <li>🌟 <strong>Women Leading Change:</strong> Success stories from our women empowerment programs</li>
                  <li>🌳 <strong>Green Revolution:</strong> 10,000 trees planted in community conservation drive</li>
                  <li>🎓 <strong>Education Milestone:</strong> 50 students receive university scholarships</li>
                  <li>🤝 <strong>Partnership Spotlight:</strong> New collaboration with TechForward Inc.</li>
                  <li>📅 <strong>Upcoming Events:</strong> Community festival and youth leadership forum</li>
                </ul>
              </div>
              
              <div className="featured-story-preview">
                <h4>Featured Story: Women Transforming Communities</h4>
                <p>
                  Meet Sarah, a single mother who transformed her small vegetable stand into a thriving 
                  agricultural business, creating jobs for 15 other women in her community. Her journey 
                  from struggle to success exemplifies the power of our economic empowerment programs.
                </p>
                <div className="story-stats">
                  <span>💼 15 new jobs created</span>
                  <span>📈 300% income growth</span>
                  <span>🌱 Sustainable farming practices</span>
                </div>
              </div>
              
              <div className="impact-spotlight">
                <h4>Impact Spotlight</h4>
                <div className="impact-metrics">
                  <div className="impact-metric">
                    <div className="metric-value">2,500+</div>
                    <div className="metric-label">Lives Impacted This Month</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">15</div>
                    <div className="metric-label">New Programs Launched</div>
                  </div>
                  <div className="impact-metric">
                    <div className="metric-value">89%</div>
                    <div className="metric-label">Program Success Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="newsletter-actions">
                <button className="newsletter-btn primary">
                  <span className="btn-icon">📖</span>
                  Read Online Edition
                </button>
                <button className="newsletter-btn secondary">
                  <span className="btn-icon">📥</span>
                  Download PDF Version
                </button>
                <button className="newsletter-btn outline">
                  <span className="btn-icon">📤</span>
                  Share with Friends
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Archive */}
        <section className="content-section">
          <div className="section-header">
            <h2>Newsletter Archive</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Browse through our previous editions and discover the journey of transformation
            </p>
          </div>
          
          <div className="newsletter-archive">
            {/* 2024 Archive */}
            <div className="archive-year">
              <h3 className="year-title">2024</h3>
              <div className="newsletter-grid">
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">February</div>
                    <div className="newsletter-category">Education Focus</div>
                  </div>
                  <h4>Education Revolution: Digital Learning Breakthroughs</h4>
                  <p className="newsletter-excerpt">
                    How technology is transforming education in rural communities, featuring 
                    our new digital literacy programs and scholarship success stories.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">📚 500 students reached</span>
                    <span className="stat">💻 15 computer labs established</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">January</div>
                    <div className="newsletter-category">Annual Outlook</div>
                  </div>
                  <h4>New Beginnings: Our 2024 Strategic Vision</h4>
                  <p className="newsletter-excerpt">
                    2024 strategic outlook, new program launches, and ambitious goals for 
                    community transformation in the coming year.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">🎯 10 new communities</span>
                    <span className="stat">🚀 5 innovative programs</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 Archive */}
            <div className="archive-year">
              <h3 className="year-title">2023</h3>
              <div className="newsletter-grid">
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">December</div>
                    <div className="newsletter-category">Year in Review</div>
                  </div>
                  <h4>2023: A Year of Transformative Impact</h4>
                  <p className="newsletter-excerpt">
                    Comprehensive review of our achievements, challenges overcome, and the 
                    incredible impact made possible through community partnerships.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">🌟 15,000 lives touched</span>
                    <span className="stat">📈 45% growth in impact</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">November</div>
                    <div className="newsletter-category">Community Focus</div>
                  </div>
                  <h4>Community First: Grassroots Success Stories</h4>
                  <p className="newsletter-excerpt">
                    Celebrating community-led initiatives and local leadership that are 
                    driving sustainable change from the ground up.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">🤝 20 community projects</span>
                    <span className="stat">🏆 5 leadership awards</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">October</div>
                    <div className="newsletter-category">Innovation</div>
                  </div>
                  <h4>Innovation Spotlight: Tech for Good</h4>
                  <p className="newsletter-excerpt">
                    Exploring how technology and creative solutions are addressing complex 
                    community challenges and creating new opportunities.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">💡 8 innovative solutions</span>
                    <span className="stat">🌐 5,000 digital trainees</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
                
                <div className="newsletter-item">
                  <div className="newsletter-header">
                    <div className="newsletter-month">September</div>
                    <div className="newsletter-category">Youth Empowerment</div>
                  </div>
                  <h4>Youth Empowerment: Next Generation Leaders</h4>
                  <p className="newsletter-excerpt">
                    Spotlight on young change-makers and their projects that are shaping 
                    the future of our communities through innovation and leadership.
                  </p>
                  <div className="newsletter-stats">
                    <span className="stat">👥 300 youth leaders</span>
                    <span className="stat">🚀 25 youth-led projects</span>
                  </div>
                  <div className="newsletter-actions-small">
                    <button className="action-btn read">Read</button>
                    <button className="action-btn download">PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Series */}
        <section className="content-section">
          <div className="section-header">
            <h2>Newsletter Series</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Choose the updates that matter most to you with our specialized newsletter series
            </p>
          </div>
          
          <div className="newsletter-series">
            <div className="series-card">
              <div className="series-icon">📊</div>
              <div className="series-content">
                <h3>Impact Updates</h3>
                <p>Quarterly impact measurements, program results, and data-driven insights into our work</p>
                <div className="series-details">
                  <span className="frequency">📅 Quarterly</span>
                  <span className="subscribers">👥 2,500+ subscribers</span>
                </div>
                <ul className="series-features">
                  <li>Comprehensive impact metrics</li>
                  <li>Program performance data</li>
                  <li>Success rate analysis</li>
                  <li>Future projections</li>
                </ul>
              </div>
            </div>
            
            <div className="series-card">
              <div className="series-icon">🎙️</div>
              <div className="series-content">
                <h3>Community Voices</h3>
                <p>Stories, experiences, and perspectives directly from the communities we serve</p>
                <div className="series-details">
                  <span className="frequency">📅 Monthly</span>
                  <span className="subscribers">👥 5,000+ subscribers</span>
                </div>
                <ul className="series-features">
                  <li>Personal success stories</li>
                  <li>Community spotlights</li>
                  <li>Cultural features</li>
                  <li>Local innovations</li>
                </ul>
              </div>
            </div>
            
            <div className="series-card">
              <div className="series-icon">🔬</div>
              <div className="series-content">
                <h3>Research Insights</h3>
                <p>Research findings, evidence-based approaches, and academic publications</p>
                <div className="series-details">
                  <span className="frequency">📅 Bi-Annual</span>
                  <span className="subscribers">👥 1,200+ subscribers</span>
                </div>
                <ul className="series-features">
                  <li>Research summaries</li>
                  <li>Policy recommendations</li>
                  <li>Case studies</li>
                  <li>Academic collaborations</li>
                </ul>
              </div>
            </div>
            
            <div className="series-card">
              <div className="series-icon">🌟</div>
              <div className="series-content">
                <h3>Special Editions</h3>
                <p>Thematic issues focusing on specific programs, events, or urgent community needs</p>
                <div className="series-details">
                  <span className="frequency">📅 Occasional</span>
                  <span className="subscribers">👥 8,000+ subscribers</span>
                </div>
                <ul className="series-features">
                  <li>Emergency response updates</li>
                  <li>Special event coverage</li>
                  <li>Program deep dives</li>
                  <li>Partner spotlights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="cta-section newsletter-subscription">
          <div className="cta-content">
            <div className="subscription-header">
              <div className="subscription-icon">📬</div>
              <h2>Stay Connected with Our Journey</h2>
            </div>
            <p className="subscription-description">
              Join our community of 15,000+ subscribers who receive exclusive updates, 
              inspiring stories, and opportunities to make a difference. Be the first to 
              know about our impact and ways you can get involved.
            </p>
            
            <div className="subscription-benefits">
              <div className="benefit">
                <span className="benefit-icon">✅</span>
                <span>Exclusive impact stories before they're published</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">✅</span>
                <span>Early access to event invitations and volunteer opportunities</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">✅</span>
                <span>Special updates from our field teams and community partners</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">✅</span>
                <span>Monthly impact reports and success metrics</span>
              </div>
            </div>
            
            <div className="subscription-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <select className="form-select">
                  <option value="">Choose your newsletter preferences</option>
                  <option value="all">All Newsletters (Recommended)</option>
                  <option value="impact">Impact Updates Only</option>
                  <option value="stories">Community Stories Only</option>
                  <option value="research">Research Insights Only</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-select">
                  <option value="">Frequency Preference</option>
                  <option value="weekly">Weekly Digest</option>
                  <option value="monthly">Monthly Edition</option>
                  <option value="quarterly">Quarterly Summary</option>
                </select>
              </div>
              
              <div className="privacy-consent">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkmark"></span>
                  I agree to receive email updates and have read the <a href="/privacy">Privacy Policy</a>
                </label>
              </div>
              
              <button className="subscribe-btn">
                <span className="btn-text">Subscribe to Newsletter</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="subscription-stats">
              <div className="stat-item">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Subscribers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Open Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries Reached</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletters;