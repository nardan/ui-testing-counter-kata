import React, { Fragment } from 'react';
import Counter from './Counter';

import { Container, Row, Col } from 'reactstrap';

function App() {
	return (
		<Fragment>
			<h1 className="text-center">Counter Testing UI Kata</h1>
			<Container className="p-3">
				<Row>
					<Col>
						<Counter title="First" />
					</Col>
					<Col>
						<Counter title="Second" />
					</Col>
					<Col>
						<Counter title="Third" />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
}

export default App;
