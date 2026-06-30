'use client';

import React, { useState } from 'react';
import { ChevronRight, Send } from 'lucide-react';

export default function ZIYOWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [selectedSize, setSelectedSize] = useState('30x40');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Brand Colors
  const colors = {
    dark: '#333333',
    cream: '#d9d5d2',
    teal: '#6cc5b3',
    white: '#ffffff',
    lightBg: '#f5f3f0',
    darkBg: '#2a2a2a'
  };

  // Pricing
  const pricing = {
    '20x30': { preDesigned: 100, custom: 150 },
    '30x40': { preDesigned: 115, custom: 165 },
    '40x50': { preDesigned: 335, custom: 385 },
    '60x50': { preDesigned: 440, custom: 490 },
    '50x70': { preDesigned: 490, custom: 540 }
  };

  // Quiz Questions
  const quizQuestions = [
    {
      id: 1,
      question: "What's your current mood or energy?",
      options: [
        { text: "Energetic & ambitious 🚀", value: "energetic" },
        { text: "Calm & peaceful 🌿", value: "calm" },
        { text: "Creative & inspired 🎨", value: "creative" },
        { text: "Rebellious & bold ⚡", value: "rebellious" }
      ]
    },
    {
      id: 2,
      question: "What color palette speaks to you?",
      options: [
        { text: "Bold & vibrant", value: "bold" },
        { text: "Soft & pastel", value: "soft" },
        { text: "Dark & moody", value: "dark" },
        { text: "Neutral & minimalist", value: "neutral" }
      ]
    },
    {
      id: 3,
      question: "What design style resonates with you?",
      options: [
        { text: "Modern & geometric", value: "modern" },
        { text: "Vintage & retro", value: "vintage" },
        { text: "Minimalist & clean", value: "minimalist" },
        { text: "Artistic & abstract", value: "artistic" }
      ]
    },
    {
      id: 4,
      question: "What's your main value or passion?",
      options: [
        { text: "Creativity & self-expression", value: "creativity" },
        { text: "Growth & ambition", value: "growth" },
        { text: "Connection & community", value: "connection" },
        { text: "Authenticity & honesty", value: "authenticity" }
      ]
    },
    {
      id: 5,
      question: "How do you want the poster to make you feel?",
      options: [
        { text: "Motivated & inspired", value: "motivated" },
        { text: "Peaceful & grounded", value: "peaceful" },
        { text: "Joyful & playful", value: "joyful" },
        { text: "Powerful & confident", value: "powerful" }
      ]
    },
    {
      id: 6,
      question: "What role do illustrations play?",
      options: [
        { text: "Heavy visuals, minimal text", value: "visual" },
        { text: "Balanced text & visuals", value: "balanced" },
        { text: "Text-focused", value: "text" },
        { text: "Abstract patterns", value: "abstract" }
      ]
    },
    {
      id: 7,
      question: "What inspires you most?",
      options: [
        { text: "Nature & landscapes", value: "nature" },
        { text: "Art & culture", value: "art" },
        { text: "Technology & future", value: "tech" },
        { text: "People & emotions", value: "people" }
      ]
    },
    {
      id: 8,
      question: "What's your lifestyle vibe?",
      options: [
        { text: "Urban & trendy", value: "urban" },
        { text: "Bohemian & free", value: "bohemian" },
        { text: "Professional & sophisticated", value: "professional" },
        { text: "Playful & experimental", value: "playful" }
      ]
    }
  ];

  // Collections
  const collections = [
    {
      id: 1,
      name: 'Cars',
      emoji: '🏎️',
      tagline: 'Speed & Precision',
      description: 'For those who love the open road and the roar of engines.',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
      textColor: colors.white,
    },
    {
      id: 2,
      name: 'Emotions',
      emoji: '💖',
      tagline: 'Feel Everything',
      description: 'Raw, authentic, unapologetic emotion on your walls.',
      gradient: 'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
      textColor: colors.white,
    },
    {
      id: 3,
      name: 'Nostalgia Cartoons',
      emoji: '🎬',
      tagline: 'Childhood Memories',
      description: 'A love letter to the classics that shaped us.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      textColor: colors.white,
    },
    {
      id: 4,
      name: 'Photography & Places',
      emoji: '🌍',
      tagline: 'World Explorer',
      description: 'Travel the world through stunning imagery and wanderlust.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      textColor: colors.white,
    },
    {
      id: 5,
      name: 'Music',
      emoji: '🎵',
      tagline: 'Rhythm & Soul',
      description: 'For those who live and breathe music.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      textColor: colors.white,
    }
  ];

  // Handle Quiz
  const handleQuizAnswer = (answer) => {
    setQuizAnswers({ ...quizAnswers, [quizStep]: answer });
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 3rem',
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.cream}`,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: colors.dark,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }} onClick={() => setCurrentPage('home')}>
        🧸 <span style={{ fontSize: '24px' }}>ZIYO</span>
      </div>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
        {['Collections', 'Custom', 'About'].map(item => (
          <button
            key={item}
            onClick={() => {
              if (item === 'Collections') setCurrentPage('collections');
              else if (item === 'Custom') { setCurrentPage('custom'); setQuizStep(0); }
              else setCurrentPage('about');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: colors.dark,
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = colors.teal}
            onMouseLeave={(e) => e.target.style.color = colors.dark}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );

  // HOME PAGE
  const HomePage = () => (
    <div style={{ backgroundColor: colors.white }}>
      <Navigation />

      <section style={{
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, ${colors.cream} 100%)`,
        padding: '6rem 3rem',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div>
          <div style={{ fontSize: '140px', marginBottom: '2rem' }}>
            🧸
          </div>
          <h1 style={{
            fontSize: '64px',
            color: colors.dark,
            margin: '0 0 1rem',
            fontFamily: 'Georgia, serif',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Your Story Deserves <br /> a Poster
          </h1>
          <p style={{
            fontSize: '20px',
            color: colors.dark,
            margin: '0 0 3rem',
            maxWidth: '700px',
            lineHeight: '1.7',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Create your 1 of 1 custom poster that celebrates exactly who you are. Not generic. Not mass-produced. Just you.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setCurrentPage('custom'); setQuizStep(0); }}
              style={{
                padding: '1.25rem 3rem',
                backgroundColor: colors.teal,
                color: colors.white,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                transition: 'all 0.3s',
                boxShadow: `0 10px 30px rgba(108, 197, 179, 0.2)`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = `0 15px 40px rgba(108, 197, 179, 0.3)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 10px 30px rgba(108, 197, 179, 0.2)`;
              }}
            >
              Start Custom Quiz
            </button>
            <button
              onClick={() => setCurrentPage('collections')}
              style={{
                padding: '1.25rem 3rem',
                backgroundColor: colors.white,
                color: colors.teal,
                border: `2px solid ${colors.teal}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.backgroundColor = colors.teal;
                e.target.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.target.backgroundColor = colors.white;
                e.target.color = colors.teal;
              }}
            >
              Browse Collections
            </button>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section style={{ padding: '6rem 3rem', backgroundColor: colors.white }}>
        <h2 style={{
          fontSize: '48px',
          color: colors.dark,
          textAlign: 'center',
          marginBottom: '1rem',
          fontFamily: 'Georgia, serif'
        }}>
          Explore Collections
        </h2>
        <p style={{
          fontSize: '18px',
          color: colors.dark,
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '1rem auto 4rem'
        }}>
          From Cars to Music, find your vibe
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {collections.map((collection) => (
            <div
              key={collection.id}
              style={{
                borderRadius: '16px',
                background: collection.gradient,
                padding: '2.5rem',
                color: collection.textColor,
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                minHeight: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
            >
              <div>
                <div style={{ fontSize: '80px', marginBottom: '1rem' }}>
                  {collection.emoji}
                </div>
                <h3 style={{
                  fontSize: '28px',
                  margin: '0 0 0.5rem',
                  fontWeight: '700'
                }}>
                  {collection.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  margin: '0 0 1rem',
                  opacity: '0.9'
                }}>
                  {collection.tagline}
                </p>
                <p style={{
                  fontSize: '14px',
                  margin: '0',
                  lineHeight: '1.6',
                  opacity: '0.85'
                }}>
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => setCurrentPage('collections')}
            style={{
              padding: '1rem 2.5rem',
              backgroundColor: colors.teal,
              color: colors.white,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '700',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            See All Collections
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '6rem 3rem',
        backgroundColor: colors.lightBg
      }}>
        <h2 style={{
          fontSize: '48px',
          color: colors.dark,
          textAlign: 'center',
          marginBottom: '4rem',
          fontFamily: 'Georgia, serif'
        }}>
          How ZIYO Works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { step: '1', title: 'Answer Quiz', desc: 'Tell us your mood, style & vibes in 2 minutes.' },
            { step: '2', title: 'We Design', desc: 'Our team creates your custom poster.' },
            { step: '3', title: 'You Approve', desc: 'Review and request changes if needed.' },
            { step: '4', title: 'We Deliver', desc: 'Print & ship to your door in 3-5 days.' }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: colors.white,
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: `3px solid ${colors.teal}`,
              transition: 'all 0.3s'
            }}>
              <div style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: colors.teal,
                marginBottom: '1rem'
              }}>
                {item.step}
              </div>
              <h3 style={{ color: colors.dark, margin: '0 0 0.75rem', fontSize: '18px', fontWeight: '700' }}>
                {item.title}
              </h3>
              <p style={{ color: colors.dark, margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{
        padding: '4rem 3rem',
        background: `linear-gradient(135deg, ${colors.teal} 0%, ${colors.dark} 100%)`,
        color: colors.white,
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          margin: '0 0 1.5rem',
          fontFamily: 'Georgia, serif'
        }}>
          Ready to Celebrate Your Story?
        </h2>
        <p style={{
          fontSize: '18px',
          margin: '0 0 2rem',
          lineHeight: '1.6'
        }}>
          Join hundreds of Egyptians who have their own 1 of 1 ZIYO poster
        </p>
        <button
          onClick={() => { setCurrentPage('custom'); setQuizStep(0); }}
          style={{
            padding: '1.25rem 3rem',
            backgroundColor: colors.white,
            color: colors.teal,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '700',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Start Your Quiz Now
        </button>
      </section>
    </div>
  );

  // COLLECTIONS PAGE
  const CollectionsPage = () => (
    <div style={{ backgroundColor: colors.white }}>
      <Navigation />

      <div style={{ padding: '3rem', maxWidth: '1400px', margin: '0 auto' }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none',
            border: 'none',
            color: colors.teal,
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '2rem',
            fontWeight: '600'
          }}
        >
          ← Back Home
        </button>

        <h1 style={{
          fontSize: '56px',
          color: colors.dark,
          marginBottom: '1rem',
          fontFamily: 'Georgia, serif'
        }}>
          All Collections
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {collections.map((collection) => (
            <div
              key={collection.id}
              style={{
                borderRadius: '16px',
                background: collection.gradient,
                padding: '3rem',
                color: collection.textColor,
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '120px', marginBottom: '1.5rem' }}>
                  {collection.emoji}
                </div>
                <h2 style={{
                  fontSize: '36px',
                  margin: '0 0 0.75rem',
                  fontWeight: '700'
                }}>
                  {collection.name}
                </h2>
                <p style={{
                  fontSize: '16px',
                  margin: '0 0 1.5rem',
                  opacity: '0.95',
                  fontWeight: '600'
                }}>
                  {collection.tagline}
                </p>
                <p style={{
                  fontSize: '15px',
                  margin: '0',
                  lineHeight: '1.7',
                  opacity: '0.9'
                }}>
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // CUSTOM POSTER PAGE
  const CustomPage = () => (
    <div style={{ backgroundColor: colors.lightBg, minHeight: '100vh' }}>
      <Navigation />

      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        {quizStep < quizQuestions.length ? (
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{
                fontSize: '13px',
                color: colors.teal,
                marginBottom: '1rem',
                fontWeight: '700',
                letterSpacing: '0.5px'
              }}>
                QUESTION {quizStep + 1} OF {quizQuestions.length}
              </div>
              <div style={{
                height: '8px',
                backgroundColor: colors.cream,
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  backgroundColor: colors.teal,
                  width: `${((quizStep + 1) / quizQuestions.length) * 100}%`,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            <h2 style={{
              fontSize: '36px',
              color: colors.dark,
              margin: '0 0 2.5rem',
              fontFamily: 'Georgia, serif'
            }}>
              {quizQuestions[quizStep].question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quizQuestions[quizStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleQuizAnswer(option.value)}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: quizAnswers[quizStep] === option.value ? colors.teal : colors.cream,
                    color: quizAnswers[quizStep] === option.value ? colors.white : colors.dark,
                    border: `2px solid ${colors.teal}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s',
                    textAlign: 'left'
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '100px', marginBottom: '2rem' }}>🎉</div>
            <h2 style={{
              fontSize: '40px',
              color: colors.dark,
              margin: '0 0 1rem',
              fontFamily: 'Georgia, serif'
            }}>
              Your Unique ZIYO Awaits
            </h2>
            <p style={{
              fontSize: '18px',
              color: colors.dark,
              margin: '0 0 2.5rem',
              lineHeight: '1.7'
            }}>
              Based on your answers, we'll create a completely custom poster that's 100% YOU.
            </p>

            <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '700',
                color: colors.dark,
                marginBottom: '1.5rem'
              }}>
                Select Your Poster Size:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.keys(pricing).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '1rem',
                      backgroundColor: selectedSize === size ? colors.teal : colors.cream,
                      color: selectedSize === size ? colors.white : colors.dark,
                      border: `2px solid ${colors.teal}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: '600',
                      textAlign: 'left'
                    }}
                  >
                    {size}cm - {pricing[size].custom} EGP (Custom)
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => alert(`✅ Added to cart!\n\nYour ${selectedSize}cm poster (${pricing[selectedSize].custom} EGP)\n\nNext: Design brief form`)}
              style={{
                width: '100%',
                padding: '1.25rem',
                backgroundColor: colors.teal,
                color: colors.white,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '1rem'
              }}
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => { setQuizStep(0); setQuizAnswers({}); }}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: colors.cream,
                color: colors.dark,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // ABOUT PAGE
  const AboutPage = () => (
    <div style={{ backgroundColor: colors.white }}>
      <Navigation />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '120px', marginBottom: '2rem' }}>🧸</div>
          <h1 style={{
            fontSize: '48px',
            color: colors.dark,
            margin: '0',
            fontFamily: 'Georgia, serif'
          }}>
            About ZIYO
          </h1>
        </div>

        <div style={{ fontSize: '16px', color: colors.dark, lineHeight: '1.9', marginBottom: '3rem' }}>
          <p>
            <strong>ZIYO is a Cairo & Alexandria-based design studio</strong> that believes every person deserves a poster that celebrates who they really are.
          </p>
          <p>
            Every ZIYO poster starts with you. We ask you questions. We listen. Then we design something that's unmistakably yours.
          </p>

          <div style={{
            backgroundColor: colors.lightBg,
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem'
          }}>
            <h3 style={{ color: colors.dark, marginTop: 0 }}>Contact</h3>
            <p style={{ color: colors.dark, margin: '1rem 0' }}>
              📧 Email: ziyoposters@gmail.com
            </p>
            <p style={{ color: colors.dark, margin: '1rem 0' }}>
              📍 Cairo & Alexandria, Egypt
            </p>
            <p style={{ color: colors.dark, margin: '1rem 0' }}>
              🚚 Delivery: 3-5 days Egypt-wide
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: colors.white
    }}>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'collections' && <CollectionsPage />}
      {currentPage === 'custom' && <CustomPage />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
}
