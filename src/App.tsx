import { siteContent } from './content/siteContent';

export default function App() {
  const { hero, proofItems, featureStories, showcase, whyMarkScope, launchStatus, footer } = siteContent;

  return (
    <div className="page-shell">
      <main className="app-shell">
        <section className="hero-section section-card section-card--hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.productName}</h1>
            <p className="hero-title">{hero.title}</p>
            <p className="hero-supporting">{hero.supportingText}</p>
            <div className="app-actions">
              <a className="app-link app-link--primary" href={hero.primaryCtaHref}>
                {hero.primaryCtaText}
              </a>
              <a className="app-link app-link--secondary" href={hero.githubUrl}>
                {hero.secondaryCtaText}
              </a>
            </div>
          </div>

          <div className="hero-preview" aria-label="Product proof preview">
            <div className="hero-device-stack">
              <article className="hero-device hero-device--ios" aria-label="iOS reader preview">
                <div className="iphone light hero-iphone">
                  <div className="iphone-screen">
                    <div className="dynamic-island" aria-hidden="true"></div>
                    <div className="status-bar">
                      <span className="status-time">21:28</span>
                      <div className="status-icons" aria-hidden="true">
                        <span>LTE</span>
                      </div>
                    </div>
                    <div className="reader-content hero-reader-content">
                      <p className="preview-kicker">Markdown document</p>
                      <div className="md-h1 hero-md-h1">Landing Page Requirements</div>
                      <div className="md-p hero-md-p">
                        MarkScope needs a calm product page that explains the reader clearly, shows real mobile proof,
                        and keeps GitHub visible as the public source of truth.
                      </div>
                      <div className="md-h2 hero-md-h2">Concept overview</div>
                      <div className="md-p hero-md-p">The first version should prove three things:</div>
                      <div className="task-item hero-task-item">
                        <div className="task-checkbox checked">✓</div>
                        <span className="task-text">Math and abc blocks stay readable in the reader.</span>
                      </div>
                      <div className="task-item hero-task-item">
                        <div className="task-checkbox checked">✓</div>
                        <span className="task-text">Device proof should feel native on both iOS and Android.</span>
                      </div>
                      <div className="task-item hero-task-item">
                        <div className="task-checkbox unchecked"></div>
                        <span className="task-text">Coming soon positioning should stay honest and clear.</span>
                      </div>
                    </div>
                    <div className="reader-bottom-bar hero-reader-bottom-bar" aria-hidden="true">
                      <div className="bar-btn">
                        <span className="bar-icon" aria-label="Back action">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11.8 4.5L6 10.1l5.8 5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>Back</span>
                      </div>
                      <div className="bar-btn">
                        <span className="bar-icon" aria-label="Table of contents action">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6 5.5h8M6 10h8M6 14.5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <circle cx="3.5" cy="5.5" r="1" fill="currentColor" />
                            <circle cx="3.5" cy="10" r="1" fill="currentColor" />
                            <circle cx="3.5" cy="14.5" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Table of contents</span>
                      </div>
                      <div className="bar-btn">
                        <span className="bar-icon" aria-label="Search action">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="8.5" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span>Search</span>
                      </div>
                      <div className="bar-btn">
                        <span className="bar-icon" aria-label="Actions action">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="4" cy="10" r="1.4" fill="currentColor" />
                            <circle cx="10" cy="10" r="1.4" fill="currentColor" />
                            <circle cx="16" cy="10" r="1.4" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Actions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="hero-device hero-device--android" aria-label="Android actions preview">
                <div className="android-device hero-android-device">
                  <div className="android-screen">
                    <div className="android-status-bar">
                      <span>21:28</span>
                      <div className="android-status-icons" aria-hidden="true">
                        <span>5G</span>
                      </div>
                    </div>
                    <div className="android-reader-shell hero-android-reader-shell" aria-hidden="true">
                      <div className="android-reader-h1">Landing Page Requirements</div>
                      <div className="android-reader-p">Math and abc blocks stay readable in the reader.</div>
                    </div>
                    <section className="android-sheet-preview hero-android-sheet" aria-label="Actions sheet">
                      <div className="android-sheet-handle" aria-hidden="true"></div>
                      <h2>Actions</h2>
                      <p>Reader tools and quick settings</p>
                      <div className="android-sheet-card__section">
                        <p className="android-sheet-card__eyebrow">Font size</p>
                        <div className="android-font-size-group">
                          <button type="button" className="android-size-chip">Small</button>
                          <button
                            type="button"
                            className="android-size-chip android-size-chip--active"
                            aria-label="Medium font size"
                          >
                            Medium
                          </button>
                          <button type="button" className="android-size-chip">Large</button>
                        </div>
                      </div>
                      <div className="android-sheet-card__section">
                        <p className="android-sheet-card__eyebrow">Actions</p>
                        <div className="android-action-row">
                          <span className="android-action-row__icon" aria-label="Star file action">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                              <path d="M10 2.6l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L10 2.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>Star file</span>
                        </div>
                        <div className="android-action-row">
                          <span className="android-action-row__icon" aria-label="Copy Markdown action">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                              <rect x="6.5" y="3.5" width="9" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
                              <path d="M4.5 6.5v7a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </span>
                          <span>Copy Markdown</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Key proof points">
          {proofItems.map((item) => (
            <article className="proof-item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="story-grid" aria-label="Feature stories">
          {featureStories.map((story) => (
            <article className="section-card feature-story" key={story.id}>
              <div>
                <p className="eyebrow">{story.eyebrow}</p>
                <h2>{story.title}</h2>
                <p>{story.body}</p>
              </div>
              <div className="feature-visual" aria-label={story.visualAlt}>
                <span className="feature-visual__key">{story.visualKey}</span>
                <p>{story.callout}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section-card showcase-section" aria-labelledby="showcase-title">
          <div className="section-heading">
            <p className="eyebrow">{showcase.eyebrow}</p>
            <h2 id="showcase-title">{showcase.title}</h2>
            <p>{showcase.body}</p>
          </div>
          <ul className="highlight-list" aria-label="Showcase highlights">
            {showcase.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="showcase-panels">
            {showcase.panels.map((panel) => (
              <article className="showcase-panel" key={panel.label}>
                <p className="showcase-panel__label">{panel.label}</p>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
                <pre>{panel.snippet}</pre>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card comparison-section" aria-labelledby="why-title">
          <div className="section-heading">
            <p className="eyebrow">{whyMarkScope.eyebrow}</p>
            <h2 id="why-title">{whyMarkScope.title}</h2>
          </div>
          <div className="comparison-grid">
            {whyMarkScope.items.map((item) => (
              <article className="comparison-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card launch-section" id="launch-status" aria-labelledby="launch-title">
          <div className="section-heading">
            <p className="eyebrow">{launchStatus.eyebrow}</p>
            <h2 id="launch-title">{launchStatus.title}</h2>
            <p>{launchStatus.body}</p>
          </div>
          <ul className="status-list" aria-label="Launch status details">
            {launchStatus.statusPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="app-link app-link--primary" href={launchStatus.githubUrl}>
            {launchStatus.githubCtaText}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="site-footer__title">{footer.repositoryLabel}</p>
          <p>{footer.attribution}</p>
        </div>
        <div className="site-footer__meta">
          <p>{footer.license}</p>
          <p>{footer.platformNote}</p>
        </div>
        <nav aria-label="Footer links" className="site-footer__links">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}