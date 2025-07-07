const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML tag is used to display a picture on a webpage?",
    options: ["<img>", "<src>", "<picture>", "<image>"],
    correctAnswer: 0,
  },
  {
    question:
      "Which attribute is used to provide an alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    correctAnswer: 1,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<nav>"],
    correctAnswer: 1,
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    options: [
      "<input type='check'>",
      "<check>",
      "<checkbox>",
      "<input type='checkbox'>",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which element is used to define a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to define a list item?",
    options: ["<li>", "<ul>", "<item>", "<list>"],
    correctAnswer: 0,
  },
  {
    question: "How can you make a numbered list in HTML?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    correctAnswer: 1,
  },
  {
    question: "What is the correct way to start an HTML document?",
    options: ["<html>", "<body>", "<head>", "<!DOCTYPE html>"],
    correctAnswer: 3,
  },
  {
    question: "Which HTML tag is used to define emphasized text?",
    options: ["<em>", "<strong>", "<italic>", "<i>"],
    correctAnswer: 0,
  },
  {
    question: "Which tag is used to define the body of the HTML document?",
    options: ["<document>", "<head>", "<main>", "<body>"],
    correctAnswer: 3,
  },
  {
    question: "Which tag is used to define a paragraph in HTML?",
    options: ["<br>", "<p>", "<pre>", "<text>"],
    correctAnswer: 1,
  },
  {
    question: "Which input type defines a slider control?",
    options: ["range", "slider", "scale", "input-slider"],
    correctAnswer: 0,
  },
  {
    question: "How do you create a radio button in HTML?",
    options: [
      "<radio>",
      "<input type='radio'>",
      "<input type='button'>",
      "<input type='option'>",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tag is used to embed a video in HTML5?",
    options: ["<media>", "<embed>", "<video>", "<movie>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<hr>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag defines a division or a section in HTML?",
    options: ["<span>", "<section>", "<div>", "<part>"],
    correctAnswer: 2,
  },
  {
    question: "What attribute is used to specify the URL of a link?",
    options: ["src", "href", "url", "link"],
    correctAnswer: 1,
  },
  {
    question: "What does the <meta> tag provide?",
    options: [
      "Content preview",
      "Page metadata",
      "Website style",
      "Script execution",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML tag is used to define a table header?",
    options: ["<thead>", "<tr>", "<th>", "<td>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to define a dropdown list?",
    options: ["<input type='select'>", "<option>", "<select>", "<dropdown>"],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to display preformatted text?",
    options: ["<pre>", "<code>", "<format>", "<text>"],
    correctAnswer: 0,
  },
  {
    question:
      "Which tag represents contact information for the author of the document?",
    options: ["<info>", "<footer>", "<address>", "<author>"],
    correctAnswer: 2,
  },
  {
    question:
      "What is the correct HTML element for inserting a horizontal rule?",
    options: ["<hr>", "<line>", "<break>", "<separator>"],
    correctAnswer: 0,
  },
  {
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["class", "style", "font", "styles"],
    correctAnswer: 1,
  },
  {
    question: "How can you open a link in a new tab/window?",
    options: [
      "target='_tab'",
      "window='_blank'",
      "target='_blank'",
      "newwindow",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 0,
  },
  {
    question: "What does the <canvas> element do?",
    options: [
      "Plays audio",
      "Creates an area to draw graphics using JavaScript",
      "Embeds images",
      "Defines a section",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "title", "description", "src"],
    correctAnswer: 0,
  },
  {
    question: "How do you add a comment in HTML?",
    options: [
      "// this is a comment",
      "<!-- this is a comment -->",
      "/* this is a comment */",
      "<comment> this is a comment </comment>",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tag is used to define a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section-footer>", "<end>"],
    correctAnswer: 0,
  },
  {
    question: "Which element is used for audio content in HTML5?",
    options: ["<media>", "<sound>", "<audio>", "<music>"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct HTML tag to define an emphasized text?",
    options: ["<b>", "<em>", "<i>", "<highlight>"],
    correctAnswer: 1,
  },
  {
    question: "Which tag represents navigation links in HTML5?",
    options: ["<nav>", "<navigation>", "<menu>", "<links>"],
    correctAnswer: 0,
  },
  {
    question: "Which element defines important text?",
    options: ["<strong>", "<i>", "<bold>", "<mark>"],
    correctAnswer: 0,
  },
  {
    question: "What is the default alignment of text in HTML?",
    options: ["center", "left", "right", "justify"],
    correctAnswer: 1,
  },
  {
    question: "How do you embed an external webpage inside your HTML page?",
    options: ["<iframe>", "<embed>", "<object>", "<page>"],
    correctAnswer: 0,
  },
  {
    question: "Which input type is used for passwords?",
    options: [
      "<input type='password'>",
      "<input type='text' secure>",
      "<password>",
      "<input password>",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the correct HTML tag for inserting an image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    correctAnswer: 1,
  },
  {
    question: "Which attribute sets the destination of the link?",
    options: ["src", "link", "href", "action"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct way to create a drop-down list in HTML?",
    options: ["<dropdown>", "<input type='dropdown'>", "<select>", "<list>"],
    correctAnswer: 2,
  },
  {
    question:
      "Which attribute specifies that an input field must be filled out?",
    options: ["required", "validate", "must", "mandatory"],
    correctAnswer: 0,
  },
  {
    question: "What tag is used to define a cell in a table?",
    options: ["<tr>", "<td>", "<cell>", "<row>"],
    correctAnswer: 1,
  },
  {
    question: "Which HTML5 element is used to play video files?",
    options: ["<video>", "<player>", "<media>", "<movie>"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML tag is used to define an option in a drop-down list?",
    options: ["<select>", "<option>", "<input type='option'>", "<dropdown>"],
    correctAnswer: 1,
  },
  {
    question:
      "What is the correct HTML element to define a caption for a table?",
    options: ["<caption>", "<title>", "<table-caption>", "<head>"],
    correctAnswer: 0,
  },
  {
    question:
      "Which attribute is used to specify a unique identifier for an HTML element?",
    options: ["id", "class", "name", "key"],
    correctAnswer: 0,
  },
];

export default htmlQuestions;
