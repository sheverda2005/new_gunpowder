import {FeedbackActions, FeedbackTypes, IFeedback} from "../../types/feedback";

const initialState: IFeedback = {
    name: "",
    number: "",
    email: "",
    message: ""
}


export const feedbackReducer = (state = initialState, action: FeedbackActions): IFeedback => {
    switch (action.type) {
        case FeedbackTypes.INPUT_FEEDBACK_NAME:
            return {...state, name: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_NUMBER:
            return {...state, number: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_EMAIL:
            return {...state, email: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_MESSAGE:
            return {...state, message: action.payload}
        case FeedbackTypes.CLEAR_FEEDBACK_DATA:
            return {...state, name: '', message: '', number: '', email:''}
        default:
            return state;
    }
}