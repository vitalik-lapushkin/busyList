import messageBundle from '../messages/messages_ru';

export default {
    methods: {
      getMessageByKey(key) {
        return messageBundle[key];
      },
    },
};