import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { StaticImage } from 'gatsby-plugin-image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Lopster from '../../static/lopster.png';
import { Link } from 'gatsby';

const pageVariants = {
  initial: { opacity: 0, y: "100%" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100%" }
};

const pageTransition = {
  duration: 0.8
};

const ArtGallery = () => {
  const [flippedStates, setFlippedStates] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [aspectRatios, setAspectRatios] = useState([]);

  const artworks = [
    { src: "../../1x/Artboard 1_2.png", title: "UC JAZZ FALL CONCERT ALIEN INVASION", description: "Designed a poster for the UC Berkeley Jazz Fall Concert, featuring the Advanced Combos, with an alien invasion theme." },
    { src: "../../1x/Artboard 1.png", title: "PLEASE BE YOURSELF", description: "Transformed a candid digital photo of a friend enjoying coffee into a graphic poster." },
    { src: "../../1x/JOPOSTER.jpg", title: "LET'PLAY2", description: "Inspired by a Taco Tuesday outing, this poster blends color pencils with digital refinement in Photoshop." },
    { src: "../../1x/catalina.jpg", title: "SHOCKED IN CATALINA", description: "Captured Catalina Island on film during my scuba diving trip and added hand-drawn illustrations." },
    { src: "../../1x/IMG_1079.JPG", title: "TO LIVE IN SF", description: "Captured a moment in San Francisco on film and added hand-drawn illustrations." },
    { src: "../../1x/jeju.jpg", title: "Travels", description: "A Jeju Island cafe on film with a hand-drawn illustration of a dog I met in Santa Monica, CA." },
    { src: "../../1x/love.jpg", title: "LOVE", description: "A Jeju Island garden on film with hand-drawn illustration of an owl." },
  ];

  const handleFlip = (index) => {
    setFlippedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img.height / img.width);
      img.onerror = reject;
      img.src = src;
    });
  };

  useEffect(() => {
    const loadAllImages = async () => {
      const ratios = await Promise.all(artworks.map(artwork => loadImage(artwork.src)));
      setAspectRatios(ratios);
    };
    loadAllImages();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes meshAnimation {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
          
          html {
            margin: 0;
            padding: 0;
          }

          .grain {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;
            opacity: 0.5;
            z-index: 0;
          }

          .grain::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.25;
          }
        `}
      </style>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="art-gallery"
        style={{
          background: `
            radial-gradient(circle at 00% 20%, #fe5204 0%, transparent 20%),
            radial-gradient(circle at 60% 90%, #4eaa63 0%, transparent 18%),
            radial-gradient(circle at 90% 90%, #3443bb 2%, transparent 30%),
            radial-gradient(circle at 80% 30%, #fcee9c 10%, transparent 20%),
            radial-gradient(circle at 80% 10%, #f85f72 0%, transparent 30%)
          `,
          backgroundSize: '400% 400%',
          animation: 'meshAnimation 14s ease infinite',
          minHeight: '100vh',
          padding: '3rem',
          margin: '0px'
        }}
      >
        <div className="grain"></div>
        <h1 style={{ color: "#fe5204", textAlign: 'center', marginBottom: '2rem', fontFamily: 'AlexRoss', fontSize: '5rem' }}> WElcome To the LObSTER pArk</h1>
        
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '4vw', marginBottom: '5rem'}}>

          <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
            <Link to="/">
              <img
                className='Logo'
                src={Lopster}
                alt="Logo"
                style= {{margin: '0', padding: '0'}}
              />
            </Link>
            <p style={{fontSize: '1rem', fontFamily: 'cousine', textAlign: 'center', margin: '0', padding: '0', color: '#ffff'}}>HOME</p>
          </div>

          <div style={{fontFamily: 'cousine', fontSize: '1rem'}}>
            <p style={{fontSize: '1.2rem' }}>🛝 Playground Rules: </p>
            <ol>
              <li><b style= {{fontFamily:"cousine-bold" }}>Dream Wildly:</b> No limits here!</li>
              <li><b style= {{fontFamily:"cousine-bold" }}>Experiment:</b> design, learn, and iterate!</li>
              <li><b style= {{fontFamily:"cousine-bold" }}>Respect the Space:</b> Keep it tidy, keep it beautiful, keep it creative.</li>
            </ol>
            <p style={{fontSize: '1rem', fontFamily: 'cousine-italic'}}>* This play area is designed for children 5+</p>
            <p style={{fontSize: '1rem', fontFamily: 'cousine-italic'}}>* Click art to learn more</p>
          </div>
          
        </div>
        {/* <p style={{fontSize: '4rem',fontFamily: 'cousine-italic', textAlign: 'center', display: 'flex', width: '100%', justifyContent: 'center', color: 'white'}}>coming soon...</p> */}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              style={{
                width: 'calc(33% - 1rem)',
                marginBottom: '2rem',
                aspectRatio: aspectRatios[index] ? `1 / ${aspectRatios[index]}` : 'auto',
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer',
                }}
                animate={{ rotateY: flippedStates[index] ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                onClick={() => handleFlip(index)}
              >
                <div className="front" style={{
                  position: 'absolute',
                  width: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '0px',
                  boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                  overflow: 'hidden',
                }}>
                  <img src={artwork.src} alt={artwork.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="back" style={{
                  position: 'absolute',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '0px', // Adjusted to match the front side
                  padding: '1rem',
                  color: '#fff',
                }}>
                  <h2 style={{ maxWidth: '80%', textAlign: 'center' }}>{artwork.title}</h2>
                  <p style={{ maxWidth: '80%', textAlign: 'center' }}>{artwork.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ArtGallery;
