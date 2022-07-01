import React from 'react'
import FollowingIndexItemContainer from './following_index_item_container';


class FollowingIndex extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount() {
        this.props.requestAllUsers();
        this.props.requestAllFollows();
    }

    render() {
        
        return (
            <div className="following-index">
                <h1 className="page">{this.props.text}</h1>
               

                {this.props.following.map((follow) => (
                < FollowingIndexItemContainer
                    key={follow.id} 
                    follow={follow} 
                    currentUserId={this.props.currentUserId}
                />
                ))
                }
             
                
            </div>
        )
    }

}

export default FollowingIndex