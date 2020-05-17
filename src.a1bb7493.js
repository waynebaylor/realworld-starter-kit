// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"n6rD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = __generator;
exports.c = createElement;
exports.d = __extends;
exports.e = __rest;
exports.f = __values;
exports.h = __read;
exports.i = isElement;
exports.g = exports.b = exports.a = exports.T = exports.R = exports.P = exports.H = exports.F = exports.D = exports.C = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.g = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.g = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */


const privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */

const wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */

function pd(event) {
  const retv = privateData.get(event);
  console.assert(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */


function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
    }

    return;
  }

  if (!data.event.cancelable) {
    return;
  }

  data.canceled = true;

  if (typeof data.event.preventDefault === "function") {
    data.event.preventDefault();
  }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */

/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */


function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget,
    event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }); // https://heycam.github.io/webidl/#Unforgeable

  Object.defineProperty(this, "isTrusted", {
    value: false,
    enumerable: true
  }); // Define accessors

  const keys = Object.keys(event);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
} // Should be enumerable, but class methods are not enumerable.


Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },

  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath() {
    const currentTarget = pd(this).currentTarget;

    if (currentTarget == null) {
      return [];
    }

    return [currentTarget];
  },

  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },

  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },

  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },

  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },

  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation() {
    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.stopPropagation === "function") {
      data.event.stopPropagation();
    }
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation() {
    const data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;

    if (typeof data.event.stopImmediatePropagation === "function") {
      data.event.stopImmediatePropagation();
    }
  },

  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },

  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },

  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault() {
    setCancelFlag(pd(this));
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },

  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },

  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },

  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },

  set cancelBubble(value) {
    if (!value) {
      return;
    }

    const data = pd(this);
    data.stopped = true;

    if (typeof data.event.cancelBubble === "boolean") {
      data.event.cancelBubble = true;
    }
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },

  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },

  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent() {// Do nothing.
  }

}; // `constructor` is not enumerable.

Object.defineProperty(Event.prototype, "constructor", {
  value: Event,
  configurable: true,
  writable: true
}); // Ensure `event instanceof window.Event` is `true`.

if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype); // Make association for wrappers.

  wrappers.set(window.Event.prototype, Event);
}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */


function defineRedirectDescriptor(key) {
  return {
    get() {
      return pd(this).event[key];
    },

    set(value) {
      pd(this).event[key] = value;
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */


function defineCallDescriptor(key) {
  return {
    value() {
      const event = pd(this).event;
      return event[key].apply(event, arguments);
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */


function defineWrapper(BaseEvent, proto) {
  const keys = Object.keys(proto);

  if (keys.length === 0) {
    return BaseEvent;
  }
  /** CustomEvent */


  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }

  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: {
      value: CustomEvent,
      configurable: true,
      writable: true
    }
  }); // Define accessors.

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];

    if (!(key in BaseEvent.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, key);
      const isFunc = typeof descriptor.value === "function";
      Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
    }
  }

  return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */


function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }

  let wrapper = wrappers.get(proto);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }

  return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */


function wrapEvent(eventTarget, event) {
  const Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */


function isStopped(event) {
  return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */


function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */


function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */


function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */


const listenersMap = new WeakMap(); // Listener types

const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */

function isObject(x) {
  return x !== null && typeof x === "object"; //eslint-disable-line no-restricted-syntax
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */


function getListeners(eventTarget) {
  const listeners = listenersMap.get(eventTarget);

  if (listeners == null) {
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  }

  return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */


function defineEventAttributeDescriptor(eventName) {
  return {
    get() {
      const listeners = getListeners(this);
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }

        node = node.next;
      }

      return null;
    },

    set(listener) {
      if (typeof listener !== "function" && !isObject(listener)) {
        listener = null; // eslint-disable-line no-param-reassign
      }

      const listeners = getListeners(this); // Traverse to the tail while removing old value.

      let prev = null;
      let node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          // Remove old value.
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }

        node = node.next;
      } // Add new value.


      if (listener !== null) {
        const newNode = {
          listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };

        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },

    configurable: true,
    enumerable: true
  };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */


function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */


function defineCustomEventTarget(eventNames) {
  /** CustomEventTarget */
  function CustomEventTarget() {
    EventTarget.call(this);
  }

  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });

  for (let i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }

  return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */


function EventTarget() {
  /*eslint-disable consistent-return */
  if (this instanceof EventTarget) {
    listenersMap.set(this, new Map());
    return;
  }

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }

  if (arguments.length > 0) {
    const types = new Array(arguments.length);

    for (let i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }

    return defineCustomEventTarget(types);
  }

  throw new TypeError("Cannot call a class as a function");
  /*eslint-enable consistent-return */
} // Should be enumerable, but class methods are not enumerable.


EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    if (typeof listener !== "function" && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }

    const listeners = getListeners(this);
    const optionsIsObj = isObject(options);
    const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    const newNode = {
      listener,
      listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    }; // Set it as the first node if the first node is null.

    let node = listeners.get(eventName);

    if (node === undefined) {
      listeners.set(eventName, newNode);
      return;
    } // Traverse to the tail while checking duplication..


    let prev = null;

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        // Should ignore duplication.
        return;
      }

      prev = node;
      node = node.next;
    } // Add it.


    prev.next = newNode;
  },

  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }

    const listeners = getListeners(this);
    const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    let prev = null;
    let node = listeners.get(eventName);

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }

        return;
      }

      prev = node;
      node = node.next;
    }
  },

  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent(event) {
    if (event == null || typeof event.type !== "string") {
      throw new TypeError('"event.type" should be a string.');
    } // If listeners aren't registered, terminate.


    const listeners = getListeners(this);
    const eventName = event.type;
    let node = listeners.get(eventName);

    if (node == null) {
      return true;
    } // Since we cannot rewrite several properties, so wrap object.


    const wrappedEvent = wrapEvent(this, event); // This doesn't process capturing phase and bubbling phase.
    // This isn't participating in a tree.

    let prev = null;

    while (node != null) {
      // Remove this listener if it's once
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      } // Call this listener


      setPassiveListener(wrappedEvent, node.passive ? node.listener : null);

      if (typeof node.listener === "function") {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
        node.listener.handleEvent(wrappedEvent);
      } // Break if `event.stopImmediatePropagation` was called.


      if (isStopped(wrappedEvent)) {
        break;
      }

      node = node.next;
    }

    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }

}; // `constructor` is not enumerable.

Object.defineProperty(EventTarget.prototype, "constructor", {
  value: EventTarget,
  configurable: true,
  writable: true
}); // Ensure `eventTarget instanceof window.EventTarget` is `true`.

if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

function normalizeOptions(options) {
  var capture = false;
  var passive;
  var once;

  if (typeof options === "boolean") {
    capture = options;
  } else if (options != null) {
    capture = !!options.capture;
    passive = options.passive;
    once = options.once;
  }

  return {
    capture: capture,
    passive: passive,
    once: once
  };
}

function isEventTarget(value) {
  return value !== null && typeof value === "object" && typeof value.addEventListener === "function" && // TODO: maybe we don’t need these checks
  typeof value.removeEventListener === "function" && typeof value.dispatchEvent === "function";
}

var CrankEventTarget =
/** @class */
function (_super) {
  __extends(CrankEventTarget, _super);

  function CrankEventTarget(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent; // TODO: maybe use a helper class?
    // we need a map from:
    // type -> capture -> listener record
    // for efficient querying

    _this.listeners = [];
    _this.delegates = new Set();
    return _this;
  }

  CrankEventTarget.prototype.setDelegates = function (delegates) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

    var _this = this;

    var delegates1 = new Set(Array.from(delegates).filter(isEventTarget));
    var removed = new Set(Array.from(this.delegates).filter(function (d) {
      return !delegates1.has(d);
    }));
    var added = new Set(Array.from(delegates1).filter(function (d) {
      return !_this.delegates.has(d);
    }));

    try {
      for (var removed_1 = __values(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
        var delegate = removed_1_1.value;

        try {
          for (var _e = (e_2 = void 0, __values(this.listeners)), _f = _e.next(); !_f.done; _f = _e.next()) {
            var listener = _f.value;
            delegate.removeEventListener(listener.type, listener.callback, listener.options);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (removed_1_1 && !removed_1_1.done && (_a = removed_1.return)) _a.call(removed_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    try {
      for (var added_1 = __values(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
        var delegate = added_1_1.value;

        try {
          for (var _g = (e_4 = void 0, __values(this.listeners)), _h = _g.next(); !_h.done; _h = _g.next()) {
            var listener = _h.value;
            delegate.addEventListener(listener.type, listener.callback, listener.options);
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (added_1_1 && !added_1_1.done && (_c = added_1.return)) _c.call(added_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    this.delegates = delegates1;
  };

  CrankEventTarget.prototype.addEventListener = function (type, callback, options) {
    var e_5, _a;

    if (callback == null) {
      return;
    } else if (typeof callback === "object") {
      throw new Error("Listener objects are not supported");
    }

    options = normalizeOptions(options);
    var record = {
      type: type,
      callback: callback,
      options: options
    };

    if (options.once) {
      var self_1 = this;

      record.callback = function (ev) {
        var result = callback.call(this, ev);
        self_1.removeEventListener(record.type, record.callback, record.options);
        return result;
      };
    }

    if (record.type.slice(0, 6) !== "crank.") {
      var idx = this.listeners.findIndex(function (record1) {
        return record.type === record1.type && record.callback === record1.callback && record.options.capture === record1.options.capture;
      });

      if (idx <= -1) {
        this.listeners.push(record);
      }
    }

    try {
      for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
        var delegate = _c.value;
        delegate.addEventListener(type, callback, options);
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    return _super.prototype.addEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.removeEventListener = function (type, callback, options) {
    var e_6, _a;

    if (callback == null) {
      return;
    }

    var capture = typeof options === "boolean" ? options : !!(options && options.capture);
    var idx = this.listeners.findIndex(function (record) {
      return record.type === type && record.callback === callback && record.options.capture === capture;
    });
    var record = this.listeners[idx];

    if (record !== undefined) {
      this.listeners.splice(idx, 1);
    }

    try {
      for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
        var delegate = _c.value;
        delegate.removeEventListener(type, callback, options);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return _super.prototype.removeEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.clearEventListeners = function () {
    var e_7, _a;

    try {
      for (var _b = __values(this.listeners.slice()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var listener = _c.value;
        this.removeEventListener(listener.type, listener.callback, listener.options);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_7) throw e_7.error;
      }
    }
  }; // TODO: ev is any because event-target-shim has a weird dispatchEvent type


  CrankEventTarget.prototype.dispatchEvent = function (ev) {
    var continued = _super.prototype.dispatchEvent.call(this, ev);

    if (continued && ev.bubbles && this.parent !== undefined) {
      // TODO: implement event capturing
      continued = this.parent.dispatchEvent(ev);
    }

    return continued;
  };

  return CrankEventTarget;
}(EventTarget);

function isPromiseLike(value) {
  return value != null && typeof value.then === "function";
}

function upgrade(value) {
  if (isPromiseLike(value) && !(value instanceof Promise)) {
    return Promise.resolve(value);
  }

  return value;
}
/**
 * A pledge is like a promise, except it runs synchronously if possible.
 *
 * It is not meant to be exposed in APIs; rather, you should unwrap pledges to
 * a possible promise by calling Pledge.prototype.execute.
 */


var Pledge =
/** @class */
function () {
  function Pledge(executor) {
    this.executor = executor;
  }

  Pledge.prototype.then = function (onfulfilled, onrejected) {
    var _this = this;

    return new Pledge(function () {
      try {
        var value = _this.execute();

        if (isPromiseLike(value)) {
          return value.then(onfulfilled, onrejected);
        } else if (onfulfilled == null) {
          return value;
        }

        return onfulfilled(value);
      } catch (err) {
        if (onrejected == null) {
          throw err;
        }

        return onrejected(err);
      }
    });
  };

  Pledge.prototype.catch = function (onrejected) {
    var _this = this;

    return new Pledge(function () {
      try {
        var value = _this.execute();

        if (isPromiseLike(value)) {
          return value.catch(onrejected);
        }

        return value;
      } catch (err) {
        if (onrejected == null) {
          throw err;
        }

        return onrejected(err);
      }
    });
  };

  Pledge.prototype.finally = function (onfinally) {
    var _this = this;

    return new Pledge(function () {
      try {
        var value = _this.execute();

        if (isPromiseLike(value)) {
          return value.finally(onfinally);
        } else if (onfinally != null) {
          onfinally();
        }

        return value;
      } catch (err) {
        if (onfinally != null) {
          onfinally();
        }

        throw err;
      }
    });
  };

  Pledge.prototype.execute = function () {
    return upgrade(this.executor());
  };

  Pledge.resolve = function (value) {
    return new Pledge(function () {
      return value;
    });
  };

  return Pledge;
}();

var _a;

function isIterable(value) {
  return value != null && typeof value[Symbol.iterator] === "function";
}

function isNonStringIterable(value) {
  return typeof value !== "string" && isIterable(value);
}

function isIteratorOrAsyncIterator(value) {
  return value != null && typeof value.next === "function";
}

var ElementSigil = Symbol.for("crank.ElementSigil"); // Special Intrinsic Tags
// TODO: We assert symbol tags as any because typescript support for symbol
// tags in JSX does not exist yet.

var Fragment = Symbol.for("crank.Fragment");
exports.F = Fragment;
var Copy = Symbol.for("crank.Copy");
exports.C = Copy;
var Portal = Symbol.for("crank.Portal");
exports.P = Portal;
var Raw = Symbol.for("crank.Raw");
exports.R = Raw;

function isElement(value) {
  return value != null && value[ElementSigil];
}

function createElement(tag, props) {
  var _a;

  props = Object.assign({}, props);
  var key = props["crank-key"];

  if (key != null) {
    delete props["crank-key"];
  }

  if (arguments.length > 3) {
    props.children = Array.from(arguments).slice(2);
  } else if (arguments.length > 2) {
    props.children = arguments[2];
  }

  return _a = {}, _a[ElementSigil] = true, _a.tag = tag, _a.props = props, _a.key = key, _a;
}

function normalize(child) {
  if (child == null || typeof child === "boolean") {
    return undefined;
  } else if (typeof child === "string" || isElement(child)) {
    return child;
  } else {
    return child.toString();
  }
}

function flatten(children) {
  var children_1, children_1_1, child, e_1_1;

  var e_1, _a;

  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        if (!(children == null)) return [3
        /*break*/
        , 1];
        return [2
        /*return*/
        ];

      case 1:
        if (!!isNonStringIterable(children)) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , normalize(children)];

      case 2:
        _b.sent();

        return [2
        /*return*/
        ];

      case 3:
        _b.trys.push([3, 10, 11, 12]);

        children_1 = __values(children), children_1_1 = children_1.next();
        _b.label = 4;

      case 4:
        if (!!children_1_1.done) return [3
        /*break*/
        , 9];
        child = children_1_1.value;
        if (!isNonStringIterable(child)) return [3
        /*break*/
        , 6];
        return [4
        /*yield*/
        , createElement(Fragment, null, child)];

      case 5:
        _b.sent();

        return [3
        /*break*/
        , 8];

      case 6:
        return [4
        /*yield*/
        , normalize(child)];

      case 7:
        _b.sent();

        _b.label = 8;

      case 8:
        children_1_1 = children_1.next();
        return [3
        /*break*/
        , 4];

      case 9:
        return [3
        /*break*/
        , 12];

      case 10:
        e_1_1 = _b.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 12];

      case 11:
        try {
          if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 12:
        return [2
        /*return*/
        ];
    }
  });
}

var LeafNode =
/** @class */
function () {
  function LeafNode() {
    this.internal = false;
    this.tag = undefined;
    this.key = undefined;
    this.nextSibling = undefined;
    this.previousSibling = undefined;
    this.clock = 0;
    this.replacedBy = undefined;
    this.value = undefined;
  }

  return LeafNode;
}();

var ParentNode =
/** @class */
function () {
  function ParentNode() {
    this.internal = true;
    this.key = undefined;
    this.nextSibling = undefined;
    this.previousSibling = undefined;
    this.clock = 0;
    this.replacedBy = undefined;
    this.firstChild = undefined;
    this.lastChild = undefined;
    this.keyedChildren = undefined; // When children update asynchronously, we race their result against the next
    // update of children. The onNextResult property is set to the resolve
    // function of the promise which the current update is raced against.

    this.onNextResult = undefined;
    this.props = undefined;
    this.value = undefined;
    this.ctx = undefined;
    this.updating = false;
    this.iterating = false;
    this.finished = false;
    this.unmounted = false;
  }

  ParentNode.prototype.appendChild = function (child) {
    if (this.lastChild === undefined) {
      this.firstChild = child;
      this.lastChild = child;
      child.previousSibling = undefined;
      child.nextSibling = undefined;
    } else {
      child.previousSibling = this.lastChild;
      child.nextSibling = undefined;
      this.lastChild.nextSibling = child;
      this.lastChild = child;
    }
  };

  ParentNode.prototype.insertBefore = function (child, reference) {
    if (reference == null) {
      this.appendChild(child);
      return;
    } else if (child === reference) {
      return;
    }

    child.nextSibling = reference;

    if (reference.previousSibling === undefined) {
      child.previousSibling = undefined;
      this.firstChild = child;
    } else {
      child.previousSibling = reference.previousSibling;
      reference.previousSibling.nextSibling = child;
    }

    reference.previousSibling = child;
  };

  ParentNode.prototype.removeChild = function (child) {
    if (child.previousSibling === undefined) {
      this.firstChild = child.nextSibling;
    } else {
      child.previousSibling.nextSibling = child.nextSibling;
    }

    if (child.nextSibling === undefined) {
      this.lastChild = child.previousSibling;
    } else {
      child.nextSibling.previousSibling = child.previousSibling;
    }

    child.previousSibling = undefined;
    child.nextSibling = undefined;
  };

  ParentNode.prototype.replaceChild = function (child, reference) {
    this.insertBefore(child, reference);
    this.removeChild(reference);
  };

  ParentNode.prototype.getChildValues = function () {
    var buffer;
    var childValues = [];

    for (var child = this.firstChild; child != null; child = child.nextSibling) {
      if (typeof child.value === "string") {
        buffer = (buffer || "") + child.value;
      } else if (child.tag !== Portal) {
        if (buffer !== undefined) {
          childValues.push(buffer);
          buffer = undefined;
        }

        if (Array.isArray(child.value)) {
          childValues.push.apply(childValues, __spread(child.value));
        } else if (child.value !== undefined) {
          childValues.push(child.value);
        }
      }
    }

    if (buffer !== undefined) {
      childValues.push(buffer);
    }

    return childValues;
  }; // TODO: I bet we could simplify the algorithm further, perhaps by writing a
  // custom a method which automatically zips up old and new nodes.


  ParentNode.prototype.updateChildren = function (children) {
    var e_2, _a, e_3, _b;

    var _this = this;

    var node = this.firstChild;
    var nextSibling = node && node.nextSibling;
    var nextKeyedChildren;
    var updates;

    var _loop_1 = function (child) {
      var tag = void 0;
      var key = void 0;

      if (isElement(child)) {
        tag = child.tag;
        key = child.key;

        if (nextKeyedChildren !== undefined && nextKeyedChildren.has(key)) {
          key = undefined;
        }
      }

      if (key != null) {
        var nextNode = this_1.keyedChildren && this_1.keyedChildren.get(key);

        if (nextNode === undefined) {
          if (tag !== Copy) {
            nextNode = createNode(this_1, this_1.renderer, child);
          }
        } else {
          this_1.keyedChildren.delete(key);

          if (node !== nextNode) {
            this_1.removeChild(nextNode);
          }
        }

        if (nextNode !== undefined) {
          if (node === undefined) {
            this_1.appendChild(nextNode);
          } else if (node !== nextNode) {
            if (node.key == null) {
              this_1.insertBefore(nextNode, node);
            } else {
              this_1.insertBefore(nextNode, node.nextSibling);
            }
          }

          node = nextNode;
          nextSibling = node.nextSibling;
        }
      } else if (node === undefined) {
        // current parent has no more nodes
        if (tag !== Copy) {
          node = createNode(this_1, this_1.renderer, child);
          this_1.appendChild(node);
        }
      } else if (node.key != null) {
        // the current node is keyed but the child is not
        while (node && node.key != null) {
          node = nextSibling;
          nextSibling = node && node.nextSibling;
        }

        if (node === undefined) {
          if (tag !== Copy) {
            node = createNode(this_1, this_1.renderer, child);
            this_1.appendChild(node);
          }
        }
      }

      if (node !== undefined) {
        if (tag !== Copy) {
          // TODO: figure out why do we do a check for unmounted node here
          if (node.tag === tag && !(node.internal && node.unmounted)) {
            if (node.internal) {
              var update = node.update(child.props);

              if (update !== undefined) {
                if (updates === undefined) {
                  updates = [];
                }

                updates.push(update);
              }
            } else if (typeof child === "string") {
              node.value = this_1.renderer.text(child);
            } else {
              node.value = undefined;
            }
          } else {
            // TODO: async unmount for keyed nodes
            if (node.internal) {
              node.unmount();
            }

            var nextNode_1 = createNode(this_1, this_1.renderer, child);
            nextNode_1.clock = node.clock++;
            var update = void 0;

            if (nextNode_1.internal) {
              update = nextNode_1.update(child.props);
            } else if (typeof child === "string") {
              nextNode_1.value = this_1.renderer.text(child);
            } else {
              nextNode_1.value = undefined;
            }

            if (update === undefined) {
              this_1.replaceChild(nextNode_1, node);
              node.replacedBy = nextNode_1;
            } else {
              if (updates === undefined) {
                updates = [];
              }

              updates.push(update); // node is reassigned so we need to capture its current value in
              // node for the sake of the callback’s closure.

              var node1_1 = node;
              update.then(function () {
                if (node1_1.replacedBy === undefined) {
                  _this.replaceChild(nextNode_1, node1_1);

                  node1_1.replacedBy = nextNode_1;
                } else if (node1_1.replacedBy.replacedBy === undefined && node1_1.replacedBy.clock < nextNode_1.clock) {
                  _this.replaceChild(nextNode_1, node1_1.replacedBy);

                  node1_1.replacedBy = nextNode_1;
                }
              });
            }
          }
        }

        if (key !== undefined) {
          if (nextKeyedChildren === undefined) {
            nextKeyedChildren = new Map();
          }

          nextKeyedChildren.set(key, node);
        }
      }

      node = nextSibling;
      nextSibling = node && node.nextSibling;
    };

    var this_1 = this;

    try {
      for (var _c = __values(flatten(children)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var child = _d.value;

        _loop_1(child);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_2) throw e_2.error;
      }
    } // unmount excess children


    for (; node !== undefined; node = nextSibling, nextSibling = node && node.nextSibling) {
      if (node.key !== undefined && this.keyedChildren !== undefined) {
        this.keyedChildren.delete(node.key);
      }

      if (node.internal) {
        node.unmount();
      }

      this.removeChild(node);
    } // unmount excess keyed children


    if (this.keyedChildren !== undefined) {
      try {
        for (var _e = __values(this.keyedChildren.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
          var child = _f.value;
          child.internal && child.unmount();
          this.removeChild(child);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    }

    this.keyedChildren = nextKeyedChildren;

    if (updates === undefined) {
      this.commit();

      if (this.onNextResult !== undefined) {
        this.onNextResult();
        this.onNextResult = undefined;
      }
    } else {
      var result = Promise.all(updates).then(function () {
        return void _this.commit();
      }); // void :(

      if (this.onNextResult !== undefined) {
        this.onNextResult(result.catch(function () {
          return undefined;
        })); // void :(

        this.onNextResult = undefined;
      }

      var nextResult = new Promise(function (resolve) {
        return _this.onNextResult = resolve;
      });
      return Promise.race([result, nextResult]);
    }
  };

  ParentNode.prototype.unmountChildren = function () {
    for (var node = this.firstChild; node !== undefined; node = node.nextSibling) {
      if (node.internal) {
        node.unmount();
      }
    }
  };

  ParentNode.prototype.update = function (props) {
    this.props = props;
    this.updating = true;
    return this.refresh();
  };

  ParentNode.prototype.refresh = function () {
    if (this.unmounted) {
      return;
    }

    return this.updateChildren(this.props && this.props.children);
  };

  ParentNode.prototype.catch = function (reason) {
    if (this.parent === undefined) {
      throw reason;
    }

    return this.parent.catch(reason);
  };

  return ParentNode;
}();

var FragmentNode =
/** @class */
function (_super) {
  __extends(FragmentNode, _super);

  function FragmentNode(parent, renderer, key) {
    var _this = _super.call(this) || this;

    _this.tag = Fragment;
    _this.key = key;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.ctx = parent.ctx;
    return _this;
  }

  FragmentNode.prototype.commit = function () {
    var childValues = this.getChildValues();
    this.value = childValues.length > 1 ? childValues : childValues[0];

    if (!this.updating) {
      // TODO: batch this per microtask
      this.parent.commit();
    }

    this.updating = false;
    return; // void :(
  };

  FragmentNode.prototype.unmount = function () {
    if (this.unmounted) {
      return;
    }

    this.unmounted = true;
    this.unmountChildren();
  };

  return FragmentNode;
}(ParentNode);

var HostNode =
/** @class */
function (_super) {
  __extends(HostNode, _super);

  function HostNode(parent, renderer, tag, key) {
    var _this = _super.call(this) || this;

    _this.childValues = [];
    _this.iterator = undefined;
    _this.tag = tag;
    _this.key = key;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.intrinsic = renderer.intrinsic(tag);
    _this.ctx = parent && parent.ctx;
    _this.hostCtx = new HostContext(_this);
    return _this;
  }

  HostNode.prototype.commit = function () {
    this.childValues = this.getChildValues();

    try {
      if (this.iterator === undefined) {
        var value = this.intrinsic.call(this.hostCtx, __assign(__assign({}, this.props), {
          children: this.childValues
        }));

        if (isIteratorOrAsyncIterator(value)) {
          this.iterator = value;
        } else {
          this.value = value;
        }
      }

      if (this.iterator !== undefined) {
        var iteration = this.iterator.next();
        this.value = iteration.value;
        this.iterating = false;

        if (iteration.done) {
          this.finished = true;
        }
      }
    } catch (err) {
      if (this.parent !== undefined) {
        return this.parent.catch(err);
      }

      throw err;
    } finally {
      this.updating = false;
    }
  };

  HostNode.prototype.unmount = function () {
    if (this.unmounted) {
      return;
    } else if (this.finished) {
      if (this.iterator !== undefined && this.iterator.return) {
        try {
          this.iterator.return();
        } catch (err) {
          if (this.parent !== undefined) {
            return this.parent.catch(err);
          }

          throw err;
        }
      }
    }

    this.unmounted = true;
    this.unmountChildren();
  };

  HostNode.prototype[Symbol.iterator] = function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!this.unmounted) return [3
          /*break*/
          , 2];

          if (this.iterating) {
            throw new Error("You must yield for each iteration of this.");
          }

          this.iterating = true;
          return [4
          /*yield*/
          , __assign(__assign({}, this.props), {
            children: this.childValues
          })];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 0];

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  };

  return HostNode;
}(ParentNode);

var SyncFn = 0;
var AsyncFn = 1;
var SyncGen = 2;
var AsyncGen = 3;

var ComponentNode =
/** @class */
function (_super) {
  __extends(ComponentNode, _super);

  function ComponentNode(parent, renderer, tag, key) {
    var _this = _super.call(this) || this;

    _this.stepping = false;
    _this.available = false;
    _this.iterator = undefined; // TODO: explain these properties

    _this.componentType = undefined;
    _this.inflightPending = undefined;
    _this.enqueuedPending = undefined;
    _this.inflightResult = undefined;
    _this.enqueuedResult = undefined;
    _this.previousResult = undefined;
    _this.provisions = undefined;
    _this.publish = undefined;
    _this.parent = parent;
    _this.renderer = renderer;
    _this.tag = tag;
    _this.key = key;
    _this.ctx = new Context(_this, parent.ctx);
    return _this;
  }

  ComponentNode.prototype.updateChildren = function (children) {
    if (isNonStringIterable(children)) {
      children = createElement(Fragment, null, children);
    }

    return _super.prototype.updateChildren.call(this, children);
  };

  ComponentNode.prototype.run = function () {
    var _this = this;

    if (this.inflightPending === undefined) {
      var _a = __read(this.step(), 2),
          pending_1 = _a[0],
          result = _a[1];

      if (isPromiseLike(pending_1)) {
        this.inflightPending = pending_1.finally(function () {
          return _this.advance();
        });
      }

      this.inflightResult = result;
      return this.inflightResult;
    } else if (this.componentType === AsyncGen) {
      return this.inflightResult;
    } else if (this.enqueuedPending === undefined) {
      var resolve_1;
      this.enqueuedPending = this.inflightPending.then(function () {
        var _a = __read(_this.step(), 2),
            pending = _a[0],
            result = _a[1];

        resolve_1(result);
        return pending;
      }).finally(function () {
        return _this.advance();
      });
      this.enqueuedResult = new Promise(function (resolve1) {
        return resolve_1 = resolve1;
      });
    }

    return this.enqueuedResult;
  };

  ComponentNode.prototype.step = function () {
    var _this = this;

    this.stepping = true;

    try {
      if (this.finished) {
        return [undefined, undefined];
      } else if (this.iterator === undefined) {
        this.ctx.clearEventListeners();
        var value = new Pledge(function () {
          return _this.tag.call(_this.ctx, _this.props);
        }).catch(function (err) {
          return _this.parent.catch(err);
        }) // type assertion because we shouldn’t get a promise of an iterator
        .execute();

        if (isIteratorOrAsyncIterator(value)) {
          this.iterator = value;
        } else if (isPromiseLike(value)) {
          this.componentType = AsyncFn;
          var pending_2 = value.then(function () {
            return undefined;
          }, function () {
            return undefined;
          }); // void :(

          var result = value.then(function (child) {
            return _this.updateChildren(child);
          });
          return [pending_2, result];
        } else {
          this.componentType = SyncFn;
          var result = this.updateChildren(value);
          return [undefined, result];
        }
      }

      var previousValue_1 = Pledge.resolve(this.previousResult).then(function () {
        return _this.value;
      }).execute();
      var iteration = new Pledge(function () {
        return _this.iterator.next(previousValue_1);
      }).catch(function (err) {
        // TODO: figure out why this is written like this
        return Pledge.resolve(_this.parent.catch(err)).then(function () {
          return {
            value: undefined,
            done: true
          };
        }).execute();
      }).execute();

      if (isPromiseLike(iteration)) {
        this.componentType = AsyncGen;
        var pending_3 = iteration.then(function (iteration) {
          _this.iterating = false;

          if (iteration.done) {
            _this.finished = true;
          }

          return undefined; // void :(
        }, function () {
          return undefined;
        });
        var result = iteration.then(function (iteration) {
          var result = _this.updateChildren(iteration.value);

          if (isPromiseLike(result)) {
            _this.previousResult = result.catch(function () {
              return undefined;
            }); // void
          }

          return result;
        });
        return [pending_3, result];
      } else {
        this.iterating = false;
        this.componentType = SyncGen;

        if (iteration.done) {
          this.finished = true;
        }

        var result = this.updateChildren(iteration.value);
        return [result, result];
      }
    } finally {
      this.stepping = false;
    }
  };

  ComponentNode.prototype.advance = function () {
    var _this = this;

    this.inflightPending = this.enqueuedPending;
    this.inflightResult = this.enqueuedResult;
    this.enqueuedPending = undefined;
    this.enqueuedResult = undefined;

    if (this.componentType === AsyncGen && !this.finished && !this.unmounted) {
      Promise.resolve(this.run()).catch(function (err) {
        // We catch and rethrow the error to trigger an unhandled promise rejection.
        if (!_this.updating) {
          throw err;
        }
      });
    }
  };

  ComponentNode.prototype.refresh = function () {
    if (this.stepping || this.unmounted) {
      // TODO: we may want to log warnings when stuff like this happens
      return;
    }

    if (this.publish === undefined) {
      this.available = true;
    } else {
      this.publish(this.props);
      this.publish = undefined;
    }

    return this.run();
  };

  ComponentNode.prototype.commit = function () {
    var childValues = this.getChildValues();
    this.ctx.setDelegates(childValues);
    this.value = childValues.length > 1 ? childValues : childValues[0];

    if (!this.updating) {
      // TODO: batch this per macrotask
      this.parent.commit();
    }

    this.updating = false;
    return; // void :(
  };

  ComponentNode.prototype.unmount = function () {
    var _this = this;

    if (this.unmounted) {
      return;
    }

    this.updating = false;
    this.unmounted = true;
    this.ctx.clearEventListeners();

    if (!this.finished) {
      this.finished = true; // helps avoid deadlocks

      if (this.publish !== undefined) {
        this.publish(this.props);
        this.publish = undefined;
      }

      if (this.iterator !== undefined && this.iterator.return) {
        return new Pledge(function () {
          return _this.iterator.return();
        }).then(function () {
          return void _this.unmountChildren();
        }, // void :(
        function (err) {
          return _this.parent.catch(err);
        }).execute();
      }
    }

    this.unmountChildren();
  };

  ComponentNode.prototype.catch = function (reason) {
    var _this = this;

    if (this.iterator === undefined || this.iterator.throw === undefined || this.finished) {
      return _super.prototype.catch.call(this, reason);
    } else {
      // helps avoid deadlocks
      if (this.publish !== undefined) {
        this.publish(this.props);
        this.publish = undefined;
      }

      return new Pledge(function () {
        return _this.iterator.throw(reason);
      }).then(function (iteration) {
        if (iteration.done) {
          _this.finished = true;
        }

        return _this.updateChildren(iteration.value);
      }).catch(function (err) {
        return _this.parent.catch(err);
      }).execute();
    }
  };

  ComponentNode.prototype.get = function (name) {
    for (var host = this.parent; host !== undefined; host = host.parent) {
      if (host instanceof ComponentNode && host.provisions !== undefined && host.provisions.has(name)) {
        return host.provisions.get(name);
      }
    }
  };

  ComponentNode.prototype.set = function (name, value) {
    if (this.provisions === undefined) {
      this.provisions = new Map();
    }

    this.provisions.set(name, value);
  };

  ComponentNode.prototype[Symbol.iterator] = function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!this.unmounted) return [3
          /*break*/
          , 2];

          if (this.iterating) {
            throw new Error("You must yield for each iteration of this.");
          } else if (this.componentType === AsyncGen) {
            throw new Error("Use for await...of in async generator components.");
          }

          this.iterating = true;
          return [4
          /*yield*/
          , this.props];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 0];

        case 2:
          return [2
          /*return*/
          ];
      }
    });
  };

  ComponentNode.prototype[Symbol.asyncIterator] = function () {
    return __asyncGenerator(this, arguments, function _a() {
      var props;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (this.iterating) {
              throw new Error("You must yield for each iteration of this.");
            } else if (this.componentType === SyncGen) {
              throw new Error("Use for...of in sync generator components.");
            }

            this.iterating = true;
            if (!this.available) return [3
            /*break*/
            , 3];
            this.available = false;
            return [4
            /*yield*/
            , __await(this.props)];

          case 1:
            return [4
            /*yield*/
            , _b.sent()];

          case 2:
            _b.sent();

            return [3
            /*break*/
            , 7];

          case 3:
            return [4
            /*yield*/
            , __await(new Promise(function (resolve) {
              return _this.publish = resolve;
            }))];

          case 4:
            props = _b.sent();
            if (!!this.unmounted) return [3
            /*break*/
            , 7];
            return [4
            /*yield*/
            , __await(props)];

          case 5:
            return [4
            /*yield*/
            , _b.sent()];

          case 6:
            _b.sent();

            _b.label = 7;

          case 7:
            if (!this.unmounted) return [3
            /*break*/
            , 0];
            _b.label = 8;

          case 8:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return ComponentNode;
}(ParentNode);

function createNode(parent, renderer, child) {
  if (child === undefined || typeof child === "string") {
    return new LeafNode();
  } else if (child.tag === Fragment) {
    return new FragmentNode(parent, renderer, child.key);
  } else if (typeof child.tag === "function") {
    return new ComponentNode(parent, renderer, child.tag, child.key);
  } else {
    return new HostNode(parent, renderer, child.tag, child.key);
  }
}

var hostNodes = new WeakMap();

var HostContext =
/** @class */
function () {
  function HostContext(host) {
    hostNodes.set(this, host);
  }

  HostContext.prototype[Symbol.iterator] = function () {
    return hostNodes.get(this)[Symbol.iterator]();
  };

  return HostContext;
}();

exports.H = HostContext;
var componentNodes = new WeakMap();

var Context =
/** @class */
function (_super) {
  __extends(Context, _super);

  function Context(host, parent) {
    var _this = _super.call(this, parent) || this;

    componentNodes.set(_this, host);
    return _this;
  }

  Context.prototype.get = function (name) {
    return componentNodes.get(this).get(name);
  };

  Context.prototype.set = function (name, value) {
    componentNodes.get(this).set(name, value);
  };
  /* eslint-enable no-dupe-class-members */


  Context.prototype[Symbol.iterator] = function () {
    return componentNodes.get(this)[Symbol.iterator]();
  };

  Context.prototype[Symbol.asyncIterator] = function () {
    return componentNodes.get(this)[Symbol.asyncIterator]();
  };

  Context.prototype.refresh = function () {
    return componentNodes.get(this).refresh();
  };

  return Context;
}(CrankEventTarget);

exports.a = Context;
var Default = Symbol.for("crank.Default");
exports.D = Default;
var Text = Symbol.for("crank.Text");
exports.T = Text;
var defaultEnv = (_a = {}, _a[Default] = function (tag) {
  throw new Error("Environment did not provide an intrinsic for tag: " + tag);
}, _a[Portal] = function () {
  throw new Error("Environment did not provide an intrinsic for Portal");
}, _a[Raw] = function (_a) {
  var value = _a.value;
  return value;
}, _a);

var Renderer =
/** @class */
function () {
  function Renderer(env) {
    this.cache = new WeakMap();
    this.env = __assign({}, defaultEnv);

    if (env) {
      this.extend(env);
    }
  }

  Renderer.prototype.extend = function (env) {
    var e_4, _a, e_5, _b;

    try {
      for (var _c = __values(Object.getOwnPropertySymbols(env)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var sym = _d.value;

        if (env[sym] != null) {
          this.env[sym] = env[sym];
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var _e = __values(Object.keys(env)), _f = _e.next(); !_f.done; _f = _e.next()) {
        var tag = _f.value;

        if (env[tag] != null) {
          this.env[tag] = env[tag];
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  };

  Renderer.prototype.render = function (child, root) {
    var portal;

    if (isElement(child) && child.tag === Portal) {
      portal = child;
    } else {
      portal = createElement(Portal, {
        root: root
      }, child);
    }

    var rootNode = root != null ? this.cache.get(root) : undefined;

    if (rootNode === undefined) {
      rootNode = new HostNode(undefined, this, portal.tag);

      if (root !== undefined) {
        this.cache.set(root, rootNode);
      }
    }

    return Pledge.resolve(rootNode.update(portal.props)).then(function () {
      if (root === undefined) {
        rootNode.unmount();
      }

      return rootNode.value;
    }).execute();
  }; // TODO: Ideally, the intrinsic and text methods should not be exposed
  // outside this module


  Renderer.prototype.intrinsic = function (tag) {
    if (this.env[tag]) {
      return this.env[tag];
    } else if (typeof tag === "string") {
      return this.env[Default](tag);
    } else {
      throw new Error("Unknown tag: " + tag.toString());
    }
  };

  Renderer.prototype.text = function (text) {
    if (this.env[Text] !== undefined) {
      return this.env[Text](text);
    }

    return text;
  };

  return Renderer;
}();

exports.b = Renderer;
},{}],"k82I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.a;
  }
});
Object.defineProperty(exports, "Copy", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.C;
  }
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.D;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.F;
  }
});
Object.defineProperty(exports, "HostContext", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.H;
  }
});
Object.defineProperty(exports, "Portal", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.P;
  }
});
Object.defineProperty(exports, "Raw", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.R;
  }
});
Object.defineProperty(exports, "Renderer", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.b;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.T;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.c;
  }
});
Object.defineProperty(exports, "isElement", {
  enumerable: true,
  get: function () {
    return _indexFf226fef.i;
  }
});

