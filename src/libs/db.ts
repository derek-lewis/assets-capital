import axios from "axios";

// request example
// curl --location --request POST 'https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: iZifAwUkeQazdSl22SSLmJY6UtUxQArPtfJjUsJN6OW0Vk6knXBrIEO0wVVCAhD6' \
// --data-raw '{
//     "collection":"<COLLECTION_NAME>",
//     "database":"assets-capital",
//     "dataSource":"dev",
//     "projection": {"_id": 1}
// }'

// constants
const API_KEY =
  "iZifAwUkeQazdSl22SSLmJY6UtUxQArPtfJjUsJN6OW0Vk6knXBrIEO0wVVCAhD6";
const HOLDING_COLLECTION = "holdings";
const DATABASE = "assets-capital";
const DB_SOURCE = "dev";

// initialise axios defaults
axios.defaults.headers.common["api-key"] = API_KEY;

// configure types
export type Holding = {
  _id?: string;
  account_id: string;
  investor_id: string;
  balance: number;
  rates?: Record<string, unknown>;
};

type HoldingResponse = {
  documents: [Holding];
};

// Holdings DB functions
//
// aggregation query
export const aggregateHoldings = async (
  pipeline: Record<string, unknown>[]
) => {
  try {
    const { data } = await axios.post<HoldingResponse>(
      "https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/aggregate",
      {
        collection: HOLDING_COLLECTION,
        database: DATABASE,
        dataSource: DB_SOURCE,
        pipeline,
      }
    );

    return data?.documents;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("ERROR: ", error.message);
      // ERROR: AxiosError<any, any>
      return error.message;
    } else {
      console.error("ERROR: ", error);
      return "An unexpected error occurred";
    }
  }
};

// find multiple
export const findHoldings = async (
  filter: Record<string, unknown>,
  sort?: Record<string, unknown>,
  limit?: number
) => {
  try {
    const { data } = await axios.post(
      "https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/find",
      {
        collection: HOLDING_COLLECTION,
        database: DATABASE,
        dataSource: DB_SOURCE,
        filter,
        sort,
        limit,
      }
    );

    return data?.documents;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("ERROR: ", error.message);
      // ERROR: AxiosError<any, any>
      return error.message;
    } else {
      console.error("ERROR: ", error);
      return "An unexpected error occurred";
    }
  }
};

// find one
export const findHolding = async (filter: Record<string, unknown>) => {
  try {
    const { data } = await axios.post(
      "https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/findOne",
      {
        collection: HOLDING_COLLECTION,
        database: DATABASE,
        dataSource: DB_SOURCE,
        filter,
      }
    );

    return data?.documents;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("ERROR: ", error.message);
      // ERROR: AxiosError<any, any>
      return error.message;
    } else {
      console.error("ERROR: ", error);
      return "An unexpected error occurred";
    }
  }
};

// update one
export const updateHolding = async (
  filter: Record<string, unknown>,
  update: Record<string, unknown>
) => {
  try {
    const { data } = await axios.post(
      "https://data.mongodb-api.com/app/data-mwdrc/endpoint/data/beta/action/updateOne",
      {
        collection: HOLDING_COLLECTION,
        database: DATABASE,
        dataSource: DB_SOURCE,
        filter,
        update,
      }
    );
    
    return data?.documents;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("ERROR: ", error.message);
      // ERROR: AxiosError<any, any>
      return error.message;
    } else {
      console.error("ERROR: ", error);
      return "An unexpected error occurred";
    }
  }
};
