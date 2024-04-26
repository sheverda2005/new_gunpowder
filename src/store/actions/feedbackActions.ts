import {Dispatch} from "react";
import {FeedbackActions, FeedbackTypes} from "../../types/feedback";


export function inputFeedbackName(name: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_NAME, payload: name});
    }
}

export function inputFeedbackNumber(number: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_NUMBER, payload: number});
    }
}

export function inputFeedbackEmail(email: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_EMAIL, payload: email});
    }
}

export function inputFeedbackMessage(message: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_MESSAGE, payload: message});
    }
}