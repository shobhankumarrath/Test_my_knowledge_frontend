const typescriptQuestions = [
  {
    question: "What is TypeScript?",
    options: [
      "A superset of JavaScript that adds static typing",
      "A backend framework",
      "A database language",
      "A replacement for HTML",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command compiles a TypeScript file?",
    options: ["node", "tsrun", "tsc", "npm build"],
    correctAnswer: 2,
  },
  {
    question: "Which TypeScript keyword creates a custom type?",
    options: ["typedef", "interface", "module", "struct"],
    correctAnswer: 1,
  },
  {
    question: "How do you specify a variable as a string?",
    options: [
      "let name: string;",
      "name = string",
      "let string = name;",
      "let name = string;",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does the `readonly` modifier do?",
    options: [
      "Allows reassignment only in constructor",
      "Disables access from outside",
      "Prevents a property from being reassigned",
      "Makes a variable constant within a function",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which utility type makes all properties optional?",
    options: ["Partial<T>", "Readonly<T>", "Nullable<T>", "Optional<T>"],
    correctAnswer: 0,
  },
  {
    question: "What is the output type of `typeof` in TypeScript?",
    options: ["Function", "A string literal of the type", "Any", "Object"],
    correctAnswer: 1,
  },
  {
    question: "How do you define a tuple in TypeScript?",
    options: [
      "(number, string)",
      "[number, string]",
      "{ number, string }",
      "<number, string>",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does `never` type represent?",
    options: [
      "A value that never occurs",
      "A nullable type",
      "A variable that can be anything",
      "A default return type",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the correct way to declare an enum?",
    options: [
      "enum Color {Red, Green, Blue}",
      "enum Color = {Red, Green, Blue}",
      "Color = enum {Red, Green, Blue}",
      "Color: enum {Red, Green, Blue}",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a type assertion?",
    options: [
      "typeOf(value)",
      "assert(value, string)",
      "value:string",
      "value as string",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the use of `keyof` operator?",
    options: [
      "Get keys of an object as a union type",
      "Convert type to string",
      "Filter types from an object",
      "Get value type from key",
    ],
    correctAnswer: 0,
  },
  {
    question: "What will `const x: any = 5;` allow?",
    options: [
      "Dynamic type assignment",
      "Only numbers allowed",
      "Strict type checking",
      "No value assignment",
    ],
    correctAnswer: 0,
  },
  {
    question: "How can you prevent a class from being instantiated?",
    options: [
      "Use `private` constructor",
      "Use `abstract` keyword",
      "Declare class as `readonly`",
      "Use `final` keyword",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which is a correct return type for a function returning a promise?",
    options: ["Async<void>", "Promise", "Promise<any>", "void"],
    correctAnswer: 2,
  },
  {
    question: "What is a discriminated union?",
    options: [
      "An array of union types",
      "A pattern for type-safe unions using a common property",
      "A switch statement for enums",
      "A way to merge interfaces",
    ],
    correctAnswer: 1,
  },
  {
    question: "How to import a type only?",
    options: [
      "importType MyType from './types'",
      "require('./types')",
      "import type { MyType } from './types';",
      "import { MyType } from './types';",
    ],
    correctAnswer: 2,
  },
  {
    question: "How to define a function type?",
    options: [
      "type MyFunc = (x: number) => number;",
      "type MyFunc(x: number): number;",
      "let MyFunc = number => number;",
      "type MyFunc = number -> number;",
    ],
    correctAnswer: 0,
  },
  {
    question: "What type is assigned to an empty array by default?",
    options: ["never[]", "any[]", "unknown[]", "null[]"],
    correctAnswer: 0,
  },
  {
    question: "Which of these is NOT a primitive type in TypeScript?",
    options: ["string", "object", "undefined", "null"],
    correctAnswer: 1,
  },
  {
    question: "Which flag in tsconfig.json enables strict type checking?",
    options: ["strictMode", "typeSafe", "strict", "checkTypes"],
    correctAnswer: 2,
  },
  {
    question: "How do you make a property optional in an interface?",
    options: [
      "Add `optional` keyword",
      "Use `?` after property name",
      "Use `maybe` keyword",
      "Wrap property in brackets",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of `infer` in conditional types?",
    options: [
      "Infer types dynamically within a condition",
      "Import interfaces only",
      "Create optional properties",
      "Export only matching types",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do you ensure a class property can’t be changed?",
    options: [
      "Use the `static` keyword",
      "Use the `readonly` modifier",
      "Use `private` access",
      "Use `const` inside constructor",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does `Record<Keys, Type>` do?",
    options: [
      "Creates an object type with keys of type `Keys` and values of type `Type`",
      "Creates an array of keys",
      "Returns a union of key-value pairs",
      "Logs object values",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do you define a generic function in TypeScript?",
    options: [
      "function name<Type>() {}",
      "function<Type> name() {}",
      "function name<T>() {}",
      "def name<T>() {}",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which type allows any value, but disables type checking?",
    options: ["unknown", "any", "never", "void"],
    correctAnswer: 1,
  },
  {
    question: "What is the main benefit of using `unknown` over `any`?",
    options: [
      "It is shorter to write",
      "You must narrow it before use",
      "It improves performance",
      "It compiles faster",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which type is used for a function that never returns?",
    options: ["never", "void", "undefined", "null"],
    correctAnswer: 0,
  },
  {
    question: "How to define a union type for a variable?",
    options: [
      "let a: string | number",
      "let a: (string, number)",
      "let a = string | number",
      "let a: string || number",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the output of `typeof null` in JavaScript and TypeScript?",
    options: ["`null`", "`undefined`", "`object`", "`function`"],
    correctAnswer: 2,
  },
  {
    question: "Which option defines a constant tuple?",
    options: [
      "const data: [number, string] = [1, 'a']",
      "const data = new Tuple(1, 'a')",
      "const data: (number, string) = (1, 'a')",
      "let data = [1, 'a']",
    ],
    correctAnswer: 0,
  },
  {
    question: "How can you create a type from an object’s keys?",
    options: [
      "typeof keys",
      "`keyof typeof` object",
      "`typeof keyof` object",
      "`Object.keys(object)`",
    ],
    correctAnswer: 1,
  },
  {
    question: "How to import multiple types from a file?",
    options: [
      "import { Type1 & Type2 }",
      "import types from file",
      "import { Type1, Type2 }",
      "import types as Type1, Type2",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the difference between `interface` and `type`?",
    options: [
      "Types are used only for classes",
      "Interfaces can be merged; types cannot",
      "Interfaces are faster",
      "Types allow inheritance, interfaces do not",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you define a default value for a parameter?",
    options: [
      "Use = after type",
      "Use default keyword",
      "Use ? followed by value",
      "Assign value in function declaration",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which is NOT a valid primitive type in TypeScript?",
    options: ["boolean", "number", "any", "object"],
    correctAnswer: 3,
  },
  {
    question: "Which is true about type guards?",
    options: [
      "They narrow types using `typeof`, `in`, or `instanceof`",
      "They prevent access to private members",
      "They convert variables to interfaces",
      "They are used for string manipulation",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is `void` used for in TypeScript?",
    options: [
      "Represents undefined return type",
      "Represents a null variable",
      "Denotes no variable required",
      "Used in enums",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which type utility makes properties required?",
    options: ["Required<T>", "Partial<T>", "Mandatory<T>", "AllRequired<T>"],
    correctAnswer: 0,
  },
  {
    question: "What does the `Pick<T, K>` utility type do?",
    options: [
      "Selects a subset of properties from T",
      "Removes properties from T",
      "Combines T with K",
      "Makes all T properties optional",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does the `Omit<T, K>` utility type do?",
    options: [
      "Creates a union of T and K",
      "Picks only required fields from T",
      "Removes specified keys K from type T",
      "Transforms K to optional",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which operator is used for non-null assertion?",
    options: ["?", "!", "??", "==!"],
    correctAnswer: 1,
  },
  {
    question: "How to specify a variable can hold multiple types?",
    options: ["Use union with |", "Use &&", "Use , between types", "Use []"],
    correctAnswer: 0,
  },
  {
    question: "What does `readonly` do in a type or interface?",
    options: [
      "Makes property editable",
      "Makes property private",
      "Prevents property from being changed",
      "Hides property from public access",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which type checks if a string is a valid property of an object?",
    options: ["`keyof`", "`typeof`", "`in`", "`instanceof`"],
    correctAnswer: 0,
  },
  {
    question: "Which built-in utility type makes all fields optional?",
    options: ["Partial<T>", "Optional<T>", "Omit<T>", "Nullable<T>"],
    correctAnswer: 0,
  },
  {
    question: "Which of these can NOT be used as a type in TypeScript?",
    options: ["Interface", "Enum", "Module", "Namespace"],
    correctAnswer: 3,
  },
  {
    question: "What does `as const` do to an array or object?",
    options: [
      "Makes it read-only and infers literal types",
      "Makes it undefined",
      "Turns it into an enum",
      "Makes its type unknown",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do you represent an array of numbers in TypeScript?",
    options: ["number[]", "Array<number>", "Both A and B", "numberArray"],
    correctAnswer: 2,
  },
];
export default typescriptQuestions;
