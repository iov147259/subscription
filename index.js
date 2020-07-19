module.exports = {

    subscribersList: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subscribersList.push({
            event: event,
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**d
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

        this.subscribersList=this.subscribersList.filter(function (item) {
            if ((item.event == event && item.subscriber !== subscriber  )||(item.event !== event && item.subscriber == subscriber )){
                return item;
            }

        });
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (let i=0;i<this.subscribersList.length;i++){
            if((this.subscribersList[i].event===event)&&(this.subscribersList[i].subscriber!=undefined)&&(this.subscribersList[i].handler!=undefined)){
                this.subscribersList[i].handler.call(this.subscribersList[i].subscriber);
            }
        }
        return this;

    }

};
