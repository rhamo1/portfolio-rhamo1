import { BrowserRouter } from "react-router-dom";

const composeProviders =
  (...providers) =>
  (props) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

export const AllProviders = composeProviders(BrowserRouter);