var _indexFf226fef = require("./index-ff226fef.js");
},{"./index-ff226fef.js":"n6rD"}],"pBGv":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"bUEv":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.page = factory());
}(this, (function () { 'use strict';

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var suffix = res[6];
    var asterisk = res[7];

    var repeat = suffix === '+' || suffix === '*';
    var optional = suffix === '?' || suffix === '*';
    var delimiter = prefix || '/';
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$');
    }
  }

  return function (obj) {
    var path = '';
    var data = obj || {};

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = encodeURIComponent(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path);
  var re = tokensToRegExp(tokens, options);

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i]);
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';
  var lastToken = tokens[tokens.length - 1];
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = token.pattern;

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || [];

  if (!isarray(keys)) {
    options = keys;
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/**
   * Module dependencies.
   */

  

  /**
   * Short-cuts for global-object checks
   */

  var hasDocument = ('undefined' !== typeof document);
  var hasWindow = ('undefined' !== typeof window);
  var hasHistory = ('undefined' !== typeof history);
  var hasProcess = typeof process !== 'undefined';

  /**
   * Detect click event
   */
  var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var isLocation = hasWindow && !!(window.history.location || window.location);

  /**
   * The page instance
   * @api private
   */
  function Page() {
    // public things
    this.callbacks = [];
    this.exits = [];
    this.current = '';
    this.len = 0;

    // private things
    this._decodeURLComponents = true;
    this._base = '';
    this._strict = false;
    this._running = false;
    this._hashbang = false;

    // bound functions
    this.clickHandler = this.clickHandler.bind(this);
    this._onpopstate = this._onpopstate.bind(this);
  }

  /**
   * Configure the instance of page. This can be called multiple times.
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.configure = function(options) {
    var opts = options || {};

    this._window = opts.window || (hasWindow && window);
    this._decodeURLComponents = opts.decodeURLComponents !== false;
    this._popstate = opts.popstate !== false && hasWindow;
    this._click = opts.click !== false && hasDocument;
    this._hashbang = !!opts.hashbang;

    var _window = this._window;
    if(this._popstate) {
      _window.addEventListener('popstate', this._onpopstate, false);
    } else if(hasWindow) {
      _window.removeEventListener('popstate', this._onpopstate, false);
    }

    if (this._click) {
      _window.document.addEventListener(clickEvent, this.clickHandler, false);
    } else if(hasDocument) {
      _window.document.removeEventListener(clickEvent, this.clickHandler, false);
    }

    if(this._hashbang && hasWindow && !hasHistory) {
      _window.addEventListener('hashchange', this._onpopstate, false);
    } else if(hasWindow) {
      _window.removeEventListener('hashchange', this._onpopstate, false);
    }
  };

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  Page.prototype.base = function(path) {
    if (0 === arguments.length) return this._base;
    this._base = path;
  };

  /**
   * Gets the `base`, which depends on whether we are using History or
   * hashbang routing.

   * @api private
   */
  Page.prototype._getBase = function() {
    var base = this._base;
    if(!!base) return base;
    var loc = hasWindow && this._window && this._window.location;

    if(hasWindow && this._hashbang && loc && loc.protocol === 'file:') {
      base = loc.pathname;
    }

    return base;
  };

  /**
   * Get or set strict path matching to `enable`
   *
   * @param {boolean} enable
   * @api public
   */

  Page.prototype.strict = function(enable) {
    if (0 === arguments.length) return this._strict;
    this._strict = enable;
  };


  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  Page.prototype.start = function(options) {
    var opts = options || {};
    this.configure(opts);

    if (false === opts.dispatch) return;
    this._running = true;

    var url;
    if(isLocation) {
      var window = this._window;
      var loc = window.location;

      if(this._hashbang && ~loc.hash.indexOf('#!')) {
        url = loc.hash.substr(2) + loc.search;
      } else if (this._hashbang) {
        url = loc.search + loc.hash;
      } else {
        url = loc.pathname + loc.search + loc.hash;
      }
    }

    this.replace(url, null, true, opts.dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  Page.prototype.stop = function() {
    if (!this._running) return;
    this.current = '';
    this.len = 0;
    this._running = false;

    var window = this._window;
    this._click && window.document.removeEventListener(clickEvent, this.clickHandler, false);
    hasWindow && window.removeEventListener('popstate', this._onpopstate, false);
    hasWindow && window.removeEventListener('hashchange', this._onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  Page.prototype.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state, this),
      prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    if (false !== dispatch) this.dispatch(ctx, prev);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  Page.prototype.back = function(path, state) {
    var page = this;
    if (this.len > 0) {
      var window = this._window;
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      hasHistory && window.history.back();
      this.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    } else {
      setTimeout(function() {
        page.show(page._getBase(), state);
      });
    }
  };

  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  Page.prototype.redirect = function(from, to) {
    var inst = this;

    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page.call(this, from, function(e) {
        setTimeout(function() {
          inst.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        inst.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  Page.prototype.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state, this),
      prev = this.prevContext;
    this.prevContext = ctx;
    this.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) this.dispatch(ctx, prev);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */

  Page.prototype.dispatch = function(ctx, prev) {
    var i = 0, j = 0, page = this;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled.call(page, ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  Page.prototype.exit = function(path, fn) {
    if (typeof path === 'function') {
      return this.exit('*', path);
    }

    var route = new Route(path, null, this);
    for (var i = 1; i < arguments.length; ++i) {
      this.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Handle "click" events.
   */

  /* jshint +W054 */
  Page.prototype.clickHandler = function(e) {
    if (1 !== this._which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;

    // ensure link
    // use shadow dom when available if not, fall back to composedPath()
    // for browsers that only have shady
    var el = e.target;
    var eventPath = e.path || (e.composedPath ? e.composedPath() : null);

    if(eventPath) {
      for (var i = 0; i < eventPath.length; i++) {
        if (!eventPath[i].nodeName) continue;
        if (eventPath[i].nodeName.toUpperCase() !== 'A') continue;
        if (!eventPath[i].href) continue;

        el = eventPath[i];
        break;
      }
    }

    // continue ensure link
    // el.nodeName for svg links are 'a' instead of 'A'
    while (el && 'A' !== el.nodeName.toUpperCase()) el = el.parentNode;
    if (!el || 'A' !== el.nodeName.toUpperCase()) return;

    // check if link is inside an svg
    // in this case, both href and target are always inside an object
    var svg = (typeof el.href === 'object') && el.href.constructor.name === 'SVGAnimatedString';

    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if(!this._hashbang && this._samePath(el) && (el.hash || '#' === link)) return;

    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    // svg target is an object and its desired value is in .baseVal property
    if (svg ? el.target.baseVal : el.target) return;

    // x-origin
    // note: svg links that are not relative don't call click events (and skip page.js)
    // consequently, all svg links tested inside page.js are relative and in the same origin
    if (!svg && !this.sameOrigin(el.href)) return;

    // rebuild path
    // There aren't .pathname and .search properties in svg links, so we use href
    // Also, svg href is an object and its desired value is in .baseVal property
    var path = svg ? el.href.baseVal : (el.pathname + el.search + (el.hash || ''));

    path = path[0] !== '/' ? '/' + path : path;

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;
    var pageBase = this._getBase();

    if (path.indexOf(pageBase) === 0) {
      path = path.substr(pageBase.length);
    }

    if (this._hashbang) path = path.replace('#!', '');

    if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== 'file:')) {
      return;
    }

    e.preventDefault();
    this.show(orig);
  };

  /**
   * Handle "populate" events.
   * @api private
   */

  Page.prototype._onpopstate = (function () {
    var loaded = false;
    if ( ! hasWindow ) {
      return function () {};
    }
    if (hasDocument && document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      var page = this;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else if (isLocation) {
        var loc = page._window.location;
        page.show(loc.pathname + loc.search + loc.hash, undefined, undefined, false);
      }
    };
  })();

  /**
   * Event button.
   */
  Page.prototype._which = function(e) {
    e = e || (hasWindow && this._window.event);
    return null == e.which ? e.button : e.which;
  };

  /**
   * Convert to a URL object
   * @api private
   */
  Page.prototype._toURL = function(href) {
    var window = this._window;
    if(typeof URL === 'function' && isLocation) {
      return new URL(href, window.location.toString());
    } else if (hasDocument) {
      var anc = window.document.createElement('a');
      anc.href = href;
      return anc;
    }
  };

  /**
   * Check if `href` is the same origin.
   * @param {string} href
   * @api public
   */
  Page.prototype.sameOrigin = function(href) {
    if(!href || !isLocation) return false;

    var url = this._toURL(href);
    var window = this._window;

    var loc = window.location;

    /*
       When the port is the default http port 80 for http, or 443 for
       https, internet explorer 11 returns an empty string for loc.port,
       so we need to compare loc.port with an empty string if url.port
       is the default port 80 or 443.
       Also the comparition with `port` is changed from `===` to `==` because
       `port` can be a string sometimes. This only applies to ie11.
    */
    return loc.protocol === url.protocol &&
      loc.hostname === url.hostname &&
      (loc.port === url.port || loc.port === '' && (url.port == 80 || url.port == 443)); // jshint ignore:line
  };

  /**
   * @api private
   */
  Page.prototype._samePath = function(url) {
    if(!isLocation) return false;
    var window = this._window;
    var loc = window.location;
    return url.pathname === loc.pathname &&
      url.search === loc.search;
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   * @api private
   */
  Page.prototype._decodeURLEncodedURIComponent = function(val) {
    if (typeof val !== 'string') { return val; }
    return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  };

  /**
   * Create a new `page` instance and function
   */
  function createPage() {
    var pageInstance = new Page();

    function pageFn(/* args */) {
      return page.apply(pageInstance, arguments);
    }

    // Copy all of the things over. In 2.0 maybe we use setPrototypeOf
    pageFn.callbacks = pageInstance.callbacks;
    pageFn.exits = pageInstance.exits;
    pageFn.base = pageInstance.base.bind(pageInstance);
    pageFn.strict = pageInstance.strict.bind(pageInstance);
    pageFn.start = pageInstance.start.bind(pageInstance);
    pageFn.stop = pageInstance.stop.bind(pageInstance);
    pageFn.show = pageInstance.show.bind(pageInstance);
    pageFn.back = pageInstance.back.bind(pageInstance);
    pageFn.redirect = pageInstance.redirect.bind(pageInstance);
    pageFn.replace = pageInstance.replace.bind(pageInstance);
    pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
    pageFn.exit = pageInstance.exit.bind(pageInstance);
    pageFn.configure = pageInstance.configure.bind(pageInstance);
    pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
    pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);

    pageFn.create = createPage;

    Object.defineProperty(pageFn, 'len', {
      get: function(){
        return pageInstance.len;
      },
      set: function(val) {
        pageInstance.len = val;
      }
    });

    Object.defineProperty(pageFn, 'current', {
      get: function(){
        return pageInstance.current;
      },
      set: function(val) {
        pageInstance.current = val;
      }
    });

    // In 2.0 these can be named exports
    pageFn.Context = Context;
    pageFn.Route = Route;

    return pageFn;
  }

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page.call(this, '*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path), null, this);
      for (var i = 1; i < arguments.length; ++i) {
        this.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      this['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      this.start(path);
    }
  }

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;
    var page = this;
    var window = page._window;

    if (page._hashbang) {
      current = isLocation && this._getBase() + window.location.hash.replace('#!', '');
    } else {
      current = isLocation && window.location.pathname + window.location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    isLocation && (window.location.href = ctx.canonicalPath);
  }

  /**
   * Escapes RegExp characters in the given string.
   *
   * @param {string} s
   * @api private
   */
  function escapeRegExp(s) {
    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state, pageInstance) {
    var _page = this.page = pageInstance || page;
    var window = _page._window;
    var hashbang = _page._hashbang;

    var pageBase = _page._getBase();
    if ('/' === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    var re = new RegExp('^' + escapeRegExp(pageBase));
    this.path = path.replace(re, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = (hasDocument && window.document.title);
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = this.pathname = parts[0];
      this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    var page = this.page;
    var window = page._window;
    var hashbang = page._hashbang;

    page.len++;
    if (hasHistory) {
        window.history.pushState(this.state, this.title,
          hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    var page = this.page;
    if (hasHistory) {
        page._window.history.replaceState(this.state, this.title,
          page._hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
    }
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options, page) {
    var _page = this.page = page || globalPage;
    var opts = options || {};
    opts.strict = opts.strict || _page._strict;
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
  }

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) {
        ctx.routePath = self.path;
        return fn(ctx, next);
      }
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    delete params[0];

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = this.page._decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Module exports.
   */

  var globalPage = createPage();
  var page_js = globalPage;
  var default_1 = globalPage;

page_js.default = default_1;

return page_js;

})));

},{"process":"pBGv"}],"jicf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = Errors;

var _crank = require("@bikeshaving/crank");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};
/** @jsx createElement */


function Errors(_a) {
  var errors = _a.errors;
  return __asyncGenerator(this, arguments, function Errors_1() {
    var _a, _b, e_1_1;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          _d.trys.push([0, 7, 8, 13]);

          _a = __asyncValues(this);
          _d.label = 1;

        case 1:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 2:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 6];
          errors = _b.value.errors;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("ul", {
            class: "error-messages"
          }, Object.entries(errors).flatMap(function (_a) {
            var _b = __read(_a, 2),
                key = _b[0],
                values = _b[1];

            return values.map(function (v) {
              return key + " " + v;
            });
          }).map(function (message) {
            return (0, _crank.createElement)("li", null, message);
          })))];

        case 3:
          return [4
          /*yield*/
          , _d.sent()];

        case 4:
          _d.sent();

          _d.label = 5;

        case 5:
          return [3
          /*break*/
          , 1];

        case 6:
          return [3
          /*break*/
          , 13];

        case 7:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 13];

        case 8:
          _d.trys.push([8,, 11, 12]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 10];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 9:
          _d.sent();

          _d.label = 10;

        case 10:
          return [3
          /*break*/
          , 12];

        case 11:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 12:
          return [7
          /*endfinally*/
          ];

        case 13:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I"}],"fkvO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArticleListener = exports.deleteArticleEvent = exports.articleEditedListener = exports.articleEditedEvent = exports.articleCreatedListener = exports.articleCreatedEvent = exports.nextPageListener = exports.nextPageEvent = exports.prevPageListener = exports.prevPageEvent = exports.unfavoritePostListener = exports.unfavoritePostEvent = exports.favoritePostListener = exports.favoritePostEvent = exports.unfollowUserListener = exports.unfollowUserEvent = exports.followUserListener = exports.followUserEvent = void 0;

var _a, _b, _c, _d, _e, _f, _g, _h, _j;

var createEvent = function createEvent(eventName, detail) {
  return new CustomEvent(eventName, {
    bubbles: true,
    detail: detail
  });
};

var createListener = function createListener(eventName, handler) {
  return [eventName, function (event) {
    return handler(event.detail);
  }];
};

var createEventAndListener = function createEventAndListener(eventName) {
  return {
    event: function event(detail) {
      return createEvent(eventName, detail);
    },
    listener: function listener(handler) {
      return createListener(eventName, handler);
    }
  };
};

var followUserEvent = (_a = createEventAndListener('realworld.follow-user'), _a.event),
    followUserListener = _a.listener;
exports.followUserListener = followUserListener;
exports.followUserEvent = followUserEvent;
var unfollowUserEvent = (_b = createEventAndListener('realworld.unfollow-user'), _b.event),
    unfollowUserListener = _b.listener;
exports.unfollowUserListener = unfollowUserListener;
exports.unfollowUserEvent = unfollowUserEvent;
var favoritePostEvent = (_c = createEventAndListener('realworld.favorite-post'), _c.event),
    favoritePostListener = _c.listener;
exports.favoritePostListener = favoritePostListener;
exports.favoritePostEvent = favoritePostEvent;
var unfavoritePostEvent = (_d = createEventAndListener('realworld.unfavorite-post'), _d.event),
    unfavoritePostListener = _d.listener;
exports.unfavoritePostListener = unfavoritePostListener;
exports.unfavoritePostEvent = unfavoritePostEvent;
var prevPageEvent = (_e = createEventAndListener('realworld.prev-page'), _e.event),
    prevPageListener = _e.listener;
exports.prevPageListener = prevPageListener;
exports.prevPageEvent = prevPageEvent;
var nextPageEvent = (_f = createEventAndListener('realworld.next-page'), _f.event),
    nextPageListener = _f.listener;
exports.nextPageListener = nextPageListener;
exports.nextPageEvent = nextPageEvent;
var articleCreatedEvent = (_g = createEventAndListener('realworld.article-created'), _g.event),
    articleCreatedListener = _g.listener;
exports.articleCreatedListener = articleCreatedListener;
exports.articleCreatedEvent = articleCreatedEvent;
var articleEditedEvent = (_h = createEventAndListener('realworld.article-edited'), _h.event),
    articleEditedListener = _h.listener;
exports.articleEditedListener = articleEditedListener;
exports.articleEditedEvent = articleEditedEvent;
var deleteArticleEvent = (_j = createEventAndListener('realworld.delete-article'), _j.event),
    deleteArticleListener = _j.listener;
exports.deleteArticleListener = deleteArticleListener;
exports.deleteArticleEvent = deleteArticleEvent;
},{}],"UV5u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowUserButton = FollowUserButton;

var _crank = require("@bikeshaving/crank");

var _eventService = require("../services/eventService");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function FollowUserButton(_a) {
  var handleFollow, handleUnfollow, _b, _c, e_1_1;

  var e_1, _d, _e;

  var _this = this;

  var username = _a.username,
      following = _a.following;
  return __generator(this, function (_f) {
    switch (_f.label) {
      case 0:
        handleFollow = function handleFollow(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.followUserEvent)({
            username: username
          }));
        };

        handleUnfollow = function handleUnfollow(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.unfollowUserEvent)({
            username: username
          }));
        };

        _f.label = 1;

      case 1:
        _f.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _f.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        _e = _c.value, username = _e.username, following = _e.following;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, following && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm btn-secondary",
          onclick: handleUnfollow
        }, (0, _crank.createElement)("i", {
          class: "ion-plus-round"
        }), "\xA0 Unfollow ", username), !following && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm btn-outline-secondary",
          onclick: handleFollow
        }, (0, _crank.createElement)("i", {
          class: "ion-plus-round"
        }), "\xA0 Follow ", username))];

      case 3:
        _f.sent();

        _f.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _f.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../services/eventService":"fkvO"}],"OLp4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _crank = require("@bikeshaving/crank");

