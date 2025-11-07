import React from 'react';
import './board.css';
import { boardMembers, boardResponsibilities } from '../data/board';

const Board: React.FC = () => {
  const renderBoardMember = (member: typeof boardMembers[0]) => (
    <div key={member.id} className={`leadership-card ${member.featured ? 'leadership-featured' : ''}`}>
      <div className="leader-photo-section">
        <div className="photo-wrapper">
          <img 
            src={member.imageUrl} 
            alt={member.altText}
            className="leader-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('photo-fallback-hidden');
            }}
          />
          <div className="photo-fallback photo-fallback-hidden">{member.emoji}</div>
        </div>
        <div className="leader-role-badge">{member.role}</div>
      </div>
      <div className="leader-details">
        <h3 className="leader-name">{member.name}</h3>
        <p className="leader-position">{member.title}</p>
        <p className="leader-biography">{member.bio}</p>
        <div className="leader-skills">
          {member.expertise.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="board-container">
      <div className="board-header">
        <div className="board-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/governance">Governance</a> &gt; <span>Board of Directors</span>
        </div>
        <h1 className="board-main-title">Board of Directors</h1>
        <p className="board-subtitle">
          Meet the visionary leaders guiding our strategic direction and ensuring organizational excellence
        </p>
      </div>

      <div className="board-main-content">
        {/* Strategic Leadership Section */}
        <section className="board-section">
          <div className="section-heading-block">
            <h2 className="section-heading">Strategic Leadership</h2>
            <div className="heading-divider"></div>
            <p className="section-intro">
              Our Board of Directors comprises distinguished professionals who bring diverse expertise 
              and unwavering commitment to our mission of community transformation.
            </p>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="board-section">
          <div className="leaders-grid">
            {boardMembers.map(renderBoardMember)}
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="board-section">
          <div className="section-heading-block">
            <h2 className="section-heading">Board Responsibilities</h2>
            <div className="heading-divider"></div>
          </div>
          
          <div className="responsibilities-container">
            {boardResponsibilities.map(responsibility => (
              <div key={responsibility.id} className="responsibility-block">
                <div className="responsibility-icon">{responsibility.icon}</div>
                <div className="responsibility-info">
                  <h4 className="responsibility-title">{responsibility.title}</h4>
                  <p className="responsibility-description">{responsibility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="board-cta-section">
          <div className="cta-content-block">
            <h2 className="cta-main-heading">Governed with Excellence</h2>
            <p className="cta-description">
              Our Board of Directors ensures that every initiative aligns with our mission 
              and delivers maximum impact to the communities we serve.
            </p>
            <div className="cta-actions">
              <a href="/governance/management" className="cta-action-button primary-action">
                Meet Our Management Team
              </a>
              <a href="/contact" className="cta-action-button secondary-action">
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