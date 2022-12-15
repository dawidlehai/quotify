import { Fragment } from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dawid", text: "Healing comes with time" },
  { id: "q2", author: "Max", text: "Learning React is fun!" },
  { id: "q3", author: "Daniel", text: "I care, but most of the time I don't" },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
