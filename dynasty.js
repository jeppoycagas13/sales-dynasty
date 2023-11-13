const dynastyReign = [
    {"San Dynasty": "MXLI"}, //1041 + 1000
    {"Viloria Dynasty": "MCCCIIII"}, //1304 + 1000
    {"Tan Dynasty": "MCCCXCVIII"},//1398 + 1000
    {"Bon Dynasty": "MCDXLV"}, //1445 + 1000
    {"Maiko Dynasty": "MDCLXIV"},//1664 + 1000
    {"Paul Dynasty": "MCMXLIX"},//1949 + 1000
    {"Andre Dynasty": "MMMXICX"}//3119 + 1000
  ];
  
  function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data"
      };
  
    let longestReign = 0;
    let longestDynastyKey = '';
  
    for (let i = 0; i < dynastyReign.length; i++) {
      const dynasty = Object.keys(dynastyReign[i])[0];
      const reignRomanNumeral = dynastyReign[i][dynasty];
      const numeralToYear = convertYear(reignRomanNumeral);
      // console.log(dynasty)
      // console.log(reignRomanNumeral)
      // console.log(numeralToYear)
  
        const currentReign = numeralToYear;
  
        if (currentReign > longestReign) {
          longestReign = currentReign;
          longestDynastyKey = dynasty;
        }
    }
  
    return longestDynastyKey;
  }
  
  function convertYear(yearRoman) {
    const romanNumerals = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let total = 0;
    let prevValue = 0;
  
    for (let i = 0; i < yearRoman.length; i++) {
      const currentValue = romanNumerals[yearRoman[i]];
      // console.log(currentValue) //Value of each roman
      if (currentValue === undefined) {
        return "Invalid";
      }
  
      if (currentValue > prevValue) {
        total += currentValue - 2 * prevValue;
      } else {
        total += currentValue;
      }
      // console.log(total)
      prevValue = currentValue;
      // console.log(prevValue) // for Compare
    }
  //   console.log(total)
    total += 1000; //condition 1: Starting year is year 1000 (M in roman numerals)
    return total;
  }
  
  console.log(longestDynasty(dynastyReign)); //andre dynasty