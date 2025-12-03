import { calculateInvestmentResults } from "../util/investment";

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input)
    console.log(resultsData);
}

export default Results;
