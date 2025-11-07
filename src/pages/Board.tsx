import React from 'react';
import '../styles/globals.css';
import { boardMembers, boardResponsibilities } from '../data/board';

const Board: React.FC = () => {
  const renderBoardMember = (member: typeof boardMembers[0]) => (
    <div key={member.id} className={`board-member-card ${member.featured ? 'featured' : ''}`}>
      <div className="member-photo">
        {/* Image with fallback to emoji */}
        <div className="photo-container">
          <img 
            src={member.imageUrl} 
            alt={member.altText}
            className="member-image"
            onError={(e) => {
              // If image fails to load, show emoji placeholder
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="photo-placeholder hidden">{member.emoji}</div>
        </div>
        <div className="member-role-badge">{member.role}</div>
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="member-title">{member.title}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="member-expertise">
          {member.expertise.map((skill, index) => (
            <span key={index} className="expertise-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/governance">Governance</a> &gt; <span>Board of Directors</span>
        </div>
        <h1 className="page-title">Board of Directors</h1>
        <p className="page-subtitle">
          Meet the visionary leaders guiding our strategic direction and ensuring organizational excellence
        </p>
      </div>

      <div className="page-content">
     
        <section className="content-section">
          <div className="section-header">
            <h2>Strategic Leadership</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Our Board of Directors comprises distinguished professionals who bring diverse expertise 
              and unwavering commitment to our mission of community transformation.
            </p>
          </div>
        </section>

      
        <section className="content-section">
          <div className="board-members-grid">
            {boardMembers.map(renderBoardMember)}
          </div>
        </section>

      
      
        <section className="content-section">
          <div className="section-header">
            <h2>Board Responsibilities</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="responsibilities-list">
            {boardResponsibilities.map(responsibility => (
              <div key={responsibility.id} className="responsibility-item">
                <div className="responsibility-icon">{responsibility.icon}</div>
                <div className="responsibility-content">
                  <h4>{responsibility.title}</h4>
                  <p>{responsibility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Governed with Excellence</h2>
            <p>
              Our Board of Directors ensures that every initiative aligns with our mission 
              and delivers maximum impact to the communities we serve.
            </p>
            <div className="cta-buttons">
              <a href="/governance/management" className="cta-button primary">
                Meet Our Management Team
              </a>
              <a href="/contact" className="cta-button secondary">
                Contact the Board
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Board;