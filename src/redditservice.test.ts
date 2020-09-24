import { relevantComments, buildRedditUrl } from './RedditService'

const mockComments = [[
  {
    body: "hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey ",
    score: 1
  },
  {
    body: "hey hey hey hey ",
    score: 100
  },
  {
    body: "hey hey hey hey hey hey ?",
    score: 1
  },
  {
    body: "hey hey hey hey hey hey hey hey hey hey hey ",
    score: 50
  },
  {
    body: "hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey ",
    score: 1
  },
  {
    body: "hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey ",
    score: 1000
  },
  {
    body: "hey hey hey hey hey hey ",
    score: 1
  },
  {
    body: "hey hey hey hey hey hey hey hey hey hey ",
    score: 1
  },
]];

const redditUrl = `http://api.pushshift.io/reddit/comment/search/?q=microsoft&after=2d&before=1d&sort=score&size=100`;

test('works with promises', () => {
  const data = relevantComments(mockComments);

  expect(data[0].comments.length).toEqual(3);
  expect(data[0].question.body).toEqual("hey hey hey hey hey hey ?");
});

test('build reddit url', () => {
  const url = buildRedditUrl('microsoft', 1);

  expect(url).toEqual(redditUrl);

});