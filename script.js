// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force page to start from top on reload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Ensure page starts at top when loaded
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Also handle DOMContentLoaded to catch any early scrolling
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
});

// Check if we're on the Get Started page and disable preloader
if (window.location.pathname.includes('get-started.html')) {
    // Hide preloader immediately on Get Started page
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
} else {
    // Preloader only for main page
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;
        
        // Add a small delay to ensure smooth start
        requestAnimationFrame(() => {
            setTimeout(() => {
                // Start the zoom-through animation
                preloader.classList.add('zooming');
                
                // Hide preloader after animation completes (1.2s + 0.1s buffer)
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Scroll to top after preloader is hidden
                    window.scrollTo(0, 0);
                }, 1300);
            }, 900); // Increased initial delay for longer logo display
        });
    });
}

// Typing Animation
const phrases = [
    "Saving Lives",
    "Tracking Birds & Drones",
    "Affordable Safety",
    "Securing Airspace",
    "Lowering Expenses",
    "Protecting Airports",
    "Ensuring Safety",
    "Preventing Collisions",
    "Enhancing Awareness",
    "Mitigating Risk",
    "Innovating Safety",
    "Preserving Resources",
    "Protecting Pilots"
];

// Hospital Typing Animation - reordered phrases (first 3 moved to back)
const hospitalPhrases = [
    "Enhancing Awareness",
    "Innovating Safety",
    "Securing Airspace",
    "Mitigating Risk",
    "Lowering Expenses",
    "Protecting Airports",
    "Ensuring Safety",
    "Preventing Collisions",
    "Preserving Resources",
    "Protecting Pilots",
    "Saving Lives",
    "Tracking Birds & Drones",
    "Affordable Safety"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    const typedTextElement = document.querySelector('.typed-text');
    const currentText = phrases[currentPhrase];
    
    if (!isDeleting) {
        // Typing
        typedTextElement.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === currentText.length) {
            // Wait before deleting
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000);
            return;
        }
    } else {
        // Deleting
        typedTextElement.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
        }
    }
    
    setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Start typing when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriter, 3000);
});

// Hospital Typing Animation
let currentHospitalPhrase = 0;
let currentHospitalChar = 0;
let isHospitalDeleting = false;

function hospitalTypeWriter() {
    const hospitalTypedTextElement = document.querySelector('.hospital-typed-text');
    const currentText = hospitalPhrases[currentHospitalPhrase];
    
    if (!hospitalTypedTextElement) return;
    
    if (!isHospitalDeleting) {
        // Typing
        hospitalTypedTextElement.textContent = currentText.substring(0, currentHospitalChar + 1);
        currentHospitalChar++;
        
        if (currentHospitalChar === currentText.length) {
            // Wait before deleting
            setTimeout(() => {
                isHospitalDeleting = true;
                hospitalTypeWriter();
            }, 2000);
            return;
        }
    } else {
        // Deleting
        hospitalTypedTextElement.textContent = currentText.substring(0, currentHospitalChar - 1);
        currentHospitalChar--;
        
        if (currentHospitalChar === 0) {
            isHospitalDeleting = false;
            currentHospitalPhrase = (currentHospitalPhrase + 1) % hospitalPhrases.length;
        }
    }
    
    setTimeout(hospitalTypeWriter, isHospitalDeleting ? 50 : 100);
}

// Solution Section Typing Animation
const solutionPhrases = [
    "THE TECHNOLOGY", 
    "BUILT TO PROTECT",
    "THE SMARTER WAY",
    "OPERATIONAL OVERVIEW",
    "WE DELIVER",
    "AFFORDABLE PROTECTION",
    "PROVEN RESULTS"
];

let currentSolutionPhrase = 0;
let currentSolutionChar = 0;
let isSolutionDeleting = false;
let solutionFirstRun = true;

