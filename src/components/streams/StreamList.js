import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreamList } from 'actions';

const StreamList = ({ fetchStreamList, streams }) => {
  useEffect(() => {
    fetchStreamList();
  }, [fetchStreamList]);

  return (
    <div className="ui segment">
      <h2 className="ui header">Stream List</h2>
      <div class="ui clearing divider"></div>
      <div className="ui divided items">
        {Object.values(streams).map(stream => (
          <div className="item" key={stream.id}>
            <i className="play circle icon large" />
            <div className="middle aligned content">
              <p className="header">{stream.title}</p>
              <p className="description">{stream.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { streams: state.streams };
};

export default connect(mapStateToProps, { fetchStreamList })(StreamList);