/** @jsx createElement */
function Footer() {
  return (0, _crank.createElement)("footer", null, (0, _crank.createElement)("div", {
    class: "container"
  }, (0, _crank.createElement)("a", {
    href: "/",
    class: "logo-font"
  }, "conduit"), (0, _crank.createElement)("span", {
    class: "attribution"
  }, "An interactive learning project from ", (0, _crank.createElement)("a", {
    href: "https://thinkster.io"
  }, "Thinkster"), ". Code & design licensed under MIT.")));
}
},{"@bikeshaving/crank":"k82I"}],"BZOY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = LoadingIndicator;

var _crank = require("@bikeshaving/crank");

/** @jsx createElement */
function LoadingIndicator() {
  return (0, _crank.createElement)("div", {
    className: "spinner-border"
  });
}
},{"@bikeshaving/crank":"k82I"}],"zWBN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.env = exports.DOMRenderer = void 0;

var _indexFf226fef = require("./index-ff226fef.js");

var _a; // TODO: create an allowlist/blocklist of props


function updateProps(el, props, newProps) {
  for (var name_1 in (0, _indexFf226fef.g)((0, _indexFf226fef.g)({}, props), newProps)) {
    var value = props[name_1];
    var newValue = newProps[name_1];

    switch (true) {
      case name_1 === "children":
        break;

      case name_1 === "class":
      case name_1 === "className":
        {
          el["className"] = newValue;
          break;
        }

      case name_1 === "style" && "style" in el:
        {
          var style = el.style;

          if (newValue == null) {
            el.removeAttribute("style");
          } else if (typeof newValue === "string") {
            style.cssText = newValue;
          } else {
            for (var styleName in Object.assign({}, value, newValue)) {
              var styleValue = value && value[styleName];
              var newStyleValue = newValue && newValue[styleName];

              if (newStyleValue == null) {
                style.removeProperty(styleName);
              } else if (styleValue !== newStyleValue) {
                style.setProperty(styleName, newStyleValue);
              }
            }
          }

          break;
        }

      default:
        {
          if (name_1 in el) {
            el[name_1] = newValue;
            break;
          } else if (newValue === true) {
            el.setAttribute(name_1, "");
          } else if (newValue === false || newValue == null) {
            el.removeAttribute(name_1);
          } else {
            el.setAttribute(name_1, newValue);
          }

          break;
        }
    }
  }
} // TODO: improve this algorithm
// https://stackoverflow.com/questions/59418120/what-is-the-most-efficient-way-to-update-the-childnodes-of-a-dom-node-with-an-ar


function updateChildren(el, children) {
  var e_1, _a, e_2, _b;

  if (el.childNodes.length === 0) {
    var fragment = document.createDocumentFragment();

    try {
      for (var children_1 = (0, _indexFf226fef.f)(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
        var child = children_1_1.value;

        if (typeof child === "string") {
          child = document.createTextNode(child);
        }

        fragment.appendChild(child);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    el.appendChild(fragment);
    return;
  }

  var oldChild = el.firstChild;

  try {
    for (var children_2 = (0, _indexFf226fef.f)(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
      var newChild = children_2_1.value;

      if (oldChild === null) {
        el.appendChild(typeof newChild === "string" ? document.createTextNode(newChild) : newChild);
      } else if (typeof newChild === "string") {
        if (oldChild.nodeType === Node.TEXT_NODE) {
          if (oldChild.nodeValue !== newChild) {
            oldChild.nodeValue = newChild;
          }

          oldChild = oldChild.nextSibling;
        } else {
          el.insertBefore(document.createTextNode(newChild), oldChild);
        }
      } else if (oldChild !== newChild) {
        el.insertBefore(newChild, oldChild);
      } else {
        oldChild = oldChild.nextSibling;
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  while (oldChild !== null) {
    var nextSibling = oldChild.nextSibling;
    el.removeChild(oldChild);
    oldChild = nextSibling;
  }
}

function createDocumentFragmentFromHTML(html) {
  if (typeof document.createRange === "function") {
    return document.createRange().createContextualFragment(html);
  } else {
    var fragment = document.createDocumentFragment();
    var childNodes = new DOMParser().parseFromString(html, "text/html").body.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      fragment.appendChild(childNodes[i]);
    }

    return fragment;
  }
} // TODO: Element should be ParentNode maybe?


var env = (_a = {}, _a[_indexFf226fef.D] = function (tag) {
  return function defaultDOM() {
    var node, props, nextProps, children, nextChildren, _a, _b, _c, e_3_1;

    var e_3, _d;

    return (0, _indexFf226fef._)(this, function (_e) {
      switch (_e.label) {
        case 0:
          node = document.createElement(tag);
          props = {};
          children = [];
          _e.label = 1;

        case 1:
          _e.trys.push([1, 6, 7, 8]);

          _a = (0, _indexFf226fef.f)(this), _b = _a.next();
          _e.label = 2;

        case 2:
          if (!!_b.done) return [3
          /*break*/
          , 5];
          _c = _b.value;
          nextChildren = _c.children, nextProps = (0, _indexFf226fef.e)(_c, ["children"]);
          updateProps(node, props, nextProps);
          props = nextProps;

          if (!("innerHTML" in nextProps) && (children.length > 0 || nextChildren.length > 0)) {
            updateChildren(node, nextChildren);
            children = nextChildren;
          }

          return [4
          /*yield*/
          , node];

        case 3:
          _e.sent();

          _e.label = 4;

        case 4:
          _b = _a.next();
          return [3
          /*break*/
          , 2];

        case 5:
          return [3
          /*break*/
          , 8];

        case 6:
          e_3_1 = _e.sent();
          e_3 = {
            error: e_3_1
          };
          return [3
          /*break*/
          , 8];

        case 7:
          try {
            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
          } finally {
            if (e_3) throw e_3.error;
          }

          return [7
          /*endfinally*/
          ];

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  };
}, _a[_indexFf226fef.R] = function (_a) {
  var value = _a.value;

  if (typeof value === "string") {
    // TODO: figure out what the type of element should actually be
    return createDocumentFragmentFromHTML(value);
  } else {
    return value;
  }
}, _a[_indexFf226fef.P] = function (_a) {
  var _b, _c, _d, newRoot, children, e_4_1;

  var e_4, _e;

  var root = _a.root;
  return (0, _indexFf226fef._)(this, function (_f) {
    switch (_f.label) {
      case 0:
        if (root == null) {
          throw new TypeError("Portal element is missing root node");
        }

        _f.label = 1;

      case 1:
        _f.trys.push([1,, 10, 11]);

        _f.label = 2;

      case 2:
        _f.trys.push([2, 7, 8, 9]);

        _b = (0, _indexFf226fef.f)(this), _c = _b.next();
        _f.label = 3;

      case 3:
        if (!!_c.done) return [3
        /*break*/
        , 6];
        _d = _c.value, newRoot = _d.root, children = _d.children;

        if (newRoot == null) {
          throw new TypeError("Portal element is missing root node");
        }

        if (root !== newRoot) {
          updateChildren(root, []);
          root = newRoot;
        }

        updateChildren(root, children);
        return [4
        /*yield*/
        , root];

      case 4:
        _f.sent();

        _f.label = 5;

      case 5:
        _c = _b.next();
        return [3
        /*break*/
        , 3];

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        e_4_1 = _f.sent();
        e_4 = {
          error: e_4_1
        };
        return [3
        /*break*/
        , 9];

      case 8:
        try {
          if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
        } finally {
          if (e_4) throw e_4.error;
        }

        return [7
        /*endfinally*/
        ];

      case 9:
        return [3
        /*break*/
        , 11];

      case 10:
        updateChildren(root, []);
        return [7
        /*endfinally*/
        ];

      case 11:
        return [2
        /*return*/
        ];
    }
  });
}, _a);
exports.env = env;

var DOMRenderer =
/** @class */
function (_super) {
  (0, _indexFf226fef.d)(DOMRenderer, _super);

  function DOMRenderer() {
    return _super.call(this, env) || this;
  }

  return DOMRenderer;
}(_indexFf226fef.b);

exports.DOMRenderer = DOMRenderer;
var renderer = new DOMRenderer();
exports.renderer = renderer;
},{"./index-ff226fef.js":"n6rD"}],"PjJi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./esm/dom.js");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});
},{"./esm/dom.js":"zWBN"}],"TnIE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var _dom = require("@bikeshaving/crank/dom");

var render = function render(component) {
  _dom.renderer.render(component, document.getElementById('app') || undefined);
};

exports.render = render;
},{"@bikeshaving/crank/dom":"PjJi"}],"SSrD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castDraft = T;
exports.castImmutable = F;
exports.enableAllPlugins = N;
exports.enableES5 = k;
exports.enableMapSet = D;
exports.enablePatches = R;
exports.isDraft = t;
exports.isDraftable = r;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = exports.nothing = exports.immerable = exports.finishDraft = exports.createDraft = exports.applyPatches = exports.Immer = exports.default = void 0;

function n(n) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) r[e - 1] = arguments[e];

  if ("production" !== "production") {
    var i = H[n],
        o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function t(n) {
  return !!n && !!n[B];
}

function r(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var t = Object.getPrototypeOf(n);
    return !t || t === Object.prototype;
  }(n) || Array.isArray(n) || !!n[q] || !!n.constructor[q] || c(n) || s(n));
}

function e(n) {
  if (n && n[B]) return n[B].t;
}

function i(n, t) {
  0 === o(n) ? L(n).forEach(function (r) {
    return t(r, n[r], n);
  }) : n.forEach(function (r, e) {
    return t(e, r, n);
  });
}

function o(n) {
  var t = n[B];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : c(n) ? 2 : s(n) ? 3 : 0;
}

function u(n, t) {
  return 2 === o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}

function a(n, t) {
  return 2 === o(n) ? n.get(t) : n[t];
}

function f(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}

function c(n) {
  return $ && n instanceof Map;
}

function s(n) {
  return U && n instanceof Set;
}

function v(n) {
  return n.o || n.t;
}

function p(t, r) {
  if (void 0 === r && (r = !1), Array.isArray(t)) return t.slice();
  var e = Object.create(Object.getPrototypeOf(t));
  return i(t, function (i) {
    if (i !== B) {
      var o = Object.getOwnPropertyDescriptor(t, i),
          u = o.value;
      o.get && (r || n(1), u = o.get.call(t)), o.enumerable ? e[i] = u : Object.defineProperty(e, i, {
        value: u,
        writable: !0,
        configurable: !0
      });
    }
  }), e;
}

function d(n, e) {
  t(n) || Object.isFrozen(n) || !r(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = l), Object.freeze(n), e && i(n, function (n, t) {
    return d(t, !0);
  }));
}

function l() {
  n(2);
}

function h(t) {
  var r = Q[t];
  return r || n("production" !== "production" ? 18 : 19, t), r;
}

function y(n, t) {
  Q[n] = t;
}

function m() {
  return "production" === "production" || J || n(0), J;
}

function b(n, t) {
  t && (h("Patches"), n.u = [], n.s = [], n.v = t);
}

function _(n) {
  j(n), n.p.forEach(g), n.p = null;
}

function j(n) {
  n === J && (J = n.l);
}

function O(n) {
  return J = {
    p: [],
    l: J,
    h: n,
    m: !0,
    _: 0
  };
}

function g(n) {
  var t = n[B];
  0 === t.i || 1 === t.i ? t.j() : t.O = !0;
}

function w(t, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== t && t !== i;
  return e.h.g || h("ES5").S(e, t, o), o ? (i[B].P && (_(e), n(4)), r(t) && (t = S(e, t), e.l || M(e, t)), e.u && h("Patches").M(i[B], t, e.u, e.s)) : t = S(e, i, []), _(e), e.u && e.v(e.u, e.s), t !== X ? t : void 0;
}

function S(n, t, r) {
  if (Object.isFrozen(t)) return t;
  var e = t[B];
  if (!e) return i(t, function (i, o) {
    return P(n, e, t, i, o, r);
  }), t;
  if (e.A !== n) return t;
  if (!e.P) return M(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = p(e.k, !0) : e.o;
    i(o, function (t, i) {
      return P(n, e, o, t, i, r);
    }), M(n, o, !1), r && n.u && h("Patches").R(e, r, n.u, n.s);
  }

  return e.o;
}

function P(e, i, c, s, v, p) {
  if ("production" !== "production" && v === c && n(5), t(v)) {
    var d = S(e, v, p && i && 3 !== i.i && !u(i.D, s) ? p.concat(s) : void 0);
    if (h = s, y = d, 2 === (m = o(l = c)) ? l.set(h, y) : 3 === m ? (l.delete(h), l.add(y)) : l[h] = y, !t(d)) return;
    e.m = !1;
  }

  var l, h, y, m;

  if ((!i || !f(v, a(i.t, s))) && r(v)) {
    if (!e.h.N && e._ < 1) return;
    S(e, v), i && i.A.l || M(e, v);
  }
}

function M(n, t, r) {
  void 0 === r && (r = !1), n.h.N && n.m && d(t, r);
}

function A(n, t) {
  var r = n[B],
      e = Reflect.getOwnPropertyDescriptor(r ? v(r) : n, t);
  return e && e.value;
}

function z(n) {
  if (!n.P) {
    if (n.P = !0, 0 === n.i || 1 === n.i) {
      var t = n.o = p(n.t);
      i(n.p, function (n, r) {
        t[n] = r;
      }), n.p = void 0;
    }

    n.l && z(n.l);
  }
}

function x(n) {
  n.o || (n.o = p(n.t));
}