function solutionTypeWriter() {
    const solutionTypedTextElement = document.querySelector('.solution-typed-text');
    
    if (!solutionTypedTextElement) return;
    
    // Handle first run - show 'OUR SOLUTION' and then delete it
    if (solutionFirstRun) {
        if (!isSolutionDeleting) {
            // Show 'OUR SOLUTION' until deletion starts
            solutionTypedTextElement.textContent = "OUR SOLUTION";
            syncStickyText();
            setTimeout(() => {
                isSolutionDeleting = true;
                solutionTypeWriter();
            }, 2000); // Wait 2 seconds before starting to delete
            return;
        } else {
            // Delete 'OUR SOLUTION' one character at a time
            const currentText = "OUR SOLUTION";
            const charsLeft = currentText.length - currentSolutionChar - 1;
            if (charsLeft >= 0) {
                solutionTypedTextElement.textContent = currentText.substring(0, charsLeft + 1);
                currentSolutionChar++;
                syncStickyText();
                setTimeout(solutionTypeWriter, 50);
                return;
            } else {
                // Finished deleting, now start with first phrase
                currentSolutionChar = 0;
                isSolutionDeleting = false;
                solutionFirstRun = false;
            }
        }
    }
    
    // Normal cycling through phrases
    const currentSolutionText = solutionPhrases[currentSolutionPhrase];
    
    if (!isSolutionDeleting) {
        // Typing
        solutionTypedTextElement.textContent = currentSolutionText.substring(0, currentSolutionChar + 1);
        currentSolutionChar++;
        
        if (currentSolutionChar === currentSolutionText.length) {
            setTimeout(() => {
                isSolutionDeleting = true;
                solutionTypeWriter();
            }, 2000);
            return;
        }
    } else {
        // Deleting
        solutionTypedTextElement.textContent = currentSolutionText.substring(0, currentSolutionChar - 1);
        currentSolutionChar--;
        
        if (currentSolutionChar === 0) {
            isSolutionDeleting = false;
            currentSolutionPhrase = (currentSolutionPhrase + 1) % solutionPhrases.length;
        }
    }
    syncStickyText();
    setTimeout(solutionTypeWriter, isSolutionDeleting ? 50 : 100);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let birds = [];

// Birds Animation with Depth
function createBirdsWithDepth() {
    const birdsContainer = document.getElementById('birdsContainer');
    if (!birdsContainer) return;

    const birdImages = ['bird 3.png', 'Bird 4.png', 'Bird 5.png', 'Bird 6.png'];
    const numBirds = 4;

    // Fixed positions for each bird
    const birdPositions = [
        { startY: 25, scale: 1.2, startRight: -1, speed: 1.5 },   // Bird 1: closer, lower, fastest
        { startY: 20, scale: 1.0, startRight: -3, speed: 1.0 },   // Bird 2: medium distance, middle height, medium speed
        { startY: 30, scale: 0.9, startRight: -9, speed: 0.8 },   // Bird 3: further, lowest, slower
        { startY: 27, scale: 0.8, startRight: -11, speed: 0.6 }   // Bird 4: furthest, lower middle, slowest
    ];

    for (let i = 0; i < numBirds; i++) {
        const bird = document.createElement('img');
        bird.src = birdImages[i % birdImages.length];
        bird.className = 'bird';

        // Use fixed positions instead of random
        const startY = birdPositions[i].startY;
        const scale = birdPositions[i].scale;
        const speed = birdPositions[i].speed;
        const startRight = birdPositions[i].startRight;

        // End position is now tied to scale for a better depth effect
        // Smaller birds (smaller scale) travel less distance
        const minEndRight = 75; // Farthest point for closest birds
        const maxEndRight = 85; // Farthest point for distant birds
        const endRight = maxEndRight - ((scale - 0.4) / (1.0 - 0.4)) * (maxEndRight - minEndRight);

        bird.style.top = `${startY}%`;
        bird.style.transform = `scale(${scale})`;
        bird.style.right = `${startRight}%`;
        bird.style.opacity = '1';

        birdsContainer.appendChild(bird);
        birds.push({
            element: bird,
            startRight,
            endRight,
            scale,
            speed
        });
    }
}

// Single, unified scroll handler for all animations
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Use requestAnimationFrame for smooth helicopter updates
    requestAnimationFrame(() => {
        // Hero section animations
        const heroImage = document.getElementById('heroImage');
        const heroSection = document.querySelector('.hero');
        if (heroImage && heroSection) {
            const heroTop = heroSection.offsetTop;
            const heroHeight = heroSection.offsetHeight;
            const scrollInHero = Math.max(0, Math.min(scrollY - heroTop, heroHeight - windowHeight));
            const scrollPercent = heroHeight > windowHeight ? scrollInHero / (heroHeight - windowHeight) : 0;
            
            // Direct update without smooth interpolation for responsive scrolling
            heroImage.style.objectPosition = `center ${scrollPercent * 100}%`;

            // Parallax movement for the birds
            birds.forEach(birdData => {
                const travelDistance = birdData.startRight - birdData.endRight;
                const currentRight = birdData.startRight - (scrollPercent * travelDistance * birdData.speed);
                birdData.element.style.right = `${currentRight}%`;
            });

            // Parallax movement for the plane
            const plane = document.getElementById('plane');
            if (plane) {
                const initialTop = 30;      // starting top position in percent
                const maxDownwardTravel = 3; // maximum downward travel in percent
                const pauseThreshold = 0.2; // pause when scroll reaches 20%
                
                // EDITABLE INPUTS - Adjust these values to control movement rates
                const descentRate = .5;    // Rate of descent (higher = faster down)
                const climbRate = 2.0;      // Rate of climb (higher = faster up, climbs out of page)
                const pauseDuration = 0.06;  // Duration of pause (6% of scroll range)
                
                let planeTop;
                if (scrollPercent <= pauseThreshold) {
                    // First phase: come down
                    const downwardTravel = (scrollPercent / pauseThreshold) * maxDownwardTravel * descentRate;
                    planeTop = initialTop + downwardTravel;
                } else {
                    // Second phase: go back up (with brief pause)
                    const upPhaseStart = pauseThreshold + pauseDuration;
                    
                    if (scrollPercent <= upPhaseStart) {
                        // Pause phase - stay at bottom position
                        planeTop = initialTop + (maxDownwardTravel * descentRate);
                    } else {
                        // Go back up phase - climb out of the page
                        const upPhaseProgress = (scrollPercent - upPhaseStart) / (1 - upPhaseStart);
                        const upwardTravel = upPhaseProgress * (maxDownwardTravel * descentRate + 50) * climbRate; // +50 to climb out of page
                        planeTop = (initialTop + (maxDownwardTravel * descentRate)) - upwardTravel;
                    }
                }
                
                // Scale the plane continuously throughout the entire animation (max 150%)
                const maxScale = 1.750; // 150% maximum size
                const minScale = 1.0;  // 100% starting size
                const scale = minScale + (scrollPercent * (maxScale - minScale));
                
                plane.style.top = `${planeTop}%`;
                plane.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }
        }

        // Hospital section animations - simplified and direct
        const hospitalImage = document.querySelector('.hospital-hero-image');
        const hospitalSection = document.querySelector('.hospital-hero');
        const helicopter = document.getElementById('heliAnim');
        const drone = document.getElementById('droneAnim');
        
        if (hospitalImage && hospitalSection && helicopter && drone) {
            const hospitalTop = hospitalSection.offsetTop;
            const hospitalHeight = hospitalSection.offsetHeight;
            
            // Simple, direct scroll calculation
            const scrollInHospital = Math.max(0, Math.min(scrollY - hospitalTop, hospitalHeight - windowHeight));
            const hospitalScrollPercent = hospitalHeight > windowHeight ? scrollInHospital / (hospitalHeight - windowHeight) : 0;
            
            // Hospital image vertical panning
            hospitalImage.style.objectPosition = `center ${hospitalScrollPercent * 100}%`;
            
            // Helicopter animation - direct 1:1 correlation with scroll
            const heliInitialBottom = 44;    // starting bottom position in vh
            const heliInitialRight = 50;     // starting right position in vw
            const maxDownwardTravel = 37;    // maximum downward travel in vh
            const maxLeftwardTravel = 12;    // maximum leftward travel in vw (32% of page width)
            // Remove pauseThreshold and pauseDuration for immediate movement
            let heliBottom, heliRight, heliScale;
            // Immediate, continuous movement with scroll
            const phaseProgress = hospitalScrollPercent; // 0 to 1
            const downwardTravel = phaseProgress * maxDownwardTravel;
            const leftwardTravel = phaseProgress * maxLeftwardTravel;
            heliBottom = heliInitialBottom + downwardTravel;
            heliRight = heliInitialRight - leftwardTravel;
            // Scale the helicopter during movement phase
            const heliMaxScale = 1.0;  // 100% maximum size (starting size)
            const heliMinScale = 0.8;  // 80% minimum size (gets smaller)
            heliScale = heliMaxScale - (phaseProgress * (heliMaxScale - heliMinScale));
            helicopter.style.bottom = `${heliBottom}vh`;
            helicopter.style.right = `${heliRight}vw`;
            helicopter.style.transform = `scale(${heliScale})`;
            
            // Drone animation - flies in from the LEFT and moves toward helicopter
            const droneInitialBottom = 65;
            const droneInitialLeft = 95;     // starting left position in vw (off-screen LEFT)
            const droneMaxRightwardTravel = 40;  // maximum rightward travel in vw
            const droneMaxUpwardTravel = -30;     // maximum upward travel in vh
            // Immediate, continuous movement with scroll
            const droneProgress = hospitalScrollPercent; // 0 to 1
            // Smooth easing for drone movement
            const easedProgress = droneProgress * droneProgress * (3 - 2 * droneProgress); // Smoothstep easing
            const rightwardTravel = easedProgress * droneMaxRightwardTravel;
            const upwardTravel = easedProgress * droneMaxUpwardTravel;
            let droneBottom = droneInitialBottom + upwardTravel;
            let droneLeft = droneInitialLeft - rightwardTravel;
            // Scale the drone as it gets closer
            const droneMinScale = 0.6;  // 60% starting size
            const droneMaxScale = 1.2;  // 120% final size
            let droneScale = droneMinScale + (easedProgress * (droneMaxScale - droneMinScale));
            drone.style.bottom = `${droneBottom}vh`;
            drone.style.left = `${droneLeft}vw`;
            drone.style.transform = `scale(${droneScale})`;
        }
    });

    // Full-page background parallax effect for get-started page
    /*
    IMPORTANT: The full-page-image (Map 2.jpg) and full-page-overlay-image (Map 2.png) 
    must maintain identical parallax behavior for perfect alignment.
    - Both must use the same parallaxSpeed value (currently 1.05)
    - Both must use the same translateY calculation
    - Any changes to one must be applied to the other
    */
    const fullPageImage = document.querySelector('.full-page-image');
    if (fullPageImage) {
        // Calculate parallax movement - background moves downward as we scroll down
        const parallaxSpeed = 1.05; // Decreased speed from 1.1 to 1.05 for very subtle scrolling
        const maxScrollDistance = document.body.scrollHeight - windowHeight;
        const scrollProgress = scrollY / maxScrollDistance;
        
        // Move background image downward as we scroll down (creating depth)
        const translateY = -(scrollY * parallaxSpeed);
        fullPageImage.style.transform = `translateY(${translateY}px)`;
    }

    // Full-page overlay parallax effect
    const fullPageOverlayImage = document.querySelector('.full-page-overlay-image');
    if (fullPageOverlayImage) {
        // Calculate parallax movement - overlay moves at the same speed as background for perfect alignment
        const overlayParallaxSpeed = 1.05; // Same speed as background for perfect alignment (decreased from 1.1 to 1.05)
        const translateY = -(scrollY * overlayParallaxSpeed);
        fullPageOverlayImage.style.transform = `translateY(${translateY}px)`;
    }

    // Update tracking lines and boxes on scroll
    updateTrackingVisuals();
    
    // Handle sticky solution header
    handleStickySolutionHeader();
    
    // Position plane to subtitle
    positionPlaneToSubtitle();
});

