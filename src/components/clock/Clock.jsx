import AnalogClock from "./DashboardClock";

const Clock = () =>{
    let options = {
        width: "12rem",
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
        seconds: 1, 
        minutes: 10,
        hours: 22,
      };

      return (
        <AnalogClock {...options} />
      )
}

export default Clock