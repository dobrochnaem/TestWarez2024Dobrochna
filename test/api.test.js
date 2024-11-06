import {expect} from 'chai'
import pkg from 'pactum';
const {spec } = pkg;
import 'dotenv/config'
import { baseUrl, userID } from "../helpers/data.js";

describe("Api tests", () => {
  it("get request", async () => {
    const response = await spec ()
    .get(`${baseUrl}/BookStore/v1/Books`)
    .inspect()
    expect(response.statusCode).to.eql(200)
    expect(response.body.books[1].title).to.eql(
      "Learning JavaScript Design Patterns");
    })
    console.log(process.env.SECRET_PASSWORD)

  it.skip("get request", async () => {
    const response = await spec ()
      .get(`${baseUrl}/BookStore/v1/Books`)
      .inspect()
      expect(response.statusCode).to.eql(200)
      expect(response.body.books[4].title).to.eql(
        "You Don't Know JS"
      )
    });
    

  it.skip("Create a user", async () => {
   const response = await spec()
    .post(`${baseUrl}/Account/v1/Authorized`)
    .withBody({
      userName: "user_dobrochna",
      password: process.env.SECRET_PASSWORD,
   })
   .inspect();
   expect(response.statusCode).to.eql(201)
  });
});
