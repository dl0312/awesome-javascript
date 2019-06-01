const GitHub = require("../lib/github");
require("dotenv").config();

describe("Integration with GitHub API", () => {
  let github;

  beforeAll(() => {
    console.log(process.env.ACCESS_TOKEN);
    github = new GitHub({
      accessToken: process.env.ACCESS_TOKEN,
      baseURL: "https://api.github.com"
    });
  });

  test("Get a user", async () => {
    const res = await github.getUser("dl0312");
    expect(res).toEqual(
      expect.objectContaining({
        login: "dl0312"
      })
    );
  });
});
