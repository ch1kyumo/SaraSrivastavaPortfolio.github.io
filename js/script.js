// Select all sections with animated shapes
const sections = document.querySelectorAll('.section');

// Function to create random shapes
function createShape(container) {
  const shape = document.createElement('div');
  shape.classList.add('shape');
  
  // Randomize shape type
  const shapeTypes = ['circle', 'square', 'triangle'];
  const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
  shape.classList.add(type);

  // Randomize position and size
  const size = Math.random() * 80 + 20; // Size between 20px and 100px
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.top = `${Math.random() * 100}%`;
  shape.style.left = `${Math.random() * 100}%`;
  shape.style.animationDuration = `${Math.random() * 5 + 3}s`; // Animation duration 3-8s
  
  // Append shape to container
  container.appendChild(shape);
}

// Generate shapes for all sections
sections.forEach((section) => {
  const container = section.querySelector('.animated-shapes');
  for (let i = 0; i < 10; i++) {
    createShape(container);
  }
});

// Mouse Follow Effect
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Move shapes in each section based on mouse movement
  document.querySelectorAll('.shape').forEach((shape, index) => {
    const speed = (index + 1) * 0.05; // Vary speed for each shape
    shape.style.transform = `translate(${clientX * speed}px, ${clientY * speed}px)`;
  });
});