function I(n, t, r) {
  var e = c(t) ? h("MapSet").T(t, r) : s(t) ? h("MapSet").F(t, r) : n.g ? function (n, t) {
    var r = Array.isArray(n),
        e = {
      i: r ? 1 : 0,
      A: t ? t.A : m(),
      P: !1,
      I: !1,
      D: {},
      l: t,
      t: n,
      k: null,
      p: {},
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = V;
    r && (i = [e], o = Y);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(t, r) : h("ES5").J(t, r);
  return (r ? r.A : m()).p.push(e), e;
}

function E(n, t) {
  n.g ? z(t) : h("ES5").K(t);
}

function k() {
  function e(n, t) {
    var r = n[B];

    if (r && !r.$) {
      r.$ = !0;
      var e = n[t];
      return r.$ = !1, e;
    }

    return n[t];
  }

  function o(n) {
    n.P || (n.P = !0, n.l && o(n.l));
  }

  function a(n) {
    n.o || (n.o = c(n.t));
  }

  function c(n) {
    var t = n && n[B];

    if (t) {
      t.$ = !0;
      var r = p(t.k, !0);
      return t.$ = !1, r;
    }

    return p(n);
  }

  function s(n) {
    for (var t = n.length - 1; t >= 0; t--) {
      var r = n[t][B];
      if (!r.P) switch (r.i) {
        case 5:
          l(r) && o(r);
          break;

        case 4:
          d(r) && o(r);
      }
    }
  }

  function d(n) {
    for (var t = n.t, r = n.k, e = Object.keys(r), i = e.length - 1; i >= 0; i--) {
      var o = e[i],
          a = t[o];
      if (void 0 === a && !u(t, o)) return !0;
      var c = r[o],
          s = c && c[B];
      if (s ? s.t !== a : !f(c, a)) return !0;
    }

    return e.length !== Object.keys(t).length;
  }

  function l(n) {
    var t = n.k;
    if (t.length !== n.t.length) return !0;
    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
    return !(!r || r.get);
  }

  function h(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var b = {};
  y("ES5", {
    J: function (n, t) {
      var u = Array.isArray(n),
          s = c(n);
      i(s, function (t) {
        !function (n, t, i) {
          var u = b[t];
          u ? u.enumerable = i : b[t] = u = {
            enumerable: i,
            get: function () {
              return function (n, t) {
                h(n);
                var i = e(v(n), t);
                return n.$ ? i : i === e(n.t, t) && r(i) ? (a(n), n.o[t] = I(n.A.h, i, n)) : i;
              }(this[B], t);
            },
            set: function (n) {
              !function (n, t, r) {
                if (h(n), n.D[t] = !0, !n.P) {
                  if (f(r, e(v(n), t))) return;
                  o(n), a(n);
                }

                n.o[t] = r;
              }(this[B], t, n);
            }
          }, Object.defineProperty(n, t, u);
        }(s, t, u || function (n, t) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          return !(!r || !r.enumerable);
        }(n, t));
      });
      var p = {
        i: u ? 5 : 4,
        A: t ? t.A : m(),
        P: !1,
        $: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: s,
        o: null,
        O: !1,
        C: !1
      };
      return Object.defineProperty(s, B, {
        value: p,
        writable: !0
      }), s;
    },
    K: o,
    S: function (n, r, e) {
      n.p.forEach(function (n) {
        n[B].$ = !0;
      }), e ? t(r) && r[B].A === n && s(n.p) : (n.u && function n(t) {
        if (t && "object" == typeof t) {
          var r = t[B];

          if (r) {
            var e = r.t,
                a = r.k,
                f = r.D,
                c = r.i;
            if (4 === c) i(a, function (t) {
              t !== B && (void 0 !== e[t] || u(e, t) ? f[t] || n(a[t]) : (f[t] = !0, o(r)));
            }), i(e, function (n) {
              void 0 !== a[n] || u(a, n) || (f[n] = !1, o(r));
            });else if (5 === c) {
              if (l(r) && (o(r), f.length = !0), a.length < e.length) for (var s = a.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < a.length; v++) f[v] = !0;

              for (var p = Math.min(a.length, e.length), d = 0; d < p; d++) void 0 === f[d] && n(a[d]);
            }
          }
        }
      }(n.p[0]), s(n.p));
    }
  });
}

function R() {
  function t(n) {
    if (!n || "object" != typeof n) return n;
    if (Array.isArray(n)) return n.map(t);
    if (c(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], t(n[1])];
    }));
    if (s(n)) return new Set(Array.from(n).map(t));
    var r = Object.create(Object.getPrototypeOf(n));

    for (var e in n) r[e] = t(n[e]);

    return r;
  }

  var r = "add";
  y("Patches", {
    U: function (e, i) {
      return i.forEach(function (i) {
        for (var u = i.path, f = i.op, c = e, s = 0; s < u.length - 1; s++) "object" != typeof (c = a(c, u[s])) && n(15, u.join("/"));

        var v = o(c),
            p = t(i.value),
            d = u[u.length - 1];

        switch (f) {
          case "replace":
            switch (v) {
              case 2:
                return c.set(d, p);

              case 3:
                n(16);

              default:
                return c[d] = p;
            }

          case r:
            switch (v) {
              case 1:
                return c.splice(d, 0, p);

              case 2:
                return c.set(d, p);

              case 3:
                return c.add(p);

              default:
                return c[d] = p;
            }

          case "remove":
            switch (v) {
              case 1:
                return c.splice(d, 1);

              case 2:
                return c.delete(d);

              case 3:
                return c.delete(i.value);

              default:
                return delete c[d];
            }

          default:
            n(17, f);
        }
      }), e;
    },
    R: function (n, t, e, o) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, t, e, o) {
            var f = n.t,
                c = n.o;
            i(n.D, function (n, i) {
              var s = a(f, n),
                  v = a(c, n),
                  p = i ? u(f, n) ? "replace" : r : "remove";

              if (s !== v || "replace" !== p) {
                var d = t.concat(n);
                e.push("remove" === p ? {
                  op: p,
                  path: d
                } : {
                  op: p,
                  path: d,
                  value: v
                }), o.push(p === r ? {
                  op: "remove",
                  path: d
                } : "remove" === p ? {
                  op: r,
                  path: d,
                  value: s
                } : {
                  op: "replace",
                  path: d,
                  value: s
                });
              }
            });
          }(n, t, e, o);

        case 5:
        case 1:
          return function (n, t, e, i) {
            var o = n.t,
                u = n.D,
                a = n.o;

            if (a.length < o.length) {
              var f = [a, o];
              o = f[0], a = f[1];
              var c = [i, e];
              e = c[0], i = c[1];
            }

            for (var s = a.length - o.length, v = 0; o[v] === a[v] && v < o.length;) ++v;

            for (var p = o.length; p > v && o[p - 1] === a[p + s - 1];) --p;

            for (var d = v; d < p; ++d) if (u[d] && a[d] !== o[d]) {
              var l = t.concat([d]);
              e.push({
                op: "replace",
                path: l,
                value: a[d]
              }), i.push({
                op: "replace",
                path: l,
                value: o[d]
              });
            }

            for (var h = e.length, y = p + s - 1; y >= p; --y) {
              var m = t.concat([y]);
              e[h + y - p] = {
                op: r,
                path: m,
                value: a[y]
              }, i.push({
                op: "remove",
                path: m
              });
            }
          }(n, t, e, o);

        case 3:
          return function (n, t, e, i) {
            var o = n.t,
                u = n.o,
                a = 0;
            o.forEach(function (n) {
              if (!u.has(n)) {
                var o = t.concat([a]);
                e.push({
                  op: "remove",
                  path: o,
                  value: n
                }), i.unshift({
                  op: r,
                  path: o,
                  value: n
                });
              }

              a++;
            }), a = 0, u.forEach(function (n) {
              if (!o.has(n)) {
                var u = t.concat([a]);
                e.push({
                  op: r,
                  path: u,
                  value: n
                }), i.unshift({
                  op: "remove",
                  path: u,
                  value: n
                });
              }

              a++;
            });
          }(n, t, e, o);
      }
    },
    M: function (n, t, r, e) {
      r.push({
        op: "replace",
        path: [],
        value: t
      }), e.push({
        op: "replace",
        path: [],
        value: n.t
      });
    }
  });
}

function D() {
  function t(n, t) {
    function r() {
      this.constructor = n;
    }

    u(n, t), n.prototype = (r.prototype = t.prototype, new r());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function i(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (t) {
      if (r(t)) {
        var e = I(n.A.h, t, n);
        n.p.set(t, e), n.o.add(e);
      } else n.o.add(t);
    }));
  }

  function o(t) {
    t.O && n(3, JSON.stringify(v(t)));
  }

  var u = function (n, t) {
    return (u = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, t) {
      n.__proto__ = t;
    } || function (n, t) {
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
    })(n, t);
  },
      a = function () {
    function n(n, t) {
      return this[B] = {
        i: 2,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    t(n, Map);
    var i = n.prototype;
    return Object.defineProperty(i, "size", {
      get: function () {
        return v(this[B]).size;
      }
    }), i.has = function (n) {
      return v(this[B]).has(n);
    }, i.set = function (n, t) {
      var r = this[B];
      return o(r), v(r).get(n) !== t && (e(r), E(r.A.h, r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this;
    }, i.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[B];
      return o(t), e(t), E(t.A.h, t), t.D.set(n, !1), t.o.delete(n), !0;
    }, i.clear = function () {
      var n = this[B];
      return o(n), e(n), E(n.A.h, n), n.D = new Map(), n.o.clear();
    }, i.forEach = function (n, t) {
      var r = this;
      v(this[B]).forEach(function (e, i) {
        n.call(t, r.get(i), i, r);
      });
    }, i.get = function (n) {
      var t = this[B];
      o(t);
      var i = v(t).get(n);
      if (t.I || !r(i)) return i;
      if (i !== t.t.get(n)) return i;
      var u = I(t.A.h, i, t);
      return e(t), t.o.set(n, u), u;
    }, i.keys = function () {
      return v(this[B]).keys();
    }, i.values = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[G] = function () {
        return t.values();
      }, n.next = function () {
        var n = r.next();
        return n.done ? n : {
          done: !1,
          value: t.get(n.value)
        };
      }, n;
    }, i.entries = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[G] = function () {
        return t.entries();
      }, n.next = function () {
        var n = r.next();
        if (n.done) return n;
        var e = t.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, i[G] = function () {
      return this.entries();
    }, n;
  }(),
      f = function () {
    function n(n, t) {
      return this[B] = {
        i: 3,
        l: t,
        A: t ? t.A : m(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    t(n, Set);
    var r = n.prototype;
    return Object.defineProperty(r, "size", {
      get: function () {
        return v(this[B]).size;
      }
    }), r.has = function (n) {
      var t = this[B];
      return o(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n);
    }, r.add = function (n) {
      var t = this[B];
      return o(t), t.o ? t.o.add(n) : t.t.has(n) || (i(t), E(t.A.h, t), t.o.add(n)), this;
    }, r.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[B];
      return o(t), i(t), E(t.A.h, t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n));
    }, r.clear = function () {
      var n = this[B];
      return o(n), i(n), E(n.A.h, n), n.o.clear();
    }, r.values = function () {
      var n = this[B];
      return o(n), i(n), n.o.values();
    }, r.entries = function () {
      var n = this[B];
      return o(n), i(n), n.o.entries();
    }, r.keys = function () {
      return this.values();
    }, r[G] = function () {
      return this.values();
    }, r.forEach = function (n, t) {
      for (var r = this.values(), e = r.next(); !e.done;) n.call(t, e.value, e.value, this), e = r.next();
    }, n;
  }();

  y("MapSet", {
    T: function (n, t) {
      return new a(n, t);
    },
    F: function (n, t) {
      return new f(n, t);
    }
  });
}

function N() {
  k(), D(), R();
}

function T(n) {
  return n;
}

function F(n) {
  return n;
}

var C,
    J,
    K = "undefined" != typeof Symbol,
    $ = "undefined" != typeof Map,
    U = "undefined" != typeof Set,
    W = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    X = K ? Symbol("immer-nothing") : ((C = {})["immer-nothing"] = !0, C),
    q = K ? Symbol("immer-draftable") : "__$immer_draftable",
    B = K ? Symbol("immer-state") : "__$immer_state",
    G = K ? Symbol.iterator : "@@iterator",
    H = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  19: "plugin not loaded",
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available"
},
    L = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    Q = {},
    V = {
  get: function (n, t) {
    if (t === B) return n;
    var e = n.p;
    if (!n.P && u(e, t)) return e[t];
    var i = v(n)[t];
    if (n.I || !r(i)) return i;

    if (n.P) {
      if (i !== A(n.t, t)) return i;
      e = n.o;
    }

    return e[t] = I(n.A.h, i, n);
  },
  has: function (n, t) {
    return t in v(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(v(n));
  },
  set: function (n, t, r) {
    if (!n.P) {
      var e = A(n.t, t);
      if (r ? f(e, r) || r === n.p[t] : f(e, r) && t in n.t) return !0;
      x(n), z(n);
    }

    return n.D[t] = !0, n.o[t] = r, !0;
  },
  deleteProperty: function (n, t) {
    return void 0 !== A(n.t, t) || t in n.t ? (n.D[t] = !1, x(n), z(n)) : n.D[t] && delete n.D[t], n.o && delete n.o[t], !0;
  },
  getOwnPropertyDescriptor: function (n, t) {
    var r = v(n),
        e = Reflect.getOwnPropertyDescriptor(r, t);
    return e && (e.writable = !0, e.configurable = 1 !== n.i || "length" !== t), e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    Y = {};
exports.immerable = q;
exports.nothing = X;
i(V, function (n, t) {
  Y[n] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Y.deleteProperty = function (t, r) {
  return "production" !== "production" && isNaN(parseInt(r)) && n(13), V.deleteProperty.call(this, t[0], r);
}, Y.set = function (t, r, e) {
  return "production" !== "production" && "length" !== r && isNaN(parseInt(r)) && n(14), V.set.call(this, t[0], r, e, t[0]);
};

var Z = function () {
  function e(n) {
    this.g = W, this.N = "production" !== "production", "boolean" == typeof (null == n ? void 0 : n.useProxies) && this.setUseProxies(n.useProxies), "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
  }

  var i = e.prototype;
  return i.produce = function (t, e, i) {
    if ("function" == typeof t && "function" != typeof e) {
      var o = e;
      e = t;
      var u = this;
      return function (n) {
        var t = this;
        void 0 === n && (n = o);

        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];

        return u.produce(n, function (n) {
          var r;
          return (r = e).call.apply(r, [t, n].concat(i));
        });
      };
    }

    var a;

    if ("function" != typeof e && n(6), void 0 !== i && "function" != typeof i && n(7), r(t)) {
      var f = O(this),
          c = I(this, t, void 0),
          s = !0;

      try {
        a = e(c), s = !1;
      } finally {
        s ? _(f) : j(f);
      }

      return "undefined" != typeof Promise && a instanceof Promise ? a.then(function (n) {
        return b(f, i), w(n, f);
      }, function (n) {
        throw _(f), n;
      }) : (b(f, i), w(a, f));
    }

    if ((a = e(t)) !== X) return void 0 === a && (a = t), this.N && d(a, !0), a;
  }, i.produceWithPatches = function (n, t) {
    var r,
        e,
        i = this;
    return "function" == typeof n ? function (t) {
      for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];

      return i.produceWithPatches(t, function (t) {
        return n.apply(void 0, [t].concat(e));
      });
    } : [this.produce(n, t, function (n, t) {
      r = n, e = t;
    }), r, e];
  }, i.createDraft = function (t) {
    r(t) || n(8);
    var e = O(this),
        i = I(this, t, void 0);
    return i[B].C = !0, j(e), i;
  }, i.finishDraft = function (t, r) {
    var e = t && t[B];
    "production" !== "production" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return b(i, r), w(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.N = n;
  }, i.setUseProxies = function (t) {
    W || n(20), this.g = t;
  }, i.applyPatches = function (n, r) {
    var e;

    for (e = r.length - 1; e >= 0; e--) {
      var i = r[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    var o = h("Patches").U;
    return t(n) ? o(n, r) : this.produce(n, function (n) {
      return o(n, r.slice(e + 1));
    });
  }, e;
}(),
    nn = new Z(),
    tn = nn.produce,
    rn = nn.produceWithPatches.bind(nn),
    en = nn.setAutoFreeze.bind(nn),
    on = nn.setUseProxies.bind(nn),
    un = nn.applyPatches.bind(nn),
    an = nn.createDraft.bind(nn),
    fn = nn.finishDraft.bind(nn);

exports.finishDraft = fn;
exports.createDraft = an;
exports.applyPatches = un;
exports.setUseProxies = on;
exports.setAutoFreeze = en;
exports.produceWithPatches = rn;
exports.produce = tn;
exports.Immer = Z;
var _default = tn;
exports.default = _default;
},{}],"lm5O":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createState = createState;

var _immer = _interopRequireDefault(require("immer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createState(initialState) {
  var currentState = initialState;
  var watchers = [];

  var watch = function watch(w) {
    watchers.push(w);
    return w;
  };

  var unwatch = function unwatch(t) {
    var index = watchers.indexOf(t);

    if (index >= 0) {
      watchers.splice(index, 1);
    }
  };

  var get = function get() {
    return currentState;
  };

  var set = function set(p) {
    currentState = (0, _immer.default)(currentState, p);
    watchers.forEach(function (w) {
      return w();
    });
  };

  return {
    watch: watch,
    unwatch: unwatch,
    get: get,
    set: set
  };
}
},{"immer":"SSrD"}],"Rf8a":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkHref = void 0;

var linkHref = function linkHref(href) {
  if ("production" === 'production') {
    // this should match what's in src/index.tsx
    return '/realworld-starter-kit' + href;
  } else {
    return href;
  }
};

exports.linkHref = linkHref;
},{}],"s2T4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = require("./render");

Object.keys(_render).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _render[key];
    }
  });
});

var _createState = require("./createState");

Object.keys(_createState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createState[key];
    }
  });
});

var _linkHref = require("./linkHref");

Object.keys(_linkHref).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _linkHref[key];
    }
  });
});
},{"./render":"TnIE","./createState":"lm5O","./linkHref":"Rf8a"}],"qsQo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = exports.isLoggedIn = exports.getUser = exports.unwatchUser = exports.watchUser = void 0;

var _utils = require("../utils");

var initialState = {
  user: null
};

var _a = (0, _utils.createState)(initialState),
    watch = _a.watch,
    unwatch = _a.unwatch,
    get = _a.get,
    set = _a.set;

var watchUser = watch;
exports.watchUser = watchUser;
var unwatchUser = unwatch;
exports.unwatchUser = unwatchUser;

var getUser = function getUser() {
  var user = get().user; // check localStorage

  if (user == null) {
    var value = localStorage.getItem('user');

    if (value) {
      user = JSON.parse(value);
      setUser(user);
    }
  }

  return user;
};

exports.getUser = getUser;

var isLoggedIn = function isLoggedIn() {
  return getUser() !== null;
};

exports.isLoggedIn = isLoggedIn;

var setUser = function setUser(u) {
  set(function (state) {
    state.user = u; // update localStorage

    if (u == null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem('user', JSON.stringify(u));
    }
  });
};

exports.setUser = setUser;
},{"../utils":"s2T4"}],"qb7c":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"oXgt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewPostNavLink = NewPostNavLink;

var _crank = require("@bikeshaving/crank");

var _screens = require("../screens");

var _eventService = require("../services/eventService");

var _page = _interopRequireDefault(require("page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


function NewPostNavLink() {
  var showNewPostModal, modalNode, handleNewPost, hideModal;

  var _this = this;

  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        showNewPostModal = false;
        modalNode = null;

        handleNewPost = function handleNewPost(event) {
          event.preventDefault();
          showNewPostModal = true;
          document.body.classList.add('modal-open');
          modalNode = document.createElement('div');
          document.body.appendChild(modalNode);

          _this.refresh();
        };

        hideModal = function hideModal() {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  showNewPostModal = false; // excluding <Portal> from the output doesn't remove the content, so manually clear it here.

                  modalNode === null || modalNode === void 0 ? void 0 : modalNode.remove();
                  document.body.classList.remove('modal-open');
                  return [4
                  /*yield*/
                  , this.refresh()];

                case 1:
                  _a.sent();

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        this.addEventListener.apply(this, __spread((0, _eventService.articleCreatedListener)(function (_a) {
          var article = _a.article;

          (function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    // the call to refresh() is interfering with page() somehow. without the await page will
                    // update the url, but the screen doesn't change. putting page() in a setTimeout and not using async also seems to work.
                    return [4
                    /*yield*/
                    , hideModal()];

                  case 1:
                    // the call to refresh() is interfering with page() somehow. without the await page will
                    // update the url, but the screen doesn't change. putting page() in a setTimeout and not using async also seems to work.
                    _a.sent();

                    (0, _page.default)("/article/" + article.slug);
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          })();
        })));
        _a.label = 1;

      case 1:
        if (!true) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)("a", {
          class: "nav-link",
          href: "",
          onclick: handleNewPost
        }, (0, _crank.createElement)("i", {
          class: "ion-compose"
        }), "\xA0New Post"), showNewPostModal && (0, _crank.createElement)(_crank.Portal, {
          root: modalNode
        }, (0, _crank.createElement)(_screens.CreateArticleScreen, {
          hide: hideModal
        })))];

      case 2:
        _a.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../screens":"nYHZ","../services/eventService":"fkvO","page":"bUEv"}],"duUx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = Navbar;

var _crank = require("@bikeshaving/crank");

var _userState = require("../state/userState");

var _classnames = _interopRequireDefault(require("classnames"));

var _NewPostNavLink = require("./NewPostNavLink");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function Navbar(_a) {
  var active = _a.active;
  return __asyncGenerator(this, arguments, function Navbar_1() {
    var user, _a, _b, e_1_1;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          user = (0, _userState.getUser)();
          _d.label = 1;

        case 1:
          _d.trys.push([1, 8, 9, 14]);

          _a = __asyncValues(this);
          _d.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 3:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 7];
          active = _b.value.active;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("nav", {
            class: "navbar navbar-light"
          }, (0, _crank.createElement)("div", {
            class: "container"
          }, (0, _crank.createElement)("a", {
            class: "navbar-brand",
            href: (0, _utils.linkHref)('/')
          }, "conduit"), (0, _crank.createElement)("ul", {
            class: "nav navbar-nav pull-xs-right"
          }, (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: active === 'home'
            }),
            href: (0, _utils.linkHref)('/')
          }, "Home")), (0, _userState.isLoggedIn)() && (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)(_NewPostNavLink.NewPostNavLink, null)), (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: active === 'settings'
            }),
            href: (0, _utils.linkHref)('/settings')
          }, (0, _crank.createElement)("i", {
            class: "ion-gear-a"
          }), "\xA0Settings")), (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: "nav-link",
            href: (0, _utils.linkHref)("/profile/" + user.username)
          }, (0, _crank.createElement)("img", {
            src: user.image,
            class: "user-pic"
          }), "\xA0Profile")), (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: "nav-link",
            href: (0, _utils.linkHref)('/logout')
          }, "Log Out"))), !(0, _userState.isLoggedIn)() && (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: active === 'login'
            }),
            href: (0, _utils.linkHref)('/login')
          }, "Sign in")), (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: active === 'register'
            }),
            href: (0, _utils.linkHref)('/register')
          }, "Sign up")))))))];

        case 4:
          return [4
          /*yield*/
          , _d.sent()];

        case 5:
          _d.sent();

          _d.label = 6;

        case 6:
          return [3
          /*break*/
          , 2];

        case 7:
          return [3
          /*break*/
          , 14];

        case 8:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 14];

        case 9:
          _d.trys.push([9,, 12, 13]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 11];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 10:
          _d.sent();

          _d.label = 11;

        case 11:
          return [3
          /*break*/
          , 13];

        case 12:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 13:
          return [7
          /*endfinally*/
          ];

        case 14:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../state/userState":"qsQo","classnames":"qb7c","./NewPostNavLink":"oXgt","../utils":"s2T4"}],"iVTS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Errors = require("./Errors");

Object.keys(_Errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Errors[key];
    }
  });
});

var _FollowUserButton = require("./FollowUserButton");

Object.keys(_FollowUserButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FollowUserButton[key];
    }
  });
});

var _Footer = require("./Footer");

Object.keys(_Footer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Footer[key];
    }
  });
});

