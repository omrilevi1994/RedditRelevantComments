import axios from 'axios';

interface RedditComment{
  score: number;
  body: string;
}
export const getRedditDataLastWeek = async (search : string) => {
  const requests = [];

  for(let i = 0; i < 7; i++) {
    requests.push(await getRedditDataPerDay(search, i));
  }

  return requests;
}

export const getRedditDataPerDay = async (search : string, day: number) => {
  const result = await axios.get(buildRedditUrl(search, day));

  return result.data.data;
}

export const buildRedditUrl = (search : string, day: number) => {
  return `http://api.pushshift.io/reddit/comment/search/?q=${search}&after=${day+1}d&before=${day}d&sort=score&size=100`
}

export const relevantComments = (results: Array<Array<RedditComment>>) => {
  const relevant = results.map((d : Array<RedditComment>) => {
    const sortedComment = d
    .sort((x: RedditComment, y: RedditComment) => y.score - x.score)
    .slice(0,20)
    .sort((x: RedditComment, y: RedditComment) => y.body.length - x.body.length)
    .slice(0,3);
    const question = d.find((e: RedditComment) => e.body[e.body.length-1] === '?');

    return { comments: sortedComment , question };

  });
  return relevant;
}