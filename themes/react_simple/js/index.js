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
          height: 'auto',
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

class NodeItem extends React.Component {
    render() {
        return <NodeContent title = {this.props.attributes.title} content = {this.props.attributes.body.value}/>;
    }
}  
  
class NoData extends React.Component {
    render() {
        return <div>No articles found.</div>;
    }
}
  
class NodeList extends React.Component {
    constructor() {
        super();
        this.state = {data: null};
        this.loadNodeData = this.loadNodeData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.validateData = this.validateData.bind(this);
    }
    
    componentWillMount() {
        this.loadNodeData();
    }

    loadNodeData() {
    // This should point to your local Drupal instance.
        const API_ROOT = 'http://localhost:8888/jsonapi/';
        const url = `${API_ROOT}node/article`;
        
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then((data) => this.updateData(data))
            .catch(err => console.log('API got an error', err))
    }
      
    updateData(responseData) {
        this.validateData(responseData) ? this.setState( { data: responseData.data }, () => console.log(this.state)) 
            : console.log('The data could not be updated because it contained an error.');
    }

    validateData(data) {
        if (data === null) {
            return false;
        }
        if (data.data === undefined ||
            data.data === null ||
            data.data.length === 0 ) {
            return false;
        }
        return true;
    }
      

    render() {
        const style = {
            nodeItem: {
              border: '2px solid black',
              margin: '10px',
              padding: '10px',
              backgroundColor: '#ccc',
            },
            nodeItemActive: {
              border: '2px solid black',
              margin: '10px',
              padding: '10px',
              backgroundColor: '#fff',
            }
        };

        return (
        <div>
            <h2>Site content</h2>
            {this.state.data !== null ?
            this.state.data.map(item => {
                let className = 'nodeItem';
                let current = false;
                if (Number(this.props.nid) === Number(item.attributes.nid)) {
                    className = 'nodeItemActive';
                    current = true;
                }
                console.log(className);
                return (<div style={style[className]}> <NodeItem current={current} {...item} /> </div>);
            } )
            :
            <NoData />
            }
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
    document.getElementById('react-app-exercise5')
);

ReactDOM.render(
    <NodeList
        nid={document.getElementById('react-app-exercise8').getAttribute('data-nid')}
    />,
    document.getElementById('react-app-exercise8-container')
);
  