var _LoadingIndicator = require("./LoadingIndicator");

Object.keys(_LoadingIndicator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LoadingIndicator[key];
    }
  });
});

var _Navbar = require("./Navbar");

Object.keys(_Navbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Navbar[key];
    }
  });
});

var _NewPostNavLink = require("./NewPostNavLink");

Object.keys(_NewPostNavLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _NewPostNavLink[key];
    }
  });
});
},{"./Errors":"jicf","./FollowUserButton":"UV5u","./Footer":"OLp4","./LoadingIndicator":"BZOY","./Navbar":"duUx","./NewPostNavLink":"oXgt"}],"BBjb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = Banner;

var _crank = require("@bikeshaving/crank");

/** @jsx createElement */
function Banner() {
  return (0, _crank.createElement)("div", {
    class: "banner"
  }, (0, _crank.createElement)("div", {
    class: "container"
  }, (0, _crank.createElement)("h1", {
    class: "logo-font"
  }, "conduit"), (0, _crank.createElement)("p", null, "A place to share your knowledge.")));
}
},{"@bikeshaving/crank":"k82I"}],"A2is":[function(require,module,exports) {
'use strict';

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => "%".concat(x.charCodeAt(0).toString(16).toUpperCase()));
},{}],"pWxZ":[function(require,module,exports) {
'use strict';

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {// Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1; // Split the array in 2 parts

  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);

    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': '\uFFFD\uFFFD',
    '%FF%FE': '\uFFFD\uFFFD'
  };
  var match = multiMatcher.exec(input);

  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


  replaceMap['%C2'] = '\uFFFD';
  var entries = Object.keys(replaceMap);

  for (var i = 0; i < entries.length; i++) {
    // Replace all decoded components
    var key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

module.exports = function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
};
},{}],"t7Jq":[function(require,module,exports) {
'use strict';

module.exports = function (string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (separator === '') {
    return [string];
  }

  var separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [string];
  }

  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};
},{}],"FvpG":[function(require,module,exports) {
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var strictUriEncode = require('strict-uri-encode');

var decodeComponent = require('decode-uri-component');

var splitOnFirst = require('split-on-first');

var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return function (key) {
        return function (result, value) {
          var index = result.length;

          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
        };
      };

    case 'bracket':
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
      return function (key) {
        return function (result, value) {
          if (value === null || value === undefined || value.length === 0) {
            return result;
          }

          if (result.length === 0) {
            return [[encode(key, options), '=', encode(value, options)].join('')];
          }

          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      };

    default:
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [encode(key, options)]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
        };
      };
  }
}

function parserForArrayFormat(options) {
  var result;

  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
    case 'separator':
      return function (key, value, accumulator) {
        var isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
        var newValue = isArray ? value.split(options.arrayFormatSeparator).map(function (item) {
          return decode(item, options);
        }) : value === null ? value : decode(value, options);
        accumulator[key] = newValue;
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (_typeof(input) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

function removeHash(input) {
  var hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  var hash = '';
  var hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

function extract(input) {
  input = removeHash(input);
  var queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(input, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var formatter = parserForArrayFormat(options); // Create an object with no prototype

  var ret = Object.create(null);

  if (typeof input !== 'string') {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return ret;
  }

  for (var param of input.split('&')) {
    var [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='); // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
    formatter(decode(key, options), value, ret);
  }

  for (var _key of Object.keys(ret)) {
    var _value = ret[_key];

    if (_typeof(_value) === 'object' && _value !== null) {
      for (var k of Object.keys(_value)) {
        _value[k] = parseValue(_value[k], options);
      }
    } else {
      ret[_key] = parseValue(_value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
    var value = ret[key];

    if (Boolean(value) && _typeof(value) === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (object, options) {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);

  var shouldFilter = function (key) {
    return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  };

  var formatter = encoderForArrayFormat(options);
  var objectCopy = {};

  for (var key of Object.keys(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  var keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(function (key) {
    var value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
};

exports.parseUrl = function (input, options) {
  return {
    url: removeHash(input).split('?')[0] || '',
    query: parse(extract(input), options)
  };
};

exports.stringifyUrl = function (input, options) {
  var url = removeHash(input.url).split('?')[0] || '';
  var queryFromUrl = exports.extract(input.url);
  var parsedQueryFromUrl = exports.parse(queryFromUrl);
  var hash = getHash(input.url);
  var query = Object.assign(parsedQueryFromUrl, input.query);
  var queryString = exports.stringify(query, options);

  if (queryString) {
    queryString = "?".concat(queryString);
  }

  return "".concat(url).concat(queryString).concat(hash);
};
},{"strict-uri-encode":"A2is","decode-uri-component":"pWxZ","split-on-first":"t7Jq"}],"ubNH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPageContext = exports.getQueryParams = exports.getPageContext = exports.unwatchPageContext = exports.watchPageContext = void 0;

var _utils = require("../utils");

var qs = _interopRequireWildcard(require("query-string"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialState = {
  context: null,
  queryParams: {}
};

var _a = (0, _utils.createState)(initialState),
    watch = _a.watch,
    unwatch = _a.unwatch,
    get = _a.get,
    set = _a.set;

var watchPageContext = watch;
exports.watchPageContext = watchPageContext;
var unwatchPageContext = unwatch;
exports.unwatchPageContext = unwatchPageContext;

var getPageContext = function getPageContext() {
  var _a;

  return (_a = get()) === null || _a === void 0 ? void 0 : _a.context;
};

exports.getPageContext = getPageContext;

var getQueryParams = function getQueryParams() {
  return get().queryParams;
};

exports.getQueryParams = getQueryParams;

var setPageContext = function setPageContext(context) {
  return set(function (state) {
    state.context = context;
    state.queryParams = qs.parse(context.querystring);
  });
};

exports.setPageContext = setPageContext;
},{"../utils":"s2T4","query-string":"FvpG"}],"MYZF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteButton = FavoriteButton;

var _crank = require("@bikeshaving/crank");

var _eventService = require("../../services/eventService");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function FavoriteButton(_a) {
  var handleFavorite, handleUnfavorite, _b, _c, e_1_1;

  var e_1, _d, _e;

  var _this = this;

  var slug = _a.slug,
      favoritesCount = _a.favoritesCount,
      favorited = _a.favorited;
  return __generator(this, function (_f) {
    switch (_f.label) {
      case 0:
        handleFavorite = function handleFavorite(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.favoritePostEvent)({
            slug: slug
          }));
        };

        handleUnfavorite = function handleUnfavorite(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.unfavoritePostEvent)({
            slug: slug
          }));
        };

        _f.label = 1;

      case 1:
        _f.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _f.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        _e = _c.value, favorited = _e.favorited, favoritesCount = _e.favoritesCount;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, favorited && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm pull-xs-right btn-primary",
          onclick: handleUnfavorite
        }, (0, _crank.createElement)("i", {
          class: "ion-heart"
        }), " ", favoritesCount), !favorited && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm pull-xs-right btn-outline-primary",
          onclick: handleFavorite
        }, (0, _crank.createElement)("i", {
          class: "ion-heart"
        }), " ", favoritesCount))];

      case 3:
        _f.sent();

        _f.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _f.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../services/eventService":"fkvO"}],"KAtv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfavoritePost = exports.favoritePost = void 0;

var _userState = require("../state/userState");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var favoritePost = function favoritePost(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug + "/favorite", {
            method: 'POST',
            mode: 'cors',
            headers: {
              Authorization: "Token " + user.token
            }
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.favoritePost = favoritePost;

var unfavoritePost = function unfavoritePost(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug + "/favorite", {
            method: 'DELETE',
            mode: 'cors',
            headers: {
              Authorization: "Token " + user.token
            }
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.unfavoritePost = unfavoritePost;
},{"../state/userState":"qsQo"}],"N6mc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleList = ArticleList;

var _crank = require("@bikeshaving/crank");

var _FavoriteButton = require("../screens/home/FavoriteButton");

var _eventService = require("../services/eventService");

var _favoriteService = require("../services/favoriteService");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


function ArticleList(_a) {
  var articlesProp = _a.articles;
  return __asyncGenerator(this, arguments, function ArticleList_1() {
    var articles, _a, _b, e_1_1;

    var _this = this;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          articles = articlesProp;
          this.addEventListener.apply(this, __spread((0, _eventService.favoritePostListener)(function (detail) {
            (0, _favoriteService.favoritePost)(detail);
            var article = articles.find(function (a) {
              return a.slug === detail.slug;
            });
            article.favorited = true;
            article.favoritesCount++;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.unfavoritePostListener)(function (detail) {
            (0, _favoriteService.unfavoritePost)(detail);
            var article = articles.find(function (a) {
              return a.slug === detail.slug;
            });
            article.favorited = false;
            article.favoritesCount--;

            _this.refresh();
          })));
          _d.label = 1;

        case 1:
          _d.trys.push([1, 8, 9, 14]);

          _a = __asyncValues(this);
          _d.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 3:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 7];
          articlesProp = _b.value.articles;

          if (articles !== articlesProp) {
            articles = articlesProp;
          }

          return [4
          /*yield*/
          , __await(articles.map(function (article) {
            return (0, _crank.createElement)("div", {
              class: "article-preview",
              "crank-key": article.slug
            }, (0, _crank.createElement)("div", {
              class: "article-meta"
            }, (0, _crank.createElement)("a", {
              href: "/profile/" + article.author.username
            }, (0, _crank.createElement)("img", {
              src: article.author.image
            })), (0, _crank.createElement)("div", {
              class: "info"
            }, (0, _crank.createElement)("a", {
              href: "/profile/" + article.author.username,
              class: "author"
            }, article.author.username), (0, _crank.createElement)("span", {
              class: "date",
              title: article.createdAt
            }, new Date(article.createdAt).toDateString())), (0, _crank.createElement)(_FavoriteButton.FavoriteButton, {
              slug: article.slug,
              favoritesCount: article.favoritesCount,
              favorited: article.favorited
            })), (0, _crank.createElement)("a", {
              href: "/article/" + article.slug,
              class: "preview-link"
            }, (0, _crank.createElement)("h1", null, article.title), (0, _crank.createElement)("p", null, article.description), (0, _crank.createElement)("span", null, "Read more..."), (0, _crank.createElement)("ul", {
              class: "tag-list"
            }, article.tagList.map(function (tag) {
              return (0, _crank.createElement)("li", {
                class: "tag-default tag-pill tag-outline",
                "crank-key": tag
              }, tag);
            }))));
          }))];

        case 4:
          return [4
          /*yield*/
          , _d.sent()];

        case 5:
          _d.sent();

          _d.label = 6;

        case 6:
          return [3
          /*break*/
          , 2];

        case 7:
          return [3
          /*break*/
          , 14];

        case 8:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 14];

        case 9:
          _d.trys.push([9,, 12, 13]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 11];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 10:
          _d.sent();

          _d.label = 11;

        case 11:
          return [3
          /*break*/
          , 13];

        case 12:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 13:
          return [7
          /*endfinally*/
          ];

        case 14:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../screens/home/FavoriteButton":"MYZF","../services/eventService":"fkvO","../services/favoriteService":"KAtv"}],"v5Vp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleFeed = ArticleFeed;

var _crank = require("@bikeshaving/crank");

var _classnames = _interopRequireDefault(require("classnames"));

var _eventService = require("../services/eventService");

var _pageContextState = require("../state/pageContextState");

var _ArticleList = require("./ArticleList");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


var getOffset = function getOffset() {
  return +(0, _pageContextState.getQueryParams)().offset || 0;
};

var getLimit = function getLimit() {
  return +(0, _pageContextState.getQueryParams)().limit || 10;
};

var getTag = function getTag() {
  return (0, _pageContextState.getQueryParams)().tag || undefined;
};

function ArticleFeed(_a) {
  var handlePrev, handleNext, _b, _c, e_1_1;

  var e_1, _d, _e;

  var _this = this;

  var articles = _a.articles,
      prevDisabled = _a.prevDisabled,
      nextDisabled = _a.nextDisabled;
  return __generator(this, function (_f) {
    switch (_f.label) {
      case 0:
        handlePrev = function handlePrev(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.prevPageEvent)());
        };

        handleNext = function handleNext(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.nextPageEvent)());
        };

        _f.label = 1;

      case 1:
        _f.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _f.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        _e = _c.value, articles = _e.articles, prevDisabled = _e.prevDisabled, nextDisabled = _e.nextDisabled;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, articles.length === 0 && (0, _crank.createElement)("div", {
          class: "article-preview"
        }, (0, _crank.createElement)("em", null, "None found.")), articles.length > 0 && (0, _crank.createElement)(_ArticleList.ArticleList, {
          articles: articles
        }), (0, _crank.createElement)("ul", {
          class: "pagination"
        }, (0, _crank.createElement)("li", {
          class: (0, _classnames.default)('page-item', {
            disabled: prevDisabled
          })
        }, (0, _crank.createElement)("a", {
          class: "page-link",
          href: "",
          onclick: handlePrev
        }, "Previous")), (0, _crank.createElement)("li", {
          class: (0, _classnames.default)('page-item', {
            disabled: nextDisabled
          })
        }, (0, _crank.createElement)("a", {
          class: "page-link",
          href: "",
          onclick: handleNext
        }, "Next"))))];

      case 3:
        _f.sent();

        _f.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _f.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","classnames":"qb7c","../services/eventService":"fkvO","../state/pageContextState":"ubNH","./ArticleList":"N6mc"}],"n69M":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeedArticles = void 0;

var qs = _interopRequireWildcard(require("query-string"));

var _userState = require("../state/userState");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

/**
 * get feed articles.
 * "your feed" has an additional url fragment, so need special handling for that.
 */
var getFeedArticles = function getFeedArticles(req, yourFeed) {
  if (yourFeed === void 0) {
    yourFeed = false;
  }

  return __awaiter(void 0, void 0, Promise, function () {
    var headers, user, params, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          headers = {};

          if ((0, _userState.isLoggedIn)()) {
            user = (0, _userState.getUser)();
            headers = {
              Authorization: "Token " + user.token
            };
          }

          params = qs.stringify(req);
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles" + (yourFeed ? '/feed' : '') + "?" + params, {
            method: 'GET',
            mode: 'cors',
            headers: headers
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.getFeedArticles = getFeedArticles;
},{"query-string":"FvpG","../state/userState":"qsQo"}],"MbzM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeFeedContent = HomeFeedContent;

var _crank = require("@bikeshaving/crank");

var _page = _interopRequireDefault(require("page"));

var qs = _interopRequireWildcard(require("query-string"));

var _components = require("../../components");

var _ArticleFeed = require("../../components/ArticleFeed");

var _eventService = require("../../services/eventService");

var _feedService = require("../../services/feedService");

var _pageContextState = require("../../state/pageContextState");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


function HomeFeedContent(_a) {
  var _b, _c;

  return __asyncGenerator(this, arguments, function HomeFeedContent_1() {
    var _a, _b, feed, _c, tag, _d, limit, _e, offset, limitParam, offsetParam, _f, _g, resp, articles, articlesCount, prevDisabled, nextDisabled, e_1_1;

    var e_1, _h;

    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = (0, _pageContextState.getQueryParams)(), _b = _a.feed, feed = _b === void 0 ? 'global' : _b, _c = _a.tag, tag = _c === void 0 ? '' : _c, _d = _a.limit, limit = _d === void 0 ? '10' : _d, _e = _a.offset, offset = _e === void 0 ? '0' : _e;
          limitParam = +limit;
          offsetParam = +offset;
          (0, _pageContextState.watchPageContext)(function () {
            var _a, _b, _c, _d, _e;

            _a = (0, _pageContextState.getQueryParams)(), _b = _a.feed, feed = _b === void 0 ? 'global' : _b, _c = _a.tag, tag = _c === void 0 ? '' : _c, _d = _a.limit, limit = _d === void 0 ? '10' : _d, _e = _a.offset, offset = _e === void 0 ? '0' : _e;
            limitParam = +limit;
            offsetParam = +offset; // don't need to call this.refresh()
          });
          this.addEventListener.apply(this, __spread((0, _eventService.prevPageListener)(function () {
            offsetParam = Math.max(0, offsetParam -= limitParam);
            var pathname = (0, _pageContextState.getPageContext)().pathname;

            var qp = __assign(__assign({}, (0, _pageContextState.getQueryParams)()), {
              offset: offsetParam
            });

            (0, _page.default)(pathname + "?" + qs.stringify(qp));
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.nextPageListener)(function () {
            offsetParam += limitParam;
            var pathname = (0, _pageContextState.getPageContext)().pathname;

            var qp = __assign(__assign({}, (0, _pageContextState.getQueryParams)()), {
              offset: offsetParam
            });

            (0, _page.default)(pathname + "?" + qs.stringify(qp));
          })));
          _j.label = 1;

        case 1:
          _j.trys.push([1, 11, 12, 17]);

          _f = __asyncValues(this);
          _j.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_f.next())];

        case 3:
          if (!(_g = _j.sent(), !_g.done)) return [3
          /*break*/
          , 10];
          _g.value;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:50px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null)))];

        case 4:
          return [4
          /*yield*/
          , _j.sent()];

        case 5:
          _j.sent();

          return [4
          /*yield*/
          , __await((0, _feedService.getFeedArticles)({
            tag: tag,
            limit: limitParam,
            offset: offsetParam
          }, feed === 'your'))];

        case 6:
          resp = _j.sent();

          if (resp.hasErrors) {
            throw new Error('Error getting feed.');
          }

          articles = (_b = resp.response) === null || _b === void 0 ? void 0 : _b.articles;
          articlesCount = (_c = resp.response) === null || _c === void 0 ? void 0 : _c.articlesCount;
          prevDisabled = offsetParam === 0;
          nextDisabled = offsetParam + limitParam >= articlesCount;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)(_crank.Fragment, null, !tag && feed === 'your' && (0, _crank.createElement)(_ArticleFeed.ArticleFeed, __assign({}, {
            articles: articles,
            prevDisabled: prevDisabled,
            nextDisabled: nextDisabled
          })), !tag && feed === 'global' && (0, _crank.createElement)(_ArticleFeed.ArticleFeed, __assign({}, {
            articles: articles,
            prevDisabled: prevDisabled,
            nextDisabled: nextDisabled
          })), tag && (0, _crank.createElement)(_ArticleFeed.ArticleFeed, __assign({}, {
            articles: articles,
            prevDisabled: prevDisabled,
            nextDisabled: nextDisabled
          }))))];

        case 7:
          return [4
          /*yield*/
          , _j.sent()];

        case 8:
          _j.sent();

          _j.label = 9;

        case 9:
          return [3
          /*break*/
          , 2];

        case 10:
          return [3
          /*break*/
          , 17];

        case 11:
          e_1_1 = _j.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 17];

        case 12:
          _j.trys.push([12,, 15, 16]);

          if (!(_g && !_g.done && (_h = _f.return))) return [3
          /*break*/
          , 14];
          return [4
          /*yield*/
          , __await(_h.call(_f))];

        case 13:
          _j.sent();

          _j.label = 14;

        case 14:
          return [3
          /*break*/
          , 16];

        case 15:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 16:
          return [7
          /*endfinally*/
          ];

        case 17:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","page":"bUEv","query-string":"FvpG","../../components":"iVTS","../../components/ArticleFeed":"v5Vp","../../services/eventService":"fkvO","../../services/feedService":"n69M","../../state/pageContextState":"ubNH"}],"NQ9r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeFeeds = HomeFeeds;

var _crank = require("@bikeshaving/crank");

var _classnames = _interopRequireDefault(require("classnames"));

var _pageContextState = require("../../state/pageContextState");

var _userState = require("../../state/userState");

var _HomeFeedContent = require("./HomeFeedContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function HomeFeeds(_a) {
  var _b, _c, feed, _d, tag, _e, _f, e_1_1;

  var e_1, _g;

  return __generator(this, function (_h) {
    switch (_h.label) {
      case 0:
        _b = (0, _pageContextState.getQueryParams)(), _c = _b.feed, feed = _c === void 0 ? 'global' : _c, _d = _b.tag, tag = _d === void 0 ? '' : _d;
        (0, _pageContextState.watchPageContext)(function () {
          var _a, _b, _c;

          _a = (0, _pageContextState.getQueryParams)(), _b = _a.feed, feed = _b === void 0 ? 'global' : _b, _c = _a.tag, tag = _c === void 0 ? '' : _c; // don't need to call this.refresh() here
        });
        _h.label = 1;

      case 1:
        _h.trys.push([1, 6, 7, 8]);

        _e = __values(this), _f = _e.next();
        _h.label = 2;

      case 2:
        if (!!_f.done) return [3
        /*break*/
        , 5];
        _f.value;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)("div", {
          class: "feed-toggle"
        }, (0, _crank.createElement)("ul", {
          class: "nav nav-pills outline-active"
        }, (0, _userState.isLoggedIn)() && (0, _crank.createElement)("li", {
          class: "nav-item"
        }, (0, _crank.createElement)("a", {
          class: (0, _classnames.default)('nav-link', {
            active: feed === 'your'
          }),
          href: "/?feed=your"
        }, "Your Feed")), (0, _crank.createElement)("li", {
          class: "nav-item"
        }, (0, _crank.createElement)("a", {
          class: (0, _classnames.default)('nav-link', {
            active: !tag && feed === 'global'
          }),
          href: "/?feed=global"
        }, "Global Feed")), tag && (0, _crank.createElement)("li", {
          class: "nav-item"
        }, (0, _crank.createElement)("a", {
          class: "nav-link active",
          href: "/?tag=" + tag,
          onclick: function onclick(event) {
            return event.preventDefault();
          }
        }, "#", tag)))), (0, _crank.createElement)(_HomeFeedContent.HomeFeedContent, null))];

      case 3:
        _h.sent();

        _h.label = 4;

      case 4:
        _f = _e.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _h.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_f && !_f.done && (_g = _e.return)) _g.call(_e);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","classnames":"qb7c","../../state/pageContextState":"ubNH","../../state/userState":"qsQo","./HomeFeedContent":"MbzM"}],"GW5Q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popularTags = void 0;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var popularTags = function popularTags() {
  return __awaiter(void 0, void 0, Promise, function () {
    var resp, respJson;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch('https://conduit.productionready.io/api/tags', {
            method: 'GET',
            mode: 'cors'
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respJson = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respJson
          }];
      }
    });
  });
};

exports.popularTags = popularTags;
},{}],"XafL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = Sidebar;

var _crank = require("@bikeshaving/crank");

var _tagService = require("../../services/tagService");

var _components = require("../../components");

var _pageContextState = require("../../state/pageContextState");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function Sidebar(_a) {
  var _b;

  return __asyncGenerator(this, arguments, function Sidebar_1() {
    var selectedTag, resp, _a, _b, e_1_1;

    var _this = this;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          selectedTag = (0, _pageContextState.getQueryParams)().tag;
          (0, _pageContextState.watchPageContext)(function () {
            selectedTag = (0, _pageContextState.getQueryParams)().tag;

            _this.refresh();
          });
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            class: "sidebar"
          }, (0, _crank.createElement)("p", null, "Popular Tags"), (0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:20px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null))))];

        case 1:
          return [4
          /*yield*/
          , _d.sent()];

        case 2:
          _d.sent();

          return [4
          /*yield*/
          , __await((0, _tagService.popularTags)())];

        case 3:
          resp = _d.sent();

          if (resp.hasErrors) {
            throw new Error('Error getting popular tags.');
          }

          _d.label = 4;

        case 4:
          _d.trys.push([4, 11, 12, 17]);

          _a = __asyncValues(this);
          _d.label = 5;

        case 5:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 6:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 10];
          _b.value;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            class: "sidebar"
          }, (0, _crank.createElement)("p", null, "Popular Tags"), (0, _crank.createElement)("div", {
            class: "tag-list"
          }, (_b = resp.response) === null || _b === void 0 ? void 0 : _b.tags.map(function (t) {
            return (0, _crank.createElement)("a", {
              href: "/?tag=" + t,
              class: (0, _classnames.default)('tag-pill', 'tag-default', {
                'tag-primary': t === selectedTag
              })
            }, t);
          }))))];

        case 7:
          return [4
          /*yield*/
          , _d.sent()];

        case 8:
          _d.sent();

          _d.label = 9;

        case 9:
          return [3
          /*break*/
          , 5];

        case 10:
          return [3
          /*break*/
          , 17];

        case 11:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 17];

        case 12:
          _d.trys.push([12,, 15, 16]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 14];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 13:
          _d.sent();

          _d.label = 14;

        case 14:
          return [3
          /*break*/
          , 16];

        case 15:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 16:
          return [7
          /*endfinally*/
          ];

        case 17:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../services/tagService":"GW5Q","../../components":"iVTS","../../state/pageContextState":"ubNH","classnames":"qb7c"}],"ixE3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeScreen = HomeScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _Banner = require("./Banner");

