"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-measure";
exports.ids = ["vendor-chunks/react-measure"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-measure/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-measure/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   withContentRect: () => (/* binding */ withContentRect)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ \"(ssr)/./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js\");\n\n\n\n\n\n\n\nvar types = ['client', 'offset', 'scroll', 'bounds', 'margin'];\nfunction getTypes(props) {\n  var allowedTypes = [];\n  types.forEach(function (type) {\n    if (props[type]) {\n      allowedTypes.push(type);\n    }\n  });\n  return allowedTypes;\n}\n\nfunction getContentRect(node, types) {\n  var calculations = {};\n\n  if (types.indexOf('client') > -1) {\n    calculations.client = {\n      top: node.clientTop,\n      left: node.clientLeft,\n      width: node.clientWidth,\n      height: node.clientHeight\n    };\n  }\n\n  if (types.indexOf('offset') > -1) {\n    calculations.offset = {\n      top: node.offsetTop,\n      left: node.offsetLeft,\n      width: node.offsetWidth,\n      height: node.offsetHeight\n    };\n  }\n\n  if (types.indexOf('scroll') > -1) {\n    calculations.scroll = {\n      top: node.scrollTop,\n      left: node.scrollLeft,\n      width: node.scrollWidth,\n      height: node.scrollHeight\n    };\n  }\n\n  if (types.indexOf('bounds') > -1) {\n    var rect = node.getBoundingClientRect();\n    calculations.bounds = {\n      top: rect.top,\n      right: rect.right,\n      bottom: rect.bottom,\n      left: rect.left,\n      width: rect.width,\n      height: rect.height\n    };\n  }\n\n  if (types.indexOf('margin') > -1) {\n    var styles = getComputedStyle(node);\n    calculations.margin = {\n      top: styles ? parseInt(styles.marginTop) : 0,\n      right: styles ? parseInt(styles.marginRight) : 0,\n      bottom: styles ? parseInt(styles.marginBottom) : 0,\n      left: styles ? parseInt(styles.marginLeft) : 0\n    };\n  }\n\n  return calculations;\n}\n\n/**\n * Returns the global window object associated with provided element.\n */\nfunction getWindowOf(target) {\n  // Assume that the element is an instance of Node, which means that it\n  // has the \"ownerDocument\" property from which we can retrieve a\n  // corresponding global object.\n  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local window object if it's not possible extract one from\n  // provided element.\n\n  return ownerGlobal || window;\n}\n\nfunction withContentRect(types) {\n  return function (WrappedComponent) {\n    var _class, _temp;\n\n    return _temp = _class =\n    /*#__PURE__*/\n    function (_Component) {\n      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WithContentRect, _Component);\n\n      function WithContentRect() {\n        var _this;\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        _this = _Component.call.apply(_Component, [this].concat(args)) || this;\n        _this.state = {\n          contentRect: {\n            entry: {},\n            client: {},\n            offset: {},\n            scroll: {},\n            bounds: {},\n            margin: {}\n          }\n        };\n        _this._animationFrameID = null;\n        _this._resizeObserver = null;\n        _this._node = null;\n        _this._window = null;\n\n        _this.measure = function (entries) {\n          var contentRect = getContentRect(_this._node, types || getTypes(_this.props));\n\n          if (entries) {\n            contentRect.entry = entries[0].contentRect;\n          }\n\n          _this._animationFrameID = _this._window.requestAnimationFrame(function () {\n            if (_this._resizeObserver !== null) {\n              _this.setState({\n                contentRect: contentRect\n              });\n\n              if (typeof _this.props.onResize === 'function') {\n                _this.props.onResize(contentRect);\n              }\n            }\n          });\n        };\n\n        _this._handleRef = function (node) {\n          if (_this._resizeObserver !== null && _this._node !== null) {\n            _this._resizeObserver.unobserve(_this._node);\n          }\n\n          _this._node = node;\n          _this._window = getWindowOf(_this._node);\n          var innerRef = _this.props.innerRef;\n\n          if (innerRef) {\n            if (typeof innerRef === 'function') {\n              innerRef(_this._node);\n            } else {\n              innerRef.current = _this._node;\n            }\n          }\n\n          if (_this._resizeObserver !== null && _this._node !== null) {\n            _this._resizeObserver.observe(_this._node);\n          }\n        };\n\n        return _this;\n      }\n\n      var _proto = WithContentRect.prototype;\n\n      _proto.componentDidMount = function componentDidMount() {\n        this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.measure);\n\n        if (this._node !== null) {\n          this._resizeObserver.observe(this._node);\n\n          if (typeof this.props.onResize === 'function') {\n            this.props.onResize(getContentRect(this._node, types || getTypes(this.props)));\n          }\n        }\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        if (this._window !== null) {\n          this._window.cancelAnimationFrame(this._animationFrameID);\n        }\n\n        if (this._resizeObserver !== null) {\n          this._resizeObserver.disconnect();\n\n          this._resizeObserver = null;\n        }\n      };\n\n      _proto.render = function render() {\n        var _this$props = this.props,\n            innerRef = _this$props.innerRef,\n            onResize = _this$props.onResize,\n            props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this$props, [\"innerRef\", \"onResize\"]);\n\n        return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n          measureRef: this._handleRef,\n          measure: this.measure,\n          contentRect: this.state.contentRect\n        }));\n      };\n\n      return WithContentRect;\n    }(react__WEBPACK_IMPORTED_MODULE_3__.Component), _class.propTypes = {\n      client: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),\n      offset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),\n      scroll: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),\n      bounds: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),\n      margin: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),\n      innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)]),\n      onResize: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)\n    }, _temp;\n  };\n}\n\nvar Measure = withContentRect()(function (_ref) {\n  var measure = _ref.measure,\n      measureRef = _ref.measureRef,\n      contentRect = _ref.contentRect,\n      children = _ref.children;\n  return children({\n    measure: measure,\n    measureRef: measureRef,\n    contentRect: contentRect\n  });\n});\nMeasure.displayName = 'Measure';\nMeasure.propTypes.children = (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Measure);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWVhc3VyZS9kaXN0L2luZGV4LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzBDO0FBQzlCO0FBQ3JCO0FBQ2Q7QUFDbUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQWM7O0FBRXBCO0FBQ0E7O0FBRUEsNEVBQTRFLGFBQWE7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMElBQTBJLGdFQUFjOztBQUV4SjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUdBQTZCOztBQUVqRCxlQUFlLG9EQUFhLG1CQUFtQiw4RUFBUSxHQUFHO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUssQ0FBQyw0Q0FBUztBQUNmLGNBQWMsd0RBQWM7QUFDNUIsY0FBYyx3REFBYztBQUM1QixjQUFjLHdEQUFjO0FBQzVCLGNBQWMsd0RBQWM7QUFDNUIsY0FBYyx3REFBYztBQUM1QixnQkFBZ0IsMkRBQW1CLEVBQUUsMERBQWdCLEVBQUUsd0RBQWM7QUFDckUsZ0JBQWdCLHdEQUFjO0FBQzlCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSw2QkFBNkIsd0RBQWM7O0FBRTNDLGlFQUFlLE9BQU8sRUFBQztBQUNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtaW1hZ2UtZG90LWNvbW1lbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWVhc3VyZS9kaXN0L2luZGV4LmVzbS5qcz9iMDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcblxudmFyIHR5cGVzID0gWydjbGllbnQnLCAnb2Zmc2V0JywgJ3Njcm9sbCcsICdib3VuZHMnLCAnbWFyZ2luJ107XG5mdW5jdGlvbiBnZXRUeXBlcyhwcm9wcykge1xuICB2YXIgYWxsb3dlZFR5cGVzID0gW107XG4gIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAocHJvcHNbdHlwZV0pIHtcbiAgICAgIGFsbG93ZWRUeXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhbGxvd2VkVHlwZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KG5vZGUsIHR5cGVzKSB7XG4gIHZhciBjYWxjdWxhdGlvbnMgPSB7fTtcblxuICBpZiAodHlwZXMuaW5kZXhPZignY2xpZW50JykgPiAtMSkge1xuICAgIGNhbGN1bGF0aW9ucy5jbGllbnQgPSB7XG4gICAgICB0b3A6IG5vZGUuY2xpZW50VG9wLFxuICAgICAgbGVmdDogbm9kZS5jbGllbnRMZWZ0LFxuICAgICAgd2lkdGg6IG5vZGUuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IG5vZGUuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlcy5pbmRleE9mKCdvZmZzZXQnKSA+IC0xKSB7XG4gICAgY2FsY3VsYXRpb25zLm9mZnNldCA9IHtcbiAgICAgIHRvcDogbm9kZS5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiBub2RlLm9mZnNldExlZnQsXG4gICAgICB3aWR0aDogbm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVzLmluZGV4T2YoJ3Njcm9sbCcpID4gLTEpIHtcbiAgICBjYWxjdWxhdGlvbnMuc2Nyb2xsID0ge1xuICAgICAgdG9wOiBub2RlLnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IG5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgIHdpZHRoOiBub2RlLnNjcm9sbFdpZHRoLFxuICAgICAgaGVpZ2h0OiBub2RlLnNjcm9sbEhlaWdodFxuICAgIH07XG4gIH1cblxuICBpZiAodHlwZXMuaW5kZXhPZignYm91bmRzJykgPiAtMSkge1xuICAgIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjYWxjdWxhdGlvbnMuYm91bmRzID0ge1xuICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICBpZiAodHlwZXMuaW5kZXhPZignbWFyZ2luJykgPiAtMSkge1xuICAgIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNhbGN1bGF0aW9ucy5tYXJnaW4gPSB7XG4gICAgICB0b3A6IHN0eWxlcyA/IHBhcnNlSW50KHN0eWxlcy5tYXJnaW5Ub3ApIDogMCxcbiAgICAgIHJpZ2h0OiBzdHlsZXMgPyBwYXJzZUludChzdHlsZXMubWFyZ2luUmlnaHQpIDogMCxcbiAgICAgIGJvdHRvbTogc3R5bGVzID8gcGFyc2VJbnQoc3R5bGVzLm1hcmdpbkJvdHRvbSkgOiAwLFxuICAgICAgbGVmdDogc3R5bGVzID8gcGFyc2VJbnQoc3R5bGVzLm1hcmdpbkxlZnQpIDogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY2FsY3VsYXRpb25zO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3dPZih0YXJnZXQpIHtcbiAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxuICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcbiAgLy8gY29ycmVzcG9uZGluZyBnbG9iYWwgb2JqZWN0LlxuICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7IC8vIFJldHVybiB0aGUgbG9jYWwgd2luZG93IG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXG4gIC8vIHByb3ZpZGVkIGVsZW1lbnQuXG5cbiAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gd2l0aENvbnRlbnRSZWN0KHR5cGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gICAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhDb250ZW50UmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhDb250ZW50UmVjdCgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjb250ZW50UmVjdDoge1xuICAgICAgICAgICAgZW50cnk6IHt9LFxuICAgICAgICAgICAgY2xpZW50OiB7fSxcbiAgICAgICAgICAgIG9mZnNldDoge30sXG4gICAgICAgICAgICBzY3JvbGw6IHt9LFxuICAgICAgICAgICAgYm91bmRzOiB7fSxcbiAgICAgICAgICAgIG1hcmdpbjoge31cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLl9hbmltYXRpb25GcmFtZUlEID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX3Jlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX25vZGUgPSBudWxsO1xuICAgICAgICBfdGhpcy5fd2luZG93ID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5tZWFzdXJlID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgY29udGVudFJlY3QgPSBnZXRDb250ZW50UmVjdChfdGhpcy5fbm9kZSwgdHlwZXMgfHwgZ2V0VHlwZXMoX3RoaXMucHJvcHMpKTtcblxuICAgICAgICAgIGlmIChlbnRyaWVzKSB7XG4gICAgICAgICAgICBjb250ZW50UmVjdC5lbnRyeSA9IGVudHJpZXNbMF0uY29udGVudFJlY3Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuX2FuaW1hdGlvbkZyYW1lSUQgPSBfdGhpcy5fd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX3Jlc2l6ZU9ic2VydmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb250ZW50UmVjdDogY29udGVudFJlY3RcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5vblJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uUmVzaXplKGNvbnRlbnRSZWN0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLl9oYW5kbGVSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIGlmIChfdGhpcy5fcmVzaXplT2JzZXJ2ZXIgIT09IG51bGwgJiYgX3RoaXMuX25vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF90aGlzLl9yZXNpemVPYnNlcnZlci51bm9ic2VydmUoX3RoaXMuX25vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLl9ub2RlID0gbm9kZTtcbiAgICAgICAgICBfdGhpcy5fd2luZG93ID0gZ2V0V2luZG93T2YoX3RoaXMuX25vZGUpO1xuICAgICAgICAgIHZhciBpbm5lclJlZiA9IF90aGlzLnByb3BzLmlubmVyUmVmO1xuXG4gICAgICAgICAgaWYgKGlubmVyUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlubmVyUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGlubmVyUmVmKF90aGlzLl9ub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSBfdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMuX3Jlc2l6ZU9ic2VydmVyICE9PSBudWxsICYmIF90aGlzLl9ub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfdGhpcy5fcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShfdGhpcy5fbm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhDb250ZW50UmVjdC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZXNpemVPYnNlcnZlciA9IHRoaXMuX3dpbmRvdyAhPT0gbnVsbCAmJiB0aGlzLl93aW5kb3cuUmVzaXplT2JzZXJ2ZXIgPyBuZXcgdGhpcy5fd2luZG93LlJlc2l6ZU9ic2VydmVyKHRoaXMubWVhc3VyZSkgOiBuZXcgUmVzaXplT2JzZXJ2ZXIodGhpcy5tZWFzdXJlKTtcblxuICAgICAgICBpZiAodGhpcy5fbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5fbm9kZSk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25SZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNpemUoZ2V0Q29udGVudFJlY3QodGhpcy5fbm9kZSwgdHlwZXMgfHwgZ2V0VHlwZXModGhpcy5wcm9wcykpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5fd2luZG93ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lSUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZU9ic2VydmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgICAgIG9uUmVzaXplID0gX3RoaXMkcHJvcHMub25SZXNpemUsXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJpbm5lclJlZlwiLCBcIm9uUmVzaXplXCJdKTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICBtZWFzdXJlUmVmOiB0aGlzLl9oYW5kbGVSZWYsXG4gICAgICAgICAgbWVhc3VyZTogdGhpcy5tZWFzdXJlLFxuICAgICAgICAgIGNvbnRlbnRSZWN0OiB0aGlzLnN0YXRlLmNvbnRlbnRSZWN0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoQ29udGVudFJlY3Q7XG4gICAgfShDb21wb25lbnQpLCBfY2xhc3MucHJvcFR5cGVzID0ge1xuICAgICAgY2xpZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG9mZnNldDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgICAgYm91bmRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG1hcmdpbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIG9uUmVzaXplOiBQcm9wVHlwZXMuZnVuY1xuICAgIH0sIF90ZW1wO1xuICB9O1xufVxuXG52YXIgTWVhc3VyZSA9IHdpdGhDb250ZW50UmVjdCgpKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBtZWFzdXJlID0gX3JlZi5tZWFzdXJlLFxuICAgICAgbWVhc3VyZVJlZiA9IF9yZWYubWVhc3VyZVJlZixcbiAgICAgIGNvbnRlbnRSZWN0ID0gX3JlZi5jb250ZW50UmVjdCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlLFxuICAgIG1lYXN1cmVSZWY6IG1lYXN1cmVSZWYsXG4gICAgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0XG4gIH0pO1xufSk7XG5NZWFzdXJlLmRpc3BsYXlOYW1lID0gJ01lYXN1cmUnO1xuTWVhc3VyZS5wcm9wVHlwZXMuY2hpbGRyZW4gPSBQcm9wVHlwZXMuZnVuYztcblxuZXhwb3J0IGRlZmF1bHQgTWVhc3VyZTtcbmV4cG9ydCB7IHdpdGhDb250ZW50UmVjdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-measure/dist/index.esm.js\n");

/***/ })

};
;