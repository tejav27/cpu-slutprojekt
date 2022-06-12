import AnalogClock from "./DashboardClock";

const Clock = () =>{
    let options = {
        width: "200px",
        border: true,
        borderColor: "#693250",
        baseColor: "#e5dadf ",
        centerColor: "#693250",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#693250",
          minute: "#693290",
          hour: "#693290",
        },
        seconds: 1, // set your
        minutes: 10, // own
        hours: 22, // time here.
      };

      return (
        <AnalogClock {...options} />
      )
}

export default Clock