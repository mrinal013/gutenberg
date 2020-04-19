(function (blocks, i18n, editor, element) {
  var el = element.createElement;
  var RichText = editor.RichText;
  var __ = i18n.__;

  blocks.registerBlockType("gutenberg-brushup/gutenberg-mrinal", {
    title: __("Message Block", "gutenberg-brushup"),
    icon: "universal-access-alt",
    category: "layout",
    attributes: {
      content: {
        type: "array",
        source: "children",
        selector: "p",
      },
    },
    example: {
      attributes: {
        content: "Hello World",
      },
    },
    edit: function (props) {
      var content = props.attributes.content;
      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }

      return el(RichText, {
        tagName: "p",
        className: props.className,
        onChange: onChangeContent,
        value: content,
      });
    },

    save: function (props) {
      return el(RichText.Content, {
        tagName: "p",
        value: props.attributes.content,
      });
    },
  });
})(window.wp.blocks, window.wp.i18n, window.wp.editor, window.wp.element);
