import "source-map-support/register";
import { formatJSONResponse } from "@/libs/apiGateway";
import { middyfy } from "@/libs/lambda";
import { findHoldings } from "@/libs/db";

const api = async (event) => {
  // grab data from db and return to client
  const holdings = await findHoldings({});
  return formatJSONResponse({
    status: "success",
    data: holdings,
  });
};

export const main = middyfy(api);
