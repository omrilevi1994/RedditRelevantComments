## Reddit Project for Balance

### `Run The Project`

Run  <br />
`npm install && npm start` <br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Test the Project`
Run  <br />
`npm test` <br />
There are 2 test, one mocking the reddit api, and test the relevant algorithem.


### `What makes a comment relevant? and how i found them ?`

In reddit the i a attribute call SCORE in each comment,<br />
First, i sorted all of the comment of each day by their score.<br />
Then i chose the first 20 comment with most score,
And sorted again the comment that left by who has the longest comment,<br />
And then chose the 3 longest comments. <br />
Thats my observation of relevant comments.

### `how i found a question ?`
English grammar directory says "A written question in English always ends with a question mark: ?"

so thats exactly what i did, i found a comment with a question mark at the and of the comment :)

