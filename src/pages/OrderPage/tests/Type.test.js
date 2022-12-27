import {render, screen} from "@testing-library/react";
import { server } from "../../../mocks/server";
import Type from "../Type";
import rest from 'msw';

test("display product images from server", async () => {
    render(<Type orderType="products" />) //orderType에 props로 product를 넣어서 type 컴포넌트가 product인지 options인지 선택

    const productImages = await screen.findAllByRole("img",{ //findAllByRole 이건 비동기 요청일 때 사용되므로 await async 를 사용
        name: /product$/i // $는 regular expression으로 product 이름이 된 모든걸 가져오겠단 뜻
    });
    expect(productImages).toHaveLength(2); //handler에서 가져온 image 파일이 2개 이므로

    const altText = productImages.map((element) => element.alt)  //productImages이미지 안의 여러개의 product이미지 중 하나의 element이미지를 잡는다는 뜻
    expect(altText).toEqual(['America product', 'England product']);
});

//error banner
test("when fetching product datas, face an error" , async () => {
    server.resetHandlers(
        rest.get("http://localhost:5000/product", (req, res, ctx) => {
         return res(ctx.status(5000));
        })
    );

    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId("error-banner"); //비동기로 동작하기 때문에 await async 
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
})

//option
test("fetch option information from server", async () => {
    render(<Type orderType = "options"/>);

    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
})