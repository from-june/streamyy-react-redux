import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreamList } from 'actions';
import { Link } from 'react-router-dom';

const StreamList = ({ fetchStreamList, streams, currentUserId }) => {
  useEffect(() => {
    fetchStreamList();
  }, [fetchStreamList]);

  const renderAdmin = (userId, id) => {
    if (userId === currentUserId) {
      return (
        <div
          style={{ textAlign: 'right', marginTop: 'auto' }}
          className="right floated content"
        >
          <Link
            className="ui button primary basic tiny"
            to={`/streams/edit/${id}`}
          >
            EDIT
          </Link>
          <button className="ui button red basic tiny">DELETE</button>
        </div>
      );
    }
  };

  return (
    <>
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
              {renderAdmin(stream.userId, stream.id)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link to="/streams/new" className="ui inverted button secondary">
          Create Stream
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { streams: state.streams, currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchStreamList })(StreamList);
