import "./Home.scss";

const Title = ({ opacity }: { opacity: number }) => {
  return (
    <section
      id="one"
      className="main_con session_one"
      style={{
        opacity,
        transform: `translateY(calc(-100px * ${1 - opacity}))`,
      }}
    >
      <img src="images/logo.png" className="logo" alt="" />
      <img src="images/logoStar.svg" className="logo_star" alt="" />
      <h1>Welcome Captain!</h1>
      <p>
        Disclaimer – This game is for entertainment only. It’s not based on real
        science or events. The game or its results do not reflect any
        opportunities at HGS.
      </p>
    </section>
  );
};

export default Title;
