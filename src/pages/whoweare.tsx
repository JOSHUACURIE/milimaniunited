import React from 'react';
import '../styles/globals.css'

const WhoWeAre: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About Us</a> &gt; <span>Who We Are</span>
        </div>
        <h1 className="page-title">Who We Are</h1>
        <p className="page-subtitle">
          Learn about Millimani United's journey, values, and commitment to community transformation
        </p>
      </div>

      <div className="page-content">
  {/* Organization Story Section */}
  <section className="content-section">
    <div className="section-header">
      <h2>Our Story</h2>
      <div className="section-divider"></div>
    </div>
    <div className="story-content">
      <div className="story-text">
        <p>
          Millimani United was born from a deep-seated commitment to address the pressing needs 
          of vulnerable communities. Founded on the principles of unity, compassion, and sustainable 
          development, our organization has grown from a small community initiative to a respected 
          force for positive change.
        </p>
        <p>
          Our journey began with a simple vision: to create a platform where community members 
          could come together to identify challenges and co-create solutions. Over time, this 
          vision evolved into a comprehensive approach to community empowerment that addresses 
          economic, educational, social, and environmental aspects of development.
        </p>
        <p>
          Today, Millimani United stands as a testament to what can be achieved when communities 
          unite with purpose and determination. Our work continues to be guided by the voices 
          and needs of the people we serve.
        </p>
      </div>
      <div className="story-image">
        <div className="image-container">
          <img 
            src='/history.jpg' 
            alt="Millimani United History and Journey"
            className="story-img"
          />
        </div>
      </div>
    </div>
  </section>

        {/* Our Approach Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Our Approach</h2>
            <div className="section-divider"></div>
          </div>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">🤝</div>
              <h3>Community-Led</h3>
              <p>
                We believe in empowering communities to drive their own development. 
                Our programs are designed in collaboration with community members.
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🌱</div>
              <h3>Sustainable Solutions</h3>
              <p>
                We focus on creating long-term, sustainable change rather than 
                temporary fixes. Our interventions are designed for lasting impact.
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🔍</div>
              <h3>Evidence-Based</h3>
              <p>
                Our programs are informed by research and data. We continuously 
                monitor and evaluate our impact to ensure effectiveness.
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🤲</div>
              <h3>Holistic Support</h3>
              <p>
                We address multiple aspects of community development simultaneously 
                to create comprehensive and integrated solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="content-section stats-section">
          <div className="section-header">
            <h2>Our Impact</h2>
            <div className="section-divider"></div>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Lives Touched</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Partner Organizations</div>
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Our Leadership</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Meet the dedicated team driving our mission forward
            </p>
          </div>
          <div className="team-preview">
            <div className="team-card">
              <div className="team-avatar">👤</div>
              <h3>Board of Directors</h3>
              <p>
                Our experienced board provides strategic guidance and oversight 
                to ensure we remain true to our mission and values.
              </p>
              <a href="/governance/board" className="cta-link">
                Meet the Board →
              </a>
            </div>
            <div className="team-card">
              <div className="team-avatar">👥</div>
              <h3>Senior Management</h3>
              <p>
                Our leadership team brings decades of combined experience in 
                community development and non-profit management.
              </p>
              <a href="/governance/management" className="cta-link">
                Meet the Team →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>
              Whether you're looking to volunteer, partner with us, or support our work, 
              there are many ways to get involved and make a difference.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Get Involved
              </a>
              <a href="/about/our-journal" className="cta-button secondary">
                Read Our Journal
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;