import * as actions from './form';

export const inputNames = {
  nameFrom: 'name-from',
  nameTo: 'name-to',
  emailFrom: 'emial-from',
  emailTo: 'email-to',
  topic: 'topic',
  message: 'message',
}

export const formInput = (inputName, payload) => {
  switch (inputName) {
    case inputNames.nameFrom:
      return actions.inputNameFrom(payload)
    
    case inputNames.emailFrom:
      return actions.inputEmailFrom(payload)
    
    case inputNames.nameTo:
      return actions.inputNameTo(payload)
    
    case inputNames.emailTo:
      return actions.inputEmailTo(payload)
    
    case inputNames.topic:
      return actions.inputTopic(payload)

    case inputNames.message:
      return actions.inputMessage(payload)
  
    default:
      throw new Error(`input "${inputName}" for action not found`)
  }
}
