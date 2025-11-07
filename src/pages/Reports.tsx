import React from 'react';
import '../styles/globals.css';

const Reports: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/knowledge">Knowledge Hub</a> &gt; <span>Reports</span>
        </div>
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">
          Comprehensive reports on our programs, impact, and organizational performance
        </p>
      </div>

      <div className="page-content">
        {/* Annual Report */}
        <section className="content-section">
          <div className="section-header">
            <h2>Annual Report 2023</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="annual-report">
            <div className="report-cover">
              <div className="cover-title">
                <div className="year">2023</div>
                <div className="title">Annual Impact Report</div>
                <div className="subtitle">Building Resilient Communities</div>
              </div>
            </div>
            <div className="report-highlights">
              <h3>Year in Review</h3>
              <p>
                2023 marked a significant milestone in our journey towards community 
                transformation. This report captures our achievements, challenges, 
                and the incredible impact made possible through your support.
              </p>
              
              <div className="key-metrics">
                <div className="metric">
                  <div className="metric-value">15,000+</div>
                  <div className="metric-label">Lives Impacted</div>
                </div>
                <div className="metric">
                  <div className="metric-value">45</div>
                  <div className="metric-label">Communities Served</div>
                </div>
                <div className="metric">
                  <div className="metric-value">$2.5M</div>
                  <div className="metric-label">Program Investment</div>
                </div>
                <div className="metric">
                  <div className="metric-value">89%</div>
                  <div className="metric-label">Program Success Rate</div>
                </div>
              </div>
              
              <div className="report-downloads">
                <button className="download-btn full-report">
                  📘 Download Full Report
                </button>
                <button className="download-btn summary">
                  📄 Executive Summary
                </button>
                <button className="download-btn infographic">
                  📊 Impact Infographic
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quarterly Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Quarterly Reports</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="quarterly-reports">
            <div className="quarter-card">
              <div className="quarter">Q4 2023</div>
              <h3>October - December 2023</h3>
              <p>Year-end performance and program completion report</p>
              <div className="report-stats">
                <span>✅ 15 programs completed</span>
                <span>📈 25% growth in impact</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q3 2023</div>
              <h3>July - September 2023</h3>
              <p>Mid-year review and strategic adjustments</p>
              <div className="report-stats">
                <span>🎯 92% target achievement</span>
                <span>🤝 5 new partnerships</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q2 2023</div>
              <h3>April - June 2023</h3>
              <p>Program expansion and impact assessment</p>
              <div className="report-stats">
                <span>🌱 8 new programs launched</span>
                <span>📊 15,000 data points collected</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
            
            <div className="quarter-card">
              <div className="quarter">Q1 2023</div>
              <h3>January - March 2023</h3>
              <p>Year beginning and strategic implementation</p>
              <div className="report-stats">
                <span>🚀 100% program kickoff</span>
                <span>🎓 500 training sessions</span>
              </div>
              <button className="download-quarter">Download Report</button>
            </div>
          </div>
        </section>

        {/* Program Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Program Reports</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="program-reports">
            <div className="program-report">
              <div className="program-category">Education</div>
              <h3>Scholarship Program Impact Report 2023</h3>
              <p>
                Comprehensive analysis of our educational support initiatives 
                and their impact on student outcomes and community development.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>500</strong> students supported
                </div>
                <div className="program-metric">
                  <strong>95%</strong> completion rate
                </div>
                <div className="program-metric">
                  <strong>45%</strong> university enrollment
                </div>
              </div>
              <button className="download-program">Download Report</button>
            </div>
            
            <div className="program-report">
              <div className="program-category">Economic Empowerment</div>
              <h3>Entrepreneurship Development Final Report</h3>
              <p>
                Evaluation of our business training and startup support programs 
                and their contribution to local economic development.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>250</strong> businesses started
                </div>
                <div className="program-metric">
                  <strong>800</strong> jobs created
                </div>
                <div className="program-metric">
                  <strong>75%</strong> business survival rate
                </div>
              </div>
              <button className="download-program">Download Report</button>
            </div>
            
            <div className="program-report">
              <div className="program-category">Environment</div>
              <h3>Sustainability Initiatives Progress Report</h3>
              <p>
                Assessment of environmental conservation programs and their 
                impact on community resilience and ecosystem health.
              </p>
              <div className="program-metrics">
                <div className="program-metric">
                  <strong>50,000</strong> trees planted
                </div>
                <div className="program-metric">
                  <strong>15</strong> clean energy projects
                </div>
                <div className="program-metric">
                  <strong>85%</strong> community participation
                </div>
              </div>
              <button className="download-program">Download Report</button>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="content-section">
          <div className="section-header">
            <h2>Financial Reports</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Transparent financial reporting and accountability
            </p>
          </div>
          
          <div className="financial-reports">
            <div className="financial-report">
              <div className="report-year">2023</div>
              <h3>Audited Financial Statements</h3>
              <p>Complete financial audit conducted by independent auditors</p>
              <div className="financial-highlights">
                <div className="highlight">✅ Clean audit opinion</div>
                <div className="highlight">📊 92% program spending</div>
                <div className="highlight">💼 8% administrative costs</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
            
            <div className="financial-report">
              <div className="report-year">2022</div>
              <h3>Financial Performance Report</h3>
              <p>Annual financial review and performance analysis</p>
              <div className="financial-highlights">
                <div className="highlight">📈 25% revenue growth</div>
                <div className="highlight">🎯 100% budget utilization</div>
                <div className="highlight">🔄 15% reserve fund</div>
              </div>
              <button className="download-financial">Download Financials</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reports;