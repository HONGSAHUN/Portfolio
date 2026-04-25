import galleries from "./Data/galleries"; 
import '../Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="gallery-header">
        <h2>Portfolio Gallery</h2>
      </div>

      <div className="gallery-grid">
        {galleries.map((item, index) => (
          <motion.div 
            key={item.id}
            className="gallery-item"
            
            initial={{ opacity: 0, y: 50 }}      
            whileInView={{ opacity: 1, y: 0 }}   
            viewport={{ once: false }}            // false로 하면 내릴 때마다 반복
            transition={{ 
              duration: 1.25, 
              delay: index * 0.25  // 인덱스(0,1,2,3)에 따라 0.15초씩 늦게 출발
        
            }}
          >
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} onError={(e)=>e.target.style.display='none'}/>
              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;