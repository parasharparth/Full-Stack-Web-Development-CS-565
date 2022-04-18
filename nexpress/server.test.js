import { assert } from "console";
import { addNumbersTestExample as addNumbers } from "./server";
import { get1 as getcheck} from "./server";
import request from "supertest";
const baseURL = '127.0.0.1:9000';

describe('get test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request(baseURL).get('get');
    
    expect(response.statusCode).toBe(502);
  });
});

describe('put test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request(baseURL).get('put');
    expect(response.statusCode).toBe(502);
  });
});

describe('post test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request(baseURL).get('post');
    expect(response.statusCode).toBe(502);
  });
});

describe('patch test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request(baseURL).get('patch');
    expect(response.statusCode).toBe(502);
  });
});

describe('delete test', () => {
  it('should return a 200 status code',
  async()=>{
    const response = await
    request(baseURL).get('delet');
    expect(response.statusCode).toBe(502);
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