var _HomeFeeds = require("./HomeFeeds");

var _Sidebar = require("./Sidebar");

/** @jsx createElement */
function HomeScreen() {
  return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
    active: "home"
  }), (0, _crank.createElement)("div", {
    class: "home-page"
  }, (0, _crank.createElement)(_Banner.Banner, null), (0, _crank.createElement)("div", {
    class: "container page"
  }, (0, _crank.createElement)("div", {
    class: "row"
  }, (0, _crank.createElement)("div", {
    class: "col-md-9"
  }, (0, _crank.createElement)(_HomeFeeds.HomeFeeds, null)), (0, _crank.createElement)("div", {
    class: "col-md-3"
  }, (0, _crank.createElement)(_Sidebar.Sidebar, null))))), (0, _crank.createElement)(_components.Footer, null));
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./Banner":"BBjb","./HomeFeeds":"NQ9r","./Sidebar":"XafL"}],"mRs3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeScreen = require("./HomeScreen");

Object.keys(_HomeScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HomeScreen[key];
    }
  });
});
},{"./HomeScreen":"ixE3"}],"V8SH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSettings = exports.logout = exports.login = exports.register = void 0;

var _userState = require("../state/userState");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var register = function register(info) {
  return __awaiter(void 0, void 0, Promise, function () {
    var resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch('https://conduit.productionready.io/api/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: info
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.register = register;

var login = function login(info) {
  return __awaiter(void 0, void 0, Promise, function () {
    var resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch('https://conduit.productionready.io/api/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: info
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};
/**
 * logout a user
 */


exports.login = login;

var logout = function logout() {
  (0, _userState.setUser)(null);
};

exports.logout = logout;

var updateSettings = function updateSettings(info) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();

          if (!info.password) {
            delete info['password'];
          }

          return [4
          /*yield*/
          , fetch('https://conduit.productionready.io/api/user', {
            method: 'PUT',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Token " + user.token
            },
            body: JSON.stringify({
              user: info
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.updateSettings = updateSettings;
},{"../state/userState":"qsQo"}],"da6d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegistrationForm = RegistrationForm;

var _crank = require("@bikeshaving/crank");

var _userService = require("../../services/userService");

var _components = require("../../components");

var _page = _interopRequireDefault(require("page"));

var _userState = require("../../state/userState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/** @jsx createElement */


function RegistrationForm() {
  var loading, _a, hasErrors, response, handleSubmit;

  var _this = this;

  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        loading = false;
        _a = {
          hasErrors: false,
          response: {}
        }, hasErrors = _a.hasErrors, response = _a.response;

        handleSubmit = function handleSubmit(event) {
          event.preventDefault();

          (function () {
            return __awaiter(_this, void 0, void 0, function () {
              var formData, resp;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    loading = true;
                    hasErrors = false;
                    response = {};
                    this.refresh();
                    formData = new FormData(event.target);
                    return [4
                    /*yield*/
                    , (0, _userService.register)({
                      username: formData.get('username'),
                      email: formData.get('email'),
                      password: formData.get('password')
                    })];

                  case 1:
                    resp = _a.sent();
                    hasErrors = resp.hasErrors;
                    response = resp.response;

                    if (hasErrors) {
                      loading = false;
                      this.refresh();
                    } else {
                      (0, _userState.setUser)(response.user);
                      (0, _page.default)('/');
                    }

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          })();
        };

        _b.label = 1;

      case 1:
        if (!true) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "auth-page"
        }, (0, _crank.createElement)("div", {
          class: "container page"
        }, (0, _crank.createElement)("div", {
          class: "row"
        }, (0, _crank.createElement)("div", {
          class: "col-md-6 offset-md-3 col-xs-12"
        }, (0, _crank.createElement)("h1", {
          class: "text-xs-center"
        }, "Sign up"), (0, _crank.createElement)("p", {
          class: "text-xs-center"
        }, (0, _crank.createElement)("a", {
          href: "/login"
        }, "Have an account?")), hasErrors && (0, _crank.createElement)(_components.Errors, {
          errors: response.errors
        }), (0, _crank.createElement)("form", {
          onsubmit: handleSubmit
        }, (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "text",
          name: "username",
          placeholder: "Your Name"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "email",
          name: "email",
          placeholder: "Email"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "password",
          name: "password",
          placeholder: "Password"
        })), (0, _crank.createElement)("button", {
          class: "btn btn-lg btn-primary pull-xs-right",
          disabled: loading
        }, "Sign up"))))))];

      case 2:
        _b.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../services/userService":"V8SH","../../components":"iVTS","page":"bUEv","../../state/userState":"qsQo"}],"VuvE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterScreen = RegisterScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _RegistrationForm = require("./RegistrationForm");

/** @jsx createElement */
function RegisterScreen() {
  return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
    active: "register"
  }), (0, _crank.createElement)(_RegistrationForm.RegistrationForm, null), (0, _crank.createElement)(_components.Footer, null));
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./RegistrationForm":"da6d"}],"lBz8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RegisterScreen = require("./RegisterScreen");

Object.keys(_RegisterScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RegisterScreen[key];
    }
  });
});
},{"./RegisterScreen":"VuvE"}],"J7c1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = LoginForm;

var _crank = require("@bikeshaving/crank");

var _userService = require("../../services/userService");

var _components = require("../../components");

var _userState = require("../../state/userState");

var _page = _interopRequireDefault(require("page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/** @jsx createElement */


function LoginForm() {
  var loading, _a, hasErrors, response, handleSubmit;

  var _this = this;

  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        loading = false;
        _a = {
          hasErrors: false,
          response: {}
        }, hasErrors = _a.hasErrors, response = _a.response;

        handleSubmit = function handleSubmit(event) {
          event.preventDefault();

          (function () {
            return __awaiter(_this, void 0, void 0, function () {
              var formData, resp;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    loading = true;
                    hasErrors = false;
                    response = {};
                    this.refresh();
                    formData = new FormData(event.target);
                    return [4
                    /*yield*/
                    , (0, _userService.login)({
                      email: formData.get('email'),
                      password: formData.get('password')
                    })];

                  case 1:
                    resp = _a.sent();
                    hasErrors = resp.hasErrors;
                    response = resp.response;

                    if (hasErrors) {
                      loading = false;
                      this.refresh();
                    } else {
                      (0, _userState.setUser)(response.user);
                      (0, _page.default)('/');
                    }

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          })();
        };

        _b.label = 1;

      case 1:
        if (!true) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "auth-page"
        }, (0, _crank.createElement)("div", {
          class: "container page"
        }, (0, _crank.createElement)("div", {
          class: "row"
        }, (0, _crank.createElement)("div", {
          class: "col-md-6 offset-md-3 col-xs-12"
        }, (0, _crank.createElement)("h1", {
          class: "text-xs-center"
        }, "Sign in"), (0, _crank.createElement)("p", {
          class: "text-xs-center"
        }, (0, _crank.createElement)("a", {
          href: "/register"
        }, "Need an account?")), hasErrors && (0, _crank.createElement)(_components.Errors, {
          errors: response.errors
        }), (0, _crank.createElement)("form", {
          onsubmit: handleSubmit
        }, (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "email",
          name: "email",
          placeholder: "Email"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "password",
          name: "password",
          placeholder: "Password"
        })), (0, _crank.createElement)("button", {
          class: "btn btn-lg btn-primary pull-xs-right",
          disabled: loading
        }, "Sign in"))))))];

      case 2:
        _b.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../services/userService":"V8SH","../../components":"iVTS","../../state/userState":"qsQo","page":"bUEv"}],"IF1A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginScreen = LoginScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _LoginForm = require("./LoginForm");

/** @jsx createElement */
function LoginScreen() {
  return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
    active: "login"
  }), (0, _crank.createElement)(_LoginForm.LoginForm, null), (0, _crank.createElement)(_components.Footer, null));
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./LoginForm":"J7c1"}],"L1xL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginScreen = require("./LoginScreen");

Object.keys(_LoginScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LoginScreen[key];
    }
  });
});
},{"./LoginScreen":"IF1A"}],"X6Ui":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsForm = SettingsForm;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _userState = require("../../state/userState");

var _userService = require("../../services/userService");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/** @jsx createElement */


function SettingsForm() {
  var user, loading, hasErrors, response, handleSubmit;

  var _this = this;

  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        user = (0, _userState.getUser)();
        loading = false;
        hasErrors = false;

        handleSubmit = function handleSubmit(event) {
          event.preventDefault();

          (function () {
            return __awaiter(_this, void 0, void 0, function () {
              var formData, resp;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    loading = true;
                    hasErrors = false;
                    response = undefined;
                    this.refresh();
                    formData = new FormData(event.target);
                    return [4
                    /*yield*/
                    , (0, _userService.updateSettings)({
                      image: formData.get('image'),
                      username: formData.get('username'),
                      bio: formData.get('bio'),
                      email: formData.get('email'),
                      password: formData.get('password')
                    })];

                  case 1:
                    resp = _a.sent();
                    loading = false;
                    hasErrors = resp.hasErrors;
                    response = resp.response;

                    if (!hasErrors) {
                      (0, _userState.setUser)(response.user);
                    }

                    this.refresh();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          })();
        };

        _a.label = 1;

      case 1:
        if (!true) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "settings-page"
        }, (0, _crank.createElement)("div", {
          class: "container page"
        }, (0, _crank.createElement)("div", {
          class: "row"
        }, (0, _crank.createElement)("div", {
          class: "col-md-6 offset-md-3 col-xs-12"
        }, (0, _crank.createElement)("h1", {
          class: "text-xs-center"
        }, "Your Settings"), !hasErrors && response && (0, _crank.createElement)("div", {
          class: "alert alert-success"
        }, "Settings saved."), hasErrors && response && (0, _crank.createElement)(_components.Errors, {
          errors: response.errors
        }), (0, _crank.createElement)("form", {
          onsubmit: handleSubmit
        }, (0, _crank.createElement)("fieldset", null, (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control",
          type: "text",
          name: "image",
          defaultValue: user.image,
          placeholder: "URL of profile picture"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "text",
          name: "username",
          defaultValue: user.username,
          placeholder: "Your Name"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("textarea", {
          class: "form-control form-control-lg",
          rows: "8",
          name: "bio",
          defaultValue: user.bio,
          placeholder: "Short bio about you"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "text",
          name: "email",
          defaultValue: user.email,
          placeholder: "Email"
        })), (0, _crank.createElement)("fieldset", {
          class: "form-group"
        }, (0, _crank.createElement)("input", {
          class: "form-control form-control-lg",
          type: "password",
          name: "password",
          placeholder: "Password"
        })), (0, _crank.createElement)("button", {
          class: "btn btn-lg btn-primary pull-xs-right",
          disabled: loading
        }, "Update Settings")))))))];

      case 2:
        _a.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","../../state/userState":"qsQo","../../services/userService":"V8SH"}],"E0iq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsScreen = SettingsScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _SettingsForm = require("./SettingsForm");

/** @jsx createElement */
function SettingsScreen() {
  return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
    active: "settings"
  }), (0, _crank.createElement)(_SettingsForm.SettingsForm, null), (0, _crank.createElement)(_components.Footer, null));
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./SettingsForm":"X6Ui"}],"yZmL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SettingsScreen = require("./SettingsScreen");

Object.keys(_SettingsScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SettingsScreen[key];
    }
  });
});
},{"./SettingsScreen":"E0iq"}],"GatF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editArticle = exports.deleteArticle = exports.getArticle = exports.publish = void 0;

var _userState = require("../state/userState");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var publish = function publish(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respJson;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch('https://conduit.productionready.io/api/articles', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Token " + user.token
            },
            body: JSON.stringify({
              article: req
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respJson = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respJson
          }];
      }
    });
  });
};

exports.publish = publish;

var getArticle = function getArticle(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var headers, user, resp, respJson;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          headers = {};

          if ((0, _userState.isLoggedIn)()) {
            user = (0, _userState.getUser)();
            headers = {
              Authorization: "Token " + user.token
            };
          }

          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug, {
            method: 'GET',
            mode: 'cors',
            headers: headers
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respJson = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respJson
          }];
      }
    });
  });
};

exports.getArticle = getArticle;

var deleteArticle = function deleteArticle(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var headers, user, resp, respJson;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          headers = {};

          if ((0, _userState.isLoggedIn)()) {
            user = (0, _userState.getUser)();
            headers = {
              Authorization: "Token " + user.token
            };
          }

          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug, {
            method: 'DELETE',
            mode: 'cors',
            headers: headers
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respJson = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respJson
          }];
      }
    });
  });
};

exports.deleteArticle = deleteArticle;

var editArticle = function editArticle(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, slug, resp, respJson;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          slug = req.slug;
          delete req.slug;
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + slug, {
            method: 'PUT',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Token " + user.token
            },
            body: JSON.stringify({
              article: req
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respJson = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respJson
          }];
      }
    });
  });
};

exports.editArticle = editArticle;
},{"../state/userState":"qsQo"}],"k4nx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateArticleScreen = CreateArticleScreen;

var _crank = require("@bikeshaving/crank");

var _articleService = require("../../services/articleService");

var _components = require("../../components");

var _eventService = require("../../services/eventService");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function CreateArticleScreen(_a) {
  var hide = _a.hide;
  return __asyncGenerator(this, arguments, function CreateArticleScreen_1() {
    var loading, hasErrors, response, handleSubmit, _a, _b, e_1_1;

    var _this = this;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          loading = false;
          hasErrors = false;

          handleSubmit = function handleSubmit(event) {
            return __awaiter(_this, void 0, void 0, function () {
              var formData, resp, article;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    event.preventDefault();
                    loading = true;
                    hasErrors = false;
                    response = undefined;
                    this.refresh();
                    formData = new FormData(event.target);
                    return [4
                    /*yield*/
                    , (0, _articleService.publish)({
                      title: formData.get('title'),
                      description: formData.get('description'),
                      body: formData.get('body'),
                      tagList: formData.get('tags').split(' ')
                    })];

                  case 1:
                    resp = _a.sent();
                    loading = false;
                    hasErrors = resp.hasErrors;
                    response = resp.response;

                    if (!hasErrors) {
                      article = response.article;
                      this.dispatchEvent((0, _eventService.articleCreatedEvent)({
                        article: article
                      }));
                    }

                    this.refresh();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          _d.label = 1;

        case 1:
          _d.trys.push([1, 8, 9, 14]);

          _a = __asyncValues(this);
          _d.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 3:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 7];
          hide = _b.value.hide;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("form", {
            onsubmit: handleSubmit
          }, (0, _crank.createElement)("div", {
            class: "modal",
            style: "display:block; background-color:rgba(0,0,0,0.5);"
          }, (0, _crank.createElement)("div", {
            class: "modal-dialog modal-lg"
          }, (0, _crank.createElement)("div", {
            class: "modal-content"
          }, (0, _crank.createElement)("div", {
            class: "modal-header"
          }, (0, _crank.createElement)("h5", {
            class: "modal-title"
          }, "New Post")), (0, _crank.createElement)("div", {
            class: "modal-body"
          }, (0, _crank.createElement)("div", {
            class: "editor-page"
          }, (0, _crank.createElement)("div", {
            class: "container page"
          }, (0, _crank.createElement)("div", {
            class: "row"
          }, (0, _crank.createElement)("div", {
            class: "col-md-10 offset-md-1 col-xs-12"
          }, hasErrors && response && (0, _crank.createElement)(_components.Errors, {
            errors: response.errors
          }), (0, _crank.createElement)("fieldset", null, (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control form-control-lg",
            name: "title",
            placeholder: "Article Title"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control",
            name: "description",
            placeholder: "What's this article about?"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("textarea", {
            class: "form-control",
            rows: "8",
            name: "body",
            placeholder: "Write your article (in markdown)"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control",
            name: "tags",
            placeholder: "Enter tags"
          }), (0, _crank.createElement)("div", {
            class: "tag-list"
          })))))))), (0, _crank.createElement)("div", {
            class: "modal-footer"
          }, (0, _crank.createElement)("button", {
            type: "button",
            class: "btn btn-secondary",
            style: "margin-right:0.5rem;",
            onclick: hide
          }, "Close"), (0, _crank.createElement)("button", {
            class: "btn btn-primary",
            disabled: loading
          }, "Publish Article")))))))];

        case 4:
          return [4
          /*yield*/
          , _d.sent()];

        case 5:
          _d.sent();

          _d.label = 6;

        case 6:
          return [3
          /*break*/
          , 2];

        case 7:
          return [3
          /*break*/
          , 14];

        case 8:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 14];

        case 9:
          _d.trys.push([9,, 12, 13]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 11];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 10:
          _d.sent();

          _d.label = 11;

        case 11:
          return [3
          /*break*/
          , 13];

        case 12:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 13:
          return [7
          /*endfinally*/
          ];

        case 14:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../services/articleService":"GatF","../../components":"iVTS","../../services/eventService":"fkvO"}],"CYJc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CreateArticleScreen = require("./CreateArticleScreen");

Object.keys(_CreateArticleScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CreateArticleScreen[key];
    }
  });
});
},{"./CreateArticleScreen":"k4nx"}],"nYHZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = require("./home");

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _home[key];
    }
  });
});

var _register = require("./register");

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _register[key];
    }
  });
});

var _login = require("./login");

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _login[key];
    }
  });
});

var _settings = require("./settings");

Object.keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _settings[key];
    }
  });
});

var _createArticle = require("./create-article");

Object.keys(_createArticle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createArticle[key];
    }
  });
});
},{"./home":"mRs3","./register":"lBz8","./login":"L1xL","./settings":"yZmL","./create-article":"CYJc"}],"eAgI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = void 0;

var _userState = require("../state/userState");

/**
 * get a user profile
 */
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var getProfile = function getProfile(_a) {
  var username = _a.username;
  return __awaiter(void 0, void 0, Promise, function () {
    var headers, user, resp, respObj;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          headers = {};

          if ((0, _userState.isLoggedIn)()) {
            user = (0, _userState.getUser)();
            headers = {
              Authorization: "Token " + user.token
            };
          }

          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/profiles/" + username, {
            method: 'GET',
            mode: 'cors',
            headers: headers
          })];

        case 1:
          resp = _b.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _b.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.getProfile = getProfile;
},{"../state/userState":"qsQo"}],"WGRC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileFeedContent = ProfileFeedContent;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _ArticleFeed = require("../../components/ArticleFeed");

var _feedService = require("../../services/feedService");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function ProfileFeedContent(_a) {
  var username = _a.username,
      feed = _a.feed,
      limit = _a.limit,
      offset = _a.offset;

  var _b, _c;

  return __asyncGenerator(this, arguments, function ProfileFeedContent_1() {
    var prevProps, articles, articlesCount, prevDisabled, nextDisabled, _a, _b, propsChanged, resp, _c, e_1_1;

    var _d;

    var e_1, _e;

    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          prevProps = {
            username: username,
            feed: feed,
            limit: limit,
            offset: offset
          };
          articles = null;
          articlesCount = 0;
          prevDisabled = false;
          nextDisabled = false;
          _f.label = 1;

        case 1:
          _f.trys.push([1, 15, 16, 21]);

          _a = __asyncValues(this);
          _f.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 3:
          if (!(_b = _f.sent(), !_b.done)) return [3
          /*break*/
          , 14];
          _d = _b.value, username = _d.username, feed = _d.feed, limit = _d.limit, offset = _d.offset;
          propsChanged = username !== prevProps.username || feed !== prevProps.feed || limit !== prevProps.limit || offset !== prevProps.offset;
          if (!(articles == null || propsChanged)) return [3
          /*break*/
          , 10];
          prevProps = {
            username: username,
            feed: feed,
            limit: limit,
            offset: offset
          };
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:50px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null)))];

        case 4:
          return [4
          /*yield*/
          , _f.sent()];

        case 5:
          _f.sent();

          if (!(feed === 'my')) return [3
          /*break*/
          , 7];
          return [4
          /*yield*/
          , __await((0, _feedService.getFeedArticles)({
            author: username,
            limit: limit,
            offset: offset
          }))];

        case 6:
          _c = _f.sent();
          return [3
          /*break*/
          , 9];

        case 7:
          return [4
          /*yield*/
          , __await((0, _feedService.getFeedArticles)({
            favorited: username,
            limit: limit,
            offset: offset
          }))];

        case 8:
          _c = _f.sent();
          _f.label = 9;

        case 9:
          resp = _c;

          if (resp.hasErrors) {
            throw new Error('Error getting feed.');
          }

          articles = (_b = resp.response) === null || _b === void 0 ? void 0 : _b.articles;
          articlesCount = (_c = resp.response) === null || _c === void 0 ? void 0 : _c.articlesCount;
          prevDisabled = offset === 0;
          nextDisabled = offset + limit >= articlesCount;
          _f.label = 10;

        case 10:
          return [4
          /*yield*/
          , __await((0, _crank.createElement)(_crank.Fragment, null, feed === 'my' && (0, _crank.createElement)(_ArticleFeed.ArticleFeed, __assign({}, {
            articles: articles,
            prevDisabled: prevDisabled,
            nextDisabled: nextDisabled
          })), feed === 'favorited' && (0, _crank.createElement)(_ArticleFeed.ArticleFeed, __assign({}, {
            articles: articles,
            prevDisabled: prevDisabled,
            nextDisabled: nextDisabled
          }))))];

        case 11:
          return [4
          /*yield*/
          , _f.sent()];

        case 12:
          _f.sent();

          _f.label = 13;

        case 13:
          return [3
          /*break*/
          , 2];

        case 14:
          return [3
          /*break*/
          , 21];

        case 15:
          e_1_1 = _f.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 21];

        case 16:
          _f.trys.push([16,, 19, 20]);

          if (!(_b && !_b.done && (_e = _a.return))) return [3
          /*break*/
          , 18];
          return [4
          /*yield*/
          , __await(_e.call(_a))];

        case 17:
          _f.sent();

          _f.label = 18;

        case 18:
          return [3
          /*break*/
          , 20];

        case 19:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 20:
          return [7
          /*endfinally*/
          ];

        case 21:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","../../components/ArticleFeed":"v5Vp","../../services/feedService":"n69M"}],"tt01":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfollowUser = exports.followUser = void 0;

var _userState = require("../state/userState");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var followUser = function followUser(_a) {
  var username = _a.username;
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/profiles/" + username + "/follow", {
            method: 'POST',
            mode: 'cors',
            headers: {
              Authorization: "Token " + user.token
            }
          })];

        case 1:
          resp = _b.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _b.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.followUser = followUser;

var unfollowUser = function unfollowUser(_a) {
  var username = _a.username;
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/profiles/" + username + "/follow", {
            method: 'DELETE',
            mode: 'cors',
            headers: {
              Authorization: "Token " + user.token
            }
          })];

        case 1:
          resp = _b.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _b.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.unfollowUser = unfollowUser;
},{"../state/userState":"qsQo"}],"pGCg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileFeeds = ProfileFeeds;

var _crank = require("@bikeshaving/crank");

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../../components");

var _profileService = require("../../services/profileService");

var _pageContextState = require("../../state/pageContextState");

var _ProfileFeedContent = require("./ProfileFeedContent");

var _eventService = require("../../services/eventService");

var _followService = require("../../services/followService");

var qs = _interopRequireWildcard(require("query-string"));

var _userState = require("../../state/userState");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


var getUsername = function getUsername() {
  return (0, _pageContextState.getPageContext)().params.username;
};