function updateTrackingVisuals() {
    const trackingLines = document.getElementById('trackingLines');
    const container = document.querySelector('.animation-container');
    if (!trackingLines || !container) return;

    const containerRect = container.getBoundingClientRect();
    
    // Set SVG viewBox to cover the full container area
    trackingLines.setAttribute('viewBox', `0 0 ${containerRect.width} ${containerRect.height}`);
    trackingLines.setAttribute('width', containerRect.width);
    trackingLines.setAttribute('height', containerRect.height);

    // Define four bottom anchor points for the lines - spread across full width
    const anchor1 = { x: 0, y: containerRect.height }; // Far left side
    const anchor2 = { x: containerRect.width * 0.25, y: containerRect.height }; // Left middle
    const anchor3 = { x: containerRect.width * 0.5, y: containerRect.height }; // Center
    const anchor4 = { x: containerRect.width * 0.75, y: containerRect.height }; // Right middle

    // Initialize line storage if it doesn't exist
    if (!window.trackingLineElements) {
        window.trackingLineElements = [];
    }

    // Clear old lines if we have more than needed (birds + drone)
    const expectedLineCount = birds.length * 4 + 3; // 4 per bird, 3 for drone
    while (trackingLines.children.length > expectedLineCount) {
        trackingLines.removeChild(trackingLines.lastChild);
    }

    // --- BIRDS ---
    birds.forEach((birdData, birdIndex) => {
        const bird = birdData.element;
        const birdRect = bird.getBoundingClientRect();

        if (birdRect.width === 0) return; // Skip if bird is not yet visible

        const birdCenterX = birdRect.left - containerRect.left + birdRect.width / 2;
        const birdCenterY = birdRect.top - containerRect.top + birdRect.height / 2;

        // Draw lines from all four anchors to the bird
        [anchor1, anchor2, anchor3, anchor4].forEach((anchor, anchorIndex) => {
            const lineIndex = birdIndex * 4 + anchorIndex;
            
            // Get or create line element
            let line = trackingLines.children[lineIndex];
            if (!line) {
                line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('class', 'tracking-line');
                trackingLines.appendChild(line);
            }

            // Update line coordinates
            line.setAttribute('x1', anchor.x);
            line.setAttribute('y1', anchor.y);
            line.setAttribute('x2', birdCenterX);
            line.setAttribute('y2', birdCenterY);
        });

        // Update or create tracking box
        let trackingBox = bird.trackingBox;
        if (!trackingBox) {
            trackingBox = document.createElement('div');
            trackingBox.className = 'tracking-box';
            container.appendChild(trackingBox);
            bird.trackingBox = trackingBox;
        }

        // Scale padding based on bird size
        const basePadding = 5; // Reduced base padding from 10 to 5
        const padding = basePadding * birdData.scale; // Scale padding with bird size
        trackingBox.style.left = `${birdRect.left - containerRect.left - padding}px`;
        trackingBox.style.top = `${birdRect.top - containerRect.top - padding}px`;
        trackingBox.style.width = `${birdRect.width + padding * 2}px`;
        trackingBox.style.height = `${birdRect.height + padding * 2}px`;
        trackingBox.style.border = '1px solid var(--secondary-color)';
        trackingBox.style.background = 'rgba(255, 68, 68, 0.1)';
    });

    // --- DRONE TRACKING (Hospital Section) ---
    const drone = document.getElementById('droneAnim');
    const hospitalSection = document.querySelector('.hospital-hero-background');
    const hospitalTrackingLines = document.getElementById('hospitalTrackingLines');
    
    if (drone && hospitalSection && hospitalTrackingLines) {
        const droneRect = drone.getBoundingClientRect();
        const hospitalRect = hospitalSection.getBoundingClientRect();
        
        // Set up the hospital tracking lines SVG only once
        if (!hospitalTrackingLines.hasAttribute('data-initialized')) {
            hospitalTrackingLines.setAttribute('viewBox', `0 0 ${hospitalRect.width} ${hospitalRect.height}`);
            hospitalTrackingLines.setAttribute('width', hospitalRect.width);
            hospitalTrackingLines.setAttribute('height', hospitalRect.height);
            hospitalTrackingLines.style.position = 'absolute';
            hospitalTrackingLines.style.top = '0';
            hospitalTrackingLines.style.left = '0';
            hospitalTrackingLines.style.zIndex = '9';
            hospitalTrackingLines.style.pointerEvents = 'none';
            hospitalTrackingLines.setAttribute('data-initialized', 'true');
        }
        
        // Only show if drone is visible and in viewport
        if (droneRect.width > 0 && droneRect.height > 0 && 
            droneRect.top < window.innerHeight && droneRect.bottom > 0) {
            
            // Calculate drone center relative to the hospital section
            const droneCenterX = droneRect.left - hospitalRect.left + droneRect.width / 2;
            const droneCenterY = droneRect.top - hospitalRect.top + droneRect.height / 2;

            // Define three anchor points: two from left side, one from right side
            const droneAnchor1 = { x: -50, y: hospitalRect.height * 0.85 }; // Far left, off-screen
            const droneAnchor2 = { x: -30, y: hospitalRect.height * 0.98 }; // Left middle, off-screen
            const droneAnchor3 = { x: hospitalRect.width + 50, y: hospitalRect.height * 0.90 }; // Far right, off-screen

            // Create or update tracking lines without clearing
            const anchors = [droneAnchor1, droneAnchor2, droneAnchor3];
            
            for (let i = 0; i < 3; i++) {
                let line = hospitalTrackingLines.children[i];
                if (!line) {
                    line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('class', 'tracking-line');
                    hospitalTrackingLines.appendChild(line);
                }
                
                const anchor = anchors[i];
                
                line.setAttribute('x1', anchor.x);
                line.setAttribute('y1', anchor.y);
                line.setAttribute('x2', droneCenterX);
                line.setAttribute('y2', droneCenterY);
                
                // Solid line styling for drone tracking lines
                line.setAttribute('stroke', '#ff4444');
                line.setAttribute('stroke-width', '3');
                line.setAttribute('opacity', '0.9');
                line.setAttribute('stroke-linecap', 'round');
            }

            // Add or update a red tracking box around the drone
            if (!drone.trackingBox) {
                const box = document.createElement('div');
                box.className = 'tracking-box';
                box.style.position = 'absolute';
                box.style.zIndex = 9;
                hospitalSection.appendChild(box);
                drone.trackingBox = box;
            }
            
            const box = drone.trackingBox;
            const padding = 12; // Slightly larger padding for drone
            box.style.left = `${droneRect.left - hospitalRect.left - padding}px`;
            box.style.top = `${droneRect.top - hospitalRect.top - padding}px`;
            box.style.width = `${droneRect.width + padding * 2}px`;
            box.style.height = `${droneRect.height + padding * 2}px`;
            box.style.border = '3px solid #ff4444'; // Thicker border
            box.style.background = 'rgba(255, 68, 68, 0.15)'; // Slightly more visible background
            box.style.pointerEvents = 'none';
            box.style.borderRadius = '4px';
            box.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.5)'; // Glow effect
            box.style.display = 'block';
        } else {
            // Hide tracking box if drone is not visible, but keep lines
            if (drone.trackingBox) {
                drone.trackingBox.style.display = 'none';
            }
        }
    }
}

