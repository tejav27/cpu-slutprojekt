import "./Main.css";
import hello from "../../assets/hello.svg";
import { PublicTransport } from "../PublicTransport/PublicTransport";
import { Weather } from "../Weather/Weather";
import Clock from "../clock/Clock";


const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello ITHS!!</h1>
            <p>Welcome...!</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="main__comp">
            <Clock />
            <Weather />
          </div>
          {/* <PublicTransport /> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
