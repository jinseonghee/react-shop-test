import { setupServer} from "msw/node";
import { handlers } from "./handlers";

//mocking server 생성(handlers.js에서 생성한 모든 handler들을 넣어즘) 
export const server = setupServer(...handlers); //요청을 보냈을 때 요청들이 이 핸들러로 감.