const pythonQuestions = [
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["def", "func", "define", "function"],
    correctAnswer: 0,
  },
  {
    question: "What is the output of: `print(type([]))`?",
    options: [
      "<class 'list'>",
      "<class 'tuple'>",
      "<class 'set'>",
      "<class 'dict'>",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which data type is immutable in Python?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".pyth", ".pt", ".py", ".pyt"],
    correctAnswer: 2,
  },
  {
    question: "What does `len()` do in Python?",
    options: ["Returns length", "Deletes item", "Adds elements", "Sorts items"],
    correctAnswer: 0,
  },
  {
    question: "Which of these is not a valid keyword in Python?",
    options: ["lambda", "return", "async", "function"],
    correctAnswer: 3,
  },
  {
    question: "How do you insert COMMENTS in Python code?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "/* This is a comment */",
      "` This is a comment",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `bool(0)` in Python?",
    options: ["True", "False", "0", "None"],
    correctAnswer: 1,
  },
  {
    question: "Which operator is used for exponentiation?",
    options: ["^", "**", "//", "%"],
    correctAnswer: 1,
  },
  {
    question: "Which of these collections is ordered and changeable?",
    options: ["Set", "List", "Tuple", "Dictionary"],
    correctAnswer: 1,
  },
  {
    question: "What will `print(2 == '2')` output?",
    options: ["True", "False", "2", "Error"],
    correctAnswer: 1,
  },
  {
    question: "Which module in Python supports regular expressions?",
    options: ["string", "regex", "re", "regexp"],
    correctAnswer: 2,
  },
  {
    question: "How can you start a virtual environment in Python?",
    options: [
      "source env/bin/activate",
      "python -startenv",
      "env.start()",
      "pyenv activate",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which built-in function converts a string to an integer?",
    options: ["str()", "chr()", "int()", "ord()"],
    correctAnswer: 2,
  },
  {
    question: "What is used to define a block of code in Python?",
    options: ["Curly braces", "Parentheses", "Indentation", "Semicolon"],
    correctAnswer: 2,
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "except", "error", "handle"],
    correctAnswer: 1,
  },
  {
    question: "What does the `pass` statement do?",
    options: [
      "Skips execution",
      "Raises error",
      "Returns value",
      "Ends program",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which function is used to get user input?",
    options: ["get()", "input()", "scan()", "read()"],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `print(3 * 'ab')`?",
    options: ["ababab", "ab3", "Error", "ab ab ab"],
    correctAnswer: 0,
  },
  {
    question: "What is the output of `print(bool(''))`?",
    options: ["True", "False", "None", "0"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is used to define a class in Python?",
    options: ["def", "func", "class", "structure"],
    correctAnswer: 2,
  },
  {
    question: "What is the output of `type({})`?",
    options: [
      "<class 'set'>",
      "<class 'list'>",
      "<class 'dict'>",
      "<class 'tuple'>",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does `break` do in a loop?",
    options: [
      "Skips current iteration",
      "Exits the loop",
      "Restarts the loop",
      "Ends the program",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the `continue` statement do?",
    options: [
      "Skips to next iteration",
      "Ends the loop",
      "Repeats the loop",
      "Breaks the loop",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the output of `bool([])`?",
    options: ["True", "False", "Error", "None"],
    correctAnswer: 1,
  },
  {
    question: "Which keyword is used to create a generator function?",
    options: ["yield", "return", "generate", "function"],
    correctAnswer: 0,
  },
  {
    question: "What does `is` compare in Python?",
    options: ["Value", "Type", "Identity", "Scope"],
    correctAnswer: 2,
  },
  {
    question: "How is a dictionary defined in Python?",
    options: [
      "{ key: value }",
      "[ key: value ]",
      "{ key = value }",
      "( key: value )",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which function gives the number of items in a list?",
    options: ["count()", "size()", "len()", "length()"],
    correctAnswer: 2,
  },
  {
    question:
      "What is the default value returned by a function if not specified?",
    options: ["null", "undefined", "None", "0"],
    correctAnswer: 2,
  },
  {
    question: "How do you declare a list?",
    options: ["list = {}", "list = []", "list = ()", "list = <>"],
    correctAnswer: 1,
  },
  {
    question: "What does `range(3)` return?",
    options: ["[1, 2, 3]", "[0, 1, 2]", "[1, 2]", "[0, 1, 2, 3]"],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `'5' + '3'`?",
    options: ["8", "53", "Error", "'8'"],
    correctAnswer: 1,
  },
  {
    question: "Which one is a Python boolean value?",
    options: ["TRUE", "Yes", "True", "1"],
    correctAnswer: 2,
  },
  {
    question: "Which keyword is used to create an anonymous function?",
    options: ["def", "lambda", "anon", "func"],
    correctAnswer: 1,
  },
  {
    question: "Which Python package is used for data analysis?",
    options: ["NumPy", "Flask", "Pandas", "Tkinter"],
    correctAnswer: 2,
  },
  {
    question: "How do you install a package in Python?",
    options: ["install package", "py install", "pip install", "package add"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is a mutable type?",
    options: ["tuple", "string", "list", "int"],
    correctAnswer: 2,
  },
  {
    question: "How can you convert a string to lowercase?",
    options: [
      "str.lower()",
      "lower(str)",
      "str.toLower()",
      "str.to_lowercase()",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does `open('file.txt', 'r')` do?",
    options: [
      "Opens file to read",
      "Deletes file",
      "Writes file",
      "Creates file",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which exception is raised when a variable is not found?",
    options: ["KeyError", "IndexError", "NameError", "ValueError"],
    correctAnswer: 2,
  },
  {
    question: "What is the result of `10 // 3` in Python?",
    options: ["3.33", "3", "4", "Error"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of `__init__` in a class?",
    options: [
      "To delete object",
      "To initialize object",
      "To create method",
      "To override function",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `type(True)`?",
    options: [
      "<class 'bool'>",
      "<class 'int'>",
      "<class 'str'>",
      "<class 'object'>",
    ],
    correctAnswer: 0,
  },
  {
    question: "What will `print('abc' * 2)` output?",
    options: ["abc2", "abcabc", "Error", "abc abc"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following methods is used with files?",
    options: ["append()", "push()", "read()", "length()"],
    correctAnswer: 2,
  },
  {
    question: "Which function is used to find the maximum of a list?",
    options: ["max()", "maximum()", "biggest()", "high()"],
    correctAnswer: 0,
  },
  {
    question: "What will `int('10') + float('5.5')` return?",
    options: ["15", "15.5", "105.5", "Error"],
    correctAnswer: 1,
  },
  {
    question: "What is the output of `len({'a':1, 'b':2})`?",
    options: ["2", "1", "0", "Error"],
    correctAnswer: 0,
  },
  {
    question: "Which of these is a correct way to handle exceptions?",
    options: [
      "try: ... catch: ...",
      "handle: ...",
      "try: ... except: ...",
      "error: ... end",
    ],
    correctAnswer: 2,
  },
];
export default pythonQuestions;
