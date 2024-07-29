import "./Home.scss";

const ThirdSession = ({ opacity }: { opacity: number }) => {
  return (
    <section
      className="main_con session_three"
      style={{
        opacity,
        transform: `translateY(calc(-100px * ${1 - opacity}))`,
      }}
    >
      <p >
        Steer your ship through <br />
        thrilling cosmic adventures, <br />
        ultimately landing at your <br />
        destined port - <span>HGS!</span>
      </p>
    </section>
  );
};

export default ThirdSession;
