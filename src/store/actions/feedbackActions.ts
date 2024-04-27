import {Dispatch} from "react";
import {FeedbackActions, FeedbackTypes} from "../../types/feedback";
import {ConfirmOrderActions} from "../../types/confirmOrderTypes";
import axios from "axios";


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

export function clearFeedBackData() {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.CLEAR_FEEDBACK_DATA});
    }
}


export function confirmFeedbackMessage(name: string, number: string, email: string, message: string) {
    return async (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({type: FeedbackTypes.FEEDBACK_DATA_LOADING})
        const req = await axios.post("https://new-gunpowder-server.vercel.app/api/feedbackSendMessage", {
            name, number, email, message
        })
        dispatch({type: FeedbackTypes.FEEDBACK_DATA_SUCCESS})
    }
}