// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//api mocking server를 만들 떄는 setupTest.js여기에 만들어줌
import {server} from './mocks/server';

beforeAll(() => server.listen()) //모든 서버가 시작하기 전에 서버를 listen시켜 줌

afterEach(() => server.resetHandlers())//reset 해주어 다른 테스트들에 영향을 가지 않게 해줌

afterAll(() => server.close()) // 테스트 끝나고 서버를 clean up 해줌

