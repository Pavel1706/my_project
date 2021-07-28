type DreamTextType ={
    posts: Array<DreamType>
}

type DreamType = {
    id: number
    message: string
    like: number
}

type ConversationType = {
    id: number
    name:string
}
type ConversationArrayType = {
    dialogs: Array<ConversationType>
}

type MessageArrayType = {
    messageData: Array<MessageType>
}

type MessageType = {
    id: number
    message: string
}

type StateType = {
    profilePage: DreamTextType
    dialogsPage: ConversationArrayType
    messagePage: MessageArrayType
}

 export let state:StateType =  {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello! How`s life?', like: 22},
            {id: 2, message: 'Hey hey! How`re you things?', like: 15},
            {id: 3, message: 'Hey buddy! How`re you?', like: 35},
            {id: 4, message: 'Hey there! Take it easy?', like: 77},
        ]
    },
     dialogsPage: {
         dialogs: [
             {id: 1, name: 'Pavel'},
             {id: 2, name: 'Alex'},
             {id: 3, name: 'Dasha'},
             {id: 4, name: 'Yulia'},
             {id: 5, name: 'Roman'},
             {id: 6, name: 'Irina'},
         ]
     },
     messagePage: {
         messageData: [
             {id: 1, message: 'Hi'},
             {id: 2, message: 'What`s going on?'},
             {id: 3, message: 'How`re you things'},
             {id: 4, message: 'How`s life?'},
             {id: 5, message: 'I got it!'},
             {id: 6, message: 'Catch you around!'},
         ]
     }
}