import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";

export default class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  SimpleUploadAdapter,
  ImageToolbar,
  Image,
  ImageStyle,
  ImageCaption,
  ImageResize,
  ImageUpload,
  FontBackgroundColor,
  FontColor,
  FontSize,
  FontFamily,
  RemoveFormat,
  Strikethrough,
  Table,
  Alignment,
  BlockQuote,
  Bold,
  Highlight,
  Heading,
  HorizontalLine,
  IndentBlock,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  MediaEmbedToolbar,
  Superscript,
  Subscript,
  TableCellProperties,
  TableToolbar,
  TableProperties,
  Underline,
  Essentials,
  Paragraph
];

Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "alignment",
      "|",
      "removeFormat",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "|",
      "bulletedList",
      "numberedList",
      "indent",
      "outdent",
      "|",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "blockQuote",
      "horizontalLine",
      "superscript",
      "subscript",
      "|",
      "link",
      "insertTable",
      "imageUpload",
      "mediaEmbed",
      "|",
      "undo",
      "redo"
    ]
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "|",
      "imageStyle:full",
      "imageStyle:alignRight",
      "imageStyle:alignCenter",
      "imageStyle:alignLeft"
    ],
    styles: ["full", "alignRight", "alignCenter", "alignLeft"]
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties"
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "ar"
};
