#Problem statement
Lines of Code estimator 

Your task is to write a tool that can estimate the lines of code in a single source file. Given an input file, you should print: 
• Number of blank lines 
• Number of lines with comments 
• Number of lines with code 
• Total number of lines in the file 

Given this example file: 

1 import java.util.*;  
2   
3 // file created on 1st Jan 2019   
4 // author: @cleartax   
5   
6 public class Main {   
7   
8 // This is another comment line   
9 public static void main(String[] args) {   
10 System.out.println("Hello world!"); // code, not comment   
11 }   
12 }   
  
    
Your output will be:   
• Blank: 3   
• Comments: 3   
• Code: 6   
• Total: 12   

Minimum requirements     
These features should be implemented and executing.   
• Support one programming language syntax (eg: Java, C, JavaScript, etc). • Support reading one source file and printing results.   
• Types of lines you should support: Blank, Comments, Code.   
• Support single-line comments (// in C-like languages).  
• A line counts as a comment only if it has no other code.   
• Design for extensibility: you should be able to support new language syntaxes by extending your solution.   
• One passing test   
Design for these features   
Not necessary to have running code for the following requirements, but account for these in your design.   
● Supporting multiple syntaxes.   
● Supporting multiple files and giving totals for an entire source tree. ● Supporting multi-line comments.   
● Ability to add more granular breakup (eg: classify lines as imports, variable declarations, etc).  


#Solution

Make sure Nodejs is installed

Please unzip the project   

Run the following command to install dependencies
```
npm install
```

For running tests, run the following command ( Make sure Mocha is installed)
```
mocha
```

cloc code can be found in the following file:
```
src/countLineOfCode.js
```

Main driver function for testing files
```
main.js
```