function ProfileFeeds(_a) {
  return __asyncGenerator(this, arguments, function ProfileFeeds_1() {
    var loggedInUser, username, _a, _b, feed, _c, limit, _d, offset, limitParam, offsetParam, profile, _e, _f, resp, e_1_1;

    var _this = this;

    var e_1, _g;

    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          loggedInUser = (0, _userState.getUser)();
          username = getUsername();
          _a = (0, _pageContextState.getQueryParams)(), _b = _a.feed, feed = _b === void 0 ? 'my' : _b, _c = _a.limit, limit = _c === void 0 ? '10' : _c, _d = _a.offset, offset = _d === void 0 ? '0' : _d;
          limitParam = +limit;
          offsetParam = +offset;
          profile = null;
          (0, _pageContextState.watchPageContext)(function () {
            var _a, _b, _c, _d;

            username = getUsername();
            _a = (0, _pageContextState.getQueryParams)(), _b = _a.feed, feed = _b === void 0 ? 'my' : _b, _c = _a.limit, limit = _c === void 0 ? '10' : _c, _d = _a.offset, offset = _d === void 0 ? '0' : _d;
            limitParam = +limit;
            offsetParam = +offset; // don't need to call this.refresh()
          });
          this.addEventListener.apply(this, __spread((0, _eventService.followUserListener)(function (detail) {
            (0, _followService.followUser)(detail);
            profile.following = true;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.unfollowUserListener)(function (detail) {
            (0, _followService.unfollowUser)(detail);
            profile.following = false;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.prevPageListener)(function () {
            offsetParam = Math.max(0, offsetParam -= limitParam);
            var pathname = (0, _pageContextState.getPageContext)().pathname;

            var qp = __assign(__assign({}, (0, _pageContextState.getQueryParams)()), {
              offset: offsetParam
            });

            page(pathname + "?" + qs.stringify(qp));
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.nextPageListener)(function () {
            offsetParam += limitParam;
            var pathname = (0, _pageContextState.getPageContext)().pathname;

            var qp = __assign(__assign({}, (0, _pageContextState.getQueryParams)()), {
              offset: offsetParam
            });

            page(pathname + "?" + qs.stringify(qp));
          })));
          _h.label = 1;

        case 1:
          _h.trys.push([1, 12, 13, 18]);

          _e = __asyncValues(this);
          _h.label = 2;

        case 2:
          return [4
          /*yield*/
          , __await(_e.next())];

        case 3:
          if (!(_f = _h.sent(), !_f.done)) return [3
          /*break*/
          , 11];
          _f.value;
          if (!(username !== (profile === null || profile === void 0 ? void 0 : profile.username))) return [3
          /*break*/
          , 7];
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:50px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null)))];

        case 4:
          return [4
          /*yield*/
          , _h.sent()];

        case 5:
          _h.sent();

          return [4
          /*yield*/
          , __await((0, _profileService.getProfile)({
            username: username
          }))];

        case 6:
          resp = _h.sent();

          if (resp.hasErrors) {
            throw new Error('Error getting profile.');
          }

          profile = resp.response.profile;
          _h.label = 7;

        case 7:
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            class: "profile-page"
          }, (0, _crank.createElement)("div", {
            class: "user-info"
          }, (0, _crank.createElement)("div", {
            class: "container"
          }, (0, _crank.createElement)("div", {
            class: "row"
          }, (0, _crank.createElement)("div", {
            class: "col-xs-12 col-md-10 offset-md-1"
          }, (0, _crank.createElement)("img", {
            src: profile.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
            class: "user-img"
          }), (0, _crank.createElement)("h4", null, profile.username), (0, _crank.createElement)("p", null, profile.bio), (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username) !== username && (0, _crank.createElement)(_components.FollowUserButton, {
            username: profile.username,
            following: profile.following
          }))))), (0, _crank.createElement)("div", {
            class: "container"
          }, (0, _crank.createElement)("div", {
            class: "row"
          }, (0, _crank.createElement)("div", {
            class: "col-xs-12 col-md-10 offset-md-1"
          }, (0, _crank.createElement)("div", {
            class: "articles-toggle"
          }, (0, _crank.createElement)("ul", {
            class: "nav nav-pills outline-active"
          }, (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: feed === 'my'
            }),
            href: "/profile/" + profile.username + "?feed=my"
          }, "My Articles")), (0, _crank.createElement)("li", {
            class: "nav-item"
          }, (0, _crank.createElement)("a", {
            class: (0, _classnames.default)('nav-link', {
              active: feed === 'favorited'
            }),
            href: "/profile/" + profile.username + "?feed=favorited"
          }, "Favorited Articles")))), (0, _crank.createElement)(_ProfileFeedContent.ProfileFeedContent, {
            username: username,
            feed: feed,
            limit: limitParam,
            offset: offsetParam
          }))))))];

        case 8:
          return [4
          /*yield*/
          , _h.sent()];

        case 9:
          _h.sent();

          _h.label = 10;

        case 10:
          return [3
          /*break*/
          , 2];

        case 11:
          return [3
          /*break*/
          , 18];

        case 12:
          e_1_1 = _h.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 18];

        case 13:
          _h.trys.push([13,, 16, 17]);

          if (!(_f && !_f.done && (_g = _e.return))) return [3
          /*break*/
          , 15];
          return [4
          /*yield*/
          , __await(_g.call(_e))];

        case 14:
          _h.sent();

          _h.label = 15;

        case 15:
          return [3
          /*break*/
          , 17];

        case 16:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 17:
          return [7
          /*endfinally*/
          ];

        case 18:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","classnames":"qb7c","../../components":"iVTS","../../services/profileService":"eAgI","../../state/pageContextState":"ubNH","./ProfileFeedContent":"WGRC","../../services/eventService":"fkvO","../../services/followService":"tt01","query-string":"FvpG","../../state/userState":"qsQo"}],"z5ec":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileScreen = ProfileScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _ProfileFeeds = require("./ProfileFeeds");

/** @jsx createElement */
function ProfileScreen() {
  return (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
    active: ""
  }), (0, _crank.createElement)(_ProfileFeeds.ProfileFeeds, null), (0, _crank.createElement)(_components.Footer, null));
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./ProfileFeeds":"pGCg"}],"SXbb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfileScreen = require("./ProfileScreen");

Object.keys(_ProfileScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ProfileScreen[key];
    }
  });
});
},{"./ProfileScreen":"z5ec"}],"Isjr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoritePostButton = FavoritePostButton;

var _crank = require("@bikeshaving/crank");

var _eventService = require("../../services/eventService");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function FavoritePostButton(_a) {
  var handleFavorite, handleUnfavorite, _b, _c, e_1_1;

  var e_1, _d, _e;

  var _this = this;

  var slug = _a.slug,
      favorited = _a.favorited,
      favoritesCount = _a.favoritesCount;
  return __generator(this, function (_f) {
    switch (_f.label) {
      case 0:
        handleFavorite = function handleFavorite(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.favoritePostEvent)({
            slug: slug
          }));
        };

        handleUnfavorite = function handleUnfavorite(event) {
          event.preventDefault();

          _this.dispatchEvent((0, _eventService.unfavoritePostEvent)({
            slug: slug
          }));
        };

        _f.label = 1;

      case 1:
        _f.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _f.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        _e = _c.value, favorited = _e.favorited, favoritesCount = _e.favoritesCount;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, favorited && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm btn-primary",
          onclick: handleUnfavorite
        }, (0, _crank.createElement)("i", {
          class: "ion-heart"
        }), "\xA0 Unfavorite Post ", (0, _crank.createElement)("span", {
          class: "counter"
        }, "(", favoritesCount, ")")), !favorited && (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm btn-outline-primary",
          onclick: handleFavorite
        }, (0, _crank.createElement)("i", {
          class: "ion-heart"
        }), "\xA0 Favorite Post ", (0, _crank.createElement)("span", {
          class: "counter"
        }, "(", favoritesCount, ")")))];

      case 3:
        _f.sent();

        _f.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _f.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../services/eventService":"fkvO"}],"BROZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditArticleScreen = EditArticleScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _articleService = require("../../services/articleService");

var _eventService = require("../../services/eventService");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function EditArticleScreen(_a) {
  var slug = _a.slug,
      hide = _a.hide;
  return __asyncGenerator(this, arguments, function EditArticleScreen_1() {
    var loading, hasErrors, response, article, handleSubmit, _a, _b, e_1_1;

    var _c;

    var _this = this;

    var e_1, _d;

    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          loading = false;
          hasErrors = false;
          return [4
          /*yield*/
          , __await((0, _articleService.getArticle)({
            slug: slug
          }))];

        case 1:
          article = _e.sent().response.article;

          handleSubmit = function handleSubmit(event) {
            return __awaiter(_this, void 0, void 0, function () {
              var formData, resp, article_1;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    event.preventDefault();
                    loading = true;
                    hasErrors = false;
                    response = undefined;
                    this.refresh();
                    formData = new FormData(event.target);
                    return [4
                    /*yield*/
                    , (0, _articleService.editArticle)({
                      slug: article.slug,
                      title: formData.get('title'),
                      description: formData.get('description'),
                      body: formData.get('body'),
                      tagList: formData.get('tags').split(' ').filter(function (t) {
                        return t.length > 0;
                      })
                    })];

                  case 1:
                    resp = _a.sent();
                    loading = false;
                    hasErrors = resp.hasErrors;
                    response = resp.response;

                    if (!hasErrors) {
                      article_1 = response.article;
                      this.dispatchEvent((0, _eventService.articleEditedEvent)({
                        slug: article_1.slug
                      }));
                    }

                    this.refresh();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          _e.label = 2;

        case 2:
          _e.trys.push([2, 9, 10, 15]);

          _a = __asyncValues(this);
          _e.label = 3;

        case 3:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 4:
          if (!(_b = _e.sent(), !_b.done)) return [3
          /*break*/
          , 8];
          _c = _b.value, slug = _c.slug, hide = _c.hide;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("form", {
            onsubmit: handleSubmit
          }, (0, _crank.createElement)("div", {
            class: "modal",
            style: "display:block; background-color:rgba(0,0,0,0.5);"
          }, (0, _crank.createElement)("div", {
            class: "modal-dialog modal-lg"
          }, (0, _crank.createElement)("div", {
            class: "modal-content"
          }, (0, _crank.createElement)("div", {
            class: "modal-header"
          }, (0, _crank.createElement)("h5", {
            class: "modal-title"
          }, "Edit Article")), (0, _crank.createElement)("div", {
            class: "modal-body"
          }, (0, _crank.createElement)("div", {
            class: "editor-page"
          }, (0, _crank.createElement)("div", {
            class: "container page"
          }, (0, _crank.createElement)("div", {
            class: "row"
          }, (0, _crank.createElement)("div", {
            class: "col-md-10 offset-md-1 col-xs-12"
          }, hasErrors && response && (0, _crank.createElement)(_components.Errors, {
            errors: response.errors
          }), (0, _crank.createElement)("fieldset", null, (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control form-control-lg",
            name: "title",
            defaultValue: article.title,
            placeholder: "Article Title"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control",
            name: "description",
            defaultValue: article.description,
            placeholder: "What's this article about?"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("textarea", {
            class: "form-control",
            rows: "8",
            name: "body",
            defaultValue: article.body,
            placeholder: "Write your article (in markdown)"
          })), (0, _crank.createElement)("fieldset", {
            class: "form-group"
          }, (0, _crank.createElement)("input", {
            type: "text",
            class: "form-control",
            name: "tags",
            defaultValue: article.tagList.join(' '),
            placeholder: "Enter tags"
          }), (0, _crank.createElement)("div", {
            class: "tag-list"
          })))))))), (0, _crank.createElement)("div", {
            class: "modal-footer"
          }, (0, _crank.createElement)("button", {
            type: "button",
            class: "btn btn-secondary",
            style: "margin-right:0.5rem;",
            onclick: hide
          }, "Close"), (0, _crank.createElement)("button", {
            class: "btn btn-primary",
            disabled: loading
          }, "Save Changes")))))))];

        case 5:
          return [4
          /*yield*/
          , _e.sent()];

        case 6:
          _e.sent();

          _e.label = 7;

        case 7:
          return [3
          /*break*/
          , 3];

        case 8:
          return [3
          /*break*/
          , 15];

        case 9:
          e_1_1 = _e.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 15];

        case 10:
          _e.trys.push([10,, 13, 14]);

          if (!(_b && !_b.done && (_d = _a.return))) return [3
          /*break*/
          , 12];
          return [4
          /*yield*/
          , __await(_d.call(_a))];

        case 11:
          _e.sent();

          _e.label = 12;

        case 12:
          return [3
          /*break*/
          , 14];

        case 13:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 14:
          return [7
          /*endfinally*/
          ];

        case 15:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","../../services/articleService":"GatF","../../services/eventService":"fkvO"}],"XeBi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditArticleScreen = require("./EditArticleScreen");

Object.keys(_EditArticleScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EditArticleScreen[key];
    }
  });
});
},{"./EditArticleScreen":"BROZ"}],"PClj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditArticleButton = EditArticleButton;

var _crank = require("@bikeshaving/crank");

var _editArticle = require("../edit-article");

var _eventService = require("../../services/eventService");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


function EditArticleButton(_a) {
  var showEditArticleModal, modalNode, handleEdit, hideModal;

  var _this = this;

  var slug = _a.slug;
  return __generator(this, function (_b) {
    switch (_b.label) {
      case 0:
        showEditArticleModal = false;
        modalNode = null;

        handleEdit = function handleEdit(event) {
          event.preventDefault();
          showEditArticleModal = true;
          document.body.classList.add('modal-open');
          modalNode = document.createElement('div');
          document.body.appendChild(modalNode);

          _this.refresh();
        };

        hideModal = function hideModal() {
          showEditArticleModal = false;
          modalNode === null || modalNode === void 0 ? void 0 : modalNode.remove();
          document.body.classList.remove('modal-open');

          _this.refresh();
        };

        this.addEventListener.apply(this, __spread((0, _eventService.articleEditedListener)(function (_a) {
          var slug = _a.slug;
          hideModal();
          location.reload();
        })));
        _b.label = 1;

      case 1:
        if (!true) return [3
        /*break*/
        , 3];
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)("button", {
          type: "button",
          class: "btn btn-sm btn-outline-secondary",
          onclick: handleEdit
        }, (0, _crank.createElement)("i", {
          class: "ion-edit"
        }), "\xA0 Edit Article"), showEditArticleModal && (0, _crank.createElement)(_crank.Portal, {
          root: modalNode
        }, (0, _crank.createElement)(_editArticle.EditArticleScreen, {
          slug: slug,
          hide: hideModal
        })))];

      case 2:
        _b.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../edit-article":"XeBi","../../services/eventService":"fkvO"}],"zFgo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteArticleButton = DeleteArticleButton;

var _crank = require("@bikeshaving/crank");

var _eventService = require("../../services/eventService");

/** @jsx createElement */
function DeleteArticleButton(_a) {
  var _this = this;

  var slug = _a.slug;

  var handleDelete = function handleDelete(event) {
    event.preventDefault();

    _this.dispatchEvent((0, _eventService.deleteArticleEvent)({
      slug: slug
    }));
  };

  return (0, _crank.createElement)("button", {
    type: "button",
    class: "btn btn-sm btn-outline-danger",
    onclick: handleDelete
  }, (0, _crank.createElement)("i", {
    class: "ion-trash-a"
  }), "\xA0 Delete Article");
}
},{"@bikeshaving/crank":"k82I","../../services/eventService":"fkvO"}],"S60A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleMeta = ArticleMeta;

var _crank = require("@bikeshaving/crank");

var _FollowUserButton = require("../../components/FollowUserButton");

var _userState = require("../../state/userState");

var _FavoritePostButton = require("./FavoritePostButton");

var _EditArticleButton = require("./EditArticleButton");

var _DeleteArticleButton = require("./DeleteArticleButton");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function ArticleMeta(_a) {
  var user, _b, _c, e_1_1;

  var e_1, _d;

  var article = _a.article;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        user = (0, _userState.getUser)();
        _e.label = 1;

      case 1:
        _e.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _e.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        article = _c.value.article;
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "article-meta"
        }, (0, _crank.createElement)("a", {
          href: "/profile/" + article.author.username
        }, (0, _crank.createElement)("img", {
          src: article.author.image
        })), (0, _crank.createElement)("div", {
          class: "info"
        }, (0, _crank.createElement)("a", {
          href: "/profile/" + article.author.username,
          class: "author"
        }, article.author.username), (0, _crank.createElement)("span", {
          class: "date"
        }, new Date(article.createdAt).toDateString())), (user === null || user === void 0 ? void 0 : user.username) !== article.author.username && (0, _userState.isLoggedIn)() && (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_FollowUserButton.FollowUserButton, {
          username: article.author.username,
          following: article.author.following
        }), "\xA0", (0, _crank.createElement)(_FavoritePostButton.FavoritePostButton, {
          slug: article.slug,
          favorited: article.favorited,
          favoritesCount: article.favoritesCount
        })), (user === null || user === void 0 ? void 0 : user.username) === article.author.username && (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_EditArticleButton.EditArticleButton, {
          slug: article.slug
        }), "\xA0", (0, _crank.createElement)(_DeleteArticleButton.DeleteArticleButton, {
          slug: article.slug
        })))];

      case 3:
        _e.sent();

        _e.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../components/FollowUserButton":"UV5u","../../state/userState":"qsQo","./FavoritePostButton":"Isjr","./EditArticleButton":"PClj","./DeleteArticleButton":"zFgo"}],"YkrN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleActions = ArticleActions;

var _crank = require("@bikeshaving/crank");

var _ArticleMeta = require("./ArticleMeta");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function ArticleActions(_a) {
  var _b, _c, e_1_1;

  var e_1, _d;

  var article = _a.article;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        _e.trys.push([0, 5, 6, 7]);

        _b = __values(this), _c = _b.next();
        _e.label = 1;

      case 1:
        if (!!_c.done) return [3
        /*break*/
        , 4];
        article = _c.value.article;
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "article-actions"
        }, (0, _crank.createElement)(_ArticleMeta.ArticleMeta, {
          article: article
        }))];

      case 2:
        _e.sent();

        _e.label = 3;

      case 3:
        _c = _b.next();
        return [3
        /*break*/
        , 1];

      case 4:
        return [3
        /*break*/
        , 7];

      case 5:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 7];

      case 6:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","./ArticleMeta":"S60A"}],"Fba3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleBanner = ArticleBanner;

var _crank = require("@bikeshaving/crank");

var _ArticleMeta = require("./ArticleMeta");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function ArticleBanner(_a) {
  var _b, _c, e_1_1;

  var e_1, _d;

  var article = _a.article;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        _e.trys.push([0, 5, 6, 7]);

        _b = __values(this), _c = _b.next();
        _e.label = 1;

      case 1:
        if (!!_c.done) return [3
        /*break*/
        , 4];
        article = _c.value.article;
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "banner"
        }, (0, _crank.createElement)("div", {
          class: "container"
        }, (0, _crank.createElement)("h1", null, article.title), (0, _crank.createElement)(_ArticleMeta.ArticleMeta, {
          article: article
        })))];

      case 2:
        _e.sent();

        _e.label = 3;

      case 3:
        _c = _b.next();
        return [3
        /*break*/
        , 1];

      case 4:
        return [3
        /*break*/
        , 7];

      case 5:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 7];

      case 6:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","./ArticleMeta":"S60A"}],"e3Cr":[function(require,module,exports) {
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    xhtml: false
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults: getDefaults,
  changeDefaults: changeDefaults
};
},{}],"sUTH":[function(require,module,exports) {
/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

var caret = /(^|[^\[])\^/g;

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

var noopTest = {
  exec: function noopTest() {}
};

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/);
  var i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
} // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.


function rtrim(str, c, invert) {
  var l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var l = str.length;
  var level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

module.exports = {
  escape: escape,
  unescape: unescape,
  edit: edit,
  cleanUrl: cleanUrl,
  resolveUrl: resolveUrl,
  noopTest: noopTest,
  merge: merge,
  splitCells: splitCells,
  rtrim: rtrim,
  findClosingBracket: findClosingBracket,
  checkSanitizeDeprecation: checkSanitizeDeprecation
};
},{}],"ZrSq":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./defaults.js'),
    defaults = _require.defaults;

var _require2 = require('./helpers.js'),
    rtrim = _require2.rtrim,
    splitCells = _require2.splitCells,
    _escape = _require2.escape,
    findClosingBracket = _require2.findClosingBracket;

function outputLink(cap, link, raw) {
  var href = link.href;
  var title = link.title ? _escape(link.title) : null;

  if (cap[0].charAt(0) !== '!') {
    return {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: cap[1]
    };
  } else {
    return {
      type: 'image',
      raw: raw,
      text: _escape(cap[1]),
      href: href,
      title: title
    };
  }
}
/**
 * Tokenizer
 */


module.exports = /*#__PURE__*/function () {
  function Tokenizer(options) {
    _classCallCheck(this, Tokenizer);

    this.options = options || defaults;
  }

  _createClass(Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }

        return {
          raw: '\n'
        };
      }
    }
  }, {
    key: "code",
    value: function code(src, tokens) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && lastToken.type === 'paragraph') {
          tokens.pop();
          lastToken.text += '\n' + cap[0].trimRight();
          lastToken.raw += '\n' + cap[0];
          return lastToken;
        } else {
          var text = cap[0].replace(/^ {4}/gm, '');
          return {
            type: 'code',
            raw: cap[0],
            codeBlockStyle: 'indented',
            text: !this.options.pedantic ? rtrim(text, '\n') : text
          };
        }
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        return {
          type: 'code',
          raw: cap[0],
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: cap[2]
        };
      }
    }
  }, {
    key: "nptable",
    value: function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };

        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          return item;
        }
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
            item,
            space,
            b,
            addBack,
            loose,
            istask,
            ischecked;
        var l = itemMatch.length;

        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item; // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

            if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
              addBack = itemMatch.slice(i + 1).join('\n');
              list.raw = list.raw.substring(0, list.raw.length - addBack.length);
              i = l - 1;
            }
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            list.loose = true;
          } // Check for task list items


          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;

          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          list.items.push({
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }

        return list;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.cells.length;

          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          return item;
        }
      }
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }

        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
          var linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        var token = outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
        return token;
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        var token = outputLink(cap, link, cap[0]);
        return token;
      }
    }
  }, {
    key: "strong",
    value: function strong(src) {
      var cap = this.rules.inline.strong.exec(src);

      if (cap) {
        return {
          type: 'strong',
          raw: cap[0],
          text: cap[4] || cap[3] || cap[2] || cap[1]
        };
      }
    }
  }, {
    key: "em",
    value: function em(src) {
      var cap = this.rules.inline.em.exec(src);

      if (cap) {
        return {
          type: 'em',
          raw: cap[0],
          text: cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]
        };
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        return {
          type: 'codespan',
          raw: cap[0],
          text: _escape(cap[2].trim(), true)
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[1]
        };
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    }
  }]);

  return Tokenizer;
}();
},{"./defaults.js":"e3Cr","./helpers.js":"sUTH"}],"tlvE":[function(require,module,exports) {
var _require = require('./helpers.js'),
    noopTest = _require.noopTest,
    edit = _require.edit,
    merge = _require.merge;
/**
 * Block-Level Grammar
 */


var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
  + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
  + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
  + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noopTest,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
  + ' *([-:]+ *\\|[-| :]*)' // Align
  + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
  // Cells
  table: '^ *\\|(.+)\\n' // Header
  + ' *\\|?( *[-:]+[-| :]*)' // Align
  + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

});
block.gfm.nptable = edit(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
}; // list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)

inline._punctuation = '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
module.exports = {
  block: block,
  inline: inline
};
},{"./helpers.js":"sUTH"}],"GfVS":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tokenizer = require('./Tokenizer.js');

var _require = require('./defaults.js'),
    defaults = _require.defaults;

var _require2 = require('./rules.js'),
    block = _require2.block,
    inline = _require2.inline;
/**
 * smartypants text replacement
 */


function smartypants(text) {
  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
}
/**
 * mangle email addresses
 */


function mangle(text) {
  var out = '',
      i,
      ch;
  var l = text.length;

  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
}
/**
 * Block Lexer
 */


