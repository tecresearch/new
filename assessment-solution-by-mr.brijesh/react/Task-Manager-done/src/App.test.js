import React from 'react';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { toast } from "react-toastify";

const renderApp = () => render(<App/>);

let taskInput, priorityInput, addButton, tasksList;

afterEach(() => {
  cleanup()
});

beforeEach(() => {
	let {getByTestId} = renderApp();
	taskInput = getByTestId('input-task-name');
	priorityInput = getByTestId('input-task-priority');
	addButton = getByTestId('submit-button');
	tasksList = getByTestId('tasksList');
})

describe("Intial UI", () => {
    it("input tasks input box should be of type text", () => {
        expect(taskInput).toHaveAttribute("type", "text");
    })

    it("task priority input box should be of type number", () => {
        expect(priorityInput).toHaveAttribute("type", "number");
    })
    
    it("initially the tasks table should be empty", () => {
        expect(tasksList.children.length).toBe(0);
    });
});

describe('Add button', () => { 
    it("add button should add a task and it's priority to the table", () => {
        fireEvent.change(taskInput, {target: {value: "Hackerrank Test"}});
        fireEvent.change(priorityInput, {target: {value: 1}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(1);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('1');
    }),

    it("should display an alert if any of the input boxes is empty", () => {
        const toastMock = jest.spyOn(toast, "error").mockImplementation();
        fireEvent.change(taskInput, {target: {value: ""}});
        fireEvent.change(priorityInput, {target: {value: ""}});
        fireEvent.click(addButton);
        expect(toastMock).toHaveBeenCalledWith(
            "Please enter both title and task priority"
        );
        toastMock.mockRestore();
    })

    it("should sort the tasks on the basis of their priority on adding", () => {
        fireEvent.change(taskInput, {target: {value: "Hackerrank Test"}});
        fireEvent.change(priorityInput, {target: {value: 10}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(1);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('10');

        fireEvent.change(taskInput, {target: {value: "Test"}});
        fireEvent.change(priorityInput, {target: {value: 1}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(2);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('1');
        expect(tasksList.children[1].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[1].children[1]).toHaveTextContent('10');
    });

    it("should empty the input boxes on adding a valid task", () => {
        fireEvent.change(taskInput, {target: {value: "Hackerrank Test"}});
        fireEvent.change(priorityInput, {target: {value: 10}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(1);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('10');
        expect(taskInput).toHaveTextContent("");
        expect(priorityInput).toHaveTextContent("");
    })
 });

 describe("Delete Button", () => {
    it("delete button should delete the corresponding task", () => {
        fireEvent.change(taskInput, {target: {value: "Hackerrank Test"}});
        fireEvent.change(priorityInput, {target: {value: 10}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(1);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('10');

        fireEvent.change(taskInput, {target: {value: "Test"}});
        fireEvent.change(priorityInput, {target: {value: 1}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(2);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('1');
        expect(tasksList.children[1].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[1].children[1]).toHaveTextContent('10');

        fireEvent.change(taskInput, {target: {value: "Next"}});
        fireEvent.change(priorityInput, {target: {value: 2}});
        fireEvent.click(addButton);
        expect(tasksList.children.length).toBe(3);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('1');
        expect(tasksList.children[1].children[0]).toHaveTextContent('Next');
        expect(tasksList.children[1].children[1]).toHaveTextContent('2');
        expect(tasksList.children[2].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[2].children[1]).toHaveTextContent('10');

        fireEvent.click(tasksList.children[1].children[2].children[0]);
        expect(tasksList.children[0].children[0]).toHaveTextContent('Test');
        expect(tasksList.children[0].children[1]).toHaveTextContent('1');
        expect(tasksList.children[1].children[0]).toHaveTextContent('Hackerrank Test');
        expect(tasksList.children[1].children[1]).toHaveTextContent('10');
        expect(tasksList.children.length).toBe(2);
    });
 })


