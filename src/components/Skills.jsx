import skills from "./data/skills.json";

const Skills = () => {
  return (
    <section className="container mt-5 skills" id="skills">
      <h2 className="section_title h1">SKILLS</h2>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.title}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/assets/${data.imageSrc}`} alt="" loading="lazy" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
