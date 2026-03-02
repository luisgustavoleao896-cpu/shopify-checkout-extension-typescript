import {
  reactExtension,
  Banner,
  useApi,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const { extension } = useApi();

  return (
    <Banner title="Oferta Especial 🎯" status="info">
      Adicione mais um item e ganhe desconto!
    </Banner>
  );
}
