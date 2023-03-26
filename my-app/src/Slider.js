import ReactSlider from "react-slider";
const minValue = 1;
const maxValue = 50;
var currentValue = (minValue+maxValue)/2;
const Slider = () => {
  
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="thumb"
      trackClassName="track"
      min = {minValue}
      max = {maxValue}
      defaultValue = {currentValue}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      onAfterChange={(value, index) =>{
        console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
        //currentValue = value
    }}
    />
  ); 
};


export default Slider;
