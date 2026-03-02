import {
  DiscountApplicationStrategy,
  FunctionRunResult,
} from "../generated/api";

export function run(): FunctionRunResult {
  return {
    discountApplicationStrategy: DiscountApplicationStrategy.First,
    discounts: [
      {
        message: "Desconto aplicado 🎉",
        targets: [],
        value: {
          percentage: {
            value: "10.0",
          },
        },
      },
    ],
  };
}
