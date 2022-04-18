import { assert } from "console";
import { addNumbersTestExample as addNumbers } from "./server";
import { get1 as getcheck} from "./server";
import request from "supertest";
// const baseURL = 'http://127.0.0.1:9000';

describe('get test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request('http://127.0.0.1:9000').get('get');
    expect(response.statusCode).toBe(200);
  });
});

describe('put test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request('http://127.0.0.1:9000').get('put');
    expect(response.statusCode).toBe(200);
  });
});

describe('post test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request('http://127.0.0.1:9000').get('post');
    expect(response.statusCode).toBe(200);
  });
});

describe('patch test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request('http://127.0.0.1:9000').get('patch');
    expect(response.statusCode).toBe(200);
  });
});

describe('delete test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request('http://127.0.0.1:9000').get('delet');
    expect(response.statusCode).toBe(200);
  });
});


describe("Server test suite", () => {
  it("Should add 2+3 properly to 5", () => {
    let result = addNumbers(2, 3);

    expect(result).toBe(5);
  });
});

describe("Tests for server" , () =>{

  it("should add a+b+c properly", () =>
  {
    let result = getcheck(2,3,5);
    expect(result).toBe(10);
  })
});





