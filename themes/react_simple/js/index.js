// Import not needed because React & ReactDOM are loaded by *.libraries.yml
// import React from 'react';
// import ReactDOM from 'react-dom';

class ShowNodeContent extends React.Component {
    constructor() {
        super();
        this.state = {
          status: false,
        };
        this.showContent = this.showContent.bind(this);
        this.hideContent = this.hideContent.bind(this);
      }
      
      showContent() {
        this.setState({status: true});
      }
      hideContent() {
        this.setState({status: false});
      }
      
    render() {
      var style = {
        active: {
          width: '200px',
          height: '40px',
          padding: '10px',
          margin: '10px',
          color: '#333',
          backgroundColor: '#ddd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        },
        inactive: {
          width: '200px',
          height: '40px',
          padding: '10px',
          margin: '10px',
          color: '#666',
          backgroundColor: '#ccc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        },
        content: {
          margin: '30px',
          padding: '30px',
          backgroundColor: '#eee',
          border: '1px solid black'
        }
      };
  
      return (
        <div>
            {this.state.status === true && 
                <div>
                <ShowHideButton
                    action = {this.hideContent}
                    text = {'Hide Content'}
                    style = {style.active}
                >
                </ShowHideButton>
                <div
                    style={style.content}
                    dangerouslySetInnerHTML={{__html: this.props.content }}
                />
                </div>
            }
            {this.state.status === false && 
                <ShowHideButton 
                    action = {this.showContent}
                    text = {'Show More'}
                    style = {style.inactive}
                >
                </ShowHideButton>
            }
        </div>
      );
    }
  }

class ShowHideButton extends React.Component {
    render() {
        return (
            <button
                style = {this.props.style}
                onClick = {this.props.action}
            >
            {this.props.text}
            </button>
        )
    }
}
  
class NodeContent extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <ShowNodeContent {...this.props} />
            </div>
        );
    }
      
}

// # Example 1: Simple Hello World code
ReactDOM.render(
    <NodeContent 
        title = {document.getElementById('react-content').getAttribute('data-title')}
        content = {document.getElementById('react-content').innerHTML}
    />,
    document.getElementById('react-app')
  );
  