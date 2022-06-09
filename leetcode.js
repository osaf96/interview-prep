const fetch = require("node-fetch");
const fs = require("fs");
var fetchResult = fetch("https://leetcode.com/graphql/", {
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: "",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-csrftoken": "",
    cookie:
      'NEW_PROBLEMLIST_PAGE=1; __stripe_mid=f91ae420-205d-4a1c-be19-850344760c06ead26e; csrftoken=SzZrwPJiGEivTqwepNrQYbG9KeltIZicTyxHEmwvFCxbw9fgvH1zAxtHNliNZpze; c_a_u="c2h5YW16enA=:1nystp:o9txIKA1l8neB8uc2XjoLX7VHr8"; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzEyNjAzNyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMWI5MDcwZDdmZWY4YmZlNDY2OTcxNzI3NzY2NmFlYWU0M2UyZTZjNSIsImlkIjozMTI2MDM3LCJlbWFpbCI6InNoeWFtMjIuY29AZ21haWwuY29tIiwidXNlcm5hbWUiOiJzaHlhbXp6cCIsInVzZXJfc2x1ZyI6InNoeWFtenpwIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL2F2YXRhcnMvYXZhdGFyXzE2NDE0NDk1NjgucG5nIiwicmVmcmVzaGVkX2F0IjoxNjU0NzY2OTQ3LCJpcCI6IjE4My44My4xMzguMjIyIiwiaWRlbnRpdHkiOiI0MDE5NjhiYjIyZGUzMWJkM2UxYzg1MWI0OWNiYmE3NCIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMCwic2Vzc2lvbl9pZCI6MjA0MzgxNjMsInNvY2lhbGFjY291bnRfc3RhdGUiOlt7Im5leHQiOiIvcHJvZmlsZS9hY2NvdW50LyIsInByb2Nlc3MiOiJjb25uZWN0Iiwic2NvcGUiOiIiLCJhdXRoX3BhcmFtcyI6IiJ9LCJMUnFlOXlMb040WGsiXX0.wF-JGVxgOorEmgO_mK5rPOjxMho2h6GU0RiwBPnuey4',
    Referer: "https://leetcode.com/problemset/all/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: '{"query":"\\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\\n  problemsetQuestionList: questionList(\\n    categorySlug: $categorySlug\\n    limit: $limit\\n    skip: $skip\\n    filters: $filters\\n  ) {\\n    total: totalNum\\n    questions: data {\\n      difficulty\\n   questionId: questionFrontendId\\n   companyTags {\\n  name }      title\\n      titleSlug\\n      topicTags {\\n        name\\n   slug\\n      }  }\\n  }\\n}\\n    ","variables":{"categorySlug":"","skip":0,"limit":5000,"filters":{}}}',
  method: "POST",
});

fetchResult
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //save the content to json file
    fs.writeFileSync("leetcode.json", JSON.stringify(data));
  })
  .catch(function (error) {
    console.log(error);
  });
