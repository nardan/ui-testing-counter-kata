import React, { useState } from 'react';
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardText,
	CardTitle
} from 'reactstrap';

function Counter({ title, ...props }) {
	const [count, setCount] = useState(0);

	return (
		<Card {...props}>
			<CardBody>
				<CardTitle data-testid="title" className="font-weight-bold">
					{title || 'Counter'}
				</CardTitle>
				<CardText>
					My current count is{' '}
					<span data-testid="counter-display" className="font-weight-bolder">
						{count}
					</span>
				</CardText>
				<ButtonGroup>
					<Button data-testid="increment-btn" color="success">
						+1
					</Button>
				</ButtonGroup>
			</CardBody>
		</Card>
	);
}

export default Counter;
