import experience from "./data/experience.json";

const Experience = () => {
  return (
    <section className="container ex" id="experience">
      <h2 className="section_title h1">EXPERIENCE</h2>
      {experience.map((data) => {
        return (
          <article
            key={data.id}
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              <img
                src={`/assets/${data.imageSrc}`}
                alt={`${data.organisation} logo`}
                className="ex-logo"
                loading="lazy"
              />
            </div>
            <div className="right">
              <h3 className="ex-org">{data.organisation}</h3>
              <h3 className="ex-role">{data.role}</h3>
              <p className="ex-meta">
                <span className="ex-date">
                  {data.startDate} to {data.endDate},
                </span>{" "}
                <span className="ex-location">{data.location}</span>
              </p>
              {data.experiences.map((item) => (
                <p key={item} className="ex-point">
                  {item}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Experience;