module.exports = /*#__PURE__*/function () {
  function Lexer(options) {
    _classCallCheck(this, Lexer);

    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    var rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;

      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }

    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */


  _createClass(Lexer, [{
    key: "lex",

    /**
     * Preprocessing
     */
    value: function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */

  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      src = src.replace(/^ +$/gm, '');
      var token, i, l;

      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.type) {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)


        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;

          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }

          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);

          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph


        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }

          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells


              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];

                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }

              break;
            }

          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }

          case 'list':
            {
              l2 = token.items.length;

              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }

              break;
            }

          default:
            {// do nothing
            }
        }
      }

      return tokens;
    }
    /**
     * Lexing/Compiling
     */

  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var inLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var inRawBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var token;

      while (src) {
        // escape
        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          tokens.push(token);
          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);

          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }

          tokens.push(token);
          continue;
        } // strong


        if (token = this.tokenizer.strong(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // em


        if (token = this.tokenizer.em(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text


        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    }
  }], [{
    key: "lex",

    /**
     * Static Lex Method
     */
    value: function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
  }, {
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
  }]);

  return Lexer;
}();
},{"./Tokenizer.js":"ZrSq","./defaults.js":"e3Cr","./rules.js":"tlvE"}],"GGSY":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./defaults.js'),
    defaults = _require.defaults;

var _require2 = require('./helpers.js'),
    cleanUrl = _require2.cleanUrl,
    escape = _require2.escape;
/**
 * Renderer
 */


module.exports = /*#__PURE__*/function () {
  function Renderer(options) {
    _classCallCheck(this, Renderer);

    this.options = options || defaults;
  }

  _createClass(Renderer, [{
    key: "code",
    value: function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>';
      }

      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
    }
  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    }
  }, {
    key: "html",
    value: function html(_html) {
      return _html;
    }
  }, {
    key: "heading",
    value: function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    }
  }, {
    key: "hr",
    value: function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
  }, {
    key: "listitem",
    value: function listitem(text) {
      return '<li>' + text + '</li>\n';
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    }
  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return '<p>' + text + '</p>\n';
    }
  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer

  }, {
    key: "strong",
    value: function strong(text) {
      return '<strong>' + text + '</strong>';
    }
  }, {
    key: "em",
    value: function em(text) {
      return '<em>' + text + '</em>';
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return '<code>' + text + '</code>';
    }
  }, {
    key: "br",
    value: function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }
  }, {
    key: "del",
    value: function del(text) {
      return '<del>' + text + '</del>';
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }]);

  return Renderer;
}();
},{"./defaults.js":"e3Cr","./helpers.js":"sUTH"}],"Xnzt":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TextRenderer
 * returns only the textual part of the token
 */
module.exports = /*#__PURE__*/function () {
  function TextRenderer() {
    _classCallCheck(this, TextRenderer);
  }

  _createClass(TextRenderer, [{
    key: "strong",
    // no need for block level renderers
    value: function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "html",
    value: function html(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);

  return TextRenderer;
}();
},{}],"Qrlq":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Slugger generates header id
 */
module.exports = /*#__PURE__*/function () {
  function Slugger() {
    _classCallCheck(this, Slugger);

    this.seen = {};
  }
  /**
   * Convert string to unique id
   */


  _createClass(Slugger, [{
    key: "slug",
    value: function slug(value) {
      var slug = value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

      if (this.seen.hasOwnProperty(slug)) {
        var originalSlug = slug;

        do {
          this.seen[originalSlug]++;
          slug = originalSlug + '-' + this.seen[originalSlug];
        } while (this.seen.hasOwnProperty(slug));
      }

      this.seen[slug] = 0;
      return slug;
    }
  }]);

  return Slugger;
}();
},{}],"Xd8K":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = require('./Renderer.js');

var TextRenderer = require('./TextRenderer.js');

var Slugger = require('./Slugger.js');

var _require = require('./defaults.js'),
    defaults = _require.defaults;

var _require2 = require('./helpers.js'),
    unescape = _require2.unescape;
/**
 * Parsing & Compiling
 */


module.exports = /*#__PURE__*/function () {
  function Parser(options) {
    _classCallCheck(this, Parser);

    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  _createClass(Parser, [{
    key: "parse",

    /**
     * Parse Loop
     */
    value: function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;

              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */

  }, {
    key: "parseInline",
    value: function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i];

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
  }]);

  return Parser;
}();
},{"./Renderer.js":"GGSY","./TextRenderer.js":"Xnzt","./Slugger.js":"Qrlq","./defaults.js":"e3Cr","./helpers.js":"sUTH"}],"afg3":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Lexer = require('./Lexer.js');

var Parser = require('./Parser.js');

var Tokenizer = require('./Tokenizer.js');

var Renderer = require('./Renderer.js');

var TextRenderer = require('./TextRenderer.js');

var Slugger = require('./Slugger.js');

var _require = require('./helpers.js'),
    merge = _require.merge,
    checkSanitizeDeprecation = _require.checkSanitizeDeprecation,
    escape = _require.escape;

var _require2 = require('./defaults.js'),
    getDefaults = _require2.getDefaults,
    changeDefaults = _require2.changeDefaults,
    defaults = _require2.defaults;
/**
 * Marked
 */


function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    var _ret = function () {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);
      var highlight = opt.highlight;
      var tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return {
          v: callback(e)
        };
      }

      pending = tokens.length;

      var done = function done(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return {
          v: done()
        };
      }

      delete opt.highlight;
      if (!pending) return {
        v: done()
      };

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }

          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);

            if (code == null || code === token.text) {
              return --pending || done();
            }

            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return {
        v: void 0
      };
    }();

    if (_typeof(_ret) === "object") return _ret.v;
  }

  try {
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}
/**
 * Options
 */


marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = defaults;
/**
 * Use Extension
 */

marked.use = function (extension) {
  var opts = merge({}, extension);

  if (extension.renderer) {
    (function () {
      var renderer = marked.defaults.renderer || new Renderer();

      var _loop = function _loop(prop) {
        var prevRenderer = renderer[prop];

        renderer[prop] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var ret = extension.renderer[prop].apply(renderer, args);

          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }

          return ret;
        };
      };

      for (var prop in extension.renderer) {
        _loop(prop);
      }

      opts.renderer = renderer;
    })();
  }

  if (extension.tokenizer) {
    (function () {
      var tokenizer = marked.defaults.tokenizer || new Tokenizer();

      var _loop2 = function _loop2(prop) {
        var prevTokenizer = tokenizer[prop];

        tokenizer[prop] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var ret = extension.tokenizer[prop].apply(tokenizer, args);

          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }

          return ret;
        };
      };

      for (var prop in extension.tokenizer) {
        _loop2(prop);
      }

      opts.tokenizer = tokenizer;
    })();
  }

  marked.setOptions(opts);
};
/**
 * Expose
 */


marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
module.exports = marked;
},{"./Lexer.js":"GfVS","./Parser.js":"Xd8K","./Tokenizer.js":"ZrSq","./Renderer.js":"GGSY","./TextRenderer.js":"Xnzt","./Slugger.js":"Qrlq","./helpers.js":"sUTH","./defaults.js":"e3Cr"}],"g3nS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleContent = ArticleContent;

var _crank = require("@bikeshaving/crank");

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function ArticleContent(_a) {
  var _b, _c, e_1_1;

  var e_1, _d;

  var article = _a.article;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        _e.trys.push([0, 5, 6, 7]);

        _b = __values(this), _c = _b.next();
        _e.label = 1;

      case 1:
        if (!!_c.done) return [3
        /*break*/
        , 4];
        article = _c.value.article;
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "row article-content"
        }, (0, _crank.createElement)("div", {
          class: "col-md-12"
        }, (0, _crank.createElement)("div", null, (0, _crank.createElement)(_crank.Raw, {
          value: (0, _marked.default)(article.body)
        })), (0, _crank.createElement)("ul", {
          class: "tag-list"
        }, article.tagList.map(function (tag) {
          return (0, _crank.createElement)("li", {
            class: "tag-default tag-pill tag-outline"
          }, tag);
        }))))];

      case 2:
        _e.sent();

        _e.label = 3;

      case 3:
        _c = _b.next();
        return [3
        /*break*/
        , 1];

      case 4:
        return [3
        /*break*/
        , 7];

      case 5:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 7];

      case 6:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","marked":"afg3"}],"NpXW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.postComment = exports.getComments = void 0;

var _userState = require("../state/userState");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var getComments = function getComments(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, headers, user_1, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          headers = {};

          if ((0, _userState.isLoggedIn)()) {
            user_1 = (0, _userState.getUser)();
            headers = {
              Authorization: "Token " + user_1.token
            };
          }

          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug + "/comments", {
            method: 'GET',
            mode: 'cors',
            headers: headers
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.getComments = getComments;

var postComment = function postComment(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug + "/comments", {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Token " + user.token
            },
            body: JSON.stringify({
              comment: {
                body: req.body
              }
            })
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.postComment = postComment;

var deleteComment = function deleteComment(req) {
  return __awaiter(void 0, void 0, Promise, function () {
    var user, resp, respObj;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          user = (0, _userState.getUser)();
          return [4
          /*yield*/
          , fetch("https://conduit.productionready.io/api/articles/" + req.slug + "/comments/" + req.id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Token " + user.token
            }
          })];

        case 1:
          resp = _a.sent();
          return [4
          /*yield*/
          , resp.json()];

        case 2:
          respObj = _a.sent();
          return [2
          /*return*/
          , {
            hasErrors: resp.status !== 200,
            response: respObj
          }];
      }
    });
  });
};

exports.deleteComment = deleteComment;
},{"../state/userState":"qsQo"}],"mmSo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentForm = CommentForm;

var _crank = require("@bikeshaving/crank");

var _userState = require("../../state/userState");

var _commentService = require("../../services/commentService");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function CommentForm(_a) {
  var user, loading, hasErrors, response, handleSubmit, _b, _c, e_1_1;

  var e_1, _d;

  var _this = this;

  var article = _a.article,
      handleNewComment = _a.handleNewComment;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        user = (0, _userState.getUser)();
        loading = false;
        hasErrors = false;

        handleSubmit = function handleSubmit(event) {
          return __awaiter(_this, void 0, void 0, function () {
            var formData, body, resp;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  event.preventDefault();
                  loading = true;
                  hasErrors = false;
                  response = undefined;
                  this.refresh();
                  formData = new FormData(event.target);
                  body = formData.get('body');
                  if (!(body.trim().length > 0)) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , (0, _commentService.postComment)({
                    slug: article.slug,
                    body: formData.get('body')
                  })];

                case 1:
                  resp = _a.sent();
                  hasErrors = resp.hasErrors;
                  response = resp.response;

                  if (!hasErrors) {
                    event.target.reset();
                    handleNewComment(response.comment);
                  }

                  _a.label = 2;

                case 2:
                  loading = false;
                  this.refresh();
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        _e.label = 1;

      case 1:
        _e.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _e.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        article = _c.value.article;
        return [4
        /*yield*/
        , (0, _crank.createElement)("form", {
          class: "card comment-form",
          onsubmit: handleSubmit
        }, (0, _crank.createElement)("div", {
          class: "card-block"
        }, (0, _crank.createElement)("textarea", {
          class: "form-control",
          name: "body",
          placeholder: "Write a comment...",
          rows: "3"
        })), (0, _crank.createElement)("div", {
          class: "card-footer"
        }, (0, _crank.createElement)("img", {
          src: user.image,
          class: "comment-author-img"
        }), (0, _crank.createElement)("button", {
          class: "btn btn-sm btn-primary"
        }, "Post Comment")))];

      case 3:
        _e.sent();

        _e.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../state/userState":"qsQo","../../services/commentService":"NpXW"}],"Fgin":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = Comment;

var _crank = require("@bikeshaving/crank");

var _userState = require("../../state/userState");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function Comment(_a) {
  var user, _b, _c, e_1_1;

  var e_1, _d, _e;

  var comment = _a.comment,
      handleDelete = _a.handleDelete;
  return __generator(this, function (_f) {
    switch (_f.label) {
      case 0:
        user = (0, _userState.getUser)();
        _f.label = 1;

      case 1:
        _f.trys.push([1, 6, 7, 8]);

        _b = __values(this), _c = _b.next();
        _f.label = 2;

      case 2:
        if (!!_c.done) return [3
        /*break*/
        , 5];
        _e = _c.value, comment = _e.comment, handleDelete = _e.handleDelete;
        return [4
        /*yield*/
        , (0, _crank.createElement)("div", {
          class: "card"
        }, (0, _crank.createElement)("div", {
          class: "card-block"
        }, (0, _crank.createElement)("p", {
          class: "card-text"
        }, comment.body)), (0, _crank.createElement)("div", {
          class: "card-footer"
        }, (0, _crank.createElement)("a", {
          href: "/profile/" + comment.author.username,
          class: "comment-author"
        }, (0, _crank.createElement)("img", {
          src: comment.author.image,
          class: "comment-author-img"
        })), "\xA0", (0, _crank.createElement)("a", {
          href: "/profile/" + comment.author.username,
          class: "comment-author"
        }, comment.author.username), (0, _crank.createElement)("span", {
          class: "date-posted"
        }, new Date(comment.createdAt).toDateString()), (0, _userState.isLoggedIn)() && comment.author.username === user.username && (0, _crank.createElement)("span", {
          class: "mod-options"
        }, (0, _crank.createElement)("button", {
          type: "button",
          class: "btn",
          style: "background-color:transparent;",
          onclick: handleDelete
        }, (0, _crank.createElement)("i", {
          class: "ion-trash-a"
        })))))];

      case 3:
        _f.sent();

        _f.label = 4;

      case 4:
        _c = _b.next();
        return [3
        /*break*/
        , 2];

      case 5:
        return [3
        /*break*/
        , 8];

      case 6:
        e_1_1 = _f.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 8];

      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 8:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../state/userState":"qsQo"}],"curH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentSection = CommentSection;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _commentService = require("../../services/commentService");

var _userState = require("../../state/userState");

var _CommentForm = require("./CommentForm");

var _Comment = require("./Comment");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};
/** @jsx createElement */


function CommentSection(_a) {
  var article = _a.article;

  var _b;

  return __asyncGenerator(this, arguments, function CommentSection_1() {
    var resp, comments, addComment, deleteCommentById, _a, _b, e_1_1;

    var _this = this;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:50px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null)))];

        case 1:
          return [4
          /*yield*/
          , _d.sent()];

        case 2:
          _d.sent();

          return [4
          /*yield*/
          , __await((0, _commentService.getComments)({
            slug: article.slug
          }))];

        case 3:
          resp = _d.sent();

          if (resp.hasErrors) {
            throw new Error('Error getting article comments.');
          }

          comments = (_b = resp.response) === null || _b === void 0 ? void 0 : _b.comments;

          addComment = function addComment(comment) {
            comments.splice(0, 0, comment);

            _this.refresh();
          };

          deleteCommentById = function deleteCommentById(event, id) {
            event.preventDefault();
            (0, _commentService.deleteComment)({
              id: id,
              slug: article.slug
            });
            var index = comments.findIndex(function (c) {
              return c.id === id;
            });

            if (index >= 0) {
              comments.splice(index, 1);

              _this.refresh();
            }
          };

          _d.label = 4;

        case 4:
          _d.trys.push([4, 11, 12, 17]);

          _a = __asyncValues(this);
          _d.label = 5;

        case 5:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 6:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 10];
          article = _b.value.article;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)(_crank.Fragment, null, (0, _userState.isLoggedIn)() && (0, _crank.createElement)(_CommentForm.CommentForm, {
            article: article,
            handleNewComment: addComment
          }), !(0, _userState.isLoggedIn)() && (0, _crank.createElement)("p", null, (0, _crank.createElement)("a", {
            href: "/login"
          }, "Sign in"), " or ", (0, _crank.createElement)("a", {
            href: "/register"
          }, "sign up"), " to add comments to this article."), comments.map(function (c) {
            return (0, _crank.createElement)(_Comment.Comment, {
              "crank-key": c.id,
              comment: c,
              handleDelete: function handleDelete(event) {
                deleteCommentById(event, c.id);
              }
            });
          })))];

        case 7:
          return [4
          /*yield*/
          , _d.sent()];

        case 8:
          _d.sent();

          _d.label = 9;

        case 9:
          return [3
          /*break*/
          , 5];

        case 10:
          return [3
          /*break*/
          , 17];

        case 11:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 17];

        case 12:
          _d.trys.push([12,, 15, 16]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 14];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 13:
          _d.sent();

          _d.label = 14;

        case 14:
          return [3
          /*break*/
          , 16];

        case 15:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 16:
          return [7
          /*endfinally*/
          ];

        case 17:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","../../services/commentService":"NpXW","../../state/userState":"qsQo","./CommentForm":"mmSo","./Comment":"Fgin"}],"EToo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = Article;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _articleService = require("../../services/articleService");

var _eventService = require("../../services/eventService");

var _favoriteService = require("../../services/favoriteService");

var _followService = require("../../services/followService");

var _userState = require("../../state/userState");

var _ArticleActions = require("./ArticleActions");

var _ArticleBanner = require("./ArticleBanner");

var _ArticleContent = require("./ArticleContent");

var _CommentSection = require("./CommentSection");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};
/** @jsx createElement */


function Article(_a) {
  var slug = _a.slug;
  return __asyncGenerator(this, arguments, function Article_1() {
    var resp, article, _a, _b, e_1_1;

    var _this = this;

    var e_1, _c;

    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            style: "display:flex; justify-content:center; margin:50px;"
          }, (0, _crank.createElement)(_components.LoadingIndicator, null)))];

        case 1:
          return [4
          /*yield*/
          , _d.sent()];

        case 2:
          _d.sent();

          return [4
          /*yield*/
          , __await((0, _articleService.getArticle)({
            slug: slug
          }))];

        case 3:
          resp = _d.sent();

          if (resp.hasErrors) {
            throw new Error('Error getting article.');
          }

          article = resp.response.article;
          this.addEventListener.apply(this, __spread((0, _eventService.followUserListener)(function (detail) {
            (0, _followService.followUser)(detail);
            article.author.following = true;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.unfollowUserListener)(function (detail) {
            (0, _followService.unfollowUser)(detail);
            article.author.following = false;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.favoritePostListener)(function (detail) {
            (0, _favoriteService.favoritePost)(detail);
            article.favorited = true;
            article.favoritesCount++;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.unfavoritePostListener)(function (detail) {
            (0, _favoriteService.unfavoritePost)(detail);
            article.favorited = false;
            article.favoritesCount--;

            _this.refresh();
          })));
          this.addEventListener.apply(this, __spread((0, _eventService.deleteArticleListener)(function (detail) {
            (0, _articleService.deleteArticle)(detail);
            history.back();
          })));
          _d.label = 4;

        case 4:
          _d.trys.push([4, 11, 12, 17]);

          _a = __asyncValues(this);
          _d.label = 5;

        case 5:
          return [4
          /*yield*/
          , __await(_a.next())];

        case 6:
          if (!(_b = _d.sent(), !_b.done)) return [3
          /*break*/
          , 10];
          slug = _b.value.slug;
          return [4
          /*yield*/
          , __await((0, _crank.createElement)("div", {
            class: "article-page"
          }, (0, _crank.createElement)(_ArticleBanner.ArticleBanner, {
            article: article
          }), (0, _crank.createElement)("div", {
            class: "container page"
          }, (0, _crank.createElement)(_ArticleContent.ArticleContent, {
            article: article
          }), (0, _crank.createElement)("hr", null), (0, _userState.isLoggedIn)() && (0, _crank.createElement)(_ArticleActions.ArticleActions, {
            article: article
          }), (0, _crank.createElement)("div", {
            class: "row"
          }, (0, _crank.createElement)("div", {
            class: "col-xs-12 col-md-8 offset-md-2"
          }, (0, _crank.createElement)(_CommentSection.CommentSection, {
            article: article
          }))))))];

        case 7:
          return [4
          /*yield*/
          , _d.sent()];

        case 8:
          _d.sent();

          _d.label = 9;

        case 9:
          return [3
          /*break*/
          , 5];

        case 10:
          return [3
          /*break*/
          , 17];

        case 11:
          e_1_1 = _d.sent();
          e_1 = {
            error: e_1_1
          };
          return [3
          /*break*/
          , 17];

        case 12:
          _d.trys.push([12,, 15, 16]);

          if (!(_b && !_b.done && (_c = _a.return))) return [3
          /*break*/
          , 14];
          return [4
          /*yield*/
          , __await(_c.call(_a))];

        case 13:
          _d.sent();

          _d.label = 14;

        case 14:
          return [3
          /*break*/
          , 16];

        case 15:
          if (e_1) throw e_1.error;
          return [7
          /*endfinally*/
          ];

        case 16:
          return [7
          /*endfinally*/
          ];

        case 17:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","../../services/articleService":"GatF","../../services/eventService":"fkvO","../../services/favoriteService":"KAtv","../../services/followService":"tt01","../../state/userState":"qsQo","./ArticleActions":"YkrN","./ArticleBanner":"Fba3","./ArticleContent":"g3nS","./CommentSection":"curH"}],"w8yd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewArticleScreen = ViewArticleScreen;

var _crank = require("@bikeshaving/crank");

var _components = require("../../components");

var _Article = require("./Article");

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/** @jsx createElement */


function ViewArticleScreen(_a) {
  var _b, _c, e_1_1;

  var e_1, _d;

  var slug = _a.slug;
  return __generator(this, function (_e) {
    switch (_e.label) {
      case 0:
        _e.trys.push([0, 5, 6, 7]);

        _b = __values(this), _c = _b.next();
        _e.label = 1;

      case 1:
        if (!!_c.done) return [3
        /*break*/
        , 4];
        slug = _c.value.slug;
        return [4
        /*yield*/
        , (0, _crank.createElement)(_crank.Fragment, null, (0, _crank.createElement)(_components.Navbar, {
          active: ""
        }), (0, _crank.createElement)(_Article.Article, {
          slug: slug
        }), (0, _crank.createElement)(_components.Footer, null))];

      case 2:
        _e.sent();

        _e.label = 3;

      case 3:
        _c = _b.next();
        return [3
        /*break*/
        , 1];

      case 4:
        return [3
        /*break*/
        , 7];

      case 5:
        e_1_1 = _e.sent();
        e_1 = {
          error: e_1_1
        };
        return [3
        /*break*/
        , 7];

      case 6:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }

        return [7
        /*endfinally*/
        ];

      case 7:
        return [2
        /*return*/
        ];
    }
  });
}
},{"@bikeshaving/crank":"k82I","../../components":"iVTS","./Article":"EToo"}],"nVid":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewArticleScreen = require("./ViewArticleScreen");

Object.keys(_ViewArticleScreen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ViewArticleScreen[key];
    }
  });
});
},{"./ViewArticleScreen":"w8yd"}],"I4sy":[function(require,module,exports) {

},{}],"zo2T":[function(require,module,exports) {
"use strict";

var _crank = require("@bikeshaving/crank");

var _page = _interopRequireDefault(require("page"));

var _screens = require("./screens");

var _profile = require("./screens/profile");

var _viewArticle = require("./screens/view-article");

var _userService = require("./services/userService");

var _pageContextState = require("./state/pageContextState");

require("./styles.scss");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx createElement */
if ("production" === 'production') {
  _page.default.base('/realworld-starter-kit');
}

(0, _page.default)('/', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_screens.HomeScreen, null));
});
(0, _page.default)('/register', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_screens.RegisterScreen, null));
});
(0, _page.default)('/login', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_screens.LoginScreen, null));
});
(0, _page.default)('/settings', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_screens.SettingsScreen, null));
});
(0, _page.default)('/article/:slug', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_viewArticle.ViewArticleScreen, {
    slug: context.params.slug
  }));
});
(0, _page.default)('/logout', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _userService.logout)();
  (0, _page.default)('/');
});
(0, _page.default)('/profile/:username', function (context) {
  (0, _pageContextState.setPageContext)(context);
  (0, _utils.render)((0, _crank.createElement)(_profile.ProfileScreen, null));
});

try {
  (0, _page.default)();
} catch (err) {
  console.log(err);
  (0, _page.default)('/');
}
},{"@bikeshaving/crank":"k82I","page":"bUEv","./screens":"nYHZ","./screens/profile":"SXbb","./screens/view-article":"nVid","./services/userService":"V8SH","./state/pageContextState":"ubNH","./styles.scss":"I4sy","./utils":"s2T4"}]},{},["zo2T"], null)