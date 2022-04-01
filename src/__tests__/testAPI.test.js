import getUsers from "../utils/testAPI";
import fakeUsers from "../utils/fakeUsers";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeUsers),
  })
);

describe("Test 02: Fetches API", () => {
  it("API returns correct fields", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(10);
  });
});

describe("Test 03: Mocks API", () => {
  it("API returns correct fields (Mock)", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(10);
  });
});
