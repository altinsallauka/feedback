import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./FeedbackForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { getList, postFeedback } from "./actions";
// import { postFeedback } from "./actions";
import pic1 from "../../assets/p1.png";
import pic2 from "../../assets/p2.png";
import pic3 from "../../assets/p3.png";
import ModalComponent from "./../../components/modal/modal";
import Modal from "react-modal";
import { toggleModal } from "../../components/modal/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import feedbackService from "../../services/feedback.service";
// import { FormErrors } from "./../../components/form-errors/FormErrors";
// import { samples } from "../../utils/samples.json";
Modal.setAppElement("body");
const FeedbackForm = (props) => {
  const globalState = useSelector((state) => state);
  const samples = globalState.FeedbackFormReducer.samples;
  const dispatch = useDispatch();
  const [selectedPid, setSelectedPid] = useState("");
  const [lotNo, setLotNo] = useState("");
  const [rangeOfIngredients, setRangeOfIngredients] = useState({
    optionName: "Range of ingredients",
    optionId: 0,
    options: [
      { radioName: "Very good", selected: null },
      { radioName: "All right", selected: null },
      { radioName: "Do not like", selected: null },
    ],
    comment: "",
  });
  const [easeOfUsingIngredients, setEaseOfUsingIngredients] = useState({
    optionName: "Ease of using ingredients",
    optionId: 1,
    options: [
      { radioName: "Very good", selected: null },
      { radioName: "All right", selected: null },
      { radioName: "Do not like", selected: null },
    ],
    comment: "",
  });
  const [flexibilityOfIngredients, setFlexibilityOfIngredients] = useState({
    optionName: "Flexibility of Ingredients",
    optionId: 2,
    options: [
      { radioName: "Very good", selected: null },
      { radioName: "All right", selected: null },
      { radioName: "Do not like", selected: null },
    ],
    comment: "",
  });
  const [flavorProfile, setFlavorProfile] = useState({
    optionName: "Flavor Profile",
    optionId: 3,
    options: [
      { radioName: "Very good", selected: null },
      { radioName: "All right", selected: null },
      { radioName: "Do not like", selected: null },
    ],
    comment: "",
  });
  const [overallRation, setOverallRation] = useState({
    optionName: "Overall Ration",
    optionId: 4,
    options: [
      { radioName: "Very good", selected: null },
      { radioName: "All right", selected: null },
      { radioName: "Do not like", selected: null },
    ],
    comment: "",
  });
  const [additionalComments, setAdditionalComments] = useState("");
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const modalTitle = "Success";

  // method to validate values
  const handleValidation = () => {
    let errors = {};
    let isValid = true;
    if (selectedPid.length < 10) {
      isValid = false;
      errors["selectedPid"] = "Please select an element from dropdown";
    } else {
      isValid = true;
      errors["selectedPid"] = "";
    }
    const checkSelected = (list) => {
      // let isValid = true;
      let option = Object.values(list)[0].replaceAll(" ", "");
      let options = list.options;
      if (options.every((item) => !item.selected)) {
        isValid = false;
        errors[option] = "An option should be selected";
      } else {
        isValid = true;
        errors[option] = "";
      }
    };
    checkSelected(rangeOfIngredients);
    checkSelected(easeOfUsingIngredients);
    checkSelected(flexibilityOfIngredients);
    checkSelected(flavorProfile);
    checkSelected(overallRation);

    setErrors(errors);
    // setFormIsValid(true);
    console.log(isValid);
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // let formIsValid = true;
    // let erors = errors;
    switch (name) {
      case "PID":
        setSelectedPid(value);
        errors["selectedPid"] = "";
        break;
      case "lotNo":
        setLotNo(e.target.value);
        break;
      case "Rangeofingredients":
        setRangeOfIngredients({
          ...rangeOfIngredients,
          options: rangeOfIngredients.options.map((item) => {
            if (e.target.value === item.radioName) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            return item;
          }),
        });
        errors["Rangeofingredients"] = "";
        break;
      case "Easeofusingingredients":
        setEaseOfUsingIngredients({
          ...easeOfUsingIngredients,
          options: easeOfUsingIngredients.options.map((item) => {
            if (e.target.value === item.radioName) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            return item;
          }),
        });
        errors["Easeofusingingredients"] = "";
        break;
      case "FlexibilityofIngredients":
        setFlexibilityOfIngredients({
          ...flexibilityOfIngredients,
          options: flexibilityOfIngredients.options.map((item) => {
            if (e.target.value === item.radioName) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            return item;
          }),
        });
        errors["FlexibilityofIngredients"] = "";
        break;
      case "FlavorProfile":
        setFlavorProfile({
          ...flavorProfile,
          options: flavorProfile.options.map((item) => {
            if (e.target.value === item.radioName) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            return item;
          }),
        });
        errors["FlavorProfile"] = "";
        break;
      case "OverallRation":
        setOverallRation({
          ...overallRation,
          options: overallRation.options.map((item) => {
            if (e.target.value === item.radioName) {
              item.selected = true;
            } else {
              item.selected = false;
            }
            return item;
          }),
        });
        errors["OverallRation"] = "";
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // alert("Form submitted");
      // setFormIsValid(true);
      let data = {
        selectedPid,
        lotNo,
        rangeOfIngredients,
        easeOfUsingIngredients,
        flexibilityOfIngredients,
        flavorProfile,
        overallRation,
        additionalComments,
      };
      dispatch(toggleModal(true));
      dispatch({ type: "POST_FEEDBACK", payload: data });
      // dispatch(
      //   postFeedback({
      //     selectedPid,
      //     lotNo,
      //     rangeOfIngredients,
      //     easeOfUsingIngredients,
      //     flexibilityOfIngredients,
      //     flavorProfile,
      //     overallRation,
      //     additionalComments,
      //   })
      // ).then(dispatch(toggleModal(true)));
    } else {
      // setFormIsValid(false);
      console.log("Form is not valid");
    }
  };

  useEffect(() => {
    dispatch(getList());
    // console.log(feedbackService.fetchOptions().samples);
  }, []);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="row ">
          <h4 className="d-flex justify-content-center">Feedback Form</h4>

          <form onSubmit={handleSubmit} className="feedbackForm mt-4">
            <div className="d-flex align-items-center">
              <label className="d-flex flex-column align-items-start">
                PID Nr. - Ration Type / Menu:
                <select
                  className="form-select"
                  name="PID"
                  aria-label="Default select example"
                  onChange={handleChange}
                >
                  <option disabled selected>
                    Select one PID Nr. - Ration Type / Menu:
                  </option>
                  {samples.map((sample) => (
                    <option value={sample.PID} key={sample.PID}>
                      {sample.PID} - {sample.rtypemenu}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="d-flex align-items-center">
              <span style={{ color: "red" }}>{errors["selectedPid"]}</span>
            </div>
            <div className="d-flex align-items-center">
              <label className="d-flex flex-column align-items-start">
                LOT No.
                <input
                  type="number"
                  name="lotNo"
                  value={globalState.FeedbackFormReducer.feedback.lotNo}
                  className="form-control"
                  onChange={handleChange}
                />
              </label>

              <span style={{ color: "red" }}>{errors["lotNo"]}</span>
            </div>
            <div className="d-flex align-items-center feedback-txt shadow-sm p-3 mb-2 rounded">
              <span className="info-txt">
                Look at the different categories and mark the matching face. You
                can also make comments on the box below about specific subjects.
              </span>
            </div>
            <div>
              <table className="table table-white">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" className="d-flex test1">
                      <div>
                        <img
                          src={pic1}
                          className="img-rounded"
                          alt="Very good"
                        />
                      </div>
                      <div>
                        <img
                          src={pic2}
                          className="img-rounded"
                          alt="All right"
                        />
                      </div>
                      <div>
                        <img
                          src={pic3}
                          className="img-rounded"
                          alt="Do not like"
                        />
                      </div>
                    </th>
                    {/* <th>Comment</th> */}
                  </tr>
                  <tr>
                    <th className="first-col txt"></th>
                    <td>
                      <div className="txt1">
                        <label className="txt2">Very good</label>
                        <label className="txt2">All right</label>
                        <label className="txt2">Do not like</label>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="first-col">Range of Ingredients</th>
                    <td>
                      <div>
                        {rangeOfIngredients &&
                          rangeOfIngredients.options.map((el) => {
                            return (
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name={rangeOfIngredients.optionName.replaceAll(
                                    " ",
                                    ""
                                  )}
                                  value={el.radioName}
                                  defaultChecked={el.selected}
                                  onChange={handleChange}
                                />
                              </label>
                            );
                          })}
                      </div>
                      <span style={{ color: "red" }}>
                        {errors["Rangeofingredients"]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="comment"
                          className="form-control"
                          placeholder="Comment"
                          onChange={(e) =>
                            setRangeOfIngredients({
                              ...rangeOfIngredients,
                              comment: e.target.value,
                            })
                          }
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Ease of using Ingredients</th>
                    <td>
                      <div>
                        {easeOfUsingIngredients &&
                          easeOfUsingIngredients.options.map((el) => {
                            return (
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name={easeOfUsingIngredients.optionName.replaceAll(
                                    " ",
                                    ""
                                  )}
                                  value={el.radioName}
                                  defaultChecked={el.selected}
                                  onChange={handleChange}
                                />
                              </label>
                            );
                          })}
                      </div>
                      <span style={{ color: "red" }}>
                        {errors["Easeofusingingredients"]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="comment"
                          className="form-control"
                          placeholder="Comment"
                          onChange={(e) =>
                            setEaseOfUsingIngredients({
                              ...easeOfUsingIngredients,
                              comment: e.target.value,
                            })
                          }
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Flexibility of Ingredients</th>
                    <td>
                      <div>
                        {flexibilityOfIngredients &&
                          flexibilityOfIngredients.options.map((el) => {
                            return (
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name={flexibilityOfIngredients.optionName.replaceAll(
                                    " ",
                                    ""
                                  )}
                                  value={el.radioName}
                                  defaultChecked={el.selected}
                                  onChange={handleChange}
                                />
                              </label>
                            );
                          })}
                      </div>
                      <span style={{ color: "red" }}>
                        {errors["FlexibilityofIngredients"]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="comment"
                          className="form-control"
                          placeholder="Comment"
                          onChange={(e) =>
                            setFlexibilityOfIngredients({
                              ...flexibilityOfIngredients,
                              comment: e.target.value,
                            })
                          }
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Flavor Profile</th>
                    <td>
                      <div>
                        {flavorProfile &&
                          flavorProfile.options.map((el) => {
                            return (
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name={flavorProfile.optionName.replaceAll(
                                    " ",
                                    ""
                                  )}
                                  value={el.radioName}
                                  defaultChecked={el.selected}
                                  onChange={handleChange}
                                />
                              </label>
                            );
                          })}
                      </div>
                      <span style={{ color: "red" }}>
                        {errors["FlavorProfile"]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="comment"
                          className="form-control"
                          placeholder="Comment"
                          onChange={(e) =>
                            setFlavorProfile({
                              ...flavorProfile,
                              comment: e.target.value,
                            })
                          }
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Overall Ration</th>
                    <td>
                      <div>
                        {overallRation &&
                          overallRation.options.map((el) => {
                            return (
                              <label className="radio-inline">
                                <input
                                  type="radio"
                                  name={overallRation.optionName.replaceAll(
                                    " ",
                                    ""
                                  )}
                                  value={el.radioName}
                                  defaultChecked={el.selected}
                                  onChange={handleChange}
                                />
                              </label>
                            );
                          })}
                      </div>
                      <span style={{ color: "red" }}>
                        {errors["OverallRation"]}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="comment"
                          className="form-control"
                          placeholder="Comment"
                          onChange={(e) =>
                            setOverallRation({
                              ...overallRation,
                              comment: e.target.value,
                            })
                          }
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center  mt-3">
              <label htmlFor="additionalComments">
                Additional Comments:
                <textarea
                  className="form-control"
                  id="additionalComments"
                  rows="3"
                  // value={globalState.FeedbackFormReducer.feedback.additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="d-flex align-items-center p-3 rounded">
              <span className="info-txt">
                The information received will be used to further develop the
                Combat ration Packs and improve the service. The feedback will
                be kept anonymous.
              </span>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="submit"
                className="btn btn-primary mt-2"
                value="Submit Feedback"
                // disabled={!formIsValid}
              />
            </div>
            <div className="mt-3 bg-black rounded">
              <h4 className="text-light text-center">
                MORE INFORMATION - BETTER RATIONS
              </h4>
            </div>
          </form>
        </div>
      </div>
      <ModalComponent modalTitle={modalTitle} className="mt-4">
        <div>
          <span>Thank you for giving your feedback!</span>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="ml-2 text-primary"
            size="2x"
          />
        </div>
      </ModalComponent>

      {/* <div className="panel panel-default">
        <FormErrors formErrors={errors} />
      </div> */}
    </React.Fragment>
  );
};

export default FeedbackForm;
