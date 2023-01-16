import bingx from "../../bingx.app.mjs";

export default {
  name: "BingX Trade NewOrder SL TP",
  version: "0.0.2",
  key: "bingx-trade-new-order-tp-sl",
  description: "Place a New Order with SL TP [reference](https://bingx-api.github.io/docs/swap/trade-api.html#_1-place-a-new-order).",
  props: {
    bingx,
    symbol: {
      propDefinition: [
        bingx,
        "symbol",
      ],
    },
    side: {
      propDefinition: [
        bingx,
        "side",
      ],
    },
    entrustPrice: {
      propDefinition: [
        bingx,
        "entrustPrice",
      ],
    },
    entrustVolume: {
      propDefinition: [
        bingx,
        "entrustVolume",
      ],
    },
    stopLossPrice: {
      propDefinition: [
        bingx,
        "stopLossPrice",
      ],
    },
    takeProfitPrice: {
      propDefinition: [
        bingx,
        "takeProfitPrice",
      ],
    },    
    tradeType: {
      propDefinition: [
        bingx,
        "tradeType",
      ],
    },
    action: {
      propDefinition: [
        bingx,
        "action",
      ],
    },

  },
  type: "action",
  methods: {},
  async run({ $ }) {
    const API_METHOD = "POST";
    const API_PATH = "/api/v1/user/trade";
    const parameters = {
      "symbol": this.symbol,
      "side": this.side,
      "entrustPrice": this.bingx.convertToFloat(this.entrustPrice),
      "entrustVolume": this.bingx.convertToFloat(this.entrustVolume),
      "tradeType": this.tradeType,
      "action": this.action,
      "stopLossPrice": this.bingx.convertToFloat(this.stopLossPrice),
      "takeProfitPrice": this.bingx.convertToFloat(this.takeProfitPrice),
    };
    let returnValue = await this.bingx.makeRequest(API_METHOD, API_PATH, parameters);
    $.export("$summary", `New Future Order for ${this.symbol}`);
    return returnValue;
  },
};
