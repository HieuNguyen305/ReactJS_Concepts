import React, { Component } from "react";
import { connect } from "react-redux";
class UserItem extends Component {
  render() {
    const { user, getUserDelete } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              // console.log(user.id);
              // getUserDelete(user.id);
              this.props.deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // key: value
    deleteUser: (userId) => {
      const action = {
        type: "DELETE_USER",
        payload: userId,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
