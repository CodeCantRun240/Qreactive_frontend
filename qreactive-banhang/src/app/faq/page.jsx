import styles from "./styles.module.css"

import Image from "next/image";
import { QUESTIONS } from '@/config'
import SingleQuestion from "./SingleQuestion";

function App() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="hero-content">
          <h1>Frequently Asked Questions About QREACTIVE</h1>
          <p>Below we have collected answers to questions that you may have</p>
        </div>    
        
        <div className="image-content">
          <Image src="/top-img.webp" width={100} height={50} alt="Hero Image" />
        </div>

      </section>

      {/* Questions Section */}
      <div className={styles.container}>
        <h3>Question you may have when using our web</h3>
        <section>
          {QUESTIONS.map((QUESTIONS) => (
            <SingleQuestion key={QUESTIONS.id} {...QUESTIONS} />
          ))} 
        </section>
      </div>
    </main>
  );
}

export default App;
