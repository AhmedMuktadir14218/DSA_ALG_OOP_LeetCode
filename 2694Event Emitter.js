class EventEmitter {
  eventCallbacks={};
  subscribe(event, cb) {
    if (this.eventCallbacks[event]){
      this.eventCallbacks[event].push(cb);
    }else{
      this.eventCallbacks[event]=[cb];
    }
      
    return {
        unsubscribe: () => {
          if (this.eventCallbacks[event] && this.eventCallbacks[event].length>1){
            this.eventCallbacks[event].pop();
          }else{
            delete this.eventCallbacks[event];
          }
        }
    };
  }

  emit(event, args = []) {
    if (this.eventCallbacks[event]){
      return this.eventCallbacks[event].map(cb=>cb(...args));
    }
    return [];

  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
