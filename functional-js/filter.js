
function getShortMessages(messages) { 
    var lenArr = messages.filter(function (item) {
        return item.message.length < 50;
    });
    var messArr = lenArr.map(function (mess) {
        return mess.message;
        });
    return messArr;
};

module.exports = getShortMessages
