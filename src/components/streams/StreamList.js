import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreamList } from 'actions';

const StreamList = ({ fetchStreamList, streams, currentUserId }) => {
  useEffect(() => {
    fetchStreamList();
  }, [fetchStreamList]);

  const renderAdmin = userId => {
    if (userId === currentUserId) {
      return (
        <div
          style={{ textAlign: 'right', marginTop: 'auto' }}
          className="right floated content"
        >
          <button className="ui button basic primary">EDIT</button>
          <button className="ui button basic negative">DELETE</button>
        </div>
      );
    }
  };

  return (
    <div className="ui segment">
      <h2 className="ui header">Stream List</h2>
      <div className="ui clearing divider"></div>
      <div className="ui divided items">
        {Object.values(streams).map(stream => (
          <div className="item" key={stream.id}>
            <i className="large middle aligned play circle icon" />
            <div className="middle aligned content">
              <p className="header">{stream.title}</p>
              <p className="description">{stream.description}</p>
            </div>
            {renderAdmin(stream.userId)}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { streams: state.streams, currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchStreamList })(StreamList);
