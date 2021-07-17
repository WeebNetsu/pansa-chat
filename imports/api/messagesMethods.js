import { check } from "meteor/check";
import { MessagesCollection } from "../db/MessagesCollection";

Meteor.methods({
    'messages.send'(username, text){
        check(text, String);
        check(username, String);    

        MessagesCollection.insert({
            message: text,
            sentAt: new Date,
            username: username
        })
    },
    "messages.clear"(){
        MessagesCollection.remove({});
    }
})