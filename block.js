/**
 * Just a static message
 * No external stylesheet added. Using inline styles
 */
(function (blocks, i18n, element) {
  var el = element.createElement;
  var __ = i18n.__;

  blocks.registerBlockType("gutenberg-brushup/gutenberg-mrinal", {
    title: __("Message Block", "gutenberg-brushup"),
    icon: "universal-access-alt",
    category: "layout",
    edit: function (props) {
      return el("p", { className: props.className }, "Hello world!!!");
    },
    save: function () {
      return el("p", {}, "Hello world!!!");
    },
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element);
