(function (blocks, i18n, editor, element) {
  var el = element.createElement;
  var RichText = editor.RichText;
  var AlignmentToolbar = editor.AlignmentToolbar;
  var BlockControls = editor.BlockControls;
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
      alignment: {
        type: "string",
        default: "none",
      },
    },
    example: {
      attributes: {
        content: "Hello World",
      },
    },
    edit: function (props) {
      var content = props.attributes.content;
      var alignment = props.attributes.alignment;

      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }

      function onChangeAlignment(newAlignment) {
        props.setAttributes({
          alignment: newAlignment === undefined ? "none" : newAlignment,
        });
      }

      return [
        el(
          BlockControls,
          {
            key: "controls",
          },
          el(AlignmentToolbar, {
            value: alignment,
            onChange: onChangeAlignment,
          })
        ),
        el(RichText, {
          key: "richtext",
          tagName: "p",
          style: { textAlign: alignment },
          className: props.className,
          onChange: onChangeContent,
          value: content,
        }),
      ];
    },

    save: function (props) {
      return el(RichText.Content, {
        tagName: "p",
        className: "gutenberg-brushup-align-" + props.attributes.alignment,
        value: props.attributes.content,
      });
    },
  });
})(window.wp.blocks, window.wp.i18n, window.wp.editor, window.wp.element);
