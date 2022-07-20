import { fetchPosts } from "../../redux";

export const helperFunction = (idx, helperData) => {
  const modalObject = {
    0: {
      title: "Modal" + 0,
      component: "normal",
      callbackFn: fetchPosts,
      loading: helperData.loading,
    },
    1: {
      title: "Modal" + 1,
      component: "normal",
      callbackFn: fetchPosts,
      loading: helperData.loading,
    },
    2: {
      title: "Modal" + 2,
      component: "normal",
      callbackFn: fetchPosts,
      loading: helperData.loading,
    },
    3: {
      title: "Modal" + 3,
      component: "custom",
    },
    4: {
      title: "Modal" + 4,
      component: "normal",
      callbackFn: fetchPosts,
      loading: helperData.loading,
    },
    5: {
      title: "Modal" + 5,
      component: "normal",
      callbackFn: fetchPosts,
      loading: helperData.loading,
    },
  };
  return modalObject[idx];
};
