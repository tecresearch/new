import React from "react";
import App from "../App";
import {
	render,
	fireEvent,
	cleanup,
	wait,
	waitFor,
} from "@testing-library/react";
import fetchMock from "fetch-mock";
import "@testing-library/jest-dom/extend-expect";

const renderApp = () => render(<App />);

afterEach(() => {
	fetchMock.restore();
	cleanup();
});

describe('DateAPI <App />', () => {

	it('check if button click splits and displays the date', async () => {
		const url =
			"https://jsonmock.hackerrank.com/datetime";
		fetchMock.getOnce(
			url,
			JSON.stringify({
				"time": "09:13:23 AM", 
				"date": "10-09-2011"
			})
		);

		const { getByText, getByTestId } = renderApp();
		const button = getByTestId("date-button");
		fireEvent.click(button);
		await waitFor(() => {
			expect(getByTestId("day")).toHaveTextContent("Day: 9");
			expect(getByTestId("month")).toHaveTextContent("Month: 10");
			expect(getByTestId("year")).toHaveTextContent("Year: 2011");
		});
	})

})	