// Fade-in on scroll animation
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Live monitoring data simulation
function updateMonitoringData() {
    const objectsTracked = document.querySelector('.monitor-item:nth-child(2) .monitor-value');
    const statusIndicator = document.querySelector('.monitor-item:nth-child(2) .status-indicator');
    
    setInterval(() => {
        const currentValue = parseInt(objectsTracked.textContent);
        const newValue = currentValue + Math.floor(Math.random() * 3) - 1; // Random change -1 to +1
        const clampedValue = Math.max(300, Math.min(400, newValue)); // Keep between 300-400
        
        objectsTracked.textContent = clampedValue;
        
        // Update status indicator color based on value
        if (clampedValue > 380) {
            statusIndicator.className = 'status-indicator warning';
        } else {
            statusIndicator.className = 'status-indicator online';
        }
    }, 5000); // Update every 5 seconds
}

// Enhanced bird tracking animation
function addTrackingPulseAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes trackingPulse {
            0% { transform: translate(50%, -50%) scale(1); opacity: 0.7; }
            50% { transform: translate(50%, -50%) scale(1.1); opacity: 1; }
            100% { transform: translate(50%, -50%) scale(1); opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
}

// Particle effect for background
function createParticleEffect() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Create floating particles with increased quantity and variety
    for (let i = 0; i < 50; i++) { // Increased from 20 to 50 particles
        const particle = document.createElement('div');
        
        // Random size between 2px and 6px for variety
        const size = 2 + Math.random() * 4;
        
        // Different shades of green for variety
        const greenShades = [
            'rgba(0, 255, 136, 0.8)',    // Original bright green, higher opacity
            'rgba(0, 255, 100, 0.9)',    // Slightly different green, very high opacity
            'rgba(50, 255, 150, 0.7)',   // Lighter green
            'rgba(0, 200, 120, 0.85)',   // Darker green
            'rgba(100, 255, 180, 0.75)'  // Very light green
        ];
        const randomColor = greenShades[Math.floor(Math.random() * greenShades.length)];
        
        // Random animation duration between 8-15 seconds
        const animationDuration = 8 + Math.random() * 7;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${randomColor};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${animationDuration}s linear infinite;
            box-shadow: 0 0 ${size * 2}px ${randomColor};
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add floating animation with enhanced effect
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% { 
                transform: translateY(100vh) rotate(0deg); 
                opacity: 0; 
            }
            5% { 
                opacity: 1; 
            }
            95% { 
                opacity: 1; 
            }
            100% { 
                transform: translateY(-100px) rotate(360deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(floatStyle);
}

// Alert notification system
function createAlertNotifications() {
    const alertsSection = document.querySelector('.alerts-section');
    
    // Simulate new alert every 30 seconds
    setInterval(() => {
        showNewAlertNotification();
    }, 30000);
}

function showNewAlertNotification() {
    const notification = document.createElement('div');
    notification.className = 'alert-notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(255, 68, 68, 0.3);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 0.5rem;">NEW ALERT</div>
        <div style="font-size: 0.9rem;">Drone detected at 2.3km - Vector: SE</div>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// FAA Total Registered Drones (2016–April 2025)
const faaTotalDronesData = {
  labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  datasets: [
    {
      label: "Total Registered Drones (millions)",
      data: [0.6, 0.95, 1.2, 1.35, 1.45, 1.55, 1.613, 1.867, 1.8894, 2.381],
      borderColor: "#00ff88",
      backgroundColor: "#00ff88",
      fill: false,
      tension: 0.2,
      pointRadius: 5,
      pointBackgroundColor: "#00ff88",
      pointBorderColor: "#1a1a1a",
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#00cc6a"
    }
  ]
};

function renderFaaTotalDronesChart() {
    if (!window.Chart) return;
    const ctx = document.getElementById("droneChart").getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: faaTotalDronesData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 2000 },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Total Registered Drones (millions)',
              color: '#00ff88',
              font: {
                size: 14,
                weight: 'bold'
              }
            },
            ticks: {
              callback: (value) => value.toLocaleString(),
              color: '#00ff88',
              font: {
                size: 12
              }
            },
            grid: {
              color: 'rgba(0, 255, 136, 0.2)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year',
              color: '#00ff88',
              font: {
                size: 14,
                weight: 'bold'
              }
            },
            ticks: {
              color: '#00ff88',
              font: {
                size: 12
              }
            },
            grid: {
              color: 'rgba(0, 255, 136, 0.2)'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: "FAA Total Drone Registrations (2016–April 2025)",
            color: '#00ff88',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
}

function loadChartJsAndRenderFaaTotal() {
    if (window.Chart) {
        renderFaaTotalDronesChart();
        return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js';
    script.onload = renderFaaTotalDronesChart;
    document.head.appendChild(script);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up all animations and interactions
    handleScrollAnimations();
    setupSmoothScrolling();
    createBirdsWithDepth();
    addTrackingPulseAnimation();
    createParticleEffect();
    updateMonitoringData();
    createAlertNotifications();
    loadChartJsAndRenderFaaTotal();
    
    // Create sticky solution header
    createStickySolutionHeader();
    
    // Set up Learn More button functionality
    setupLearnMoreButtons();
    
    // Start solution typing animation when section becomes visible
    setTimeout(() => {
        const solutionSection = document.querySelector('.solution-section');
        if (solutionSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(solutionTypeWriter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(solutionSection);
        }
    }, 1000);
    
    // Start hospital typing animation when hospital section becomes visible
    setTimeout(() => {
        const hospitalSection = document.querySelector('.hospital-hero');
        if (hospitalSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(hospitalTypeWriter, 500);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(hospitalSection);
        }
    }, 1000);
    
    // Start drone flyover
    startDroneFlyover();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate positions if needed
    const trackingLines = document.getElementById('trackingLines');
    const hospitalTrackingLines = document.getElementById('hospitalTrackingLines');
    
    if (trackingLines) {
        trackingLines.innerHTML = ''; // Clear existing lines
    }
    if (hospitalTrackingLines) {
        // Reset initialization flag so SVG gets re-initialized with new dimensions
        hospitalTrackingLines.removeAttribute('data-initialized');
    }
    
    updateTrackingVisuals();
    
    // Re-render chart to adapt to new container size
    if (window.Chart) {
        const existingChart = Chart.getChart("droneChart");
        if (existingChart) {
            existingChart.destroy();
        }
        setTimeout(renderFaaTotalDronesChart, 100);
    }
});

// Utility to horizontally align plane with the hero subtitle
function positionPlaneToSubtitle() {
    const plane = document.getElementById('plane');
    const subtitle = document.querySelector('.hero-subtitle');
    const container = document.querySelector('.animation-container.overlay-align');
    if (!plane || !subtitle || !container) return;

    // Get bounding rectangles
    const subtitleRect = subtitle.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate the center of the subtitle relative to the container
    const subtitleCenter = subtitleRect.left + subtitleRect.width / 2;
    const containerLeft = containerRect.left;
    const relativeCenter = subtitleCenter - containerLeft;

    // Set the plane's left position so it's centered with the subtitle
    plane.style.left = `${relativeCenter}px`;
}

// Run on load and resize only
window.addEventListener('DOMContentLoaded', positionPlaneToSubtitle);
window.addEventListener('resize', positionPlaneToSubtitle);

// Create sticky solution header
function createStickySolutionHeader() {
    const stickyHeader = document.createElement('div');
    stickyHeader.className = 'solution-header-sticky';
    stickyHeader.id = 'stickySolutionHeader';
    stickyHeader.style.display = 'none';
    
    stickyHeader.innerHTML = `
        <h2>
            <span class="solution-typed-text-sticky">OUR SOLUTION</span>
            <span class="solution-cursor">|</span>
        </h2>
    `;
    
    document.body.appendChild(stickyHeader);
    return stickyHeader;
}

// Sync sticky header text with main header
function syncStickyText() {
    const mainText = document.querySelector('.solution-typed-text');
    const stickyText = document.querySelector('.solution-typed-text-sticky');
    
    if (mainText && stickyText) {
        stickyText.textContent = mainText.textContent;
    }
}

// Handle sticky solution header on scroll
function handleStickySolutionHeader() {
    const solutionSection = document.querySelector('.solution-section');
    const sectionHeader = document.querySelector('.solution-section .section-header');
    const stickyHeader = document.getElementById('stickySolutionHeader');
    
    if (!solutionSection || !sectionHeader || !stickyHeader) return;
    
    const sectionTop = solutionSection.offsetTop;
    const sectionBottom = sectionTop + solutionSection.offsetHeight;
    const headerHeight = sectionHeader.offsetHeight;
    const scrollY = window.scrollY;
    const triggerPoint = sectionTop + headerHeight - 100; // 100px before header reaches top
    
    if (scrollY >= triggerPoint && scrollY <= sectionBottom) {
        // Show sticky header
        stickyHeader.style.display = 'block';
        solutionSection.classList.add('sticky-active');
        syncStickyText();
    } else {
        // Hide sticky header
        stickyHeader.style.display = 'none';
        solutionSection.classList.remove('sticky-active');
    }
}

// Drone animation logic for graph/stats section
function startDroneFlyover() {
    const section = document.querySelector('.drone-combined-chart-section');
    const container = section ? section.querySelector('.drone-animation-container') : null;
    if (!section || !container) return;

    const DRONE_IMG = 'CF6D46F8-F382-4CFA-AFE8-6050EB6EF665.png';
    const MIN_WIDTH = 60; // px
    const MAX_WIDTH = 140; // px
    const MIN_HEIGHT = 40; // px
    const MAX_HEIGHT = 100; // px
    const MIN_DURATION = 1800; // ms
    const MAX_DURATION = 5000; // ms
    const MIN_SPAWN = 700; // ms
    const MAX_SPAWN = 1800; // ms

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getDroneBoxCorners(left, top, width, height) {
        return [
            { x: left, y: top }, // top-left
            { x: left + width, y: top }, // top-right
            { x: left, y: top + height }, // bottom-left
            { x: left + width, y: top + height } // bottom-right
        ];
    }

    function getCurrentTransformX(element) {
        const style = window.getComputedStyle(element);
        const transform = style.transform || style.webkitTransform || style.mozTransform;
        if (transform && transform !== 'none') {
            const match = transform.match(/matrix\(([^)]+)\)/);
            if (match) {
                const values = match[1].split(',');
                return parseFloat(values[4]) || 0;
            }
        }
        return 0;
    }

    function spawnDrone() {
        // Random size - use same value for width and height to create perfect squares
        const size = getRandomInt(MIN_WIDTH, MAX_WIDTH);
        const width = size;
        const height = size;

        // Get the area for random height
        const statsArea = section.querySelector('.chart-stats-container');
        if (!statsArea) return;
        const areaRect = statsArea.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const minY = areaRect.top - sectionRect.top;
        const maxY = minY + areaRect.height - height;
        const top = getRandomInt(minY, maxY);

        // Random direction
        const direction = Math.random() < 0.5 ? 'ltr' : 'rtl';
        const duration = getRandomInt(MIN_DURATION, MAX_DURATION);

        // Initial left position
        const initialLeft = direction === 'ltr' ? -width : section.offsetWidth;

        // Create drone element
        const drone = document.createElement('div');
        drone.className = 'drone-flyer';
        drone.style.width = width + 'px';
        drone.style.height = height + 'px';
        drone.style.top = `${top}px`;
        drone.style.left = `${initialLeft}px`;
        drone.style.transition = `transform ${duration}ms linear`;
        drone.style.transform = 'none';
        drone.style.background = 'rgba(255, 68, 68, 0.3)'; // Add transparent red background
        drone.style.border = '2px solid #ff4444'; // Keep the red border
        drone.style.display = 'flex'; // Add flexbox for centering
        drone.style.alignItems = 'center'; // Center vertically
        drone.style.justifyContent = 'center'; // Center horizontally
        drone.innerHTML = `<img src="${DRONE_IMG}" alt="Drone" style="max-width:80%;max-height:80%;width:auto;height:auto;display:block;">`;
        container.appendChild(drone);

        // Animate drone movement (removed tracking line logic)
        setTimeout(() => {
            drone.style.transform = direction === 'ltr'
                ? `translateX(${section.offsetWidth + width * 2}px)`
                : `translateX(-${section.offsetWidth + width * 2}px)`;
        }, 20);
        
        setTimeout(() => {
            if (drone.parentNode) drone.parentNode.removeChild(drone);
        }, duration + 100);

        // Schedule next drone with random interval
        setTimeout(spawnDrone, getRandomInt(MIN_SPAWN, MAX_SPAWN));
    }

    // Start the first drone
    spawnDrone();
}

// Learn More button functionality
function setupLearnMoreButtons() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    
    learnMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the parent solution item to identify which one was clicked
            const solutionItem = this.closest('.solution-item');
            const title = solutionItem.querySelector('h3').textContent;
            
            // Create a modal or expand the content
            showLearnMoreModal(title, index);
        });
    });
}

