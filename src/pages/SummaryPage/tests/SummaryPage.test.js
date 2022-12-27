import { render, screen } from "@testing-library/react"
import { check } from "yargs";
import SummaryPage from "../SummaryPage";
//import할 때 {} 괄호가 없으면 default로 페이지를 rendering

test("checkbox and button", () => {
    render(<SummaryPage />);
    const checkbox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    });
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole("button", {name: "주문 확인"});
    expect(confirmButton.disabled).toBeTruthy();

})