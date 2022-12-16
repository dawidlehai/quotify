import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dawid", text: "Healing comes with time" },
  { id: "q2", author: "Max", text: "Learning React is fun!" },
  { id: "q3", author: "Daniel", text: "I care, but most of the time I don't" },
];

const QuoteDetails = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) return <p className="centered">No quote found.</p>;

  return (
    <Fragment>
      <h1>Quote details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