function showLearnMoreModal(title, index) {
    // Create modal content based on which button was clicked
    const modalContent = {
        0: {
            title: "Camera Arrays",
            content: `
                <h3>Advanced Camera Network</h3>
                <p>Our camera arrays utilize high-resolution, low-light capable cameras strategically positioned around airport perimeters. Each camera operates independently while sharing data through our proprietary network protocol.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>4K resolution with 30fps capture rate</li>
                    <li>Night vision capability with IR sensors</li>
                    <li>Weather-resistant housing rated IP67</li>
                    <li>360-degree coverage with overlapping fields of view</li>
                    <li>Real-time data transmission via fiber optic network</li>
                </ul>
                
                <h4>Deployment:</h4>
                <p>Cameras are installed at optimal heights and angles to maximize coverage while minimizing blind spots. The system automatically calibrates camera positions and synchronizes timestamps for precise triangulation.</p>
            `
        },
        1: {
            title: "3D Triangulation",
            content: `
                <h3>Precision Location Tracking</h3>
                <p>Our 3D triangulation system processes data from multiple camera viewpoints to calculate the exact position, velocity, and trajectory of detected objects in real-time.</p>
                
                <h4>Technology:</h4>
                <ul>
                    <li>Multi-camera synchronization with microsecond precision</li>
                    <li>Advanced computer vision algorithms for object detection</li>
                    <li>Machine learning-based classification (bird vs drone vs aircraft)</li>
                    <li>Predictive trajectory modeling</li>
                    <li>Real-time risk assessment and threat prioritization</li>
                </ul>
                
                <h4>Accuracy:</h4>
                <p>The system achieves sub-meter accuracy within 2km range, with position updates every 100ms. This precision enables early warning systems and automated response protocols.</p>
            `
        },
        2: {
            title: "Cost-Effective Solution",
            content: `
                <h3>Budget-Friendly Safety</h3>
                <p>ProTrack Safety Solutions provides enterprise-grade protection at a fraction of traditional radar system costs, making advanced detection accessible to airports of all sizes.</p>
                
                <h4>Cost Comparison:</h4>
                <ul>
                    <li>Traditional radar: $2-5 million per installation</li>
                    <li>ProTrack Safety Solutions system: $200,000-500,000 per installation</li>
                    <li>90% cost reduction with superior performance</li>
                    <li>Modular design allows for gradual expansion</li>
                    <li>Low maintenance requirements reduce operational costs</li>
                </ul>
                
                <h4>ROI Benefits:</h4>
                <p>Preventing just one bird strike or drone incident can save hundreds of thousands in aircraft damage, operational delays, and potential liability costs. Our system typically pays for itself within 6-12 months.</p>
            `
        }
    };
    
    const content = modalContent[index];
    if (!content) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'learn-more-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-content';
    modalBox.style.cssText = `
        background: var(--light-color);
        border-radius: 15px;
        padding: 2.5rem;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        margin: 2rem;
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    `;
    
    modalBox.innerHTML = `
        <button class="modal-close" style="
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--gray-medium);
            transition: color 0.3s ease;
        ">&times;</button>
        <div class="modal-header" style="margin-bottom: 2rem;">
            <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${content.title}</h2>
        </div>
        <div class="modal-body">
            ${content.content}
        </div>
        <div class="modal-footer" style="margin-top: 2rem; text-align: center;">
            <button class="cta-button" onclick="closeModal()">Get Started</button>
        </div>
    `;
    
    modal.appendChild(modalBox);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalBox.style.transform = 'translateY(0)';
    }, 10);
    
    // Close functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Global close function
    window.closeModal = function() {
        modal.style.opacity = '0';
        modalBox.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
}

