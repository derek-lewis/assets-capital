import "source-map-support/register";
import { formatJSONResponse } from "@/libs/apiGateway";
import { middyfy } from "@/libs/lambda";
import { aggregateHoldings, updateHolding, Holding } from "@/libs/db";

const cron = async () => {
  // grab holdings, populate rates and sort by account ID then balance
  const pipeline = [
    {
      $lookup: {
        from: "rates",
        localField: "account_id",
        foreignField: "account_id",
        as: "rates",
      },
    },
    {
      $unwind: {
        path: "$rates",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $sort: {
        investor_id: -1,
        balance: -1,
      },
    },
  ];

  const holdings = await aggregateHoldings(pipeline);
  // itterate over holdings and apply interest
  // balances should be saved using pence to avoid rounding errors
  // unsafe multiplication used for proof of concept - safe precision libraries must be created to round and limit based on system prefs.
  const holding_adjustments = [];
  for (const h of holdings) {
    const holding = h as Holding
    let currect_investor = null;

    if (currect_investor != holding.investor_id) {
      // apply ppromotions - this is not production ready and would require an internal promo system
      holding.balance += (holding.balance / 100) * 0.01; // unsafe rounding issues
      currect_investor = holding.investor_id;
    }

    // apply interest
    const rate = holding.rates.rate as number
    holding.balance += (holding.balance / 100) * rate; // unsafe rounding issues

    holding_adjustments.push(
      updateHolding(
        { _id: { $oid: holding._id } },
        { $set: { balance: parseFloat(holding.balance.toPrecision(9)) } }
      )
    );
  }

  // historic record should be kept to provide profit and loss analytics for customer facing applications.
  await Promise.all(holding_adjustments); // apply all updates - consider batching. Must apply update analysis for erors.
};

export const main = middyfy(cron);
