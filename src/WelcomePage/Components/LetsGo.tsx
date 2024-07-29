import "./Home.scss";

const LetsGo = ({ opacity }: { opacity: number }) => {
  return (
    <section
      className="main_con session_four"
      style={{
        opacity,
        transform: `translateY(calc(-100px * ${1 - opacity}))`,
      }}
    >
      <h1>Let's take off.</h1>
    </section>
  );
};

export default LetsGo;
