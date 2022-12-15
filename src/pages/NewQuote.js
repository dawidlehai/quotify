import { Fragment } from "react";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <Fragment>
      <h1>Add new quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
