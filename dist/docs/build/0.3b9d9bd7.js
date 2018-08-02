;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    786: function(e, o, r) {
      "use strict"
      Object.defineProperty(o, "__esModule", { value: !0 })
      var n = (function() {
          function defineProperties(e, o) {
            for (var r = 0; r < o.length; r++) {
              var n = o[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(e, o, r) {
            return o && defineProperties(e.prototype, o), r && defineProperties(e, r), e
          }
        })(),
        t = r(0),
        i = _interopRequireDefault(t),
        s = _interopRequireDefault(r(1)),
        d = _interopRequireDefault(r(302)),
        a = r(791)
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e }
      }
      r(303), r(790), r(788)
      var c = 10,
        l = (function(e) {
          function Editor() {
            !(function _classCallCheck(e, o) {
              if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            })(this, Editor)
            var e = (function _possibleConstructorReturn(e, o) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !o || ("object" != typeof o && "function" != typeof o) ? e : o
            })(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this))
            return (e.handleChange = (0, d.default)(e.handleChange.bind(e), c)), e
          }
          return (
            (function _inherits(e, o) {
              if ("function" != typeof o && null !== o)
                throw new TypeError("Super expression must either be null or a function, not " + typeof o)
              ;(e.prototype = Object.create(o && o.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : (e.__proto__ = o))
            })(Editor, t.Component),
            n(Editor, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate() {
                  return !1
                },
              },
              {
                key: "handleChange",
                value: function handleChange(e, o, r) {
                  this.props.onChange(r)
                },
              },
              {
                key: "render",
                value: function render() {
                  var e = this.props.code,
                    o = this.context.config.editorConfig
                  return i.default.createElement(a.UnControlled, { value: e, onChange: this.handleChange, options: o })
                },
              },
            ]),
            Editor
          )
        })()
      ;(l.propTypes = { code: s.default.string.isRequired, onChange: s.default.func.isRequired }),
        (l.contextTypes = { config: s.default.object.isRequired }),
        (o.default = l)
    },
    787: function(e, o, r) {
      ;(e.exports = r(301)(!1)).push([
        e.i,
        "/* Loosely based on the Midnight Textmate theme */\n\n.cm-s-night.CodeMirror { background: #0a001f; color: #f8f8f8; }\n.cm-s-night div.CodeMirror-selected { background: #447; }\n.cm-s-night .CodeMirror-line::selection, .cm-s-night .CodeMirror-line > span::selection, .cm-s-night .CodeMirror-line > span > span::selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-line::-moz-selection, .cm-s-night .CodeMirror-line > span::-moz-selection, .cm-s-night .CodeMirror-line > span > span::-moz-selection { background: rgba(68, 68, 119, .99); }\n.cm-s-night .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-night .CodeMirror-guttermarker { color: white; }\n.cm-s-night .CodeMirror-guttermarker-subtle { color: #bbb; }\n.cm-s-night .CodeMirror-linenumber { color: #f8f8f8; }\n.cm-s-night .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-night span.cm-comment { color: #8900d1; }\n.cm-s-night span.cm-atom { color: #845dc4; }\n.cm-s-night span.cm-number, .cm-s-night span.cm-attribute { color: #ffd500; }\n.cm-s-night span.cm-keyword { color: #599eff; }\n.cm-s-night span.cm-string { color: #37f14a; }\n.cm-s-night span.cm-meta { color: #7678e2; }\n.cm-s-night span.cm-variable-2, .cm-s-night span.cm-tag { color: #99b2ff; }\n.cm-s-night span.cm-variable-3, .cm-s-night span.cm-def, .cm-s-night span.cm-type { color: white; }\n.cm-s-night span.cm-bracket { color: #8da6ce; }\n.cm-s-night span.cm-builtin, .cm-s-night span.cm-special { color: #ff9e59; }\n.cm-s-night span.cm-link { color: #845dc4; }\n.cm-s-night span.cm-error { color: #9d1e15; }\n\n.cm-s-night .CodeMirror-activeline-background { background: #1C005A; }\n.cm-s-night .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }\n",
        "",
      ])
    },
    788: function(e, o, r) {
      var n = r(787)
      "string" == typeof n && (n = [[e.i, n, ""]])
      var t = { hmr: !0, transform: void 0, insertInto: void 0 }
      r(300)(n, t)
      n.locals && (e.exports = n.locals)
    },
    789: function(e, o, r) {
      ;(e.exports = r(301)(!1)).push([
        e.i,
        "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
        "",
      ])
    },
    790: function(e, o, r) {
      var n = r(789)
      "string" == typeof n && (n = [[e.i, n, ""]])
      var t = { hmr: !0, transform: void 0, insertInto: void 0 }
      r(300)(n, t)
      n.locals && (e.exports = n.locals)
    },
    791: function(e, o, r) {
      "use strict"
      ;(function(e) {
        var n,
          t =
            Object.assign ||
            function(e) {
              for (var o = 1; o < arguments.length; o++) {
                var r = arguments[o]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            },
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                },
          s = ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, o) {
                e.__proto__ = o
              }) ||
            function(e, o) {
              for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
            }),
          function(e, o) {
            function __() {
              this.constructor = e
            }
            n(e, o), (e.prototype = null === o ? Object.create(o) : ((__.prototype = o.prototype), new __()))
          })
        Object.defineProperty(o, "__esModule", { value: !0 })
        var d,
          a = r(0),
          c = "undefined" == typeof navigator || !0 === e.PREVENT_CODEMIRROR_RENDER
        c || (d = r(126))
        var l = (function() {
            function Helper() {}
            return (
              (Helper.equals = function(e, o) {
                var r = this,
                  n = Object.keys,
                  t = void 0 === e ? "undefined" : i(e),
                  s = void 0 === o ? "undefined" : i(o)
                return e && o && "object" === t && t === s
                  ? n(e).length === n(o).length &&
                      n(e).every(function(n) {
                        return r.equals(e[n], o[n])
                      })
                  : e === o
              }),
              Helper
            )
          })(),
          p = (function() {
            function Shared(e, o) {
              ;(this.editor = e), (this.props = o)
            }
            return (
              (Shared.prototype.delegateCursor = function(e, o, r) {
                var n = this.editor.getDoc()
                r && this.editor.focus(), o ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 })
              }),
              (Shared.prototype.delegateScroll = function(e) {
                this.editor.scrollTo(e.x, e.y)
              }),
              (Shared.prototype.delegateSelection = function(e, o) {
                this.editor.setSelections(e), o && this.editor.focus()
              }),
              (Shared.prototype.apply = function(e) {
                e &&
                  e.selection &&
                  e.selection.ranges &&
                  this.delegateSelection(e.selection.ranges, e.selection.focus || !1),
                  e && e.cursor && this.delegateCursor(e.cursor, e.autoScroll || !1, e.autoFocus || !1),
                  e && e.scroll && this.delegateScroll(e.scroll)
              }),
              (Shared.prototype.applyNext = function(e, o, r) {
                e &&
                  e.selection &&
                  e.selection.ranges &&
                  o &&
                  o.selection &&
                  o.selection.ranges &&
                  !l.equals(e.selection.ranges, o.selection.ranges) &&
                  this.delegateSelection(o.selection.ranges, o.selection.focus || !1),
                  e &&
                    e.cursor &&
                    o &&
                    o.cursor &&
                    !l.equals(e.cursor, o.cursor) &&
                    this.delegateCursor(r.cursor || o.cursor, o.autoScroll || !1, o.autoCursor || !1),
                  e && e.scroll && o && o.scroll && !l.equals(e.scroll, o.scroll) && this.delegateScroll(o.scroll)
              }),
              (Shared.prototype.applyUserDefined = function(e, o) {
                o && o.cursor && this.delegateCursor(o.cursor, e.autoScroll || !1, e.autoFocus || !1)
              }),
              (Shared.prototype.wire = function(e) {
                var o = this
                Object.keys(e || {})
                  .filter(function(e) {
                    return /^on/.test(e)
                  })
                  .forEach(function(e) {
                    switch (e) {
                      case "onBlur":
                        o.editor.on("blur", function(e, r) {
                          o.props.onBlur(o.editor, r)
                        })
                        break
                      case "onContextMenu":
                        o.editor.on("contextmenu", function(e, r) {
                          o.props.onContextMenu(o.editor, r)
                        })
                        break
                      case "onCopy":
                        o.editor.on("copy", function(e, r) {
                          o.props.onCopy(o.editor, r)
                        })
                        break
                      case "onCursor":
                        o.editor.on("cursorActivity", function(e) {
                          o.props.onCursor(o.editor, o.editor.getCursor())
                        })
                        break
                      case "onCursorActivity":
                        o.editor.on("cursorActivity", function(e) {
                          o.props.onCursorActivity(o.editor)
                        })
                        break
                      case "onCut":
                        o.editor.on("cut", function(e) {
                          o.props.onCut(o.editor, event)
                        })
                        break
                      case "onDblClick":
                        o.editor.on("dblclick", function(e) {
                          o.props.onDblClick(o.editor, event)
                        })
                        break
                      case "onDragEnter":
                        o.editor.on("dragenter", function(e, r) {
                          o.props.onDragEnter(o.editor, r)
                        })
                        break
                      case "onDragLeave":
                        o.editor.on("dragleave", function(e) {
                          o.props.onDragLeave(o.editor, event)
                        })
                        break
                      case "onDragOver":
                        o.editor.on("dragover", function(e, r) {
                          o.props.onDragOver(o.editor, r)
                        })
                        break
                      case "onDragStart":
                        o.editor.on("dragstart", function(e) {
                          o.props.onDragStart(o.editor, event)
                        })
                        break
                      case "onDrop":
                        o.editor.on("drop", function(e, r) {
                          o.props.onDrop(o.editor, r)
                        })
                        break
                      case "onFocus":
                        o.editor.on("focus", function(e, r) {
                          o.props.onFocus(o.editor, r)
                        })
                        break
                      case "onGutterClick":
                        o.editor.on("gutterClick", function(e, r, n, t) {
                          o.props.onGutterClick(o.editor, r, n, t)
                        })
                        break
                      case "onKeyDown":
                        o.editor.on("keydown", function(e, r) {
                          o.props.onKeyDown(o.editor, r)
                        })
                        break
                      case "onKeyPress":
                        o.editor.on("keypress", function(e, r) {
                          o.props.onKeyPress(o.editor, r)
                        })
                        break
                      case "onKeyUp":
                        o.editor.on("keyup", function(e, r) {
                          o.props.onKeyUp(o.editor, r)
                        })
                        break
                      case "onMouseDown":
                        o.editor.on("mousedown", function(e) {
                          o.props.onMouseDown(o.editor, event)
                        })
                        break
                      case "onPaste":
                        o.editor.on("paste", function(e) {
                          o.props.onPaste(o.editor, event)
                        })
                        break
                      case "onScroll":
                        o.editor.on("scroll", function(e) {
                          o.props.onScroll(o.editor, o.editor.getScrollInfo())
                        })
                        break
                      case "onSelection":
                        o.editor.on("beforeSelectionChange", function(e, r) {
                          o.props.onSelection(o.editor, r)
                        })
                        break
                      case "onTouchStart":
                        o.editor.on("touchstart", function(e) {
                          o.props.onTouchStart(o.editor, event)
                        })
                        break
                      case "onUpdate":
                        o.editor.on("update", function(e) {
                          o.props.onUpdate(o.editor)
                        })
                        break
                      case "onViewportChange":
                        o.editor.on("viewportChange", function(e, r, n) {
                          o.props.onViewportChange(o.editor, r, n)
                        })
                    }
                  })
              }),
              Shared
            )
          })(),
          u = (function(e) {
            function Controlled(o) {
              var r = e.call(this, o) || this
              return c
                ? r
                : ((r.applied = !1),
                  (r.appliedNext = !1),
                  (r.appliedUserDefined = !1),
                  (r.deferred = null),
                  (r.emulating = !1),
                  (r.hydrated = !1),
                  (r.initCb = function() {
                    r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor)
                  }),
                  (r.mounted = !1),
                  r)
            }
            return (
              s(Controlled, e),
              (Controlled.prototype.hydrate = function(e) {
                var o = this,
                  r = t({}, d.defaults, this.editor.options, e.options || {})
                Object.keys(r).some(function(e) {
                  return o.editor.getOption(e) !== r[e]
                }) &&
                  Object.keys(r).forEach(function(n) {
                    e.options.hasOwnProperty(n) &&
                      o.editor.getOption(n) !== r[n] &&
                      (o.editor.setOption(n, r[n]), o.mirror.setOption(n, r[n]))
                  }),
                  this.hydrated ||
                    (this.mounted && this.deferred ? this.resolveChange() : this.initChange(e.value || "")),
                  (this.hydrated = !0)
              }),
              (Controlled.prototype.initChange = function(e) {
                this.emulating = !0
                var o = this.editor.lastLine(),
                  r = this.editor.getLine(this.editor.lastLine()).length
                this.editor.replaceRange(e || "", { line: 0, ch: 0 }, { line: o, ch: r }),
                  this.mirror.setValue(e),
                  this.editor.clearHistory(),
                  this.mirror.clearHistory(),
                  (this.emulating = !1)
              }),
              (Controlled.prototype.resolveChange = function() {
                ;(this.emulating = !0),
                  "undo" === this.deferred.origin
                    ? this.editor.undo()
                    : "redo" === this.deferred.origin
                      ? this.editor.redo()
                      : this.editor.replaceRange(
                          this.deferred.text,
                          this.deferred.from,
                          this.deferred.to,
                          this.deferred.origin
                        ),
                  (this.emulating = !1),
                  (this.deferred = null)
              }),
              (Controlled.prototype.mirrorChange = function(e) {
                return (
                  "undo" === e.origin
                    ? (this.editor.setHistory(this.mirror.getHistory()), this.mirror.undo())
                    : "redo" === e.origin
                      ? (this.editor.setHistory(this.mirror.getHistory()), this.mirror.redo())
                      : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
                  this.mirror.getValue()
                )
              }),
              (Controlled.prototype.componentWillMount = function() {
                c || (this.props.editorWillMount && this.props.editorWillMount())
              }),
              (Controlled.prototype.componentDidMount = function() {
                var e = this
                c ||
                  (this.props.defineMode &&
                    this.props.defineMode.name &&
                    this.props.defineMode.fn &&
                    d.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                  (this.editor = d(this.ref)),
                  (this.shared = new p(this.editor, this.props)),
                  (this.mirror = d(function() {})),
                  this.editor.on("electricInput", function() {
                    e.mirror.setHistory(e.editor.getHistory())
                  }),
                  this.editor.on("cursorActivity", function() {
                    e.mirror.setCursor(e.editor.getCursor())
                  }),
                  this.editor.on("beforeChange", function(o, r) {
                    if (!e.emulating) {
                      r.cancel(), (e.deferred = r)
                      var n = e.mirrorChange(e.deferred)
                      e.props.onBeforeChange && e.props.onBeforeChange(e.editor, e.deferred, n)
                    }
                  }),
                  this.editor.on("change", function(o, r) {
                    e.mounted && e.props.onChange && e.props.onChange(e.editor, r, e.editor.getValue())
                  }),
                  this.hydrate(this.props),
                  this.shared.apply(this.props),
                  (this.applied = !0),
                  (this.mounted = !0),
                  this.shared.wire(this.props),
                  this.props.editorDidMount &&
                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
              }),
              (Controlled.prototype.componentWillReceiveProps = function(e) {
                if (!c) {
                  var o = { cursor: null }
                  e.value !== this.props.value && (this.hydrated = !1),
                    this.props.autoCursor || void 0 === this.props.autoCursor || (o.cursor = this.editor.getCursor()),
                    this.hydrate(e),
                    this.appliedNext || (this.shared.applyNext(this.props, e, o), (this.appliedNext = !0)),
                    this.shared.applyUserDefined(this.props, o),
                    (this.appliedUserDefined = !0)
                }
              }),
              (Controlled.prototype.componentWillUnmount = function() {
                c || (this.props.editorWillUnmount && this.props.editorWillUnmount(d))
              }),
              (Controlled.prototype.shouldComponentUpdate = function(e, o) {
                return !c
              }),
              (Controlled.prototype.render = function() {
                var e = this
                if (c) return null
                var o = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2"
                return a.createElement("div", {
                  className: o,
                  ref: function ref(o) {
                    return (e.ref = o)
                  },
                })
              }),
              Controlled
            )
          })(a.Component)
        o.Controlled = u
        var h = (function(e) {
          function UnControlled(o) {
            var r = e.call(this, o) || this
            return c
              ? r
              : ((r.applied = !1),
                (r.appliedUserDefined = !1),
                (r.continueChange = !1),
                (r.detached = !1),
                (r.hydrated = !1),
                (r.initCb = function() {
                  r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor)
                }),
                (r.mounted = !1),
                (r.onBeforeChangeCb = function() {
                  r.continueChange = !0
                }),
                r)
          }
          return (
            s(UnControlled, e),
            (UnControlled.prototype.hydrate = function(e) {
              var o = this,
                r = t({}, d.defaults, this.editor.options, e.options || {})
              if (
                (Object.keys(r).some(function(e) {
                  return o.editor.getOption(e) !== r[e]
                }) &&
                  Object.keys(r).forEach(function(n) {
                    e.options.hasOwnProperty(n) && o.editor.getOption(n) !== r[n] && o.editor.setOption(n, r[n])
                  }),
                !this.hydrated)
              ) {
                var n = this.editor.lastLine(),
                  i = this.editor.getLine(this.editor.lastLine()).length
                this.editor.replaceRange(e.value || "", { line: 0, ch: 0 }, { line: n, ch: i })
              }
              this.hydrated = !0
            }),
            (UnControlled.prototype.componentWillMount = function() {
              c || (this.props.editorWillMount && this.props.editorWillMount())
            }),
            (UnControlled.prototype.componentDidMount = function() {
              var e = this
              c ||
                ((this.detached = !0 === this.props.detach),
                this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  d.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                (this.editor = d(this.ref)),
                (this.shared = new p(this.editor, this.props)),
                this.editor.on("beforeChange", function(o, r) {
                  e.props.onBeforeChange && e.props.onBeforeChange(e.editor, r, e.editor.getValue(), e.onBeforeChangeCb)
                }),
                this.editor.on("change", function(o, r) {
                  e.mounted &&
                    e.props.onChange &&
                    (e.props.onBeforeChange
                      ? e.continueChange && e.props.onChange(e.editor, r, e.editor.getValue())
                      : e.props.onChange(e.editor, r, e.editor.getValue()))
                }),
                this.hydrate(this.props),
                this.shared.apply(this.props),
                (this.applied = !0),
                (this.mounted = !0),
                this.shared.wire(this.props),
                this.editor.clearHistory(),
                this.props.editorDidMount &&
                  this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb))
            }),
            (UnControlled.prototype.componentWillReceiveProps = function(e) {
              if (
                (this.detached &&
                  !1 === e.detach &&
                  ((this.detached = !1), this.props.editorDidAttach && this.props.editorDidAttach(this.editor)),
                this.detached ||
                  !0 !== e.detach ||
                  ((this.detached = !0), this.props.editorDidDetach && this.props.editorDidDetach(this.editor)),
                !c && !this.detached)
              ) {
                var o = { cursor: null }
                e.value !== this.props.value &&
                  ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)),
                  this.props.autoCursor || void 0 === this.props.autoCursor || (o.cursor = this.editor.getCursor()),
                  this.hydrate(e),
                  this.applied || (this.shared.apply(this.props), (this.applied = !0)),
                  this.appliedUserDefined ||
                    (this.shared.applyUserDefined(this.props, o), (this.appliedUserDefined = !0))
              }
            }),
            (UnControlled.prototype.componentWillUnmount = function() {
              c || (this.props.editorWillUnmount && this.props.editorWillUnmount(d))
            }),
            (UnControlled.prototype.shouldComponentUpdate = function(e, o) {
              var r = !0
              return c && (r = !1), this.detached && (r = !1), r
            }),
            (UnControlled.prototype.render = function() {
              var e = this
              if (c) return null
              var o = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2"
              return a.createElement("div", {
                className: o,
                ref: function ref(o) {
                  return (e.ref = o)
                },
              })
            }),
            UnControlled
          )
        })(a.Component)
        o.UnControlled = h
      }.call(this, r(15)))
    },
  },
])
