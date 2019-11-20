import React, { Component } from 'react'

export default class SearchMovie extends Component {
    render() {
        return (
            <div>
                <input placeholder="Filter your Movie" className="search" onChange={this.props.search} />
            </div>
        )
    }
}