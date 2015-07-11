import React = require('react');

interface Props {
	content?: string;
}

export default class App extends React.Component<Props, {}> {
	render() {
		return <h1>Hello world</h1>
	}
}
