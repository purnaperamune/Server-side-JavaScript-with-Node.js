const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   if(cycling<= 0 || running<= 0 || swimming<= 0 || extraCalorieInTake<= 0){
      return weightLostInAMonth = -1
   }
   const totalLostMonthly = (cycling + running + swimming) *2 *4
   const finalTotalMonthly = totalLostMonthly - (extraCalorieInTake*30)
   const weightLost = finalTotalMonthly / 1000

   weightLostInAMonth = weightLost

   console.log(weightLostInAMonth)
   return weightLostInAMonth;
   
}
calculateWeightLostInAMonth(-500,0,0,-100)

module.exports = calculateWeightLostInAMonth

