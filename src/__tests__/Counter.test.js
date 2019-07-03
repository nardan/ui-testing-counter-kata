import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Counter from '../Counter';

afterEach(cleanup);

describe('Counter', () => {
	it('initially shows "0"', () => {
		const { getByTestId } = render(<Counter />);

		const counterDisplay = getByTestId('counter-display');
		expect(counterDisplay).toBeDefined();
		expect(counterDisplay).toHaveTextContent('0');
	});
	it('shows "1" when "increment" is clicked', () => {
		const { getByTestId } = render(<Counter />);

		const counterDisplay = getByTestId('counter-display');
		expect(counterDisplay).toBeDefined();
		expect(counterDisplay).toHaveTextContent('0');

		const incrementBtn = getByTestId('increment-btn');
		expect(incrementBtn).toBeDefined();
		fireEvent.click(incrementBtn);

		expect(counterDisplay).toHaveTextContent('1');
	});
});
