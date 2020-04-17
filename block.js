/**
 * Just a static message
 * No external stylesheet added. Using inline styles
 */
(function (blocks, i18n, element) {
  var el = element.createElement;
  var __ = i18n.__;

  var blockStyle = {
    backgroundColor: "#900",
    color: "#fff",
    padding: "20px",
  };

  blocks.registerBlockType("gutenberg-brushup/gutenberg-mrinal", {
    title: __("Message Block", "gutenberg-brushup"),
    icon: "universal-access-alt",
    category: "layout",
    edit: function () {
      return el("p", { style: blockStyle }, "Hello world!!!");
    },
    save: function () {
      return el("p", { style: blockStyle }, "Hello world!!!");
    },
  });
})(window.wp.blocks, window.wp.i18n, window.wp.element);
