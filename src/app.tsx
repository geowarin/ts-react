import React = require('react');

interface Props {
	content: string;
}

class MyComponent extends React.Component<Props, {}> {
	render() {
		return <div>{this.props.content}</div>
	}
}

React.render(<MyComponent content="Hello Worlds" />, document.body);
