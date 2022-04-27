import "source-map-support/register";
import { formatJSONResponse } from "@/libs/apiGateway";
import { middyfy } from "@/libs/lambda";
import { findHoldings, Holding } from "@/libs/db";

interface InvestorPortfolio {
  [investor_id: string]: number
}

const api = async () => {
  // grab data from db and return to client
  const holdings = await findHoldings({});

  const portfolio: InvestorPortfolio = {}
  for (const h of holdings) {
    const holding = h as Holding
    if (portfolio[holding.investor_id]) {
      portfolio[holding.investor_id] += holding.balance
    } else {
      portfolio[holding.investor_id] = holding.balance
    }
  }

  return formatJSONResponse({
    status: "success",
    data: portfolio,
  });
};

export const main = middyfy(api);
