import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { fetchPOSTSDATA, fetchPosts } from "../../redux";
import { helperFunction } from "./ModalButtonHelper";
import { CircularProgress } from "@mui/material";
import HooksCakeComponent from "../HooksCakeComponent";

export const ModalButton = (props) => {
  const modalRef1 = useRef(null);
  const modalRef2 = useRef(null);
  //Array of refs
  const arrayRef = useRef([]);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);

  //redux
  const postsData = useSelector((state) => state.postsData.POSTSDATA);
  const statusPostsData = useSelector((state) => state.postsData.status);
  const post = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPOSTSDATA());
  // }, []);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const changeHandler2 = (e) => {
    setValue2(e.target.value);
  };

  const [valueArr, setValueArr] = useState();
  const changeHandle = (e) => {
    setValueArr(e.target.value);
  };
  const fetchPostsIdx = (idx) => dispatch(fetchPOSTSDATA(idx));
  const helperData = { loading, post, fetchPostsIdx };
  const funcArr = [fetchPostsIdx];
  useEffect(() => {}, [statusPostsData]);
  const postsHandler = async () => {
    console.log("called");
    await dispatch(fetchPOSTSDATA());
    if (statusPostsData === 200) {
      alert("Success");
    }
  };
  return (
    <div>
      <div>
        <p>input value1:{value}</p>
        <Modal ref={modalRef1}>
          <p>Modal one</p>
          <input type="text" onChange={changeHandler} />
        </Modal>

        <button onClick={() => modalRef1.current.openModal()}>
          open modal1
        </button>
      </div>
      <div>
        <p>input value2:{value2}</p>
        <Modal ref={modalRef2}>
          <p>Modal two</p>
          <input type="text" onChange={changeHandler2} />
        </Modal>

        <button onClick={() => modalRef2.current.openModal()}>
          open modal2
        </button>
        <button onClick={postsHandler}>fetch postsData</button>
        {statusPostsData}
      </div>
      {/* <div>
        <h2>Array of Modals with Refs</h2>
        {postsData &&
          postsData.map((post, idx) => (
            <div>
              <button
                onClick={async () => {
                  await arrayRef.current[idx].openModal();
                  await dispatch(fetchPosts(idx));
                }}
              >
                open modal {idx}
              </button>
              <Modal
                ref={(el) => (arrayRef.current[idx] = el)}
                childData={post}
                loading={loading}
              >
                <h4>Modal {idx}</h4>
                <p>{post.title}</p>
                <p>
                  value {idx}:{valueArr}
                </p>
                {idx === 5 ? (
                  <input type="text" onChange={changeHandle} />
                ) : null}
              </Modal>
            </div>
          ))}
      </div> */}

      {/* <div>
        {postsData &&
          postsData.map((post, i) => (
            <div>
              <Modal ref={(el) => (arrayRef.current[i] = el)}>
                <p>
                  {helperFunction(i, helperData) &&
                    helperFunction(i, helperData).title}
                </p>
                <div>{loading ? <CircularProgress /> : null}</div>
                <p>
                  {helperFunction(i, helperData) &&
                    JSON.stringify(helperFunction(i, helperData))}
                </p>
              </Modal>
              <button
                onClick={async () => {
                  await arrayRef.current[i].openModal();
                  await dispatch(helperFunction(i, helperData).callbackFn(i));
                }}
              >
                open modal {i}
              </button>
            </div>
          ))}
      </div> */}
    </div>
  );
};