// Radar Overlay Reveal Animation
function handleRadarReveal() {
    const radarOverlay = document.getElementById('radarRevealOverlay');
    const radarRevealImage = document.querySelector('.radar-reveal-image');
    if (!radarOverlay || !radarRevealImage) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.min(scrollTop / (documentHeight - windowHeight), 1);
    
    // Offset the start point by 3% - fade in starts much earlier in the scroll
    const offsetProgress = Math.max(0, scrollProgress - 0.03);
    
    // Create a custom easing curve for the reveal
    // Start with overlay fully visible (hiding Map 2.png), fade out as we scroll down
    const revealProgress = Math.min(offsetProgress * 4, 1); // Quadruple the speed to complete by 25% scroll (was 2x for 50%)
    
    // Apply much steeper easing curve for faster, more visible transition
    const easedProgress = 1 - Math.pow(1 - revealProgress, 1.5); // Much steeper curve (was cubic: power of 3)
    
    // Set opacity based on scroll progress
    // As we scroll down, we want to hide the reveal layer to show more of the Map 2.png overlay
    radarOverlay.style.opacity = Math.max(0, 1 - easedProgress);
    
    // Apply the same parallax effect as the background images
    // This ensures the reveal image moves exactly the same as the background
    const parallaxSpeed = 1.05; // Match the original parallax speed exactly
    const translateY = -(scrollTop * parallaxSpeed);
    radarRevealImage.style.transform = `translateY(${translateY}px)`;
}

