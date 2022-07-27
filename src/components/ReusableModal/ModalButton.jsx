import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ModalContainer } from "./ModalContainer";
import * as helper from "./ModalButtonHelper";
import { connect } from "react-redux";
import Modal from "react-modal";
import { InputSubComponent } from "./ModalComponents/InputSubComponent";
import CommonTemplate from "./ModalComponents/CommonTemplate";
import "./ModalButton.css";
import {
  fetchUsers,
  resetFetchedUsers,
  fetchPosts,
  resetPostsRequest,
} from "../../redux";

const ModalButton = (props) => {
  const {
    userData,
    isLoading,
    fetchUsers,
    resetFetchedUsersData,
    posts,
    fetchPosts,
  } = props;
  const modalRef = useRef();
  const fruits = ["apple", "orange", "grapes", "posts"];
  const [content, setContent] = useState(null);
  const [val, setValue] = useState();
  const [open, setOpen] = useState(false);

  const helperData = {
    ...props,
    modalRef,
    setContent,
    content,
    val,
    setValue,
    posts,
    fetchPosts,
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
    },
  };

  const contentHandler = async (choice) => {
    const createSubContent = (choice) => {
      // let _props = commonProps.filter((prop) => prop.name === choice)[0];
      // let _props = commonProps[choice];
      // _props.close = () => helperData.modalRef.current.closeModal();
      // _props.callBackFn = () => helperData.fetchUsers();
      // console.log(_props);
      // helperData.setContent(<CommonTemplate {..._props} {...helperData} />);
      switch (choice) {
        case "apple":
          console.log("selected apple!");
          helperData.setContent(
            <CommonTemplate
              subTitle="Apple Template"
              leftBtnText="add"
              rightBtnText="cancel"
              callBackFn={() => alert("selected apple!")}
              {...props}
            />
          );
          break;
        case "orange":
          console.log("selected orange!");
          helperData.setContent(
            <CommonTemplate
              subTitle="Orange Template"
              leftBtnText="add"
              rightBtnText="cancel"
              callBackFn={() => alert("selected orange!")}
              {...props}
            />
          );
          break;
        case "grapes":
          console.log("selected grapes!");
          helperData.setContent(
            <CommonTemplate
              subTitle="Grapes Template"
              leftBtnText="add"
              rightBtnText="cancel"
              callBackFn={() => fetchUsers()}
              {...props}
            />
          );
          break;
        case "posts":
          helperData.setContent(
            <InputSubComponent
              subTitle="Posts Template"
              leftBtnText="getData"
              rightBtnText="cancel"
              callBackFn={() => fetchPosts(val)}
              {...props}
              {...helperData}
            />
          );
          break;
        default:
          helperData.setContent(`<h2>No Template Selected!!</h2>`);
      }
    };
    await createSubContent(choice);
    await helperData.modalRef.current.openModal();
  };

  return (
    <div>
      <div>
        <ul>
          {fruits.map((fruit, idx) => (
            <li key={idx} onClick={() => contentHandler(fruit)}>
              {fruit}
            </li>
          ))}
        </ul>
      </div>

      {/* <ModalContainer
        ref={modalRef}
        {...props}
        content={<CommonTemplate {...content} {...props} />}
      /> */}

      <ModalContainer ref={modalRef} {...props} {...helperData}>
        {content}
      </ModalContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
    isLoading: state.users.loading,
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    resetFetchedUsersData: () => {
      dispatch(resetFetchedUsers());
    },
    fetchPosts: (eid) => dispatch(fetchPosts(eid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalButton);
