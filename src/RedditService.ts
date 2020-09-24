import axios from 'axios';

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

export const relevantComments = (results: any) => {
  const relevant = results.map((d : any) => {
    const sortedComment = d
    .sort((x: any, y: any) => y.score - x.score)
    .slice(0,20)
    .sort((x: any, y: any) => y.body.length - x.body.length)
    .slice(0,3);
    const question = d.find((e: any) => e.body[e.body.length-1] === '?');

    return { comments: sortedComment , question };

  });
  return relevant;
}