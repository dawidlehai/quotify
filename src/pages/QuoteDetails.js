import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const { quoteId } = useParams();

  return (
    <Fragment>
      <h1>Quote details page</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
