import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MemberList } from '../Components/memberList';
import * as memberListActions from '../Actions/memberListActions';

export default connect(
  // which part of the Redux global state does
  // our component want to receive as props?
  (state) => {
    return {
      members: state.memberList.members
    };
  },

  // which action creators does
  // it want to receive by props?
  (dispatch) => {
    const { clearFilter } = bindActionCreators(memberListActions, dispatch);
    return {
      onClearFilter: clearFilter
    };
  }

)(MemberList);
