
const PerformanceCalculator=(runs,balls)=>{
      const battingAvg = runs/balls;

      if(runs>30 && balls<15){
            const additional = battingAvg*(1/100);
            return avg = battingAvg+additional;
      }
      else if(runs>50 && balls<20){
            const additional = battingAvg*(10/100);
            return avg = battingAvg+additional;
      }
      else if(runs>100 && balls<50){
            const additional = battingAvg*(20/100);
            return avg = battingAvg+additional;
      }
      else{
            return battingAvg
      }

}

console.log(PerformanceCalculator(40, 12))

module.exports={PerformanceCalculator}
