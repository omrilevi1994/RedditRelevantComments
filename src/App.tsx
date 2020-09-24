import * as React from 'react';
import Search from './Search';
import { relevantComments, getRedditDataLastWeek } from './RedditService';
import Comment from './Comment';
import './App.css';

export interface RedditResult {
   comments: [],
   question: any
}

function App() {

  const [Results, setResults] = React.useState<any>([]);

  const searchReddit = async (searchValue : string) => {
    setResults(await relevantComments(await getRedditDataLastWeek(searchValue)));
  }

  return (
    <div className="App">
      <Search search={searchReddit} />
      {Results.map((d: RedditResult, key: any) =>
        <div key={key}>
          Comment
          {d?.comments.map((e: any, key: any) => <Comment key={key} body={e.body}/>)}

          Question
          <div>{d?.question.body}</div>
        </div>
      )}

    </div>
  );
}

export default App;
