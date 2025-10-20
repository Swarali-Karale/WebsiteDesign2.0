import { useState } from 'react';

function Notes() {
  return (
    <div className="notes container my-5">
      <h2 className="mb-4 text-primary">Notes: History of Algebra</h2>

      <section className="mb-4">
        <h4>Introduction</h4>
        <p>
          Algebra is a branch of mathematics that studies symbols and the rules for manipulating these symbols. 
          It developed to solve equations and understand relationships between quantities.
        </p>
      </section>

      <section className="mb-4">
        <h4>Origins of Algebra</h4>
        <p>
          The word "algebra" comes from the Arabic term <em>al-jabr</em>, meaning "reunion of broken parts." 
          This term was first used in the book <em>Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala</em> written by the Persian mathematician 
          <strong>Al-Khwarizmi</strong> in the 9th century.
        </p>
      </section>

      <section className="mb-4">
        <h4>Contributions of Civilizations</h4>
        <ul>
          <li><strong>Babylonians:</strong> Used early methods of solving linear and quadratic equations around 2000 BCE.</li>
          <li><strong>Greeks:</strong> Focused on geometric solutions to algebraic problems, as seen in the works of Euclid.</li>
          <li><strong>Islamic Golden Age:</strong> Al-Khwarizmi and others formalized algebraic methods and introduced systematic equation solving.</li>
          <li><strong>Europe:</strong> In the 15th century, algebra began to be taught systematically, and symbolic notation evolved.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>Key Figures</h4>
        <p>
          - <strong>Al-Khwarizmi:</strong> Known as the "father of algebra," he wrote the foundational text on algebraic methods.<br />
          - <strong>Diophantus:</strong> Greek mathematician who worked on equations and solutions.<br />
          - <strong>François Viète:</strong> Developed symbolic algebra notation in the 16th century.<br />
          - <strong>Rene Descartes:</strong> Popularized using letters to represent unknowns.
        </p>
      </section>

      <section className="mb-4">
        <h4>Summary</h4>
        <p>
          Algebra evolved over centuries, influenced by multiple civilizations. Its development enabled mathematicians 
          to generalize arithmetic and solve increasingly complex problems. Today, algebra forms the foundation for 
          advanced mathematics and countless applications in science, engineering, and technology.
        </p>
      </section>
    </div>
  );
}

export default Notes;
