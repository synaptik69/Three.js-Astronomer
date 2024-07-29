import "./Home.scss";

const SecondText = ({ opacity }: { opacity: number }) => {
  return (
    <section
      className="main_con session_two"
      style={{
        opacity,
        transform: `translateY(calc(-100px * ${1 - Math.cos(opacity)}))`,
      }}
    >
      <h1>
        You and your group of techies are
        <br /> what remains of a planet on the
        <br /> brink of destruction.
      </h1>
    </section>
  );
};

export default SecondText;
