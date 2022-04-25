import type { Context, Callback } from "aws-lambda";
import { main as handler } from "./handler";

describe("API Handler", () => {
  it("should pass with mocked request", async () => {
    const event = {
      headers: {},
      body: "",
    };
    const context = {} as Context;
    const callback = null as Callback;

    const response = await handler(event, context, callback);

    expect(response).toMatchObject({
      body: '{"status":"success","data":{}}',
      statusCode: 200,
    });
  });
});
