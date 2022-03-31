import getUsers from "./testAPI";

describe("Test 02: Fetch mock", () => {
  it("API return correct fields", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(10);
  });
});
