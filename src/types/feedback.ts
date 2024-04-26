

export interface IFeedback {
    name: string
    number: string
    email: string
    message: string
}

export enum FeedbackTypes {
    "INPUT_FEEDBACK_NAME"='INPUT_FEEDBACK_NAME',
    "INPUT_FEEDBACK_NUMBER"='INPUT_FEEDBACK_NUMBER',
    "INPUT_FEEDBACK_EMAIL"='INPUT_FEEDBACK_EMAIL',
    "INPUT_FEEDBACK_MESSAGE"='INPUT_FEEDBACK_MESSAGE',
    "CLEAR_FEEDBACK_DATA"="CLEAR_FEEDBACK_DATA"
}


interface inputFeedBackName {
    type: FeedbackTypes.INPUT_FEEDBACK_NAME
    payload: string
}

interface inputFeedBackNumber {
    type: FeedbackTypes.INPUT_FEEDBACK_NUMBER
    payload: string
}

interface inputFeedBackEmail {
    type: FeedbackTypes.INPUT_FEEDBACK_EMAIL
    payload: string
}

interface inputFeedBackMessage {
    type: FeedbackTypes.INPUT_FEEDBACK_MESSAGE
    payload: string
}

interface clearFeedbackData {
    type: FeedbackTypes.CLEAR_FEEDBACK_DATA
}

export type FeedbackActions = inputFeedBackName | inputFeedBackNumber | inputFeedBackEmail | inputFeedBackMessage | clearFeedbackData | any