import React from 'react';
 
 class Stream extends React.Component {

 	constructor(props){
 		super(props);
 		this.state={};
 	}
 	render() {
    const { tracks = [] } = this.props;

    return (
      <div>
        {
          tracks.map((track, key) => {
            return (
            	<div className='track' key={key}>
            		{track.title}
            		<button type='button' 
            			onClick={()=>{this.setState({ [key]: !this.state[key] })}} >
            			{this.state[key] ? 'dislike' : 'like' }
            		</button>
            	</div>
            )
          })
        }
      </div>
    );
  }
 }

 export default Stream;