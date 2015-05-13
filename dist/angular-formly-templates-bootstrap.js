// angular-formly-templates-bootstrap version 4.0.10-rmulder built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us>, Robert Mulder <rmulder@xmission.com> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-formly"), require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular-formly", "api-check", "angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesBootstrap"] = factory(require("angular-formly"), require("api-check"), require("angular"));
	else
		root["ngFormlyTemplatesBootstrap"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: "input",
	      template: "<input class=\"form-control\" ng-model=\"model[options.key]\">",
	      wrapper: ["bootstrapLabel", "bootstrapHasError"]
	    });
	  }
	  addInputType.$inject = ["formlyConfigProvider"];
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	"use strict";
	
	var angular = __webpack_require__(8);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: "bootstrapLabel",
	      template: __webpack_require__(17),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: "bootstrapHasError", template: __webpack_require__(18) }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(11)(ngModule);
	  __webpack_require__(1)(ngModule);
	  __webpack_require__(9)(ngModule);
	  __webpack_require__(13)(ngModule);
	  __webpack_require__(14)(ngModule);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var addons = _interopRequire(__webpack_require__(15));
	
	var description = _interopRequire(__webpack_require__(16));
	
	module.exports = function (ngModule) {
	  addons(ngModule);
	  description(ngModule);
	};
	
	//export default ngModule => {
	//  require('./addons')(ngModule);
	//  require('./description')(ngModule);
	//};
	//

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "radio",
	      template: __webpack_require__(20),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addRadioType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "checkbox",
	      template: __webpack_require__(19),
	      wrapper: ["bootstrapHasError"],
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "multiCheckbox",
	      template: __webpack_require__(21),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c,
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };
	
	        // initialize the checkboxes check property
	        var modelValue = $scope.model[opts.key];
	        if (angular.isArray(modelValue)) {
	          (function () {
	            var valueProp = to.valueProp || "value";
	            angular.forEach(to.options, function (v, index) {
	              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
	            });
	          })();
	        }
	
	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || "value"]);
	            }
	          });
	        }
	      }]
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ngModuleName = "formlyBootstrap";
	var angular = __webpack_require__(4);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(2)]);
	ngModule.constant("formlyBootstrapApiCheck", __webpack_require__(3)({
	  output: {
	    prefix: "angular-formly-bootstrap"
	  }
	}));
	ngModule.constant("formlyBootstrapVersion", ("4.0.10-rmulder"));
	
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	__webpack_require__(7)(ngModule);
	
	module.exports = ngModuleName;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "select",
	      template: __webpack_require__(23),
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
	      apiCheck: {
	        templateOptions: c.shape({
	          options: c.arrayOf(c.object),
	          labelProp: c.string.optional,
	          valueProp: c.string.optional,
	          groupProp: c.string.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addSelectType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider, formlyBootstrapApiCheck) {
	    var c = formlyBootstrapApiCheck;
	    formlyConfigProvider.setType({
	      name: "textarea",
	      template: "<textarea class=\"form-control\" ng-model=\"model[options.key]\"></textarea>",
	      wrapper: ["bootstrapLabel", "bootstrapHasError"],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: "rows" },
	          cols: { attribute: "cols" }
	        }
	      },
	      apiCheck: {
	        templateOptions: c.shape({
	          rows: c.number.optional,
	          cols: c.number.optional
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addTextareaType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
	    var addonTemplate = __webpack_require__(22);
	    var addonChecker = formlyBootstrapApiCheck.shape({
	      "class": formlyBootstrapApiCheck.string.optional,
	      text: formlyBootstrapApiCheck.string.optional
	    }).strict.optional;
	    var api = formlyBootstrapApiCheck.shape({
	      templateOptions: formlyBootstrapApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (options.type !== "input" || !options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyBootstrapApiCheck.warn([api], [options]);
	      return addonTemplate.replace("<formly-transclude></formly-transclude>", template);
	    });
	  }
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyBootstrapApiCheck"];
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (ngModule) {
	  ngModule.run(addDescriptionManipulator);
	
	  function addDescriptionManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.description)) {
	        var el = document.createElement("div");
	        el.appendChild(angular.element(template)[0]);
	        el.appendChild(angular.element("<p id=\"" + scope.id + "_description\"" + "class=\"help-block\"" + "ng-if=\"to.description\">" + "{{to.description}}" + "</p>")[0]);
	        var modelEls = angular.element(el.querySelectorAll("[ng-model]"));
	        if (modelEls) {
	          modelEls.attr("aria-describedby", scope.id + "_description");
	        }
	        return el.innerHTML;
	      } else {
	        return template;
	      }
	    });
	  }
	  addDescriptionManipulator.$inject = ["formlyConfig"];
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\" ng-if=\"to.addonLeft\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\" ng-if=\"to.addonRight\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<select class=\"form-control\"\n        ng-model=\"model[options.key]\"\n        ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options track by option[to.valueProp || 'value']\">\n</select>\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMzExMGU3ZDM2YzFhMTNiZTUwOCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3R5cGVzL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguY29tbW9uLmpzIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmpzIiwid2VicGFjazovLy8uL3J1bi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9sYWJlbC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcnVuL2FkZG9ucy5odG1sIiwid2VicGFjazovLy8uL3R5cGVzL3NlbGVjdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBLDBDOzs7Ozs7QUNGQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEc7Ozs7OztBQ2JBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEI7Ozs7OztBQ1JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLE1BQUssR0FBRywrREFBbUU7QUFDM0U7QUFDQTtBQUNBLEc7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1RBOztBQUVBLHVDQUFzQyxxREFBcUQ7O0FBRTNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDakJBLGdEOzs7Ozs7QUNBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEc7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEc7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixvQkFBb0I7QUFDckMsa0JBQWlCO0FBQ2pCO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxHOzs7Ozs7QUMxQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNklBQTRJLGdCQUFnQjtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEc7Ozs7OztBQ3RCQSwyQ0FBMEMsSUFBSSxtQ0FBbUMsVUFBVSxRQUFRLHdCQUF3QixrRTs7Ozs7O0FDQTNILHlEQUF3RCx1QkFBdUIseUQ7Ozs7OztBQ0EvRSxxTEFBb0wsVUFBVSxRQUFRLHdCQUF3Qix1Qjs7Ozs7O0FDQTlOLGlMQUFnTCxrQkFBa0IsbUpBQW1KLGdDQUFnQyxtQzs7Ozs7O0FDQXJYLHVMQUFzTCxrQkFBa0IseUhBQXlILGdDQUFnQyxtQzs7Ozs7O0FDQWpXLG9DQUFtQyw2Q0FBNkMsd0ZBQXdGLG9CQUFvQixrRkFBa0YsbUJBQW1CLHNKQUFzSixxQkFBcUIsb0ZBQW9GLG9CQUFvQiw0Qjs7Ozs7O0FDQXBqQiw4UyIsImZpbGUiOiJhbmd1bGFyLWZvcm1seS10ZW1wbGF0ZXMtYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc0Jvb3RzdHJhcFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpLCByZXF1aXJlKFwiYXBpLWNoZWNrXCIpLCByZXF1aXJlKFwiYW5ndWxhclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmdGb3JtbHlUZW1wbGF0ZXNCb290c3RyYXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJuZ0Zvcm1seVwiXSwgcm9vdFtcImFwaUNoZWNrXCJdLCByb290W1wiYW5ndWxhclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMzExMGU3ZDM2YzFhMTNiZTUwOFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2luZGV4LmNvbW1vblwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZElucHV0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkSW5wdXRUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcImlucHV0XCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+XCIsXG4gICAgICB3cmFwcGVyOiBbXCJib290c3RyYXBMYWJlbFwiLCBcImJvb3RzdHJhcEhhc0Vycm9yXCJdXG4gICAgfSk7XG4gIH1cbiAgYWRkSW5wdXRUeXBlLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdQcm92aWRlclwiXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL2lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIm5nRm9ybWx5XCIsXCJhbWRcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qczJcIjpcImFuZ3VsYXItZm9ybWx5XCIsXCJjb21tb25qc1wiOlwiYW5ndWxhci1mb3JtbHlcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifVxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNvbWUgdmVyc2lvbnMgb2YgYW5ndWxhciBkb24ndCBleHBvcnQgdGhlIGFuZ3VsYXIgbW9kdWxlIHByb3Blcmx5LFxuLy8gc28gd2UgZ2V0IGl0IGZyb20gd2luZG93IGluIHRoaXMgY2FzZS5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xuaWYgKCFhbmd1bGFyLnZlcnNpb24pIHtcbiAgYW5ndWxhciA9IHdpbmRvdy5hbmd1bGFyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hbmd1bGFyLWZpeC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xuXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbe1xuICAgICAgbmFtZTogXCJib290c3RyYXBMYWJlbFwiLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2xhYmVsLmh0bWxcIiksXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIGxhYmVsOiBjLnN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogYy5ib29sLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0sIHsgbmFtZTogXCJib290c3RyYXBIYXNFcnJvclwiLCB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaGFzLWVycm9yLmh0bWxcIikgfV0pO1xuICB9XG4gIGFkZFdyYXBwZXJzLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdQcm92aWRlclwiLCBcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgcmVxdWlyZShcIi4vY2hlY2tib3hcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9tdWx0aUNoZWNrYm94XCIpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZShcIi4vaW5wdXRcIikobmdNb2R1bGUpO1xuICByZXF1aXJlKFwiLi9yYWRpb1wiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3NlbGVjdFwiKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoXCIuL3RleHRhcmVhXCIpKG5nTW9kdWxlKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqOyB9O1xuXG52YXIgYWRkb25zID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2FkZG9uc1wiKSk7XG5cbnZhciBkZXNjcmlwdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9kZXNjcmlwdGlvblwiKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIGFkZG9ucyhuZ01vZHVsZSk7XG4gIGRlc2NyaXB0aW9uKG5nTW9kdWxlKTtcbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuLy8gIHJlcXVpcmUoJy4vYWRkb25zJykobmdNb2R1bGUpO1xuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XG4vL307XG4vL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ydW4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInJhZGlvXCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vcmFkaW8uaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImJvb3RzdHJhcExhYmVsXCIsIFwiYm9vdHN0cmFwSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBub0Zvcm1Db250cm9sOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgb3B0aW9uczogYy5hcnJheU9mKGMub2JqZWN0KSxcbiAgICAgICAgICBsYWJlbFByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIHZhbHVlUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbiAgYWRkUmFkaW9UeXBlLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdQcm92aWRlclwiLCBcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvcmFkaW8uanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZENoZWNrYm94VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2hlY2tib3hUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcImNoZWNrYm94XCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vY2hlY2tib3guaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImJvb3RzdHJhcEhhc0Vycm9yXCJdLFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBsYWJlbDogYy5zdHJpbmdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbiAgYWRkQ2hlY2tib3hUeXBlLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdQcm92aWRlclwiLCBcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvY2hlY2tib3guanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5nTW9kdWxlKSB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICB2YXIgYyA9IGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJtdWx0aUNoZWNrYm94XCIsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vbXVsdGlDaGVja2JveC5odG1sXCIpLFxuICAgICAgd3JhcHBlcjogW1wiYm9vdHN0cmFwTGFiZWxcIiwgXCJib290c3RyYXBIYXNFcnJvclwiXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBvcHRpb25zOiBjLmFycmF5T2YoYy5vYmplY3QpLFxuICAgICAgICAgIGxhYmVsUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgdmFsdWVQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGMsXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi9bXCIkc2NvcGVcIiwgZnVuY3Rpb24gY29udHJvbGxlcigkc2NvcGUpIHtcbiAgICAgICAgdmFyIHRvID0gJHNjb3BlLnRvO1xuICAgICAgICB2YXIgb3B0cyA9ICRzY29wZS5vcHRpb25zO1xuICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveCA9IHtcbiAgICAgICAgICBjaGVja2VkOiBbXSxcbiAgICAgICAgICBjaGFuZ2U6IHNldE1vZGVsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2hlY2tib3hlcyBjaGVjayBwcm9wZXJ0eVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9ICRzY29wZS5tb2RlbFtvcHRzLmtleV07XG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IHRvLnZhbHVlUHJvcCB8fCBcInZhbHVlXCI7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2godG8ub3B0aW9ucywgZnVuY3Rpb24gKHYsIGluZGV4KSB7XG4gICAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vZGVsKCkge1xuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZCwgZnVuY3Rpb24gKGNoZWNrYm94LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgXCJ2YWx1ZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSk7XG4gIH1cbiAgYWRkQ2hlY2tib3hUeXBlLiRpbmplY3QgPSBbXCJmb3JtbHlDb25maWdQcm92aWRlclwiLCBcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvbXVsdGlDaGVja2JveC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG5nTW9kdWxlTmFtZSA9IFwiZm9ybWx5Qm9vdHN0cmFwXCI7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCIuL2FuZ3VsYXItZml4XCIpO1xudmFyIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZShcImFuZ3VsYXItZm9ybWx5XCIpXSk7XG5uZ01vZHVsZS5jb25zdGFudChcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCIsIHJlcXVpcmUoXCJhcGktY2hlY2tcIikoe1xuICBvdXRwdXQ6IHtcbiAgICBwcmVmaXg6IFwiYW5ndWxhci1mb3JtbHktYm9vdHN0cmFwXCJcbiAgfVxufSkpO1xubmdNb2R1bGUuY29uc3RhbnQoXCJmb3JtbHlCb290c3RyYXBWZXJzaW9uXCIsIFZFUlNJT04pO1xuXG5yZXF1aXJlKFwiLi93cmFwcGVyc1wiKShuZ01vZHVsZSk7XG5yZXF1aXJlKFwiLi90eXBlc1wiKShuZ01vZHVsZSk7XG5yZXF1aXJlKFwiLi9ydW5cIikobmdNb2R1bGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5nTW9kdWxlTmFtZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW5kZXguY29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZ01vZHVsZSkge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2spIHtcbiAgICB2YXIgYyA9IGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogXCJzZWxlY3RcIixcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9zZWxlY3QuaHRtbFwiKSxcbiAgICAgIHdyYXBwZXI6IFtcImJvb3RzdHJhcExhYmVsXCIsIFwiYm9vdHN0cmFwSGFzRXJyb3JcIl0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIGdyb3VwUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbiAgYWRkU2VsZWN0VHlwZS4kaW5qZWN0ID0gW1wiZm9ybWx5Q29uZmlnUHJvdmlkZXJcIiwgXCJmb3JtbHlCb290c3RyYXBBcGlDaGVja1wiXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3NlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlCb290c3RyYXBBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiBcInRleHRhcmVhXCIsXG4gICAgICB0ZW1wbGF0ZTogXCI8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+PC90ZXh0YXJlYT5cIixcbiAgICAgIHdyYXBwZXI6IFtcImJvb3RzdHJhcExhYmVsXCIsIFwiYm9vdHN0cmFwSGFzRXJyb3JcIl0sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcbiAgICAgICAgICByb3dzOiB7IGF0dHJpYnV0ZTogXCJyb3dzXCIgfSxcbiAgICAgICAgICBjb2xzOiB7IGF0dHJpYnV0ZTogXCJjb2xzXCIgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICByb3dzOiBjLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICBjb2xzOiBjLm51bWJlci5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICB9KTtcbiAgfVxuICBhZGRUZXh0YXJlYVR5cGUuJGluamVjdCA9IFtcImZvcm1seUNvbmZpZ1Byb3ZpZGVyXCIsIFwiZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2tcIl07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy90ZXh0YXJlYS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUucnVuKGFkZEFkZG9uc01hbmlwdWxhdG9yKTtcblxuICBmdW5jdGlvbiBhZGRBZGRvbnNNYW5pcHVsYXRvcihmb3JtbHlDb25maWcsIGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrKSB7XG4gICAgdmFyIGFkZG9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hZGRvbnMuaHRtbFwiKTtcbiAgICB2YXIgYWRkb25DaGVja2VyID0gZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgXCJjbGFzc1wiOiBmb3JtbHlCb290c3RyYXBBcGlDaGVjay5zdHJpbmcub3B0aW9uYWwsXG4gICAgICB0ZXh0OiBmb3JtbHlCb290c3RyYXBBcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgdmFyIGFwaSA9IGZvcm1seUJvb3RzdHJhcEFwaUNoZWNrLnNoYXBlKHtcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogZm9ybWx5Qm9vdHN0cmFwQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgICBhZGRvbkxlZnQ6IGFkZG9uQ2hlY2tlcixcbiAgICAgICAgYWRkb25SaWdodDogYWRkb25DaGVja2VyXG4gICAgICB9KVxuICAgIH0pO1xuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24gKHRlbXBsYXRlLCBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy50eXBlICE9PSBcImlucHV0XCIgfHwgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uTGVmdCAmJiAhb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuYWRkb25SaWdodCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBmb3JtbHlCb290c3RyYXBBcGlDaGVjay53YXJuKFthcGldLCBbb3B0aW9uc10pO1xuICAgICAgcmV0dXJuIGFkZG9uVGVtcGxhdGUucmVwbGFjZShcIjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlwiLCB0ZW1wbGF0ZSk7XG4gICAgfSk7XG4gIH1cbiAgYWRkQWRkb25zTWFuaXB1bGF0b3IuJGluamVjdCA9IFtcImZvcm1seUNvbmZpZ1wiLCBcImZvcm1seUJvb3RzdHJhcEFwaUNoZWNrXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcnVuL2FkZG9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmdNb2R1bGUpIHtcbiAgbmdNb2R1bGUucnVuKGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uTWFuaXB1bGF0b3IoZm9ybWx5Q29uZmlnKSB7XG4gICAgZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIucHVzaChmdW5jdGlvbiBhcmlhRGVzY3JpYmVkQnkodGVtcGxhdGUsIG9wdGlvbnMsIHNjb3BlKSB7XG4gICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQob3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuZGVzY3JpcHRpb24pKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudCh0ZW1wbGF0ZSlbMF0pO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQoXCI8cCBpZD1cXFwiXCIgKyBzY29wZS5pZCArIFwiX2Rlc2NyaXB0aW9uXFxcIlwiICsgXCJjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCJcIiArIFwibmctaWY9XFxcInRvLmRlc2NyaXB0aW9uXFxcIj5cIiArIFwie3t0by5kZXNjcmlwdGlvbn19XCIgKyBcIjwvcD5cIilbMF0pO1xuICAgICAgICB2YXIgbW9kZWxFbHMgPSBhbmd1bGFyLmVsZW1lbnQoZWwucXVlcnlTZWxlY3RvckFsbChcIltuZy1tb2RlbF1cIikpO1xuICAgICAgICBpZiAobW9kZWxFbHMpIHtcbiAgICAgICAgICBtb2RlbEVscy5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBzY29wZS5pZCArIFwiX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYWRkRGVzY3JpcHRpb25NYW5pcHVsYXRvci4kaW5qZWN0ID0gW1wiZm9ybWx5Q29uZmlnXCJdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcnVuL2Rlc2NyaXB0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgPGxhYmVsIGZvcj1cXFwie3tpZH19XFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+XFxuICAgIHt7dG8ubGFiZWx9fVxcbiAgICB7e3RvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcbiAgPC9sYWJlbD5cXG4gIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2xhYmVsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8bGFiZWw+XFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+XFxuXFx0XFx0e3t0by5sYWJlbH19XFxuXFx0XFx0e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG4gIDxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJyYWRpb1xcXCI+XFxuICAgIDxsYWJlbD5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxuICAgICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXG4gICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiXFxuICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddXFxcIlxcbiAgICAgICAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxuICAgIDwvbGFiZWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9yYWRpby5odG1sXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxuICA8ZGl2IG5nLXJlcGVhdD1cXFwiKGtleSwgb3B0aW9uKSBpbiB0by5vcHRpb25zXFxcIiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICA8bGFiZWw+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxuICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJtdWx0aUNoZWNrYm94LmNoZWNrZWRbJGluZGV4XVxcXCJcXG4gICAgICAgICAgICAgbmctY2hhbmdlPVxcXCJtdWx0aUNoZWNrYm94LmNoYW5nZSgpXFxcIj5cXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxuICAgIDwvbGFiZWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcInsnaW5wdXQtZ3JvdXAnOiB0by5hZGRvbkxlZnQgfHwgdG8uYWRkb25SaWdodH1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCIgbmctaWY9XFxcInRvLmFkZG9uTGVmdFxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwie3t0by5hZGRvbkxlZnQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uTGVmdC5jbGFzc1xcXCI+PC9pPlxcbiAgICAgICAgPHNwYW4gbmctaWY9XFxcInRvLmFkZG9uTGVmdC50ZXh0XFxcIj57e3RvLmFkZG9uTGVmdC50ZXh0fX08L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0XFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJ7e3RvLmFkZG9uUmlnaHQuY2xhc3N9fVxcXCIgbmctaWY9XFxcInRvLmFkZG9uUmlnaHQuY2xhc3NcXFwiPjwvaT5cXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LnRleHRcXFwiPnt7dG8uYWRkb25SaWdodC50ZXh0fX08L3NwYW4+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3J1bi9hZGRvbnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXG4gICAgICAgIG5nLW9wdGlvbnM9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10gYXMgb3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddIGdyb3VwIGJ5IG9wdGlvblt0by5ncm91cFByb3AgfHwgJ2dyb3VwJ10gZm9yIG9wdGlvbiBpbiB0by5vcHRpb25zIHRyYWNrIGJ5IG9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ11cXFwiPlxcbjwvc2VsZWN0PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3NlbGVjdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=