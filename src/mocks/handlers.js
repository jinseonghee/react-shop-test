import {rest} from 'msw';

//나중에 서버에 handler를 넣어주어야 하기 때문에 export를 해줘야 함.(요청받고 client에게 response를 줌)
export const handlers = [
    rest.get('http://localhost:5000/products', (res, req, cxt) => {
        return res(
            ctx.json([
                {
                    "name":"America",
                    "imagePath" : "/images/america.jpeg"
                },
                {
                    "name":"England",
                    "imagePath" : "/images/england.jpeg"
                }
            ])
        )
    }), 
    rest.get('http://localhost:5000/options', (res, req, cxt) => {
        return res(
            ctx.json([
                {
                    "name":"Insurance",
                },
                {
                    "name":"Dinner",
                }
            ])
        )
    }), 
]