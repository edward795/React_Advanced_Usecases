import CommonTemplate from "./ModalComponents/CommonTemplate";
import { InputSubComponent } from "./ModalComponents/InputSubComponent";

const contentHandler = async (choice, helperData) => {
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
            {...helperData}
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
            {...helperData}
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
            callBackFn={() => helperData.fetchUsers()}
            {...helperData}
          />
        );
        break;
      case "posts":
        helperData.setContent(
          <InputSubComponent
            subTitle="Posts Template"
            leftBtnText="getData"
            rightBtnText="cancel"
            callBackFn={() => helperData.fetchPosts(helperData.val)}
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

export { contentHandler };