// Initialize radar reveal on page load
document.addEventListener('DOMContentLoaded', function() {
    // Only apply radar reveal on get-started page
    if (window.location.pathname.includes('get-started.html')) {
        // Set initial state
        handleRadarReveal();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleRadarReveal, { passive: true });
        
        // Also handle resize events
        window.addEventListener('resize', handleRadarReveal, { passive: true });
    }
});

// Coming Soon Box Background Animation
function setupComingSoonAnimation() {
    const comingSoonBox = document.querySelector('.get-started-cta.coming-soon');
    if (!comingSoonBox) return;
    
    function updateBackground() {
        const rect = comingSoonBox.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when the box is in view and determine scroll progress
        const boxTop = rect.top;
        const boxBottom = rect.bottom;
        const boxHeight = rect.height;
        
        // Calculate scroll progress based on box position relative to viewport
        let progress = 0;
        
        if (boxBottom > 0 && boxTop < windowHeight) {
            // Box is at least partially visible
            // Calculate how much of the viewport the box has traveled through
            const viewportTravel = windowHeight + boxHeight;
            const currentPosition = windowHeight - boxTop;
            progress = currentPosition / viewportTravel;
        }
        
        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Remove all background classes first
        comingSoonBox.classList.remove('bg-1', 'bg-2', 'bg-3');
        
        // Apply background based on scroll progress
        // Image 1: 0 - 0.33
        // Image 2: 0.33 - 0.66  
        // Image 3: 0.66 - 1.0
        if (progress <= 0.33) {
            comingSoonBox.classList.add('bg-1');
        } else if (progress <= 0.66) {
            comingSoonBox.classList.add('bg-2');
        } else {
            comingSoonBox.classList.add('bg-3');
        }
        
        // Debug logging (remove in production)
        // console.log(`Progress: ${progress.toFixed(2)}, Class: bg-${progress <= 0.33 ? '1' : progress <= 0.66 ? '2' : '3'}`);
    }
    
    // Initial setup
    updateBackground();
    
    // Update on scroll with throttling for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateBackground);
            ticking = true;
            setTimeout(() => ticking = false, 16); // ~60fps
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', updateBackground);
}

// Initialize Coming Soon Animation
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('get-started.html')) {
        setupComingSoonAnimation();
    }
}); 