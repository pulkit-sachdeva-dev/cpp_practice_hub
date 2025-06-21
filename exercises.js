// Complete Exercise Database and Functions

const exerciseDatabase = [
  // Fundamentals (20 problems)
  {
    id: 1,
    title: 'Hello World Program',
    description: 'Write a C++ program to display a simple message.',
    category: 'Fundamentals',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Create a program that outputs "Hello, World!" to the console.</p><h4>Sample Input:</h4><pre>(No input required)</pre><h4>Sample Output:</h4><pre>Hello, World!</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses cout to print the message and endl for a newline.</p>`
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    description: 'Declare and display variables of different data types.',
    category: 'Fundamentals',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Declare variables of type int, float, double, char, and bool with values 25, 5.8, 45000.75, 'A', and true, then print each value.</p><h4>Sample Input:</h4><pre>(No input required)</pre><h4>Sample Output:</h4><pre>age: 25\nheight: 5.8\nsalary: 45000.75\ngrade: A\nisStudent: 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int age = 25;\n    float height = 5.8f;\n    double salary = 45000.75;\n    char grade = 'A';\n    bool isStudent = true;\n    cout << "age: " << age << endl;\n    cout << "height: " << height << endl;\n    cout << "salary: " << salary << endl;\n    cout << "grade: " << grade << endl;\n    cout << "isStudent: " << isStudent << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Defines variables with specified data types and prints them using cout.</p>`
  },
  {
    id: 3,
    title: 'Input and Output Operations',
    description: 'Read user input and display a customized message.',
    category: 'Fundamentals',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Read a user’s name and age from input, then print "Hello [name]! You are [age] years old."</p><h4>Sample Input:</h4><pre>Enter your name: Alice\nEnter your age: 22</pre><h4>Sample Output:</h4><pre>Hello Alice! You are 22 years old.</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    cout << "Enter your name: ";\n    getline(cin, name);\n    cout << "Enter your age: ";\n    cin >> age;\n    cout << "Hello " << name << "! You are " << age << " years old." << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses getline for name and cin for age, then formats the output.</p>`
  },
  {
    id: 4,
    title: 'Simple Calculator',
    description: 'Perform basic arithmetic operations based on user input.',
    category: 'Fundamentals',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take two numbers and an operator (+, -, *, /) as input (e.g., "10 + 5") and output the result.</p><h4>Sample Input:</h4><pre>10 + 5</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    double num1, num2, result;\n    char op;\n    cin >> num1 >> op >> num2;\n    switch(op) {\n        case '+': result = num1 + num2; break;\n        case '-': result = num1 - num2; break;\n        case '*': result = num1 * num2; break;\n        case '/': result = (num2 != 0) ? num1 / num2 : 0; break;\n    }\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a switch statement to perform the operation based on the operator.</p>`
  },
  {
    id: 5,
    title: 'Convert Temperature',
    description: 'Convert temperature between Celsius and Fahrenheit.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a temperature and a choice (c for Celsius to Fahrenheit, f for Fahrenheit to Celsius), then convert it. Output the result.</p><h4>Sample Input:</h4><pre>C to F (c) or F to C (f)? c\nEnter temperature: 37</pre><h4>Sample Output:</h4><pre>98.6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    double temp, result;\n    char choice;\n    cout << "C to F (c) or F to C (f)? ";\n    cin >> choice;\n    cout << "Enter temperature: ";\n    cin >> temp;\n    if (choice == 'c') result = (temp * 9/5) + 32;\n    else result = (temp - 32) * 5/9;\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Applies conversion formulas based on the user’s choice using if-else.</p>`
  },
  {
    id: 6,
    title: 'Check Even or Odd',
    description: 'Determine if a number is even or odd.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer as input and print "Even" if it’s divisible by 2, otherwise "Odd".</p><h4>Sample Input:</h4><pre>7</pre><h4>Sample Output:</h4><pre>Odd</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    if (num % 2 == 0) cout << "Even";\n    else cout << "Odd";\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses the modulo operator to check divisibility by 2.</p>`
  },
  {
    id: 7,
    title: 'Find Factorial',
    description: 'Calculate the factorial of a non-negative integer.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a non-negative integer n and compute n! (e.g., 5! = 5 * 4 * 3 * 2 * 1).</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>120</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, fact = 1;\n    cin >> num;\n    for(int i = 1; i <= num; i++) fact *= i;\n    cout << fact << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to multiply numbers from 1 to n.</p>`
  },
  {
    id: 8,
    title: 'Sum of Digits',
    description: 'Calculate the sum of digits in a number.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a positive integer and compute the sum of its digits (e.g., for 123, sum = 1 + 2 + 3).</p><h4>Sample Input:</h4><pre>123</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, sum = 0;\n    cin >> num;\n    while(num > 0) {\n        sum += num % 10;\n        num /= 10;\n    }\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a while loop to extract each digit and add to sum.</p>`
  },
  {
    id: 9,
    title: 'Check Prime Number',
    description: 'Determine if a number is prime.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer and check if it is prime (divisible only by 1 and itself), printing "Prime" or "Not Prime".</p><h4>Sample Input:</h4><pre>17</pre><h4>Sample Output:</h4><pre>Prime</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, flag = 1;\n    cin >> num;\n    for(int i = 2; i <= num/2; i++) if(num % i == 0) flag = 0;\n    cout << (flag ? "Prime" : "Not Prime") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Checks divisibility from 2 to num/2 to determine if it’s prime.</p>`
  },
  {
    id: 10,
    title: 'Reverse a Number',
    description: 'Reverse the digits of a given integer.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a positive integer and print its digits in reverse order.</p><h4>Sample Input:</h4><pre>1234</pre><h4>Sample Output:</h4><pre>4321</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, rev = 0;\n    cin >> num;\n    while(num > 0) {\n        rev = rev * 10 + num % 10;\n        num /= 10;\n    }\n    cout << rev << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Builds the reverse by extracting digits with modulo and shifting with multiplication.</p>`
  },
  {
    id: 11,
    title: 'GCD of Two Numbers',
    description: 'Find the Greatest Common Divisor of two integers.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take two positive integers and compute their GCD using the Euclidean algorithm.</p><h4>Sample Input:</h4><pre>48 18</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b) { int t = b; b = a % b; a = t; }\n    return a;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << gcd(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Implements the Euclidean algorithm by repeatedly applying modulo until b is 0.</p>`
  },
  {
    id: 12,
    title: 'Power Function',
    description: 'Calculate x raised to power n using recursion.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a base x and exponent n, then compute x^n using recursion.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int x, n;\n    cin >> x >> n;\n    cout << power(x, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses recursion to multiply x by itself n times.</p>`
  },
  {
    id: 13,
    title: 'Binary to Decimal',
    description: 'Convert a binary number to decimal.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a binary number as an integer and convert it to its decimal equivalent.</p><h4>Sample Input:</h4><pre>1010</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, dec = 0, base = 1;\n    cin >> num;\n    while(num) {\n        dec += (num % 10) * base;\n        num /= 10;\n        base *= 2;\n    }\n    cout << dec << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Converts binary to decimal by multiplying digits by powers of 2.</p>`
  },
  {
    id: 14,
    title: 'Decimal to Binary',
    description: 'Convert a decimal number to binary.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a decimal number and convert it to its binary representation.</p><h4>Sample Input:</h4><pre>10</pre><h4>Sample Output:</h4><pre>1010</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, bin = 0, base = 1;\n    cin >> num;\n    while(num) {\n        bin += (num % 2) * base;\n        num /= 2;\n        base *= 10;\n    }\n    cout << bin << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Converts decimal to binary by collecting remainders and building the number.</p>`
  },
  {
    id: 15,
    title: 'Armstrong Number',
    description: 'Check if a number is an Armstrong number.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a positive integer and check if it’s an Armstrong number (e.g., 153 = 1^3 + 5^3 + 3^3), printing "Armstrong" or "Not Armstrong".</p><h4>Sample Input:</h4><pre>153</pre><h4>Sample Output:</h4><pre>Armstrong</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, original, digit, sum = 0;\n    cin >> num;\n    original = num;\n    while(num > 0) {\n        digit = num % 10;\n        sum += digit * digit * digit;\n        num /= 10;\n    }\n    cout << (sum == original ? "Armstrong" : "Not Armstrong") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Calculates the sum of cubes of digits and compares with the original number.</p>`
  },
  {
    id: 16,
    title: 'Fibonacci Series',
    description: 'Generate the first n numbers of the Fibonacci series.',
    category: 'Fundamentals',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an integer n and print the first n numbers of the Fibonacci series (0, 1, 1, 2, 3, ...).</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>0 1 1 2 3 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n, a = 0, b = 1, c;\n    cin >> n;\n    cout << a << " " << b << " ";\n    for(int i = 2; i < n; i++) {\n        c = a + b;\n        cout << c << " ";\n        a = b;\n        b = c;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Generates Fibonacci numbers by adding the previous two in a loop.</p>`
  },
  {
    id: 17,
    title: 'Leap Year Check',
    description: 'Determine if a given year is a leap year.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a year as input and print "Leap Year" if it’s divisible by 4 but not by 100 unless by 400, otherwise "Not Leap Year".</p><h4>Sample Input:</h4><pre>2020</pre><h4>Sample Output:</h4><pre>Leap Year</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))\n        cout << "Leap Year";\n    else\n        cout << "Not Leap Year";\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Applies leap year rules using conditional checks.</p>`
  },
  {
    id: 18,
    title: 'Count Digits',
    description: 'Count the total number of digits in a number.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a positive integer and count the number of digits it contains.</p><h4>Sample Input:</h4><pre>12345</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, count = 0;\n    cin >> num;\n    do {\n        count++;\n        num /= 10;\n    } while(num > 0);\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a do-while loop to divide by 10 until the number is 0.</p>`
  },
  {
    id: 19,
    title: 'Palindrome Number',
    description: 'Check if a number is a palindrome.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a positive integer and check if it reads the same forward and backward, printing "Palindrome" or "Not Palindrome".</p><h4>Sample Input:</h4><pre>121</pre><h4>Sample Output:</h4><pre>Palindrome</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num, rev = 0, original;\n    cin >> num;\n    original = num;\n    while(num > 0) {\n        rev = rev * 10 + num % 10;\n        num /= 10;\n    }\n    cout << (rev == original ? "Palindrome" : "Not Palindrome") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Reverses the number and compares it with the original.</p>`
  },
  {
    id: 20,
    title: 'Largest of Three Numbers',
    description: 'Find the largest among three numbers.',
    category: 'Fundamentals',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take three integers as input and print the largest using ternary operators.</p><h4>Sample Input:</h4><pre>5 10 3</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    cout << largest << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested ternary operators to find the maximum value.</p>`
  },

  // Ternary Operator (15 problems)
  {
    id: 21,
    title: 'Maximum of Two Numbers',
    description: 'Find the maximum of two numbers using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take two integers as input and use the ternary operator to print the larger one.</p><h4>Sample Input:</h4><pre>15 7</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    int max = (a > b) ? a : b;\n    cout << max << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to compare and select the larger value.</p>`
  },
  {
    id: 22,
    title: 'Minimum of Two Numbers',
    description: 'Find the minimum of two numbers using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take two integers as input and use the ternary operator to print the smaller one.</p><h4>Sample Input:</h4><pre>15 7</pre><h4>Sample Output:</h4><pre>7</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    int min = (a < b) ? a : b;\n    cout << min << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to compare and select the smaller value.</p>`
  },
  {
    id: 23,
    title: 'Check Positive or Negative',
    description: 'Check if a number is positive or negative using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer as input and use the ternary operator to print "Positive" if > 0, otherwise "Negative or Zero".</p><h4>Sample Input:</h4><pre>-5</pre><h4>Sample Output:</h4><pre>Negative or Zero</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << ((num > 0) ? "Positive" : "Negative or Zero") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to check the sign of the number.</p>`
  },
  {
    id: 24,
    title: 'Check Leap Year with Ternary',
    description: 'Check if a year is a leap year using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take a year as input and use the ternary operator to print "Leap" if it’s a leap year, otherwise "Not Leap".</p><h4>Sample Input:</h4><pre>2020</pre><h4>Sample Output:</h4><pre>Leap</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    cout << (((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? "Leap" : "Not Leap") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator with leap year conditions.</p>`
  },
  {
    id: 25,
    title: 'Check Even or Odd with Ternary',
    description: 'Check if a number is even or odd using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer as input and use the ternary operator to print "Even" or "Odd".</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>Even</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << ((num % 2 == 0) ? "Even" : "Odd") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to check divisibility by 2.</p>`
  },
  {
    id: 26,
    title: 'Grade Assignment',
    description: 'Assign a grade based on marks using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a mark as input and use the ternary operator to assign "A" (>80), "B" (>60), or "C" (<=60).</p><h4>Sample Input:</h4><pre>85</pre><h4>Sample Output:</h4><pre>A</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int marks;\n    cin >> marks;\n    string grade = (marks > 80) ? "A" : (marks > 60) ? "B" : "C";\n    cout << grade << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested ternary operators for grade assignment.</p>`
  },
  {
    id: 27,
    title: 'Absolute Value',
    description: 'Compute the absolute value of a number using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer as input and use the ternary operator to print its absolute value.</p><h4>Sample Input:</h4><pre>-15</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    int absValue = (num < 0) ? -num : num;\n    cout << absValue << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to return the positive equivalent.</p>`
  },
  {
    id: 28,
    title: 'Check Vowel or Consonant',
    description: 'Check if a character is a vowel or consonant using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a single character as input and use the ternary operator to print "Vowel" (a, e, i, o, u) or "Consonant".</p><h4>Sample Input:</h4><pre>e</pre><h4>Sample Output:</h4><pre>Vowel</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ch;\n    cout << ((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') ? "Vowel" : "Consonant") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator to check if the character is a vowel.</p>`
  },
  {
    id: 29,
    title: 'Check Triangle Type',
    description: 'Determine the type of triangle using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take three sides of a triangle and use the ternary operator to print "Equilateral" (all equal), "Isosceles" (two equal), or "Scalene" (all different).</p><h4>Sample Input:</h4><pre>5 5 5</pre><h4>Sample Output:</h4><pre>Equilateral</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    string type = (a == b && b == c) ? "Equilateral" : (a == b || b == c || a == c) ? "Isosceles" : "Scalene";\n    cout << type << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested ternary operators to classify the triangle.</p>`
  },
  {
    id: 30,
    title: 'Check Divisibility',
    description: 'Check if a number is divisible by another using the ternary operator.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two integers and use the ternary operator to print "Divisible" if the first is divisible by the second, otherwise "Not Divisible".</p><h4>Sample Input:</h4><pre>10 2</pre><h4>Sample Output:</h4><pre>Divisible</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << ((b != 0 && a % b == 0) ? "Divisible" : "Not Divisible") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a ternary operator with a divisibility check and zero division guard.</p>`
  },
  {
    id: 31,
    title: 'Determine Sign with Magnitude',
    description: 'Determine the sign and magnitude of a number.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer and use the ternary operator to print "Positive [num]" or "Negative [num]" with its absolute value.</p><h4>Sample Input:</h4><pre>-15</pre><h4>Sample Output:</h4><pre>Negative 15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << ((num >= 0) ? "Positive " : "Negative ") << (num >= 0 ? num : -num) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses two ternary operators to determine sign and compute absolute value.</p>`
  },
  {
    id: 32,
    title: 'Nested Grade Check',
    description: 'Assign a detailed grade range using nested ternary operators.',
    category: 'Ternary Operator',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a mark and use nested ternary operators to print "A+" (>90), "A" (80-90), "B" (70-80), or "C" (<70).</p><h4>Sample Input:</h4><pre>85</pre><h4>Sample Output:</h4><pre>A</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int marks;\n    cin >> marks;\n    string grade = (marks > 90) ? "A+" : (marks > 80) ? "A" : (marks > 70) ? "B" : "C";\n    cout << grade << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested ternary operators for detailed grade ranges.</p>`
  },
  {
    id: 33,
    title: 'Check Leap Year Range',
    description: 'Check leap year with a range condition using ternary.',
    category: 'Ternary Operator',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a year and use the ternary operator to print "Leap" if it’s a leap year between 1900 and 2100, otherwise "Not Leap".</p><h4>Sample Input:</h4><pre>2000</pre><h4>Sample Output:</h4><pre>Leap</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int year;\n    cin >> year;\n    cout << ((year >= 1900 && year <= 2100 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) ? "Leap" : "Not Leap") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Combines range and leap year conditions in a ternary operator.</p>`
  },
  {
    id: 34,
    title: 'Complex Number Check',
    description: 'Check if a number is positive, negative, or zero with additional conditions.',
    category: 'Ternary Operator',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an integer and use nested ternary operators to print "Positive Even", "Positive Odd", "Negative Even", "Negative Odd", or "Zero".</p><h4>Sample Input:</h4><pre>-6</pre><h4>Sample Output:</h4><pre>Negative Even</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << ((num > 0) ? ((num % 2 == 0) ? "Positive Even" : "Positive Odd") : (num < 0) ? ((num % 2 == 0) ? "Negative Even" : "Negative Odd") : "Zero") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested ternary operators to check sign and parity.</p>`
  },
  {
    id: 35,
    title: 'Multi-Condition Grade',
    description: 'Assign a grade with multiple conditions using ternary.',
    category: 'Ternary Operator',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a mark and use ternary operators to print "A+" (>90), "A" (85-90), "B+" (80-84), "B" (75-79), or "C" (<75).</p><h4>Sample Input:</h4><pre>87</pre><h4>Sample Output:</h4><pre>A</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int marks;\n    cin >> marks;\n    string grade = (marks > 90) ? "A+" : (marks > 84) ? "A" : (marks > 79) ? "B+" : (marks > 74) ? "B" : "C";\n    cout << grade << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses multiple ternary conditions for detailed grade assignment.</p>`
  },

  // Loops (20 problems)
  {
    id: 401,
    title: 'Print Numbers 1 to N',
    description: 'Print numbers from 1 to N using a loop.',
    category: 'Loops',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print all numbers from 1 to N.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) cout << i << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to iterate from 1 to N and print each number.</p>`
  },
  {
    id: 402,
    title: 'Print Numbers N to 1',
    description: 'Print numbers from N to 1 using a loop.',
    category: 'Loops',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print all numbers from N to 1.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>5 4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = n; i >= 1; i--) cout << i << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to iterate from N to 1 in descending order.</p>`
  },
  {
    id: 403,
    title: 'Sum of First N Numbers',
    description: 'Calculate the sum of numbers from 1 to N.',
    category: 'Loops',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the sum of numbers from 1 to N.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int sum = 0;\n    for(int i = 1; i <= n; i++) sum += i;\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to add numbers from 1 to N.</p>`
  },
  {
    id: 404,
    title: 'Print Even Numbers',
    description: 'Print all even numbers from 1 to N.',
    category: 'Loops',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print all even numbers from 1 to N.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>2 4 6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 2; i <= n; i += 2) cout << i << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop with a step of 2 to print even numbers.</p>`
  },
  {
    id: 405,
    title: 'Print Odd Numbers',
    description: 'Print all odd numbers from 1 to N.',
    category: 'Loops',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print all odd numbers from 1 to N.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>1 3 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i += 2) cout << i << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop with a step of 2 starting from 1 to print odd numbers.</p>`
  },
  {
    id: 406,
    title: 'Factorial Using Loop',
    description: 'Calculate the factorial of a number using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a non-negative integer N as input and print its factorial (N!).</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>120</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long fact = 1;\n    for(int i = 1; i <= n; i++) fact *= i;\n    cout << fact << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to multiply numbers from 1 to N.</p>`
  },
  {
    id: 407,
    title: 'Print Multiplication Table',
    description: 'Print the multiplication table of a number.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print its multiplication table from 1 to 10.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= 10; i++) cout << n << " x " << i << " = " << n*i << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to calculate and print each multiplication.</p>`
  },
  {
    id: 408,
    title: 'Sum of Even Numbers',
    description: 'Calculate the sum of even numbers from 1 to N.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the sum of all even numbers from 1 to N.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>12</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int sum = 0;\n    for(int i = 2; i <= n; i += 2) sum += i;\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop with a step of 2 to sum even numbers.</p>`
  },
  {
    id: 409,
    title: 'Count Digits in Number',
    description: 'Count the number of digits in a number using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the number of digits it contains.</p><h4>Sample Input:</h4><pre>12345</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    do {\n        count++;\n        n /= 10;\n    } while(n > 0);\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a do-while loop to count digits by dividing by 10.</p>`
  },
  {
    id: 410,
    title: 'Print Pattern 1',
    description: 'Print a right-angled triangle pattern of stars.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print a right-angled triangle of stars with N rows.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>*\n**\n***\n****</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to print stars increasing per row.</p>`
  },
  {
    id: 411,
    title: 'GCD Using Loop',
    description: 'Find the GCD of two numbers using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two integers A and B as input and print their GCD using a loop.</p><h4>Sample Input:</h4><pre>48 18</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    while(b) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    cout << a << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a while loop to implement the Euclidean algorithm.</p>`
  },
  {
    id: 412,
    title: 'Print Fibonacci Series',
    description: 'Print the first N numbers of the Fibonacci series.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the first N numbers of the Fibonacci series (0, 1, 1, 2, 3, ...).</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>0 1 1 2 3 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int a = 0, b = 1;\n    cout << a << " " << b << " ";\n    for(int i = 2; i < n; i++) {\n        int c = a + b;\n        cout << c << " ";\n        a = b;\n        b = c;\n    }\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to generate Fibonacci numbers by adding the previous two.</p>`
  },
  {
    id: 413,
    title: 'Check Prime Using Loop',
    description: 'Check if a number is prime using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print "Prime" if it is prime, otherwise "Not Prime".</p><h4>Sample Input:</h4><pre>17</pre><h4>Sample Output:</h4><pre>Prime</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    bool isPrime = true;\n    for(int i = 2; i * i <= n; i++) if(n % i == 0) isPrime = false;\n    cout << (isPrime && n > 1 ? "Prime" : "Not Prime") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to check divisibility up to the square root.</p>`
  },
  {
    id: 414,
    title: 'Power Using Loop',
    description: 'Calculate x raised to power n using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two integers X and N as input and print X raised to the power N.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int x, n;\n    cin >> x >> n;\n    long long result = 1;\n    for(int i = 0; i < n; i++) result *= x;\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a for loop to multiply X by itself N times.</p>`
  },
  {
    id: 415,
    title: 'Print Pattern 2',
    description: 'Print a pyramid pattern of stars.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print a pyramid pattern of stars with N rows.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>   *\n  ***\n *****\n*******</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= 2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to add spaces and stars for a pyramid shape.</p>`
  },
  {
    id: 416,
    title: 'Sum of Digits Using Loop',
    description: 'Calculate the sum of digits in a number using a loop.',
    category: 'Loops',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the sum of its digits.</p><h4>Sample Input:</h4><pre>123</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int sum = 0;\n    while(n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a while loop to extract and sum digits.</p>`
  },
  {
    id: 417,
    title: 'Count Prime Numbers',
    description: 'Count prime numbers up to N using a loop.',
    category: 'Loops',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print the count of prime numbers from 1 to N.</p><h4>Sample Input:</h4><pre>10</pre><h4>Sample Output:</h4><pre>4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for(int i = 2; i <= n; i++) {\n        bool isPrime = true;\n        for(int j = 2; j * j <= i; j++) if(i % j == 0) isPrime = false;\n        if(isPrime) count++;\n    }\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to check primality and count primes.</p>`
  },
  {
    id: 418,
    title: 'Print Pattern 3',
    description: 'Print a diamond pattern of stars.',
    category: 'Loops',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print a diamond pattern of stars with 2N-1 rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>  *\n ***\n*****\n ***\n  *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= 2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= 2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses two sets of nested loops for the upper and lower halves of the diamond.</p>`
  },
  {
    id: 419,
    title: 'HCF of Array Elements',
    description: 'Find the HCF of all elements in an array using loops.',
    category: 'Loops',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the HCF of all elements.</p><h4>Sample Input:</h4><pre>4\n12 18 24 36</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int result = arr[0];\n    for(int i = 1; i < n; i++) {\n        int a = result, b = arr[i];\n        while(b) { int temp = b; b = a % b; a = temp; }\n        result = a;\n    }\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops with the Euclidean algorithm to find the HCF.</p>`
  },
  {
    id: 420,
    title: 'Nested Loop Pattern',
    description: 'Print a complex pattern using nested loops.',
    category: 'Loops',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an integer N as input and print a pattern where each row i contains numbers from 1 to i.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>1\n1 2\n1 2 3\n1 2 3 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << j << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to print numbers up to the row index.</p>`
  },

  // Functions (20 problems)
  {
    id: 501,
    title: 'Square of a Number',
    description: 'Calculate the square of a number using a function.',
    category: 'Functions',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns its square. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>25</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint square(int n) {\n    return n * n;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << square(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function square() multiplies the number by itself and returns the result.</p>`
  },
  {
    id: 502,
    title: 'Check Even or Odd',
    description: 'Check if a number is even or odd using a function.',
    category: 'Functions',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns "Even" or "Odd". Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>Even</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstring checkEvenOdd(int n) {\n    return (n % 2 == 0) ? "Even" : "Odd";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << checkEvenOdd(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function checkEvenOdd() uses modulo to determine if the number is even or odd.</p>`
  },
  {
    id: 503,
    title: 'Calculate Area of Circle',
    description: 'Calculate the area of a circle using a function.',
    category: 'Functions',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes the radius R as input and returns the area of the circle (use 3.14 for π). Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>78.5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\ndouble areaCircle(int r) {\n    return 3.14 * r * r;\n}\n\nint main() {\n    int r;\n    cin >> r;\n    cout << areaCircle(r) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function areaCircle() applies the formula πr² to compute the area.</p>`
  },
  {
    id: 504,
    title: 'Swap Two Numbers',
    description: 'Swap two numbers using a function.',
    category: 'Functions',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes two integers by reference and swaps their values. Call this function in main() and print the swapped values.</p><h4>Sample Input:</h4><pre>5 10</pre><h4>Sample Output:</h4><pre>10 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    swap(a, b);\n    cout << a << " " << b << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function swap() uses references to exchange the values.</p>`
  },
  {
    id: 505,
    title: 'Find Maximum of Two',
    description: 'Find the maximum of two numbers using a function.',
    category: 'Functions',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes two integers as input and returns the larger one. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5 10</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint findMax(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << findMax(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function findMax() uses a ternary operator to return the larger number.</p>`
  },
  {
    id: 506,
    title: 'Factorial Using Function',
    description: 'Calculate the factorial of a number using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns its factorial. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>120</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long factorial(int n) {\n    long long fact = 1;\n    for(int i = 1; i <= n; i++) fact *= i;\n    return fact;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function factorial() computes N! using a loop.</p>`
  },
  {
    id: 507,
    title: 'Check Prime Function',
    description: 'Check if a number is prime using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns "Prime" or "Not Prime". Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>17</pre><h4>Sample Output:</h4><pre>Prime</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstring checkPrime(int n) {\n    if(n <= 1) return "Not Prime";\n    for(int i = 2; i * i <= n; i++) if(n % i == 0) return "Not Prime";\n    return "Prime";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << checkPrime(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function checkPrime() checks divisibility up to the square root.</p>`
  },
  {
    id: 508,
    title: 'GCD Using Function',
    description: 'Find the GCD of two numbers using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes two integers A and B as input and returns their GCD. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>48 18</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b) { int temp = b; b = a % b; a = temp; }\n    return a;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << gcd(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function gcd() implements the Euclidean algorithm.</p>`
  },
  {
    id: 509,
    title: 'Fibonacci Using Function',
    description: 'Generate the nth Fibonacci number using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns the Nth Fibonacci number (0, 1, 1, 2, ...). Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint fibonacci(int n) {\n    if(n <= 1) return n;\n    int a = 0, b = 1, c;\n    for(int i = 2; i <= n; i++) { c = a + b; a = b; b = c; }\n    return b;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fibonacci(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function fibonacci() computes the Nth number iteratively.</p>`
  },
  {
    id: 510,
    title: 'Power Using Function',
    description: 'Calculate x raised to power n using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes two integers X and N as input and returns X^N. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long power(int x, int n) {\n    long long result = 1;\n    for(int i = 0; i < n; i++) result *= x;\n    return result;\n}\n\nint main() {\n    int x, n;\n    cin >> x >> n;\n    cout << power(x, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function power() multiplies X by itself N times.</p>`
  },
  {
    id: 511,
    title: 'Sum of Array Elements',
    description: 'Calculate the sum of array elements using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an array and its size as input and returns the sum of its elements. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint arraySum(int arr[], int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++) sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    cout << arraySum(arr, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function arraySum() iterates through the array to compute the sum.</p>`
  },
  {
    id: 512,
    title: 'Reverse Number Using Function',
    description: 'Reverse a number using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns its reverse. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>1234</pre><h4>Sample Output:</h4><pre>4321</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint reverseNumber(int n) {\n    int rev = 0;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << reverseNumber(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function reverseNumber() builds the reverse by extracting digits.</p>`
  },
  {
    id: 513,
    title: 'Count Digits Using Function',
    description: 'Count the digits in a number using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns the count of its digits. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>12345</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint countDigits(int n) {\n    int count = 0;\n    do {\n        count++;\n        n /= 10;\n    } while(n > 0);\n    return count;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << countDigits(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function countDigits() counts digits by dividing by 10.</p>`
  },
  {
    id: 514,
    title: 'Check Palindrome Number',
    description: 'Check if a number is a palindrome using a function.',
    category: 'Functions',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a function that takes an integer N as input and returns "Palindrome" or "Not Palindrome". Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>121</pre><h4>Sample Output:</h4><pre>Palindrome</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstring checkPalindrome(int n) {\n    int rev = 0, original = n;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return (rev == original) ? "Palindrome" : "Not Palindrome";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << checkPalindrome(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function checkPalindrome() reverses the number and compares it with the original.</p>`
  },
  {
    id: 515,
    title: 'Recursive Factorial',
    description: 'Calculate factorial using a recursive function.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns its factorial. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>120</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function factorial() uses recursion to compute N!.</p>`
  },
  {
    id: 516,
    title: 'Recursive Fibonacci',
    description: 'Calculate the nth Fibonacci number using recursion.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns the Nth Fibonacci number (0, 1, 1, 2, ...). Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint fibonacci(int n) {\n    if(n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fibonacci(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function fibonacci() recursively adds the previous two numbers.</p>`
  },
  {
    id: 517,
    title: 'Recursive Power',
    description: 'Calculate x raised to power n using recursion.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes two integers X and N as input and returns X^N. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int x, n;\n    cin >> x >> n;\n    cout << power(x, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function power() recursively multiplies X by itself N times.</p>`
  },
  {
    id: 518,
    title: 'Sum of Digits Recursively',
    description: 'Calculate the sum of digits using a recursive function.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns the sum of its digits. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>123</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint sumOfDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumOfDigits(n / 10);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << sumOfDigits(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function sumOfDigits() recursively extracts and sums digits.</p>`
  },
  {
    id: 519,
    title: 'Array Reverse Using Function',
    description: 'Reverse an array using a recursive function.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array and its size as input and reverses the array. Call this function in main() and print the reversed array.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>5 4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid reverseArray(int arr[], int start, int end) {\n    if(start >= end) return;\n    swap(arr[start], arr[end]);\n    reverseArray(arr, start+1, end-1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    reverseArray(arr, 0, n-1);\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function reverseArray() recursively swaps elements from both ends.</p>`
  },
  {
    id: 520,
    title: 'Binary Search Using Function',
    description: 'Implement binary search using a recursive function.',
    category: 'Functions',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes a sorted array, its size, and a target value as input and returns the index of the target or -1 if not found. Call this function in main() and print the result.</p><h4>Sample Input:</h4><pre>5 4\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint binarySearch(int arr[], int left, int right, int target) {\n    if(left > right) return -1;\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == target) return mid;\n    if(arr[mid] > target) return binarySearch(arr, left, mid-1, target);\n    return binarySearch(arr, mid+1, right, target);\n}\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    cout << binarySearch(arr, 0, n-1, target) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function binarySearch() recursively narrows the search range.</p>`
  },

  // Recursion (20 problems)
  {
    id: 701,
    title: 'Print Numbers 1 to N',
    description: 'Print numbers from 1 to N using recursion.',
    category: 'Recursion',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and prints numbers from 1 to N.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid printNumbers(int n) {\n    if(n <= 0) return;\n    printNumbers(n - 1);\n    cout << n << " ";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    printNumbers(n);\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively calls itself with decreasing n and prints after the base case.</p>`
  },
  {
    id: 702,
    title: 'Print Numbers N to 1',
    description: 'Print numbers from N to 1 using recursion.',
    category: 'Recursion',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and prints numbers from N to 1.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>5 4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid printNumbers(int n) {\n    if(n <= 0) return;\n    cout << n << " ";\n    printNumbers(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    printNumbers(n);\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function prints n and recursively calls itself with decreasing n.</p>`
  },
  {
    id: 703,
    title: 'Sum of First N Numbers',
    description: 'Calculate the sum of numbers from 1 to N using recursion.',
    category: 'Recursion',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns the sum of numbers from 1 to N.</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint sumNumbers(int n) {\n    if(n <= 0) return 0;\n    return n + sumNumbers(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << sumNumbers(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function adds n to the recursive sum of previous numbers.</p>`
  },
  {
    id: 704,
    title: 'Factorial Using Recursion',
    description: 'Calculate the factorial of a number using recursion.',
    category: 'Recursion',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns its factorial (N!).</p><h4>Sample Input:</h4><pre>5</pre><h4>Sample Output:</h4><pre>120</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function multiplies n with the factorial of (n-1) recursively.</p>`
  },
  {
    id: 705,
    title: 'Power Using Recursion',
    description: 'Calculate x raised to power n using recursion.',
    category: 'Recursion',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes two integers X and N as input and returns X^N.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nlong long power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n - 1);\n}\n\nint main() {\n    int x, n;\n    cin >> x >> n;\n    cout << power(x, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function multiplies x with power(x, n-1) until n reaches 0.</p>`
  },
  {
    id: 706,
    title: 'Reverse String Using Recursion',
    description: 'Reverse a string using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes a string as input and prints it in reverse order.</p><h4>Sample Input:</h4><pre>hello</pre><h4>Sample Output:</h4><pre>olleh</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nvoid reverseString(string str, int index) {\n    if(index < 0) return;\n    cout << str[index];\n    reverseString(str, index - 1);\n}\n\nint main() {\n    string str;\n    cin >> str;\n    reverseString(str, str.length() - 1);\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function prints characters from the end to the start recursively.</p>`
  },
  {
    id: 707,
    title: 'Check Palindrome Recursively',
    description: 'Check if a string is a palindrome using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes a string as input and returns "Palindrome" or "Not Palindrome".</p><h4>Sample Input:</h4><pre>radar</pre><h4>Sample Output:</h4><pre>Palindrome</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nbool checkPalindrome(string str, int start, int end) {\n    if(start >= end) return true;\n    if(str[start] != str[end]) return false;\n    return checkPalindrome(str, start + 1, end - 1);\n}\n\nint main() {\n    string str;\n    cin >> str;\n    cout << (checkPalindrome(str, 0, str.length() - 1) ? "Palindrome" : "Not Palindrome") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function compares characters from both ends and recurses inward.</p>`
  },
  {
    id: 708,
    title: 'Sum of Array Elements Recursively',
    description: 'Calculate the sum of array elements using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array and its size as input and returns the sum of its elements.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint arraySum(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n - 1] + arraySum(arr, n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    cout << arraySum(arr, n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function adds the last element to the recursive sum of the rest.</p>`
  },
  {
    id: 709,
    title: 'Fibonacci Using Recursion',
    description: 'Calculate the nth Fibonacci number using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and returns the Nth Fibonacci number (0, 1, 1, 2, ...).</p><h4>Sample Input:</h4><pre>6</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint fibonacci(int n) {\n    if(n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fibonacci(n) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively adds the previous two Fibonacci numbers.</p>`
  },
  {
    id: 710,
    title: 'Reverse Array Recursively',
    description: 'Reverse an array using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array and its size as input and reverses it in place.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>5 4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid reverseArray(int arr[], int start, int end) {\n    if(start >= end) return;\n    swap(arr[start], arr[end]);\n    reverseArray(arr, start + 1, end - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    reverseArray(arr, 0, n - 1);\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function swaps elements from both ends and recurses inward.</p>`
  },
  {
    id: 711,
    title: 'GCD Using Recursion',
    description: 'Find the GCD of two numbers using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes two integers A and B as input and returns their GCD.</p><h4>Sample Input:</h4><pre>48 18</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << gcd(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function uses the Euclidean algorithm recursively.</p>`
  },
  {
    id: 712,
    title: 'Tower of Hanoi',
    description: 'Solve the Tower of Hanoi puzzle using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes the number of disks N and three rods (source, auxiliary, destination) and prints the moves to solve the Tower of Hanoi.</p><h4>Sample Input:</h4><pre>2</pre><h4>Sample Output:</h4><pre>Move 1 from A to C\nMove 1 from A to B\nMove 2 from C to B</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid towerOfHanoi(int n, char source, char auxiliary, char destination) {\n    if(n == 1) {\n        cout << "Move 1 from " << source << " to " << destination << endl;\n        return;\n    }\n    towerOfHanoi(n - 1, source, destination, auxiliary);\n    cout << "Move " << n << " from " << source << " to " << destination << endl;\n    towerOfHanoi(n - 1, auxiliary, source, destination);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    towerOfHanoi(n, 'A', 'B', 'C');\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively moves n-1 disks and then the nth disk.</p>`
  },
  {
    id: 713,
    title: 'Binary Search Using Recursion',
    description: 'Implement binary search using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes a sorted array, its size, and a target value as input and returns the index of the target or -1 if not found.</p><h4>Sample Input:</h4><pre>5 4\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint binarySearch(int arr[], int left, int right, int target) {\n    if(left > right) return -1;\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == target) return mid;\n    if(arr[mid] > target) return binarySearch(arr, left, mid - 1, target);\n    return binarySearch(arr, mid + 1, right, target);\n}\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    cout << binarySearch(arr, 0, n - 1, target) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively narrows the search range based on mid-point comparison.</p>`
  },
  {
    id: 714,
    title: 'Permutations of String',
    description: 'Generate all permutations of a string using recursion.',
    category: 'Recursion',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes a string as input and prints all its permutations.</p><h4>Sample Input:</h4><pre>abc</pre><h4>Sample Output:</h4><pre>abc\nacb\nbac\nbca\ncba\ncab</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nvoid permute(string str, int l, int r) {\n    if(l == r) {\n        cout << str << endl;\n        return;\n    }\n    for(int i = l; i <= r; i++) {\n        swap(str[l], str[i]);\n        permute(str, l + 1, r);\n        swap(str[l], str[i]);\n    }\n}\n\nint main() {\n    string str;\n    cin >> str;\n    permute(str, 0, str.length() - 1);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function swaps characters and recurses to generate all permutations.</p>`
  },
  {
    id: 715,
    title: 'Combination Sum',
    description: 'Find all combinations that sum to a target using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array of N integers and a target sum, and prints all combinations that sum to the target.</p><h4>Sample Input:</h4><pre>4 7\n2 3 6 7</pre><h4>Sample Output:</h4><pre>2 3 2\n7</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid combinationSum(int arr[], int n, int target, int index, int current[]) {\n    if(target == 0) {\n        for(int i = 0; i < index; i++) cout << current[i] << " ";\n        cout << endl;\n        return;\n    }\n    if(target < 0 || index == 0) return;\n    for(int i = 0; i < n; i++) {\n        current[index - 1] = arr[i];\n        combinationSum(arr, n, target - arr[i], index - 1, current);\n    }\n}\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int current[target];\n    combinationSum(arr, n, target, target, current);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively builds combinations by subtracting each element.</p>`
  },
  {
    id: 716,
    title: 'Subset Sum Problem',
    description: 'Find if there is a subset with a given sum using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array of N integers and a target sum, and returns "Yes" if a subset sums to the target, otherwise "No".</p><h4>Sample Input:</h4><pre>5 9\n2 3 7 8 10</pre><h4>Sample Output:</h4><pre>Yes</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nbool subsetSum(int arr[], int n, int target) {\n    if(target == 0) return true;\n    if(n == 0) return false;\n    if(arr[n - 1] > target) return subsetSum(arr, n - 1, target);\n    return subsetSum(arr, n - 1, target) || subsetSum(arr, n - 1, target - arr[n - 1]);\n}\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    cout << (subsetSum(arr, n, target) ? "Yes" : "No") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively checks inclusion or exclusion of the last element.</p>`
  },
  {
    id: 717,
    title: 'Longest Common Subsequence',
    description: 'Find the length of the longest common subsequence using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes two strings as input and returns the length of their longest common subsequence.</p><h4>Sample Input:</h4><pre>ABCDGH AQGH</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint lcs(string s1, string s2, int m, int n) {\n    if(m == 0 || n == 0) return 0;\n    if(s1[m - 1] == s2[n - 1]) return 1 + lcs(s1, s2, m - 1, n - 1);\n    return max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));\n}\n\nint main() {\n    string s1, s2;\n    cin >> s1 >> s2;\n    cout << lcs(s1, s2, s1.length(), s2.length()) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively builds the LCS by comparing characters and taking the maximum.</p>`
  },
  {
    id: 718,
    title: 'N-Queens Problem',
    description: 'Solve the N-Queens problem using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an integer N as input and prints all possible configurations for N-Queens on an NxN chessboard.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>(Sample configuration representation may vary)</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nbool isSafe(int board[], int n, int col) {\n    for(int i = 0; i < col; i++) if(board[i] == board[col] || abs(board[i] - board[col]) == abs(i - col)) return false;\n    return true;\n}\n\nvoid solveNQueens(int n, int col, int board[]) {\n    if(col == n) {\n        for(int i = 0; i < n; i++) cout << board[i] << " ";\n        cout << endl;\n        return;\n    }\n    for(int i = 0; i < n; i++) {\n        board[col] = i;\n        if(isSafe(board, n, col)) solveNQueens(n, col + 1, board);\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    int board[n];\n    solveNQueens(n, 0, board);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively places queens and checks safety using isSafe.</p>`
  },
  {
    id: 719,
    title: 'Knapsack Problem',
    description: 'Solve the 0/1 Knapsack problem using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes an array of weights, values, capacity W, and number of items N, and returns the maximum value possible.</p><h4>Sample Input:</h4><pre>3 50\n60 100 120\n10 20 30</pre><h4>Sample Output:</h4><pre>160</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint knapsack(int values[], int weights[], int n, int w) {\n    if(n == 0 || w == 0) return 0;\n    if(weights[n - 1] > w) return knapsack(values, weights, n - 1, w);\n    return max(values[n - 1] + knapsack(values, weights, n - 1, w - weights[n - 1]), knapsack(values, weights, n - 1, w));\n}\n\nint main() {\n    int n, w;\n    cin >> n >> w;\n    int values[n], weights[n];\n    for(int i = 0; i < n; i++) cin >> values[i];\n    for(int i = 0; i < n; i++) cin >> weights[i];\n    cout << knapsack(values, weights, n, w) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively chooses or skips items to maximize value within weight limit.</p>`
  },
  {
    id: 720,
    title: 'Josephus Problem',
    description: 'Solve the Josephus problem using recursion.',
    category: 'Recursion',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Write a recursive function that takes the number of people N and the elimination step K, and returns the position of the last survivor.</p><h4>Sample Input:</h4><pre>5 2</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint josephus(int n, int k) {\n    if(n == 1) return 0;\n    return (josephus(n - 1, k) + k) % n;\n}\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    cout << josephus(n, k) + 1 << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function recursively computes the safe position based on previous elimination.</p>`
  },

  // Pattern Printing (20 problems)
  {
    id: 1301,
    title: 'Print Star Pyramid',
    description: 'Print a pyramid pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input N and print a pyramid of stars with N rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>  *\n * *\n*****</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= 2*i-1; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Spaces decrease and stars increase to form a pyramid.</p>`
  },
  {
    id: 1302,
    title: 'Print Number Triangle',
    description: 'Print a triangle pattern of numbers.',
    category: 'Pattern Printing',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input N and print a triangle of numbers from 1 to N.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>1\n12\n123</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << j;\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers increase with each row up to the row number.</p>`
  },
  {
    id: 1303,
    title: 'Print Reverse Pyramid',
    description: 'Print a reverse pyramid pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input N and print a reverse pyramid of stars with N rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>*****\n * *\n  *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < i; j++) cout << " ";\n        for(int j = 0; j < 2*(n-i)-1; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Spaces increase and stars decrease to form a reverse pyramid.</p>`
  },
  {
    id: 1304,
    title: 'Print Diamond Pattern',
    description: 'Print a diamond pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input N and print a diamond of stars with N rows (N odd).</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre> *\n***\n *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n-i-1; j++) cout << " ";\n        for(int j = 0; j < 2*i+1; j++) cout << "*";\n        cout << endl;\n    }\n    for(int i = n-2; i >= 0; i--) {\n        for(int j = 0; j < n-i-1; j++) cout << " ";\n        for(int j = 0; j < 2*i+1; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>A diamond is formed with an upper and lower triangle.</p>`
  },
  {
    id: 1305,
    title: 'Print Hollow Square',
    description: 'Print a hollow square pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input N and print a hollow square of stars with N rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>* * *\n*   *\n* * *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            if(i == 0 || i == n-1 || j == 0 || j == n-1) cout << "* ";\n            else cout << "  ";\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Stars are printed only on the borders.</p>`
  },
  {
    id: 1306,
    title: 'Print Pascal Triangle',
    description: 'Print the first N rows of Pascal\'s Triangle.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print the first N rows of Pascal's Triangle.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>1\n11\n121</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        int val = 1;\n        for(int j = 0; j <= i; j++) {\n            cout << val << " ";\n            val = val * (i - j) / (j + 1);\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each number is calculated using the binomial coefficient formula.</p>`
  },
  {
    id: 1307,
    title: 'Print Number Diamond',
    description: 'Print a diamond pattern of numbers.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a diamond of numbers from 1 to N.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>  1\n 121\n12321\n 121\n  1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= i; j++) cout << j;\n        for(int j = i-1; j >= 1; j--) cout << j;\n        cout << endl;\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= i; j++) cout << j;\n        for(int j = i-1; j >= 1; j--) cout << j;\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers form a diamond with increasing and decreasing sequences.</p>`
  },
  {
    id: 1308,
    title: 'Print Hollow Diamond',
    description: 'Print a hollow diamond pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a hollow diamond of stars with N rows (N odd).</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre> *\n* *\n *\n</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n-i-1; j++) cout << " ";\n        if(i == 0 || i == n-1) cout << "*";\n        else cout << "* ";\n        for(int j = 0; j < 2*i-1; j++) cout << " ";\n        if(i > 0 && i < n-1) cout << "*";\n        cout << endl;\n    }\n    for(int i = n-2; i >= 0; i--) {\n        for(int j = 0; j < n-i-1; j++) cout << " ";\n        if(i == 0 || i == n-1) cout << "*";\n        else cout << "* ";\n        for(int j = 0; j < 2*i-1; j++) cout << " ";\n        if(i > 0 && i < n-1) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Hollow diamond has stars only on the borders.</p>`
  },
  {
    id: 1309,
    title: 'Print Alphabet Pyramid',
    description: 'Print a pyramid pattern of alphabets.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a pyramid of alphabets from A to the Nth letter.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>  A\n B B\nC C C</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n-i-1; j++) cout << " ";\n        for(int j = 0; j <= i; j++) cout << (char)('A' + i) << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Alphabets increase with each row using ASCII conversion.</p>`
  },
  {
    id: 1310,
    title: 'Print Floyd Triangle',
    description: 'Print a Floyd\'s Triangle pattern.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a Floyd's Triangle with numbers.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>1\n23\n456</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int num = 1;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) {\n            cout << num++ << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers are printed sequentially in increasing rows.</p>`
  },
  {
    id: 1311,
    title: 'Print Butterfly Pattern',
    description: 'Print a butterfly pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a butterfly pattern of stars with 2N rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>*     *\n* * * *\n* * * *\n*     *\n* * * *\n*     *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << "* ";\n        for(int j = 1; j <= 2*(n-i); j++) cout << "  ";\n        for(int j = 1; j <= i; j++) cout << "* ";\n        cout << endl;\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= i; j++) cout << "* ";\n        for(int j = 1; j <= 2*(n-i); j++) cout << "  ";\n        for(int j = 1; j <= i; j++) cout << "* ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The upper half prints stars increasing with spaces in the middle, and the lower half mirrors it to form a butterfly shape.</p>`
  },
  {
    id: 1312,
    title: 'Print Hollow Pyramid',
    description: 'Print a hollow pyramid pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a hollow pyramid of stars with N rows.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>   *\n  * *\n *   *\n*******</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= 2*i-1; j++) {\n            if(j == 1 || j == 2*i-1 || i == n) cout << "*";\n            else cout << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Stars are printed only on the edges, with the base filled.</p>`
  },
  {
    id: 1313,
    title: 'Print Right Triangle Numbers',
    description: 'Print a right triangle pattern with increasing numbers.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a right triangle where each row contains numbers from 1 to the row number.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>1\n12\n123\n1234</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) cout << j;\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers increase sequentially within each row.</p>`
  },
  {
    id: 1314,
    title: 'Print Mirror Image Pattern',
    description: 'Print a mirror image pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a mirror image pattern of stars with N rows.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>   * \n  * * \n * * * \n* * * *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) cout << " ";\n        for(int j = 1; j <= i; j++) cout << "* ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Spaces decrease and stars increase to form a mirrored pattern.</p>`
  },
  {
    id: 1315,
    title: 'Print Hourglass Pattern',
    description: 'Print an hourglass pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print an hourglass pattern of stars with 2N-1 rows.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>***\n * \n  * \n * \n***</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < i; j++) cout << " ";\n        for(int j = 0; j < 2*(n-i)-1; j++) cout << "*";\n        cout << endl;\n    }\n    for(int i = 1; i < n; i++) {\n        for(int j = 1; j < n-i; j++) cout << " ";\n        for(int j = 0; j <= 2*i; j++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The pattern narrows then widens to form an hourglass shape.</p>`
  },
  {
    id: 1316,
    title: 'Print Binary Triangle',
    description: 'Print a triangle pattern with alternating 0s and 1s.',
    category: 'Pattern Printing',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input N and print a triangle with alternating 0s and 1s.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>0\n01\n010\n0101</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j <= i; j++) {\n            cout << (j % 2);\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Odd and even positions alternate between 0 and 1.</p>`
  },
  {
    id: 1317,
    title: 'Print Spiral Number Pattern',
    description: 'Print a spiral pattern of numbers.',
    category: 'Pattern Printing',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input N and print an NxN grid with numbers in spiral order starting from 1.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>1 2 3\n8 9 4\n7 6 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[10][10] = {0};\n    int top = 0, bottom = n-1, left = 0, right = n-1, num = 1;\n    while(num <= n*n) {\n        for(int i = left; i <= right && num <= n*n; i++) arr[top][i] = num++;\n        top++;\n        for(int i = top; i <= bottom && num <= n*n; i++) arr[i][right] = num++;\n        right--;\n        for(int i = right; i >= left && num <= n*n; i--) arr[bottom][i] = num++;\n        bottom--;\n        for(int i = bottom; i >= top && num <= n*n; i--) arr[i][left] = num++;\n        left++;\n    }\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers fill the grid in a clockwise spiral pattern.</p>`
  },
  {
    id: 1318,
    title: 'Print K Pattern',
    description: 'Print a K-shaped pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input N and print a K-shaped pattern of stars with 2N-1 rows.</p><h4>Sample Input:</h4><pre>4</pre><h4>Sample Output:</h4><pre>*   *\n*  * \n* *  \n*    \n* *  \n*  * \n*   *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        cout << "*";\n        for(int j = 0; j < i; j++) cout << " ";\n        if(i != n-1) cout << "*";\n        cout << endl;\n    }\n    for(int i = n-2; i >= 0; i--) {\n        cout << "*";\n        for(int j = 0; j < i; j++) cout << " ";\n        cout << "*" << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The pattern forms a K shape with symmetrical halves.</p>`
  },
  {
    id: 1319,
    title: 'Print Cross Pattern',
    description: 'Print a cross pattern of stars.',
    category: 'Pattern Printing',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input N and print a cross pattern of stars in an NxN grid.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>* . .\n. * .\n. . *</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            if(i == j || i + j == n-1) cout << "* ";\n            else cout << ". ";\n        }\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Stars are placed along the main diagonal and anti-diagonal.</p>`
  },
  {
    id: 1320,
    title: 'Print Sandglass Number Pattern',
    description: 'Print a sandglass pattern with numbers.',
    category: 'Pattern Printing',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input N and print a sandglass pattern with numbers from 1 to N decreasing then increasing.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>321\n 21\n  1\n 21\n321</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for(int i = n; i >= 1; i--) {\n        for(int j = n; j > i; j--) cout << " ";\n        for(int j = i; j >= 1; j--) cout << j;\n        cout << endl;\n    }\n    for(int i = 2; i <= n; i++) {\n        for(int j = n; j > i; j--) cout << " ";\n        for(int j = i; j >= 1; j--) cout << j;\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Numbers decrease then increase to form a sandglass shape.</p>`
  },

  // Arrays (20 problems)
  {
    id: 201,
    title: 'Find Maximum Element',
    description: 'Find the largest element in an array.',
    category: 'Arrays',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the maximum element.</p><h4>Sample Input:</h4><pre>5\n3 1 4 1 5</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int max = arr[0];\n    for(int i = 1; i < n; i++) if(arr[i] > max) max = arr[i];\n    cout << max << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Iterates through the array to find the largest value.</p>`
  },
  {
    id: 202,
    title: 'Find Minimum Element',
    description: 'Find the smallest element in an array.',
    category: 'Arrays',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the minimum element.</p><h4>Sample Input:</h4><pre>5\n3 1 4 1 5</pre><h4>Sample Output:</h4><pre>1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int min = arr[0];\n    for(int i = 1; i < n; i++) if(arr[i] < min) min = arr[i];\n    cout << min << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Iterates through the array to find the smallest value.</p>`
  },
  {
    id: 203,
    title: 'Sum of Array Elements',
    description: 'Calculate the sum of all elements in an array.',
    category: 'Arrays',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the sum of its elements.</p><h4>Sample Input:</h4><pre>4\n1 2 3 4</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int sum = 0;\n    for(int i = 0; i < n; i++) sum += arr[i];\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a loop to add all elements to compute the sum.</p>`
  },
  {
    id: 204,
    title: 'Average of Array',
    description: 'Calculate the average of array elements.',
    category: 'Arrays',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the average (sum divided by N).</p><h4>Sample Input:</h4><pre>4\n1 2 3 4</pre><h4>Sample Output:</h4><pre>2.5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    double sum = 0;\n    for(int i = 0; i < n; i++) sum += arr[i];\n    cout << sum / n << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Computes the sum and divides by N to get the average.</p>`
  },
  {
    id: 205,
    title: 'Reverse Array',
    description: 'Reverse the order of elements in an array.',
    category: 'Arrays',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the elements in reverse order.</p><h4>Sample Input:</h4><pre>4\n1 2 3 4</pre><h4>Sample Output:</h4><pre>4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    for(int i = n-1; i >= 0; i--) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Prints the array from the last index to the first.</p>`
  },
  {
    id: 206,
    title: 'Check Sorted Array',
    description: 'Check if an array is sorted in ascending order.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print "Yes" if sorted in ascending order, otherwise "No".</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>Yes</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    bool sorted = true;\n    for(int i = 0; i < n-1; i++) if(arr[i] > arr[i+1]) sorted = false;\n    cout << (sorted ? "Yes" : "No") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Checks if each element is less than or equal to the next.</p>`
  },
  {
    id: 207,
    title: 'Count Even Numbers',
    description: 'Count the number of even elements in an array.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the count of even numbers.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int count = 0;\n    for(int i = 0; i < n; i++) if(arr[i] % 2 == 0) count++;\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Counts elements divisible by 2 using the modulo operator.</p>`
  },
  {
    id: 208,
    title: 'Find Second Maximum',
    description: 'Find the second largest element in an array.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the second largest element.</p><h4>Sample Input:</h4><pre>5\n3 1 4 1 5</pre><h4>Sample Output:</h4><pre>4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int max = arr[0], secondMax = -1;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max) { secondMax = max; max = arr[i]; }\n        else if(arr[i] < max && arr[i] > secondMax) secondMax = arr[i];\n    }\n    cout << secondMax << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Tracks the maximum and updates the second maximum during iteration.</p>`
  },
  {
    id: 209,
    title: 'Rotate Array Left',
    description: 'Rotate an array to the left by one position.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and rotate it left by one position, then print the result.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>2 3 4 5 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int temp = arr[0];\n    for(int i = 0; i < n-1; i++) arr[i] = arr[i+1];\n    arr[n-1] = temp;\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Shifts elements left and moves the first to the end.</p>`
  },
  {
    id: 210,
    title: 'Count Duplicates',
    description: 'Count the number of duplicate elements in an array.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the number of duplicate elements.</p><h4>Sample Input:</h4><pre>5\n1 2 2 3 1</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int count = 0;\n    for(int i = 0; i < n; i++) for(int j = i+1; j < n; j++) if(arr[i] == arr[j]) count++;\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to count matching pairs.</p>`
  },
  {
    id: 211,
    title: 'Merge Two Arrays',
    description: 'Merge two sorted arrays into one sorted array.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two sorted arrays of sizes M and N as input, merge them into a single sorted array, and print the result.</p><h4>Sample Input:</h4><pre>3 2\n1 3 5\n2 4</pre><h4>Sample Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int m, n;\n    cin >> m >> n;\n    int arr1[m], arr2[n], merged[m+n];\n    for(int i = 0; i < m; i++) cin >> arr1[i];\n    for(int i = 0; i < n; i++) cin >> arr2[i];\n    int i = 0, j = 0, k = 0;\n    while(i < m && j < n) merged[k++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];\n    while(i < m) merged[k++] = arr1[i++];\n    while(j < n) merged[k++] = arr2[j++];\n    for(int i = 0; i < m+n; i++) cout << merged[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Merges by comparing elements and maintaining order.</p>`
  },
  {
    id: 212,
    title: 'Find Missing Number',
    description: 'Find a missing number in a sequence of consecutive integers.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N-1 integers from 1 to N with one missing, and print the missing number.</p><h4>Sample Input:</h4><pre>5\n1 2 4 5</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n-1];\n    for(int i = 0; i < n-1; i++) cin >> arr[i];\n    int sum = (n * (n+1)) / 2, total = 0;\n    for(int i = 0; i < n-1; i++) total += arr[i];\n    cout << sum - total << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses the sum formula for 1 to N and subtracts the array sum.</p>`
  },
  {
    id: 213,
    title: 'Rotate Array Right',
    description: 'Rotate an array to the right by one position.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and rotate it right by one position, then print the result.</p><h4>Sample Input:</h4><pre>5\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>5 1 2 3 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int temp = arr[n-1];\n    for(int i = n-1; i > 0; i--) arr[i] = arr[i-1];\n    arr[0] = temp;\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Shifts elements right and moves the last to the first.</p>`
  },
  {
    id: 214,
    title: 'Pair Sum',
    description: 'Find if there exists a pair with a given sum in an array.',
    category: 'Arrays',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers and a target sum, print "Yes" if a pair sums to the target, otherwise "No".</p><h4>Sample Input:</h4><pre>5 9\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>Yes</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    bool found = false;\n    for(int i = 0; i < n-1; i++) for(int j = i+1; j < n; j++) if(arr[i] + arr[j] == target) found = true;\n    cout << (found ? "Yes" : "No") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to check all pairs for the target sum.</p>`
  },
  {
    id: 215,
    title: 'Sort Array',
    description: 'Sort an array in ascending order using bubble sort.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input, sort it in ascending order using bubble sort, and print the result.</p><h4>Sample Input:</h4><pre>5\n5 2 8 1 9</pre><h4>Sample Output:</h4><pre>1 2 5 8 9</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    for(int i = 0; i < n-1; i++) for(int j = 0; j < n-i-1; j++) if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Implements bubble sort by repeatedly swapping adjacent elements.</p>`
  },
  {
    id: 216,
    title: 'Find Median',
    description: 'Find the median of an array.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input, sort it, and print the median (middle value if N is odd, average of two middle values if N is even).</p><h4>Sample Input:</h4><pre>5\n1 3 2 4 5</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    for(int i = 0; i < n-1; i++) for(int j = 0; j < n-i-1; j++) if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);\n    cout << (n % 2 == 0 ? (arr[n/2-1] + arr[n/2]) / 2.0 : arr[n/2]) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Sorts the array and finds the median based on array size.</p>`
  },
  {
    id: 217,
    title: 'Remove Duplicates',
    description: 'Remove duplicate elements from a sorted array.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a sorted array of N integers as input, remove duplicates, and print the unique elements.</p><h4>Sample Input:</h4><pre>6\n1 1 2 2 3 3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int k = 1;\n    for(int i = 1; i < n; i++) if(arr[i] != arr[i-1]) arr[k++] = arr[i];\n    for(int i = 0; i < k; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Shifts unique elements to the front and prints up to the new length.</p>`
  },
  {
    id: 218,
    title: 'Two Sum Problem',
    description: 'Find two elements that sum to a target using a single pass.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers and a target sum, print the indices of two elements that sum to the target (if exists).</p><h4>Sample Input:</h4><pre>4 9\n2 7 11 15</pre><h4>Sample Output:</h4><pre>0 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    for(int i = 0; i < n-1; i++) for(int j = i+1; j < n; j++) if(arr[i] + arr[j] == target) cout << i << " " << j << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses nested loops to find the pair of indices with the target sum.</p>`
  },
  {
    id: 219,
    title: 'Max Subarray Sum',
    description: 'Find the maximum subarray sum using Kadane’s algorithm.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers as input and print the maximum sum of any contiguous subarray.</p><h4>Sample Input:</h4><pre>5\n-2 1 -3 4 -1</pre><h4>Sample Output:</h4><pre>4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    int maxSoFar = arr[0], maxEndingHere = arr[0];\n    for(int i = 1; i < n; i++) {\n        maxEndingHere = max(arr[i], maxEndingHere + arr[i]);\n        maxSoFar = max(maxSoFar, maxEndingHere);\n    }\n    cout << maxSoFar << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses Kadane’s algorithm to track the maximum subarray sum.</p>`
  },
  {
    id: 220,
    title: 'Rotate Array by K',
    description: 'Rotate an array to the right by K positions.',
    category: 'Arrays',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take an array of N integers and an integer K, rotate the array right by K positions, and print the result.</p><h4>Sample Input:</h4><pre>5 2\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>4 5 1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    int arr[n];\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    k = k % n;\n    int temp[n];\n    for(int i = 0; i < n; i++) temp[(i + k) % n] = arr[i];\n    for(int i = 0; i < n; i++) arr[i] = temp[i];\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Rotates by mapping indices with modulo after adjusting k.</p>`
  },

  // Strings (20 problems)
  {
    id: 301,
    title: 'Check Palindrome',
    description: 'Check if a string is a palindrome.',
    category: 'Strings',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print "Palindrome" if it reads the same forward and backward, otherwise "Not Palindrome".</p><h4>Sample Input:</h4><pre>radar</pre><h4>Sample Output:</h4><pre>Palindrome</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    int n = str.length();\n    bool isPalin = true;\n    for(int i = 0; i < n/2; i++) if(str[i] != str[n-i-1]) isPalin = false;\n    cout << (isPalin ? "Palindrome" : "Not Palindrome") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Compares characters from both ends moving inward.</p>`
  },
  {
    id: 302,
    title: 'String Length',
    description: 'Calculate the length of a string.',
    category: 'Strings',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print its length.</p><h4>Sample Input:</h4><pre>Hello</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    cout << str.length() << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses the length() function to count characters.</p>`
  },
  {
    id: 303,
    title: 'Concatenate Strings',
    description: 'Concatenate two strings.',
    category: 'Strings',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input and print their concatenation with a space between them.</p><h4>Sample Input:</h4><pre>Hello World</pre><h4>Sample Output:</h4><pre>Hello World</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str1, str2;\n    cin >> str1 >> str2;\n    cout << str1 + " " + str2 << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses the + operator to join strings with a space.</p>`
  },
  {
    id: 304,
    title: 'Convert to Uppercase',
    description: 'Convert a string to uppercase.',
    category: 'Strings',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print it in all uppercase letters.</p><h4>Sample Input:</h4><pre>hello</pre><h4>Sample Output:</h4><pre>HELLO</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    for(int i = 0; i < str.length(); i++) str[i] = toupper(str[i]);\n    cout << str << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses toupper() to convert each character to uppercase.</p>`
  },
  {
    id: 305,
    title: 'Convert to Lowercase',
    description: 'Convert a string to lowercase.',
    category: 'Strings',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print it in all lowercase letters.</p><h4>Sample Input:</h4><pre>HELLO</pre><h4>Sample Output:</h4><pre>hello</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    for(int i = 0; i < str.length(); i++) str[i] = tolower(str[i]);\n    cout << str << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses tolower() to convert each character to lowercase.</p>`
  },
  {
    id: 306,
    title: 'Count Vowels',
    description: 'Count the number of vowels in a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print the number of vowels (a, e, i, o, u).</p><h4>Sample Input:</h4><pre>hello</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    int count = 0;\n    for(int i = 0; i < str.length(); i++) if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count++;\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Counts characters matching vowel conditions.</p>`
  },
  {
    id: 307,
    title: 'Reverse String',
    description: 'Reverse the characters in a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print it with characters in reverse order.</p><h4>Sample Input:</h4><pre>hello</pre><h4>Sample Output:</h4><pre>olleh</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    for(int i = str.length()-1; i >= 0; i--) cout << str[i];\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Prints characters from the last index to the first.</p>`
  },
  {
    id: 308,
    title: 'Check Anagram',
    description: 'Check if two strings are anagrams.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input and print "Anagram" if they contain the same characters with the same frequency, otherwise "Not Anagram".</p><h4>Sample Input:</h4><pre>listen silent</pre><h4>Sample Output:</h4><pre>Anagram</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str1, str2;\n    cin >> str1 >> str2;\n    int count[26] = {0};\n    for(int i = 0; i < str1.length(); i++) count[str1[i] - 'a']++;\n    for(int i = 0; i < str2.length(); i++) count[str2[i] - 'a']--;\n    bool isAnagram = true;\n    for(int i = 0; i < 26; i++) if(count[i] != 0) isAnagram = false;\n    cout << (isAnagram ? "Anagram" : "Not Anagram") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses an array to count character frequencies and checks for equality.</p>`
  },
  {
    id: 309,
    title: 'Remove Spaces',
    description: 'Remove all spaces from a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string with spaces as input and print it without spaces.</p><h4>Sample Input:</h4><pre>Hello World</pre><h4>Sample Output:</h4><pre>HelloWorld</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    getline(cin, str);\n    string result = "";\n    for(int i = 0; i < str.length(); i++) if(str[i] != ' ') result += str[i];\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Builds a new string excluding space characters.</p>`
  },
  {
    id: 310,
    title: 'Count Words',
    description: 'Count the number of words in a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print the number of words (separated by spaces).</p><h4>Sample Input:</h4><pre>Hello World Today</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    getline(cin, str);\n    int count = 1;\n    for(int i = 0; i < str.length(); i++) if(str[i] == ' ') count++;\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Counts spaces and adds 1 for the total word count.</p>`
  },
  {
    id: 311,
    title: 'Substring Check',
    description: 'Check if a string contains a substring.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input (main string and substring) and print "Found" if the substring exists in the main string, otherwise "Not Found".</p><h4>Sample Input:</h4><pre>Hello World World</pre><h4>Sample Output:</h4><pre>Found</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str, sub;\n    getline(cin, str);\n    cin >> sub;\n    cout << (str.find(sub) != string::npos ? "Found" : "Not Found") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses find() to check for substring presence.</p>`
  },
  {
    id: 312,
    title: 'Replace Character',
    description: 'Replace all occurrences of a character in a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string, a character to replace, and a new character as input, then print the string with all occurrences replaced.</p><h4>Sample Input:</h4><pre>hello l x</pre><h4>Sample Output:</h4><pre>hexxo</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    char oldChar, newChar;\n    getline(cin, str);\n    cin >> oldChar >> newChar;\n    for(int i = 0; i < str.length(); i++) if(str[i] == oldChar) str[i] = newChar;\n    cout << str << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Replaces each occurrence of the old character with the new one.</p>`
  },
  {
    id: 313,
    title: 'Longest Word',
    description: 'Find the longest word in a string.',
    category: 'Strings',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Take a string with words as input and print the longest word.</p><h4>Sample Input:</h4><pre>I love programming</pre><h4>Sample Output:</h4><pre>programming</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str, word, longest = "";\n    getline(cin, str);\n    stringstream ss(str);\n    while(ss >> word) if(word.length() > longest.length()) longest = word;\n    cout << longest << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses stringstream to extract words and tracks the longest.</p>`
  },
  {
    id: 314,
    title: 'Check Rotation',
    description: 'Check if one string is a rotation of another.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input and print "Rotation" if the second is a rotation of the first, otherwise "Not Rotation".</p><h4>Sample Input:</h4><pre>hello olleh</pre><h4>Sample Output:</h4><pre>Rotation</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str1, str2;\n    cin >> str1 >> str2;\n    string temp = str1 + str1;\n    cout << (temp.find(str2) != string::npos ? "Rotation" : "Not Rotation") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Concatenates the first string and checks if the second is a substring.</p>`
  },
  {
    id: 315,
    title: 'String Compression',
    description: 'Compress a string by counting repeated characters.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print it in compressed form (e.g., "aaabbb" becomes "a3b3").</p><h4>Sample Input:</h4><pre>aaabbb</pre><h4>Sample Output:</h4><pre>a3b3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    string result = "";\n    int count = 1;\n    for(int i = 0; i < str.length(); i++) {\n        if(i + 1 < str.length() && str[i] == str[i+1]) count++;\n        else { result += str[i]; result += to_string(count); count = 1; }\n    }\n    cout << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Counts consecutive characters and appends the count.</p>`
  },
  {
    id: 316,
    title: 'Permutations of String',
    description: 'Generate all permutations of a string.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print all its permutations.</p><h4>Sample Input:</h4><pre>abc</pre><h4>Sample Output:</h4><pre>abc\nacb\nbac\nbca\ncba\ncab</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nvoid permute(string str, int l, int r) {\n    if(l == r) cout << str << endl;\n    else for(int i = l; i <= r; i++) {\n        swap(str[l], str[i]);\n        permute(str, l+1, r);\n        swap(str[l], str[i]);\n    }\n}\n\nint main() {\n    string str;\n    cin >> str;\n    permute(str, 0, str.length()-1);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses recursion and swapping to generate all permutations.</p>`
  },
  {
    id: 317,
    title: 'Longest Palindromic Substring',
    description: 'Find the longest palindromic substring in a string.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a string as input and print the longest palindromic substring.</p><h4>Sample Input:</h4><pre>babad</pre><h4>Sample Output:</h4><pre>bab</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstring longestPalindrome(string s) {\n    if(s.empty()) return "";\n    int start = 0, maxLength = 1;\n    for(int i = 0; i < s.length(); i++) {\n        for(int j = i; j < s.length(); j++) {\n            bool isPalin = true;\n            for(int k = 0; k < (j-i+1)/2; k++) if(s[i+k] != s[j-k]) isPalin = false;\n            if(isPalin && j-i+1 > maxLength) { start = i; maxLength = j-i+1; }\n        }\n    }\n    return s.substr(start, maxLength);\n}\n\nint main() {\n    string str;\n    cin >> str;\n    cout << longestPalindrome(str) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Checks all substrings for palindrome property and tracks the longest.</p>`
  },
  {
    id: 318,
    title: 'Check Subsequence',
    description: 'Check if a string is a subsequence of another.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input and print "Subsequence" if the second is a subsequence of the first, otherwise "Not Subsequence".</p><h4>Sample Input:</h4><pre>abcdefg cd</pre><h4>Sample Output:</h4><pre>Subsequence</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str1, str2;\n    cin >> str1 >> str2;\n    int j = 0;\n    for(int i = 0; i < str1.length() && j < str2.length(); i++) if(str1[i] == str2[j]) j++;\n    cout << (j == str2.length() ? "Subsequence" : "Not Subsequence") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Checks if all characters of str2 appear in order in str1.</p>`
  },
  {
    id: 319,
    title: 'String Rotation Count',
    description: 'Count the number of rotations needed to match strings.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take two strings as input and print the minimum number of right rotations needed to make the second a rotation of the first, or -1 if impossible.</p><h4>Sample Input:</h4><pre>hello olleh</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    string str1, str2;\n    cin >> str1 >> str2;\n    if(str1.length() != str2.length()) { cout << -1 << endl; return 0; }\n    string temp = str1 + str1;\n    int count = 0;\n    for(int i = 0; i < str1.length(); i++) if(temp.substr(i, str1.length()) == str2) { count = i; break; }\n    cout << (count > 0 ? count : -1) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Concatenates and checks substrings to find the rotation count.</p>`
  },
  {
    id: 320,
    title: 'Valid Parentheses',
    description: 'Check if a string has valid parentheses.',
    category: 'Strings',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Take a string containing only '(', ')', '{', '}', '[', ']' and print "Valid" if parentheses are balanced, otherwise "Invalid".</p><h4>Sample Input:</h4><pre>(())</pre><h4>Sample Output:</h4><pre>Valid</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <stack>\nusing namespace std;\n\nint main() {\n    string str;\n    cin >> str;\n    stack<char> s;\n    for(int i = 0; i < str.length(); i++) {\n        if(str[i] == '(' || str[i] == '{' || str[i] == '[') s.push(str[i]);\n        else if(s.empty() || (str[i] == ')' && s.top() != '(') || (str[i] == '}' && s.top() != '{') || (str[i] == ']' && s.top() != '[')) { cout << "Invalid" << endl; return 0; }\n        else s.pop();\n    }\n    cout << (s.empty() ? "Valid" : "Invalid") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Uses a stack to match opening and closing parentheses.</p>`
  },

  // 2D Array (20 problems)
  {
    id: 1101,
    title: 'Initialize 2D Array',
    description: 'Initialize and print a 2D array with user input.',
    category: '2D Array',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input for a 2x2 2D array and print it.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 2\n3 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The 2D array is filled and printed using nested loops.</p>`
  },
  {
    id: 1102,
    title: 'Sum of 2D Array',
    description: 'Calculate the sum of all elements in a 2D array.',
    category: '2D Array',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input for a 2x2 2D array and print the sum of its elements.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], sum = 0;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) sum += arr[i][j];\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The sum is computed by iterating over all elements.</p>`
  },
  {
    id: 1103,
    title: 'Row Sum 2D Array',
    description: 'Calculate the sum of each row in a 2D array.',
    category: '2D Array',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input for a 2x2 2D array and print the sum of each row.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>3\n7</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) {\n        int sum = 0;\n        for(int j = 0; j < 2; j++) sum += arr[i][j];\n        cout << sum << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each row's sum is calculated and printed separately.</p>`
  },
  {
    id: 1104,
    title: 'Column Sum 2D Array',
    description: 'Calculate the sum of each column in a 2D array.',
    category: '2D Array',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input for a 2x2 2D array and print the sum of each column.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>4\n6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int j = 0; j < 2; j++) {\n        int sum = 0;\n        for(int i = 0; i < 2; i++) sum += arr[i][j];\n        cout << sum << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each column's sum is calculated and printed separately.</p>`
  },
  {
    id: 1105,
    title: 'Transpose 2D Array',
    description: 'Find the transpose of a 2D array.',
    category: '2D Array',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Take input for a 2x2 2D array and print its transpose.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 3\n2 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) cout << arr[j][i] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The transpose swaps rows and columns during printing.</p>`
  },
  {
    id: 1106,
    title: 'Search Element 2D Array',
    description: 'Search for an element in a 2D array.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and a target value, print "Found" if present, else "Not Found".</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4\n3</pre><h4>Sample Output:</h4><pre>Found</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], target;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    cin >> target;\n    bool found = false;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) if(arr[i][j] == target) found = true;\n    cout << (found ? "Found" : "Not Found") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The array is traversed to check for the target element.</p>`
  },
  {
    id: 1107,
    title: 'Max Element 2D Array',
    description: 'Find the maximum element in a 2D array.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print the maximum element.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], max = -1;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) if(arr[i][j] > max) max = arr[i][j];\n    cout << max << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The maximum value is found by comparing each element.</p>`
  },
  {
    id: 1108,
    title: 'Min Element 2D Array',
    description: 'Find the minimum element in a 2D array.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print the minimum element.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], min = 100;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) if(arr[i][j] < min) min = arr[i][j];\n    cout << min << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The minimum value is found by comparing each element.</p>`
  },
  {
    id: 1109,
    title: 'Diagonal Sum 2D Array',
    description: 'Calculate the sum of the main diagonal in a 2D array.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print the sum of its main diagonal (top-left to bottom-right).</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], sum = 0;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) sum += arr[i][i];\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The sum is calculated for elements where row index equals column index.</p>`
  },
  {
    id: 1110,
    title: 'Rotate 2D Array 90 Degrees',
    description: 'Rotate a 2D array 90 degrees clockwise.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print it rotated 90 degrees clockwise.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>3 1\n4 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int j = 0; j < 2; j++) {\n        for(int i = 1; i >= 0; i--) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Rotation is achieved by swapping row and column indices in reverse order.</p>`
  },
  {
    id: 1111,
    title: 'Spiral Print 2D Array',
    description: 'Print elements of a 2D array in spiral order.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print its elements in spiral order (clockwise).</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 2 4 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) cout << arr[0][i] << " ";\n    for(int i = 1; i >= 0; i--) cout << arr[1][i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Elements are printed in a spiral starting from top row, then right, bottom, left.</p>`
  },
  {
    id: 1112,
    title: 'Check Symmetric 2D Array',
    description: 'Check if a 2D array is symmetric.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print "Symmetric" if it equals its transpose, else "Not Symmetric".</p><h4>Sample Input:</h4><pre>2 2\n1 2\n2 1</pre><h4>Sample Output:</h4><pre>Symmetric</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    bool symmetric = true;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) if(arr[i][j] != arr[j][i]) symmetric = false;\n    cout << (symmetric ? "Symmetric" : "Not Symmetric") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Symmetry is checked by comparing each element with its transpose counterpart.</p>`
  },
  {
    id: 1113,
    title: 'Matrix Multiplication',
    description: 'Multiply two 2x2 matrices.',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for two 2x2 2D arrays and print their product.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4\n2 2\n5 6\n7 8</pre><h4>Sample Output:</h4><pre>19 22\n43 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a[2][2], b[2][2], c[2][2] = {0};\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> a[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> b[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) for(int k = 0; k < 2; k++) c[i][j] += a[i][k] * b[k][j];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) cout << c[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Matrix multiplication uses three nested loops for row-column dot product.</p>`
  },
  {
    id: 1114,
    title: 'Wave Print 2D Array',
    description: 'Print a 2D array in wave form (column-wise).',
    category: '2D Array',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take input for a 2x2 2D array and print it in wave form (down then up per column).</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 3 4 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int j = 0; j < 2; j++) {\n        if(j % 2 == 0) for(int i = 0; i < 2; i++) cout << arr[i][j] << " ";\n        else for(int i = 1; i >= 0; i--) cout << arr[i][j] << " ";\n    }\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Columns are printed in alternating directions (down, up).</p>`
  },
  {
    id: 1115,
    title: 'Dynamic 2D Array Input',
    description: 'Take input for a dynamic 2D array and print it.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take rows and columns as input, dynamically allocate a 2D array, fill it, and print.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 2\n3 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int r, c;\n    cin >> r >> c;\n    int **arr = new int*[r];\n    for(int i = 0; i < r; i++) arr[i] = new int[c];\n    for(int i = 0; i < r; i++) for(int j = 0; j < c; j++) cin >> arr[i][j];\n    for(int i = 0; i < r; i++) {\n        for(int j = 0; j < c; j++) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    for(int i = 0; i < r; i++) delete[] arr[i];\n    delete[] arr;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Dynamic allocation is used with proper memory deallocation.</p>`
  },
  {
    id: 1116,
    title: 'Check Identity Matrix',
    description: 'Check if a 2D array is an identity matrix.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input for a 2x2 2D array and print "Identity" if it is an identity matrix, else "Not Identity".</p><h4>Sample Input:</h4><pre>2 2\n1 0\n0 1</pre><h4>Sample Output:</h4><pre>Identity</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    bool identity = true;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) if((i == j && arr[i][j] != 1) || (i != j && arr[i][j] != 0)) identity = false;\n    cout << (identity ? "Identity" : "Not Identity") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>An identity matrix has 1s on the diagonal and 0s elsewhere.</p>`
  },
  {
    id: 1117,
    title: 'Rotate 2D Array 180 Degrees',
    description: 'Rotate a 2D array 180 degrees.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input for a 2x2 2D array and print it rotated 180 degrees.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>4 3\n2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 1; i >= 0; i--) {\n        for(int j = 1; j >= 0; j--) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Rotation is achieved by reversing both row and column indices.</p>`
  },
  {
    id: 1118,
    title: 'Boundary Elements Sum',
    description: 'Calculate the sum of boundary elements in a 2D array.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input for a 2x2 2D array and print the sum of its boundary elements.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2], sum = 0;\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) sum += arr[0][i] + arr[1][i];\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The sum includes all elements on the outer edges.</p>`
  },
  {
    id: 1119,
    title: 'Zigzag Print 2D Array',
    description: 'Print a 2D array in zigzag order.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input for a 2x2 2D array and print it in zigzag order (diagonal pattern).</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>1 2 3 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cout << arr[i][j] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Zigzag order is approximated here; for larger arrays, use diagonal traversal logic.</p>`
  },
  {
    id: 1120,
    title: 'Invert 2D Array',
    description: 'Invert (flip vertically) a 2D array.',
    category: '2D Array',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take input for a 2x2 2D array and print it inverted vertically.</p><h4>Sample Input:</h4><pre>2 2\n1 2\n3 4</pre><h4>Sample Output:</h4><pre>3 4\n1 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int arr[2][2];\n    for(int i = 0; i < 2; i++) for(int j = 0; j < 2; j++) cin >> arr[i][j];\n    for(int i = 1; i >= 0; i--) {\n        for(int j = 0; j < 2; j++) cout << arr[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Inversion is done by printing rows in reverse order.</p>`
  },
  // Structures (20 problems)
  {
    id: 801,
    title: 'Create Simple Structure',
    description: 'Create and use a structure to store a student\'s name and age.',
    category: 'Structures',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name (string) and age (int), take input for one student, and print the details.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.age;\n    cout << "Name: " << s.name << ", Age: " << s.age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The structure Student holds name and age, accessed via dot operator.</p>`
  },
  {
    id: 802,
    title: 'Structure Array Input',
    description: 'Use an array of structures to store student details.',
    category: 'Structures',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, take input for 2 students, and print their details.</p><h4>Sample Input:</h4><pre>2\nJohn 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Student s[n];\n    for(int i = 0; i < n; i++) cin >> s[i].name >> s[i].age;\n    for(int i = 0; i < n; i++) cout << "Name: " << s[i].name << ", Age: " << s[i].age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>An array of Student structures stores and prints multiple records.</p>`
  },
  {
    id: 803,
    title: 'Structure with Function',
    description: 'Use a function with a structure to calculate student grade.',
    category: 'Structures',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and marks, use a function to calculate grade (marks > 50: Pass, else Fail), and print.</p><h4>Sample Input:</h4><pre>John 60</pre><h4>Sample Output:</h4><pre>Name: John, Grade: Pass</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int marks;\n};\n\nstring getGrade(Student s) {\n    return (s.marks > 50) ? "Pass" : "Fail";\n}\n\nint main() {\n    Student s;\n    cin >> s.name >> s.marks;\n    cout << "Name: " << s.name << ", Grade: " << getGrade(s) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function getGrade() processes the structure data to determine the grade.</p>`
  },
  {
    id: 804,
    title: 'Nested Structure',
    description: 'Create a nested structure for student address.',
    category: 'Structures',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a nested structure with Student containing Address (city, pin), take input, and print.</p><h4>Sample Input:</h4><pre>John Delhi 110001</pre><h4>Sample Output:</h4><pre>Name: John, City: Delhi, Pin: 110001</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Address {\n    string city;\n    int pin;\n};\n\nstruct Student {\n    string name;\n    Address addr;\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.addr.city >> s.addr.pin;\n    cout << "Name: " << s.name << ", City: " << s.addr.city << ", Pin: " << s.addr.pin << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The nested structure Address is part of Student, accessed with dot operator.</p>`
  },
  {
    id: 805,
    title: 'Structure Pointer Access',
    description: 'Access structure members using a pointer.',
    category: 'Structures',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, use a pointer to input and print details.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.age;\n    Student *ptr = &s;\n    cout << "Name: " << ptr->name << ", Age: " << ptr->age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The pointer ptr uses -> to access structure members.</p>`
  },
  {
    id: 806,
    title: 'Structure with Array',
    description: 'Use a structure with an array to store marks.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and an array of 3 marks, calculate average, and print.</p><h4>Sample Input:</h4><pre>John 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Average: 90</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int marks[3];\n};\n\nint main() {\n    Student s;\n    cin >> s.name;\n    for(int i = 0; i < 3; i++) cin >> s.marks[i];\n    int sum = 0;\n    for(int i = 0; i < 3; i++) sum += s.marks[i];\n    cout << "Name: " << s.name << ", Average: " << sum / 3 << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The structure includes an array, and average is computed from marks.</p>`
  },
  {
    id: 807,
    title: 'Pass Structure to Function',
    description: 'Pass a structure to a function to find highest mark.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and 3 marks, use a function to find the highest mark, and print.</p><h4>Sample Input:</h4><pre>John 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Highest Mark: 95</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int marks[3];\n};\n\nint findHighest(Student s) {\n    int max = s.marks[0];\n    for(int i = 1; i < 3; i++) if(s.marks[i] > max) max = s.marks[i];\n    return max;\n}\n\nint main() {\n    Student s;\n    cin >> s.name;\n    for(int i = 0; i < 3; i++) cin >> s.marks[i];\n    cout << "Name: " << s.name << ", Highest Mark: " << findHighest(s) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function findHighest() iterates to find the maximum mark.</p>`
  },
  {
    id: 808,
    title: 'Structure with Pointer Function',
    description: 'Use a pointer to a structure in a function.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, use a function with a pointer to update age, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 21</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nvoid updateAge(Student *s) {\n    s->age++;\n}\n\nint main() {\n    Student s;\n    cin >> s.name >> s.age;\n    updateAge(&s);\n    cout << "Name: " << s.name << ", Age: " << s.age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function updateAge() uses a pointer to modify the age member.</p>`
  },
  {
    id: 809,
    title: 'Sort Structure Array',
    description: 'Sort an array of structures by age.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, take input for 2 students, sort by age, and print.</p><h4>Sample Input:</h4><pre>2\nJohn 20\nAlice 18</pre><h4>Sample Output:</h4><pre>Name: Alice, Age: 18\nName: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Student s[n];\n    for(int i = 0; i < n; i++) cin >> s[i].name >> s[i].age;\n    for(int i = 0; i < n-1; i++) for(int j = 0; j < n-i-1; j++) if(s[j].age > s[j+1].age) swap(s[j], s[j+1]);\n    for(int i = 0; i < n; i++) cout << "Name: " << s[i].name << ", Age: " << s[i].age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Bubble sort is applied to the structure array based on age.</p>`
  },
  {
    id: 810,
    title: 'Structure with Dynamic Memory',
    description: 'Use dynamic memory for a structure array.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, dynamically allocate for N students, input details, and print.</p><h4>Sample Input:</h4><pre>2\nJohn 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Student *s = new Student[n];\n    for(int i = 0; i < n; i++) cin >> s[i].name >> s[i].age;\n    for(int i = 0; i < n; i++) cout << "Name: " << s[i].name << ", Age: " << s[i].age << endl;\n    delete[] s;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Dynamic allocation with new is used, and delete[] frees the memory.</p>`
  },
  {
    id: 811,
    title: 'Structure with Function Pointer',
    description: 'Use a function pointer within a structure.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name, age, and a function pointer to print details, and use it.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    void (*print)(Student);\n};\n\nvoid printStudent(Student s) {\n    cout << "Name: " << s.name << ", Age: " << s.age << endl;\n}\n\nint main() {\n    Student s;\n    cin >> s.name >> s.age;\n    s.print = printStudent;\n    s.print(s);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The function pointer print is assigned and called to display details.</p>`
  },
  {
    id: 812,
    title: 'Compare Structures',
    description: 'Compare two structures for equality.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, take input for 2 students, compare, and print "Equal" or "Not Equal".</p><h4>Sample Input:</h4><pre>John 20\nJohn 20</pre><h4>Sample Output:</h4><pre>Equal</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    Student s1, s2;\n    cin >> s1.name >> s1.age >> s2.name >> s2.age;\n    if(s1.name == s2.name && s1.age == s2.age) cout << "Equal" << endl;\n    else cout << "Not Equal" << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Comparison is done by checking name and age equality.</p>`
  },
  {
    id: 813,
    title: 'Structure with Union',
    description: 'Combine structure with a union for multiple data types.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and a union for age or id, take input (age or id), and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    union {\n        int age;\n        int id;\n    } data;\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.data.age;\n    cout << "Name: " << s.name << ", Age: " << s.data.age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The union within the structure shares memory for age or id.</p>`
  },
  {
    id: 814,
    title: 'Deep Copy Structure',
    description: 'Implement deep copy for a structure with dynamic array.',
    category: 'Structures',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and dynamic marks array, copy one student to another, and print.</p><h4>Sample Input:</h4><pre>John 3 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Marks: 85 90 95</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int *marks;\n    int size;\n};\n\nvoid copyStudent(Student *dest, Student src) {\n    dest->name = src.name;\n    dest->size = src.size;\n    dest->marks = new int[src.size];\n    for(int i = 0; i < src.size; i++) dest->marks[i] = src.marks[i];\n}\n\nint main() {\n    Student s1, s2;\n    cin >> s1.name >> s1.size;\n    s1.marks = new int[s1.size];\n    for(int i = 0; i < s1.size; i++) cin >> s1.marks[i];\n    copyStudent(&s2, s1);\n    cout << "Name: " << s2.name << ", Marks: ";\n    for(int i = 0; i < s2.size; i++) cout << s2.marks[i] << " ";\n    cout << endl;\n    delete[] s1.marks;\n    delete[] s2.marks;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>copyStudent() performs a deep copy to avoid shallow copy issues with dynamic memory.</p>`
  },
  {
    id: 815,
    title: 'Structure with File I/O',
    description: 'Read and write structure data to a file.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, write 2 students to a file, then read and print.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <fstream>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n};\n\nint main() {\n    Student s[2];\n    for(int i = 0; i < 2; i++) cin >> s[i].name >> s[i].age;\n    ofstream outFile("students.txt", ios::binary);\n    outFile.write((char*)s, sizeof(s));\n    outFile.close();\n    ifstream inFile("students.txt", ios::binary);\n    Student readS[2];\n    inFile.read((char*)readS, sizeof(readS));\n    for(int i = 0; i < 2; i++) cout << "Name: " << readS[i].name << ", Age: " << readS[i].age << endl;\n    inFile.close();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>File I/O uses binary mode to read and write structure data.</p>`
  },
  {
    id: 816,
    title: 'Structure with Linked List',
    description: 'Implement a linked list using structures.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a structure Node with name and age, create a linked list, take 2 inputs, and print.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Node {\n    string name;\n    int age;\n    Node *next;\n};\n\nint main() {\n    Node *head = NULL, *tail = NULL;\n    for(int i = 0; i < 2; i++) {\n        Node *temp = new Node;\n        cin >> temp->name >> temp->age;\n        temp->next = NULL;\n        if(head == NULL) head = tail = temp;\n        else { tail->next = temp; tail = temp; }\n    }\n    Node *current = head;\n    while(current != NULL) {\n        cout << "Name: " << current->name << ", Age: " << current->age << endl;\n        current = current->next;\n    }\n    while(head != NULL) { Node *temp = head; head = head->next; delete temp; }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The structure Node forms a linked list with dynamic allocation and deallocation.</p>`
  },
  {
    id: 817,
    title: 'Structure with Bit Fields',
    description: 'Use bit fields in a structure.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and bit fields for age (5 bits) and grade (3 bits), take input, and print.</p><h4>Sample Input:</h4><pre>John 20 5</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20, Grade: 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    struct {\n        unsigned int age : 5;\n        unsigned int grade : 3;\n    } data;\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.data.age >> s.data.grade;\n    cout << "Name: " << s.name << ", Age: " << s.data.age << ", Grade: " << s.data.grade << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Bit fields limit age to 5 bits and grade to 3 bits within the structure.</p>`
  },
  {
    id: 818,
    title: 'Structure with Enum',
    description: 'Combine structure with an enum for status.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name, age, and enum status (Active/Inactive), take input, and print.</p><h4>Sample Input:</h4><pre>John 20 0</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20, Status: Active</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    enum Status { Active = 0, Inactive } status;\n};\n\nint main() {\n    Student s;\n    int stat;\n    cin >> s.name >> s.age >> stat;\n    s.status = (Status)stat;\n    cout << "Name: " << s.name << ", Age: " << s.age << ", Status: " << (s.status == 0 ? "Active" : "Inactive") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The enum Status is part of the structure, cast and used for status.</p>`
  },
  {
    id: 819,
    title: 'Structure with Template',
    description: 'Use a template with a structure.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a template structure Student with a generic data type, take input for name and data, and print.</p><h4>Sample Input:</h4><pre>John 25.5</pre><h4>Sample Output:</h4><pre>Name: John, Data: 25.5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\ntemplate <typename T>\nstruct Student {\n    string name;\n    T data;\n};\n\nint main() {\n    Student<double> s;\n    cin >> s.name >> s.data;\n    cout << "Name: " << s.name << ", Data: " << s.data << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The template allows the data member to be of any type, here double.</p>`
  },
  {
    id: 820,
    title: 'Structure with Operator Overloading',
    description: 'Overload + operator for structure addition.',
    category: 'Structures',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a structure Student with name and age, overload + to add ages, and print result.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: JohnAlice, Combined Age: 42</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    Student operator+(const Student& s) {\n        Student result;\n        result.name = name + s.name;\n        result.age = age + s.age;\n        return result;\n    }\n};\n\nint main() {\n    Student s1, s2, s3;\n    cin >> s1.name >> s1.age >> s2.name >> s2.age;\n    s3 = s1 + s2;\n    cout << "Name: " << s3.name << ", Combined Age: " << s3.age << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The + operator is overloaded to concatenate names and add ages.</p>`
  },

  // Pointers
  {
    id: 401,
    title: 'Swap Two Numbers Using Pointers',
    category: 'Pointers',
    difficulty: 'easy',
    description: 'Swap two integers using pointers and call by reference.',
    problem: `<h3>Problem Statement</h3>
<p>Write a C++ program to swap two numbers using pointers.</p>
<h4>Input:</h4><pre>10 20</pre>
<h4>Output:</h4><pre>After swap: a = 20, b = 10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

void swap(int* x, int* y) {
  int temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  int a, b;
  cin >> a >> b;
  swap(&a, &b);
  cout << "After swap: a = " << a << ", b = " << b;
  return 0;
}</code></pre>`,
    explanation: `<p>We define a function <code>swap()</code> that accepts two integer pointers. Inside, we use dereferencing (*x and *y) to access and swap the values at those memory addresses.</p>
<p>In <code>main()</code>, we read two integers, pass their addresses using <code>&a</code> and <code>&b</code>, so the original variables are swapped directly in memory.</p>
<p>This is called <strong>call by reference</strong> using pointers.</p>`
  },
  {
    id: 402,
    title: 'Access Array Elements Using Pointers',
    category: 'Pointers',
    difficulty: 'easy',
    description: 'Print all elements of an array using pointer arithmetic.',
    problem: `<h3>Problem Statement</h3>
<p>Read an array and display its elements using pointers instead of array indexing.</p>
<h4>Input:</h4><pre>5\n10 20 30 40 50</pre>
<h4>Output:</h4><pre>10 20 30 40 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  int* ptr = arr;
  for (int i = 0; i < n; i++) cout << *(ptr + i) << " ";
  return 0;
}</code></pre>`,
    explanation: `<p><code>arr</code> itself is a pointer to the first element of the array. By assigning it to <code>int* ptr</code>, we use pointer arithmetic like <code>*(ptr + i)</code> to access values.</p>
<p>This approach avoids using the bracket indexing and shows how memory is navigated using pointers.</p>`
  },
  {
    id: 403,
    title: 'Find Maximum Using Pointers',
    category: 'Pointers',
    difficulty: 'easy',
    description: 'Find the larger of two numbers using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Use pointers to find and print the maximum of two numbers.</p>
<h4>Input:</h4><pre>45 98</pre>
<h4>Output:</h4><pre>Maximum: 98</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;
  int* p1 = &a;
  int* p2 = &b;
  cout << "Maximum: " << ((*p1 > *p2) ? *p1 : *p2);
  return 0;
}</code></pre>`,
    explanation: `<p>We store the addresses of <code>a</code> and <code>b</code> in <code>p1</code> and <code>p2</code>. Then we compare <code>*p1</code> and <code>*p2</code> (their values).</p>
<p>This demonstrates conditional checks using pointer dereferencing.</p>`
  },
  {
    id: 404,
    title: 'Print Address of a Variable',
    category: 'Pointers',
    difficulty: 'easy',
    description: 'Display the memory address of a variable using a pointer.',
    problem: `<h3>Problem Statement</h3>
<p>Write a C++ program to input a number and print its memory address using a pointer.</p>
<h4>Input:</h4><pre>42</pre>
<h4>Output:</h4><pre>Address: 0x61ff04</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int x;
  cin >> x;
  int* ptr = &x;
  cout << "Address: " << ptr;
  return 0;
}</code></pre>`,
    explanation: `<p>We assign the address of <code>x</code> to pointer <code>ptr</code> using the <code>&</code> operator, and print the pointer itself.</p>
<p>This is the basic foundation of pointers — holding addresses.</p>`
  },
  {
    id: 405,
    title: 'Add Two Numbers Using Pointers',
    category: 'Pointers',
    difficulty: 'easy',
    description: 'Add two numbers using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Use pointers to add two user-input numbers.</p>
<h4>Input:</h4><pre>15 25</pre>
<h4>Output:</h4><pre>Sum = 40</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;
  int* p1 = &a;
  int* p2 = &b;
  cout << "Sum = " << *p1 + *p2;
  return 0;
}</code></pre>`,
    explanation: `<p>We use two pointers <code>p1</code> and <code>p2</code> to hold addresses of variables, and dereference them to access and add the values.</p>
<p>Helps understand how to perform arithmetic using indirect access.</p>`
  },
  {
    id: 406,
    title: 'Pointer to Pointer Example',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Access a variable using pointer to pointer.',
    problem: `<h3>Problem Statement</h3>
<p>Write a program to demonstrate accessing a variable using a pointer to a pointer (double pointer).</p>
<h4>Input:</h4><pre>50</pre>
<h4>Output:</h4><pre>Value = 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int x;
  cin >> x;
  int* ptr = &x;
  int** dptr = &ptr;

  cout << "Value = " << **dptr;
  return 0;
}</code></pre>`,
    explanation: `<p><code>ptr</code> stores the address of <code>x</code>, and <code>dptr</code> stores the address of <code>ptr</code>.</p>
<p>To access the value of <code>x</code> through <code>dptr</code>, we use <code>**dptr</code>.</p>`
  },
  {
    id: 407,
    title: 'Pointer Arithmetic Demonstration',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Use pointer arithmetic to access array values.',
    problem: `<h3>Problem Statement</h3>
<p>Write a program to show how pointer arithmetic (incrementing and adding values) works with arrays.</p>
<h4>Input:</h4><pre>5\n1 2 3 4 5</pre>
<h4>Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  int* ptr = arr;
  for (int i = 0; i < n; i++) {
    cout << *ptr << " ";
    ptr++;
  }
  return 0;
}</code></pre>`,
    explanation: `<p>This shows how moving the pointer forward using <code>ptr++</code> lets us traverse the array.</p>
<p>Each increment advances the pointer by the size of the data type (4 bytes for <code>int</code>).</p>`
  },
  {
    id: 408,
    title: 'Reverse Array Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Reverse an array by using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Reverse the elements of an array using pointer arithmetic.</p>
<h4>Input:</h4><pre>5\n10 20 30 40 50</pre>
<h4>Output:</h4><pre>50 40 30 20 10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  int* ptr = arr + n - 1;
  for (int i = 0; i < n; i++) {
    cout << *ptr << " ";
    ptr--;
  }
  return 0;
}</code></pre>`,
    explanation: `<p>We initialize the pointer to the last element and decrement it in the loop to move backward.</p>
<p>Pointer arithmetic lets us treat array elements like a linear memory block.</p>`
  },
  {
    id: 409,
    title: 'Count Even and Odd Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Count how many even and odd numbers are in an array using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Use pointers to count the number of even and odd integers in an array.</p>
<h4>Input:</h4><pre>6\n1 2 3 4 5 6</pre>
<h4>Output:</h4><pre>Even: 3, Odd: 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  int even = 0, odd = 0;
  int* ptr = arr;
  for (int i = 0; i < n; i++) {
    if (*(ptr + i) % 2 == 0) even++;
    else odd++;
  }

  cout << "Even: " << even << ", Odd: " << odd;
  return 0;
}</code></pre>`,
    explanation: `<p>We use a pointer and loop through the array using <code>*(ptr + i)</code> to check for even/odd.</p>
<p>This avoids indexing syntax and shows alternate traversal techniques.</p>`
  },
  {
    id: 410,
    title: 'Copy Array Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Copy values from one array to another using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Use pointers to copy all elements from one array to another.</p>
<h4>Input:</h4><pre>5\n10 20 30 40 50</pre>
<h4>Output:</h4><pre>Copied: 10 20 30 40 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int src[n], dest[n];
  for (int i = 0; i < n; i++) cin >> src[i];

  int* pSrc = src;
  int* pDest = dest;
  for (int i = 0; i < n; i++) *(pDest + i) = *(pSrc + i);

  for (int i = 0; i < n; i++) cout << dest[i] << " ";
  return 0;
}</code></pre>`,
    explanation: `<p>Two pointers are used: one for source and one for destination. Each element is copied by dereferencing and assigning.</p>
<p>This simulates how data moves in memory between buffers.</p>`
  },
  {
    id: 411,
    title: 'Sort Array Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Sort an array using pointer-based access.',
    problem: `<h3>Problem Statement</h3>
<p>Sort an array of integers in ascending order using pointers (without array indexing).</p>
<h4>Input:</h4><pre>5\n50 30 10 40 20</pre>
<h4>Output:</h4><pre>10 20 30 40 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> *(arr + i);

  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if (*(arr + i) > *(arr + j)) {
        swap(arr + i, arr + j);
      }
    }
  }

  for (int i = 0; i < n; i++) cout << *(arr + i) << " ";
  return 0;
}</code></pre>`,
    explanation: `<p>This is selection sort implemented using pointers. We access and compare values with <code>*(arr + i)</code> and swap them via pointer references.</p>
<p>This reinforces how to operate on arrays using pointer arithmetic instead of array notation.</p>`
  },
  {
    id: 412,
    title: 'Find Second Largest Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Use pointers to find the second largest number in an array.',
    problem: `<h3>Problem Statement</h3>
<p>Find the second largest element in an array using pointers.</p>
<h4>Input:</h4><pre>6\n3 8 12 5 14 9</pre>
<h4>Output:</h4><pre>Second largest: 12</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> *(arr + i);

  int max1 = INT_MIN, max2 = INT_MIN;
  for (int i = 0; i < n; i++) {
    if (*(arr + i) > max1) {
      max2 = max1;
      max1 = *(arr + i);
    } else if (*(arr + i) > max2 && *(arr + i) != max1) {
      max2 = *(arr + i);
    }
  }

  cout << "Second largest: " << max2;
  return 0;
}</code></pre>`,
    explanation: `<p>We maintain two variables for the first and second largest numbers. As we iterate with a pointer, we update them accordingly.</p>
<p>This uses dereferencing and conditional checks with pointer arithmetic.</p>`
  },
  {
    id: 413,
    title: 'Calculate Average Using Pointers',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Use pointers to calculate average of elements in an array.',
    problem: `<h3>Problem Statement</h3>
<p>Calculate the average of an array of integers using pointers.</p>
<h4>Input:</h4><pre>4\n10 20 30 40</pre>
<h4>Output:</h4><pre>Average = 25</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n, sum = 0;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> *(arr + i);

  for (int i = 0; i < n; i++) sum += *(arr + i);

  cout << "Average = " << (sum / n);
  return 0;
}</code></pre>`,
    explanation: `<p>The array is populated using pointer-style input. A second loop adds all values using dereferencing and then calculates average.</p>`
  },
  {
    id: 414,
    title: 'Count Vowels in String Using Pointer',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Count vowels in a string using char pointer.',
    problem: `<h3>Problem Statement</h3>
<p>Use a pointer to traverse a string and count the vowels.</p>
<h4>Input:</h4><pre>education</pre>
<h4>Output:</h4><pre>Vowels = 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

bool isVowel(char c) {
  c = tolower(c);
  return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

int main() {
  char str[100];
  cin >> str;

  char* ptr = str;
  int count = 0;

  while (*ptr != '\\0') {
    if (isVowel(*ptr)) count++;
    ptr++;
  }

  cout << "Vowels = " << count;
  return 0;
}</code></pre>`,
    explanation: `<p>The pointer <code>ptr</code> walks through the string until it hits null character. On each step, <code>*ptr</code> is checked for vowels using a helper function.</p>`
  },
  {
    id: 415,
    title: 'String Length Without strlen()',
    category: 'Pointers',
    difficulty: 'medium',
    description: 'Find the length of a string without using strlen().',
    problem: `<h3>Problem Statement</h3>
<p>Use a pointer to calculate the length of a string manually.</p>
<h4>Input:</h4><pre>pointer</pre>
<h4>Output:</h4><pre>Length = 7</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  char str[100];
  cin >> str;

  char* ptr = str;
  int len = 0;
  while (*ptr != '\\0') {
    len++;
    ptr++;
  }

  cout << "Length = " << len;
  return 0;
}</code></pre>`,
    explanation: `<p>Instead of using <code>strlen()</code>, we increment a counter while moving the pointer until we hit the null character <code>'\\0'</code>.</p>
<p>This shows manual memory traversal using pointer.</p>`
  },
  {
    id: 416,
    title: 'Compare Two Strings Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Compare two strings without using strcmp(), using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Compare two strings using pointers and determine whether they are equal.</p>
<h4>Input:</h4><pre>hello\nhello</pre>
<h4>Output:</h4><pre>Strings are equal</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  char str1[100], str2[100];
  cin >> str1 >> str2;

  char *p1 = str1, *p2 = str2;
  bool equal = true;

  while (*p1 != '\\0' || *p2 != '\\0') {
    if (*p1 != *p2) {
      equal = false;
      break;
    }
    p1++; p2++;
  }

  if (equal)
    cout << "Strings are equal";
  else
    cout << "Strings are not equal";

  return 0;
}</code></pre>`,
    explanation: `<p>We walk through both strings with two pointers, comparing each character one by one.</p>
<p>This mimics what <code>strcmp()</code> does internally.</p>`
  },
  {
    id: 417,
    title: 'Concatenate Strings Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Manually concatenate two strings using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Write a C++ program to concatenate two strings without using strcat().</p>
<h4>Input:</h4><pre>hello\nworld</pre>
<h4>Output:</h4><pre>helloworld</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  char s1[100], s2[100];
  cin >> s1 >> s2;

  char *p1 = s1;
  while (*p1 != '\\0') p1++;

  char *p2 = s2;
  while (*p2 != '\\0') {
    *p1 = *p2;
    p1++; p2++;
  }
  *p1 = '\\0';

  cout << s1;
  return 0;
}</code></pre>`,
    explanation: `<p>We move pointer <code>p1</code> to the end of <code>s1</code>, and copy each character from <code>s2</code> to it.</p>
<p>This is a manual approach to concatenation using pointer manipulation.</p>`
  },
  {
    id: 418,
    title: 'Check Palindrome Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Check if a string is a palindrome using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Determine if the input string is a palindrome using two pointers.</p>
<h4>Input:</h4><pre>madam</pre>
<h4>Output:</h4><pre>Palindrome</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
#include &lt;cstring&gt;
using namespace std;

int main() {
  char str[100];
  cin >> str;
  char* left = str;
  char* right = str + strlen(str) - 1;
  bool isPalin = true;

  while (left < right) {
    if (*left != *right) {
      isPalin = false;
      break;
    }
    left++; right--;
  }

  cout << (isPalin ? "Palindrome" : "Not Palindrome");
  return 0;
}</code></pre>`,
    explanation: `<p>Two pointers are placed at the start and end of the string and moved inward while comparing characters.</p>
<p>This is an efficient way to check palindromes using pointers.</p>`
  },
  {
    id: 419,
    title: 'Dynamic Memory Allocation for Array',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Use malloc/free or new/delete to allocate memory at runtime.',
    problem: `<h3>Problem Statement</h3>
<p>Dynamically allocate an integer array and compute its sum.</p>
<h4>Input:</h4><pre>4\n1 2 3 4</pre>
<h4>Output:</h4><pre>Sum = 10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int* arr = new int[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  int sum = 0;
  for (int i = 0; i < n; i++) sum += arr[i];

  cout << "Sum = " << sum;
  delete[] arr;
  return 0;
}</code></pre>`,
    explanation: `<p>We allocate memory for <code>n</code> integers at runtime using <code>new</code>. After use, we release it using <code>delete[]</code>.</p>`
  },
  {
    id: 420,
    title: 'Call Functions Using Pointer Array',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Use an array of function pointers to call multiple functions.',
    problem: `<h3>Problem Statement</h3>
<p>Create three functions and call them using an array of function pointers.</p>
<h4>Input:</h4><pre>No input</pre>
<h4>Output:</h4><pre>One\nTwo\nThree</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

void one() { cout << "One\\n"; }
void two() { cout << "Two\\n"; }
void three() { cout << "Three\\n"; }

int main() {
  void (*funcs[3])() = { one, two, three };
  for (int i = 0; i < 3; i++) funcs[i]();
  return 0;
}</code></pre>`,
    explanation: `<p>We create an array of function pointers that store addresses of functions. The array is then used to call the functions dynamically.</p>`
  },
  {
    id: 421,
    title: 'Swap First and Last Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Swap first and last elements of an array using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Swap the first and last element of an array using pointers.</p>
<h4>Input:</h4><pre>5\n10 20 30 40 50</pre>
<h4>Output:</h4><pre>50 20 30 40 10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int main() {
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++) cin >> arr[i];

  swap(&arr[0], &arr[n - 1]);

  for (int i = 0; i < n; i++) cout << arr[i] << " ";
  return 0;
}</code></pre>`,
    explanation: `<p>We directly pass addresses of first and last elements to the <code>swap()</code> function which uses pointer dereferencing to exchange values.</p>`
  },
  {
    id: 422,
    title: 'Sum of Diagonals in Matrix Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Find the sum of both diagonals in a square matrix using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Find the sum of main and secondary diagonals in a matrix using pointers.</p>
<h4>Input:</h4><pre>3\n1 2 3\n4 5 6\n7 8 9</pre>
<h4>Output:</h4><pre>Main Diagonal: 15, Secondary Diagonal: 15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int mat[n][n];

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> *(*(mat + i) + j);

  int mainSum = 0, secSum = 0;
  for (int i = 0; i < n; i++) {
    mainSum += *(*(mat + i) + i);
    secSum += *(*(mat + i) + (n - i - 1));
  }

  cout << "Main Diagonal: " << mainSum << ", Secondary Diagonal: " << secSum;
  return 0;
}</code></pre>`,
    explanation: `<p>2D arrays can be traversed using pointer-to-pointer notation. <code>*(*(mat + i) + j)</code> accesses element at row <code>i</code>, column <code>j</code>.</p>`
  },
  {
    id: 423,
    title: 'Transpose Matrix Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Transpose a matrix using pointers only.',
    problem: `<h3>Problem Statement</h3>
<p>Given an N x N matrix, print its transpose using pointers.</p>
<h4>Input:</h4><pre>2\n1 2\n3 4</pre>
<h4>Output:</h4><pre>1 3\n2 4</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int mat[n][n];
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> *(*(mat + i) + j);

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++)
      cout << *(*(mat + j) + i) << " ";
    cout << "\\n";
  }

  return 0;
}</code></pre>`,
    explanation: `<p>We use <code>*(*(mat + j) + i)</code> to switch rows with columns and output the transposed matrix.</p>`
  },
  {
    id: 424,
    title: 'Matrix Multiplication Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Multiply two matrices using pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Given two matrices, multiply them using pointer access.</p>
<h4>Input:</h4><pre>2\n1 2\n3 4\n\n5 6\n7 8</pre>
<h4>Output:</h4><pre>19 22\n43 50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
  int n;
  cin >> n;
  int a[n][n], b[n][n], c[n][n];

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> *(*(a + i) + j);

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> *(*(b + i) + j);

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++) {
      *(*(c + i) + j) = 0;
      for (int k = 0; k < n; k++)
        *(*(c + i) + j) += *(*(a + i) + k) * *(*(b + k) + j);
    }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++)
      cout << *(*(c + i) + j) << " ";
    cout << "\\n";
  }

  return 0;
}</code></pre>`,
    explanation: `<p>All matrix accesses are made using pointer notation. A triple loop handles standard matrix multiplication logic.</p>`
  },
  {
    id: 425,
    title: 'Implement Stack Using Pointers',
    category: 'Pointers',
    difficulty: 'hard',
    description: 'Build a stack structure using dynamic memory allocation and pointers.',
    problem: `<h3>Problem Statement</h3>
<p>Implement a stack using a linked list (dynamic memory, no arrays).</p>
<h4>Input:</h4><pre>push 10\npush 20\npop\npush 30\npop\npop</pre>
<h4>Output:</h4><pre>20\n30\n10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;
using namespace std;

struct Node {
  int data;
  Node* next;
};

void push(Node** top, int val) {
  Node* newNode = new Node();
  newNode->data = val;
  newNode->next = *top;
  *top = newNode;
}

int pop(Node** top) {
  if (*top == NULL) return -1;
  Node* temp = *top;
  int val = temp->data;
  *top = (*top)->next;
  delete temp;
  return val;
}

int main() {
  Node* top = NULL;
  push(&top, 10);
  push(&top, 20);
  cout << pop(&top) << "\\n";
  push(&top, 30);
  cout << pop(&top) << "\\n";
  cout << pop(&top) << "\\n";
  return 0;
}</code></pre>`,
    explanation: `<p>Each node stores an integer and a pointer to the next node. Push and pop operations manipulate the head pointer of the stack using dynamic memory.</p>`
  },

  // Classes (20 problems)
  {
    id: 901,
    title: 'Create Simple Class',
    description: 'Create and use a class to store a student\'s name and age.',
    category: 'Classes',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name (string) and age (int), take input, and print details.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    Student s;\n    cin >> s.name >> s.age;\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The class Student has public members and a display method.</p>`
  },
  {
    id: 902,
    title: 'Class with Constructor',
    description: 'Use a constructor to initialize a class.',
    category: 'Classes',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with a constructor for name and age, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    Student(string n, int a) : name(n), age(a) {}\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    string n;\n    int a;\n    cin >> n >> a;\n    Student s(n, a);\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The constructor initializes name and age upon object creation.</p>`
  },
  {
    id: 903,
    title: 'Class Array Input',
    description: 'Use an array of class objects to store student details.',
    category: 'Classes',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and age, take input for 2 students, and print.</p><h4>Sample Input:</h4><pre>2\nJohn 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Student s[n];\n    for(int i = 0; i < n; i++) cin >> s[i].name >> s[i].age;\n    for(int i = 0; i < n; i++) s[i].display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>An array of Student objects stores and displays multiple records.</p>`
  },
  {
    id: 904,
    title: 'Class with Private Members',
    description: 'Use private members with getter and setter.',
    category: 'Classes',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with private name and age, use setter and getter, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\npublic:\n    void setData(string n, int a) { name = n; age = a; }\n    void display() { cout << "Name: " << name << ", Age: " << age << endl; }\n};\n\nint main() {\n    Student s;\n    string n;\n    int a;\n    cin >> n >> a;\n    s.setData(n, a);\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Private members are accessed via public methods setData and display.</p>`
  },
  {
    id: 905,
    title: 'Class with Destructor',
    description: 'Use a destructor to free dynamic memory.',
    category: 'Classes',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with dynamic marks array, use a destructor, take input, and print.</p><h4>Sample Input:</h4><pre>John 3 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Marks: 85 90 95</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int *marks;\n    int size;\n    Student(string n, int s) : name(n), size(s) { marks = new int[size]; }\n    ~Student() { delete[] marks; }\n    void setMarks() {\n        for(int i = 0; i < size; i++) cin >> marks[i];\n    }\n    void display() {\n        cout << "Name: " << name << ", Marks: ";\n        for(int i = 0; i < size; i++) cout << marks[i] << " ";\n        cout << endl;\n    }\n};\n\nint main() {\n    string n;\n    int s;\n    cin >> n >> s;\n    Student s1(n, s);\n    s1.setMarks();\n    s1.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The destructor ~Student() frees the dynamically allocated marks array.</p>`
  },
  {
    id: 906,
    title: 'Class with Member Function',
    description: 'Use a member function to calculate average.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and 3 marks, use a member function to calculate average, and print.</p><h4>Sample Input:</h4><pre>John 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Average: 90</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int marks[3];\n    void setData() {\n        cin >> name;\n        for(int i = 0; i < 3; i++) cin >> marks[i];\n    }\n    int calculateAverage() {\n        int sum = 0;\n        for(int i = 0; i < 3; i++) sum += marks[i];\n        return sum / 3;\n    }\n    void display() {\n        cout << "Name: " << name << ", Average: " << calculateAverage() << endl;\n    }\n};\n\nint main() {\n    Student s;\n    s.setData();\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>calculateAverage() is a member function that computes the average of marks.</p>`
  },
  {
    id: 907,
    title: 'Class with Static Member',
    description: 'Use a static member to count students.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name, age, and static count, increment count on object creation, and print.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Number of Students: 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    static int count;\n    Student(string n, int a) : name(n), age(a) { count++; }\n    static void displayCount() {\n        cout << "Number of Students: " << count << endl;\n    }\n};\n\nint Student::count = 0;\n\nint main() {\n    Student s1("John", 20);\n    Student s2("Alice", 22);\n    Student::displayCount();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The static member count tracks the number of Student objects.</p>`
  },
  {
    id: 908,
    title: 'Class with Friend Function',
    description: 'Use a friend function to access private members.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with private name and age, use a friend function to print details.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\npublic:\n    Student(string n, int a) : name(n), age(a) {}\n    friend void display(Student s);\n};\n\nvoid display(Student s) {\n    cout << "Name: " << s.name << ", Age: " << s.age << endl;\n}\n\nint main() {\n    string n;\n    int a;\n    cin >> n >> a;\n    Student s(n, a);\n    display(s);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The friend function display() accesses private members directly.</p>`
  },
  {
    id: 909,
    title: 'Class with Inheritance',
    description: 'Implement single inheritance for student details.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a base class Person with name and age, derive Student with marks, take input, and print.</p><h4>Sample Input:</h4><pre>John 20 85</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20, Marks: 85</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Person {\nprotected:\n    string name;\n    int age;\npublic:\n    void setData(string n, int a) { name = n; age = a; }\n};\n\nclass Student : public Person {\npublic:\n    int marks;\n    void setMarks(int m) { marks = m; }\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << ", Marks: " << marks << endl;\n    }\n};\n\nint main() {\n    Student s;\n    string n;\n    int a, m;\n    cin >> n >> a >> m;\n    s.setData(n, a);\n    s.setMarks(m);\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Student inherits from Person, accessing protected members.</p>`
  },
  {
    id: 910,
    title: 'Class with Multiple Inheritance',
    description: 'Implement multiple inheritance for student details.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define classes Person and Address, derive Student with name, age, and city, take input, and print.</p><h4>Sample Input:</h4><pre>John 20 Delhi</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20, City: Delhi</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Person {\nprotected:\n    string name;\n    int age;\n};\n\nclass Address {\nprotected:\n    string city;\n};\n\nclass Student : public Person, public Address {\npublic:\n    void setData(string n, int a, string c) { name = n; age = a; city = c; }\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << ", City: " << city << endl;\n    }\n};\n\nint main() {\n    Student s;\n    string n, c;\n    int a;\n    cin >> n >> a >> c;\n    s.setData(n, a, c);\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Student inherits from both Person and Address classes.</p>`
  },
  {
    id: 911,
    title: 'Class with Virtual Function',
    description: 'Use virtual function for polymorphism.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a base class Person with virtual display, derive Student, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Student - Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Person {\npublic:\n    virtual void display() { cout << "Person" << endl; }\n    virtual ~Person() {}\n};\n\nclass Student : public Person {\npublic:\n    string name;\n    int age;\n    Student(string n, int a) : name(n), age(a) {}\n    void display() override {\n        cout << "Student - Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    string n;\n    int a;\n    cin >> n >> a;\n    Person *p = new Student(n, a);\n    p->display();\n    delete p;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The virtual function display() enables runtime polymorphism.</p>`
  },
  {
    id: 912,
    title: 'Class with Operator Overloading',
    description: 'Overload + operator for class addition.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and age, overload + to add ages, and print result.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: JohnAlice, Combined Age: 42</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    Student(string n, int a) : name(n), age(a) {}\n    Student operator+(const Student& s) {\n        Student result(name + s.name, age + s.age);\n        return result;\n    }\n    void display() {\n        cout << "Name: " << name << ", Combined Age: " << age << endl;\n    }\n};\n\nint main() {\n    string n1, n2;\n    int a1, a2;\n    cin >> n1 >> a1 >> n2 >> a2;\n    Student s1(n1, a1), s2(n2, a2), s3 = s1 + s2;\n    s3.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The + operator is overloaded to concatenate names and add ages.</p>`
  },
  {
    id: 913,
    title: 'Class with Copy Constructor',
    description: 'Implement a copy constructor for a class.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and dynamic marks, use a copy constructor, and print.</p><h4>Sample Input:</h4><pre>John 3 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Marks: 85 90 95</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int *marks;\n    int size;\n    Student(string n, int s) : name(n), size(s) { marks = new int[size]; }\n    Student(const Student& s) : name(s.name), size(s.size) {\n        marks = new int[size];\n        for(int i = 0; i < size; i++) marks[i] = s.marks[i];\n    }\n    ~Student() { delete[] marks; }\n    void setMarks() {\n        for(int i = 0; i < size; i++) cin >> marks[i];\n    }\n    void display() {\n        cout << "Name: " << name << ", Marks: ";\n        for(int i = 0; i < size; i++) cout << marks[i] << " ";\n        cout << endl;\n    }\n};\n\nint main() {\n    string n;\n    int s;\n    cin >> n >> s;\n    Student s1(n, s);\n    s1.setMarks();\n    Student s2 = s1;\n    s2.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The copy constructor performs a deep copy of the marks array.</p>`
  },
  {
    id: 914,
    title: 'Class with Abstract Base',
    description: 'Use an abstract base class with pure virtual function.',
    category: 'Classes',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p>Define an abstract class Person with pure virtual display, derive Student, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Student - Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Person {\npublic:\n    virtual void display() = 0;\n    virtual ~Person() {}\n};\n\nclass Student : public Person {\npublic:\n    string name;\n    int age;\n    Student(string n, int a) : name(n), age(a) {}\n    void display() override {\n        cout << "Student - Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    string n;\n    int a;\n    cin >> n >> a;\n    Person *p = new Student(n, a);\n    p->display();\n    delete p;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The pure virtual function enforces implementation in the derived class.</p>`
  },
  {
    id: 915,
    title: 'Class with Exception Handling',
    description: 'Use try-catch for age validation.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and age, throw exception if age < 0, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    Student(string n, int a) : name(n) {\n        if(a < 0) throw runtime_error("Age cannot be negative");\n        age = a;\n    }\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    string n;\n    int a;\n    cin >> n >> a;\n    try {\n        Student s(n, a);\n        s.display();\n    } catch(const runtime_error& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Exception handling catches negative age inputs.</p>`
  },
  {
    id: 916,
    title: 'Class with Template',
    description: 'Use a template class for generic data.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a template class Student with generic data, take input, and print.</p><h4>Sample Input:</h4><pre>John 25.5</pre><h4>Sample Output:</h4><pre>Name: John, Data: 25.5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\ntemplate <typename T>\nclass Student {\npublic:\n    string name;\n    T data;\n    Student(string n, T d) : name(n), data(d) {}\n    void display() {\n        cout << "Name: " << name << ", Data: " << data << endl;\n    }\n};\n\nint main() {\n    string n;\n    double d;\n    cin >> n >> d;\n    Student<double> s(n, d);\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The template class allows data to be of any type, here double.</p>`
  },
  {
    id: 917,
    title: 'Class with Multithreading',
    description: 'Use a class with a thread to print name.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with a thread to print name 5 times, take input, and run.</p><h4>Sample Input:</h4><pre>John</pre><h4>Sample Output:</h4><pre>John\nJohn\nJohn\nJohn\nJohn</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <thread>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    Student(string n) : name(n) {}\n    void printName() {\n        for(int i = 0; i < 5; i++) cout << name << endl;\n    }\n};\n\nint main() {\n    string n;\n    cin >> n;\n    Student s(n);\n    thread t(&Student::printName, &s);\n    t.join();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>A thread runs the printName method concurrently.</p>`
  },
  {
    id: 918,
    title: 'Class with File I/O',
    description: 'Read and write class data to a file.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with name and age, write 2 students to a file, then read and print.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <fstream>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    void writeToFile(ofstream& out) {\n        out << name << " " << age << endl;\n    }\n    void readFromFile(ifstream& in) {\n        in >> name >> age;\n    }\n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    Student s[2];\n    for(int i = 0; i < 2; i++) {\n        cin >> s[i].name >> s[i].age;\n    }\n    ofstream outFile("students.txt");\n    for(int i = 0; i < 2; i++) s[i].writeToFile(outFile);\n    outFile.close();\n    ifstream inFile("students.txt");\n    Student readS[2];\n    for(int i = 0; i < 2; i++) readS[i].readFromFile(inFile);\n    for(int i = 0; i < 2; i++) readS[i].display();\n    inFile.close();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Member functions handle file input and output for the class.</p>`
  },
  {
    id: 919,
    title: 'Class with Signal Handling',
    description: 'Use a class with signal handling for interruption.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with a signal handler to catch SIGINT, take name, and print on interruption.</p><h4>Sample Input:</h4><pre>John</pre><h4>Sample Output:</h4><pre>(Ctrl+C triggers) Name: John, Interrupted</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <csignal>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    Student(string n) : name(n) {}\n    static void signalHandler(int signum) {\n        cout << "Name: " << Student::name << ", Interrupted" << endl;\n        exit(signum);\n    }\n};\n\nstring Student::name;\n\nint main() {\n    string n;\n    cin >> n;\n    Student s(n);\n    signal(SIGINT, Student::signalHandler);\n    while(true);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The static signalHandler catches SIGINT and prints the name.</p>`
  },
  {
    id: 920,
    title: 'Class with Lambda',
    description: 'Use a lambda function within a class.',
    category: 'Classes',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p>Define a class Student with a lambda to calculate average of marks, take input, and print.</p><h4>Sample Input:</h4><pre>John 3 85 90 95</pre><h4>Sample Output:</h4><pre>Name: John, Average: 90</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <functional>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int marks[3];\n    Student(string n) : name(n) {}\n    void setMarks() {\n        for(int i = 0; i < 3; i++) cin >> marks[i];\n    }\n    void display() {\n        auto avg = [this]() {\n            int sum = 0;\n            for(int i = 0; i < 3; i++) sum += marks[i];\n            return sum / 3;\n        };\n        cout << "Name: " << name << ", Average: " << avg() << endl;\n    }\n};\n\nint main() {\n    string n;\n    cin >> n;\n    Student s(n);\n    s.setMarks();\n    s.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The lambda function avg() calculates the average within the class.</p>`
  },

  // OOP (20 problems)
  {
    id: 1201,
    title: 'Encapsulation Example',
    description: 'Implement encapsulation with private members.',
    category: 'OOP',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Define a class Person with private name and age, use getters and setters, take input, and print.</p><h4>Sample Input:</h4><pre>John 20</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\npublic:\n    void setName(string n) { name = n; }\n    void setAge(int a) { age = a; }\n    string getName() { return name; }\n    int getAge() { return age; }\n};\n\nint main() {\n    Person p;\n    string n;\n    int a;\n    cin >> n >> a;\n    p.setName(n);\n    p.setAge(a);\n    cout << "Name: " << p.getName() << ", Age: " << p.getAge() << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Private members are accessed via public getter and setter methods.</p>`
  },
  {
    id: 1202,
    title: 'Abstraction Example',
    description: 'Implement abstraction with a public interface.',
    category: 'OOP',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Define a class Calculator with a public method to add two numbers, take input, and print result.</p><h4>Sample Input:</h4><pre>5 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Calculator {\npublic:\n    int add(int a, int b) {\n        return a + b;\n    }\n};\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    Calculator calc;\n    cout << calc.add(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The add method provides a simple abstraction for addition.</p>`
  },
  {
    id: 1203,
    title: 'Polymorphism with Function Overloading',
    description: 'Implement function overloading for area calculation.',
    category: 'OOP',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Define a class Shape with overloaded area methods for square and rectangle, take input, and print.</p><h4>Sample Input:</h4><pre>4\n5 6</pre><h4>Sample Output:</h4><pre>16\n30</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Shape {\npublic:\n    int area(int side) { return side * side; }\n    int area(int length, int width) { return length * width; }\n};\n\nint main() {\n    int s, l, w;\n    cin >> s >> l >> w;\n    Shape shape;\n    cout << shape.area(s) << endl;\n    cout << shape.area(l, w) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Overloaded area methods handle different parameter sets.</p>`
  },
  {
    id: 1204,
    title: 'Inheritance with Base Class',
    description: 'Implement single inheritance with a base class.',
    category: 'OOP',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Define a base class Animal with a sound method, derive Dog, take input for name, and print sound.</p><h4>Sample Input:</h4><pre>Buddy</pre><h4>Sample Output:</h4><pre>Buddy: Woof</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\npublic:\n    void setName(string n) { name = n; }\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() {\n        cout << name << ": Woof" << endl;\n    }\n};\n\nint main() {\n    string n;\n    cin >> n;\n    Dog d;\n    d.setName(n);\n    d.sound();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Dog inherits name from Animal and adds its own sound behavior.</p>`
  },
  {
    id: 1205,
    title: 'Virtual Function Example',
    description: 'Use virtual functions for runtime polymorphism.',
    category: 'OOP',
    difficulty: 'easy',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Easy</strong></p><p>Define a base class Shape with virtual area, derive Circle, take radius, and print area.</p><h4>Sample Input:</h4><pre>2</pre><h4>Sample Output:</h4><pre>12.56</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#define PI 3.14\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() { return PI * radius * radius; }\n};\n\nint main() {\n    double r;\n    cin >> r;\n    Shape *s = new Circle(r);\n    cout << s->area() << endl;\n    delete s;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Virtual function enables Circle to override area at runtime.</p>`
  },
  {
    id: 1206,
    title: 'Multiple Inheritance Example',
    description: 'Implement multiple inheritance with two base classes.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define classes Living and Moving, derive Human, take name and speed, and print.</p><h4>Sample Input:</h4><pre>John 5</pre><h4>Sample Output:</h4><pre>Name: John, Speed: 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Living {\nprotected:\n    string name;\n};\n\nclass Moving {\nprotected:\n    int speed;\n};\n\nclass Human : public Living, public Moving {\npublic:\n    Human(string n, int s) : name(n), speed(s) {}\n    void display() {\n        cout << "Name: " << name << ", Speed: " << speed << endl;\n    }\n};\n\nint main() {\n    string n;\n    int s;\n    cin >> n >> s;\n    Human h(n, s);\n    h.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Human inherits properties from both Living and Moving classes.</p>`
  },
  {
    id: 1207,
    title: 'Abstract Class Example',
    description: 'Use an abstract class with pure virtual function.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define an abstract class Vehicle with pure virtual drive, derive Car, take model, and print.</p><h4>Sample Input:</h4><pre>Toyota</pre><h4>Sample Output:</h4><pre>Driving Toyota</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Vehicle {\npublic:\n    virtual void drive() = 0;\n    virtual ~Vehicle() {}\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\npublic:\n    Car(string m) : model(m) {}\n    void drive() { cout << "Driving " << model << endl; }\n};\n\nint main() {\n    string m;\n    cin >> m;\n    Vehicle *v = new Car(m);\n    v->drive();\n    delete v;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The abstract class enforces drive implementation in Car.</p>`
  },
  {
    id: 1208,
    title: 'Operator Overloading Example',
    description: 'Overload + operator for a class.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a class Number, overload + to add two numbers, take input, and print result.</p><h4>Sample Input:</h4><pre>5 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Number {\nprivate:\n    int value;\npublic:\n    Number(int v) : value(v) {}\n    Number operator+(const Number& n) {\n        return Number(value + n.value);\n    }\n    int getValue() { return value; }\n};\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    Number n1(a), n2(b), n3 = n1 + n2;\n    cout << n3.getValue() << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The + operator is overloaded to add Number objects.</p>`
  },
  {
    id: 1209,
    title: 'Friend Function Example',
    description: 'Use a friend function to access private members.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a class Box with private length and width, use a friend function to calculate area, take input, and print.</p><h4>Sample Input:</h4><pre>5 3</pre><h4>Sample Output:</h4><pre>15</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Box {\nprivate:\n    int length;\n    int width;\npublic:\n    Box(int l, int w) : length(l), width(w) {}\n    friend int calculateArea(Box b);\n};\n\nint calculateArea(Box b) {\n    return b.length * b.width;\n}\n\nint main() {\n    int l, w;\n    cin >> l >> w;\n    Box b(l, w);\n    cout << calculateArea(b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The friend function accesses private members directly.</p>`
  },
  {
    id: 1210,
    title: 'Static Member Example',
    description: 'Use a static member to count objects.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a class Car with a static count, increment on creation, take 2 inputs, and print count.</p><h4>Sample Input:</h4><pre>Toyota\nHonda</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Car {\npublic:\n    string model;\n    static int count;\n    Car(string m) : model(m) { count++; }\n    static void displayCount() { cout << count << endl; }\n};\n\nint Car::count = 0;\n\nint main() {\n    string m1, m2;\n    cin >> m1 >> m2;\n    Car c1(m1), c2(m2);\n    Car::displayCount();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The static count tracks the number of Car objects.</p>`
  },
  {
    id: 1211,
    title: 'Copy Constructor Example',
    description: 'Implement a copy constructor for a class.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a class Book with title and pages, use a copy constructor, take input, and print.</p><h4>Sample Input:</h4><pre>Math 200</pre><h4>Sample Output:</h4><pre>Title: Math, Pages: 200</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Book {\npublic:\n    string title;\n    int pages;\n    Book(string t, int p) : title(t), pages(p) {}\n    Book(const Book& b) : title(b.title), pages(b.pages) {}\n    void display() { cout << "Title: " << title << ", Pages: " << pages << endl; }\n};\n\nint main() {\n    string t;\n    int p;\n    cin >> t >> p;\n    Book b1(t, p);\n    Book b2 = b1;\n    b2.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The copy constructor creates a duplicate of the Book object.</p>`
  },
  {
    id: 1212,
    title: 'Destructor Example',
    description: 'Use a destructor to free dynamic memory.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a class Array with dynamic integer array, use a destructor, take size and elements, and print.</p><h4>Sample Input:</h4><pre>3 1 2 3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nclass Array {\nprivate:\n    int *data;\n    int size;\npublic:\n    Array(int s) : size(s) { data = new int[size]; }\n    ~Array() { delete[] data; }\n    void setData() { for(int i = 0; i < size; i++) cin >> data[i]; }\n    void display() { for(int i = 0; i < size; i++) cout << data[i] << " "; cout << endl; }\n};\n\nint main() {\n    int s;\n    cin >> s;\n    Array a(s);\n    a.setData();\n    a.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The destructor frees the dynamically allocated array.</p>`
  },
  {
    id: 1213,
    title: 'Hierarchical Inheritance',
    description: 'Implement hierarchical inheritance with a base class.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a base class Vehicle, derive Car and Bike, take model for each, and print.</p><h4>Sample Input:</h4><pre>Toyota\nHonda</pre><h4>Sample Output:</h4><pre>Car: Toyota\nBike: Honda</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string model;\npublic:\n    void setModel(string m) { model = m; }\n};\n\nclass Car : public Vehicle {\npublic:\n    void display() { cout << "Car: " << model << endl; }\n};\n\nclass Bike : public Vehicle {\npublic:\n    void display() { cout << "Bike: " << model << endl; }\n};\n\nint main() {\n    string m1, m2;\n    cin >> m1 >> m2;\n    Car c;\n    Bike b;\n    c.setModel(m1);\n    b.setModel(m2);\n    c.display();\n    b.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Both Car and Bike inherit from Vehicle in a hierarchical manner.</p>`
  },
  {
    id: 1214,
    title: 'Template Class Example',
    description: 'Use a template class for generic data.',
    category: 'OOP',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Define a template class Container, take generic data, and print.</p><h4>Sample Input:</h4><pre>5.5</pre><h4>Sample Output:</h4><pre>Data: 5.5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate <typename T>\nclass Container {\nprivate:\n    T data;\npublic:\n    Container(T d) : data(d) {}\n    void display() { cout << "Data: " << data << endl; }\n};\n\nint main() {\n    double d;\n    cin >> d;\n    Container<double> c(d);\n    c.display();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The template class handles any data type, here double.</p>`
  },
  {
    id: 1215,
    title: 'Exception Handling in Class',
    description: 'Use try-catch for input validation.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define a class Age with private age, throw exception if age < 0, take input, and print.</p><h4>Sample Input:</h4><pre>20</pre><h4>Sample Output:</h4><pre>Age: 20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <stdexcept>\nusing namespace std;\n\nclass Age {\nprivate:\n    int age;\npublic:\n    Age(int a) {\n        if(a < 0) throw runtime_error("Age cannot be negative");\n        age = a;\n    }\n    void display() { cout << "Age: " << age << endl; }\n};\n\nint main() {\n    int a;\n    cin >> a;\n    try {\n        Age age(a);\n        age.display();\n    } catch(const runtime_error& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Exception handling catches invalid age inputs.</p>`
  },
  {
    id: 1216,
    title: 'Multithreading in Class',
    description: 'Use a thread within a class.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define a class Printer with a thread to print a message 3 times, take message, and run.</p><h4>Sample Input:</h4><pre>Hello</pre><h4>Sample Output:</h4><pre>Hello\nHello\nHello</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <thread>\nusing namespace std;\n\nclass Printer {\npublic:\n    string message;\n    Printer(string m) : message(m) {}\n    void print() {\n        for(int i = 0; i < 3; i++) cout << message << endl;\n    }\n};\n\nint main() {\n    string m;\n    cin >> m;\n    Printer p(m);\n    thread t(&Printer::print, &p);\n    t.join();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>A thread runs the print method concurrently.</p>`
  },
  {
    id: 1217,
    title: 'File I/O in Class',
    description: 'Read and write class data to a file.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define a class Person, write 2 objects to a file, read, and print.</p><h4>Sample Input:</h4><pre>John 20\nAlice 22</pre><h4>Sample Output:</h4><pre>Name: John, Age: 20\nName: Alice, Age: 22</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <fstream>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n    void writeToFile(ofstream& out) { out << name << " " << age << endl; }\n    void readFromFile(ifstream& in) { in >> name >> age; }\n    void display() { cout << "Name: " << name << ", Age: " << age << endl; }\n};\n\nint main() {\n    Person p[2];\n    for(int i = 0; i < 2; i++) cin >> p[i].name >> p[i].age;\n    ofstream out("people.txt");\n    for(int i = 0; i < 2; i++) p[i].writeToFile(out);\n    out.close();\n    ifstream in("people.txt");\n    Person readP[2];\n    for(int i = 0; i < 2; i++) readP[i].readFromFile(in);\n    for(int i = 0; i < 2; i++) readP[i].display();\n    in.close();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Member functions handle file input and output.</p>`
  },
  {
    id: 1218,
    title: 'Signal Handling in Class',
    description: 'Use signal handling within a class.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define a class Alert with a signal handler for SIGINT, take message, and print on interruption.</p><h4>Sample Input:</h4><pre>Warning</pre><h4>Sample Output:</h4><pre>(Ctrl+C triggers) Message: Warning, Interrupted</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include <csignal>\nusing namespace std;\n\nclass Alert {\npublic:\n    string message;\n    Alert(string m) : message(m) {}\n    static void signalHandler(int signum) {\n        cout << "Message: " << Alert::message << ", Interrupted" << endl;\n        exit(signum);\n    }\n};\n\nstring Alert::message;\n\nint main() {\n    string m;\n    cin >> m;\n    Alert a(m);\n    signal(SIGINT, Alert::signalHandler);\n    while(true);\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The static signalHandler catches SIGINT and prints the message.</p>`
  },
  {
    id: 1219,
    title: 'Lambda in Class',
    description: 'Use a lambda function within a class.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define a class Math with a lambda to multiply two numbers, take input, and print result.</p><h4>Sample Input:</h4><pre>4 5</pre><h4>Sample Output:</h4><pre>20</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <functional>\nusing namespace std;\n\nclass Math {\npublic:\n    int a, b;\n    Math(int x, int y) : a(x), b(y) {}\n    void calculate() {\n        auto multiply = [this]() {\n            return a * b;\n        };\n        cout << multiply() << endl;\n    }\n};\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    Math m(x, y);\n    m.calculate();\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The lambda function multiplies the class members.</p>`
  },
  {
    id: 1220,
    title: 'Interface Implementation',
    description: 'Implement an interface with pure virtual functions.',
    category: 'OOP',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Define an interface Printable with pure virtual print, implement in Book, take title, and print.</p><h4>Sample Input:</h4><pre>Math</pre><h4>Sample Output:</h4><pre>Printing: Math</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print() = 0;\n    virtual ~Printable() {}\n};\n\nclass Book : public Printable {\nprivate:\n    string title;\npublic:\n    Book(string t) : title(t) {}\n    void print() { cout << "Printing: " << title << endl; }\n};\n\nint main() {\n    string t;\n    cin >> t;\n    Printable *p = new Book(t);\n    p->print();\n    delete p;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The interface Printable enforces print implementation in Book.</p>`
  },

  // Advamced Problems

  {
    id: 2001,
    title: 'Vector Sum with STL',
    description: 'Use STL vector to calculate the sum of elements.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers as input, store them in a vector, and print their sum.</p><h4>Sample Input:</h4><pre>4\n1 2 3 4</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    int sum = 0;\n    for(int x : v) sum += x;\n    cout << sum << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The vector stores dynamic input, and a range-based loop calculates the sum.</p>`
  },
  {
    id: 2002,
    title: 'Map Key Frequency',
    description: 'Count frequency of elements using STL map.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, store their frequencies in a map, and print each number with its count.</p><h4>Sample Input:</h4><pre>5\n1 2 2 3 1</pre><h4>Sample Output:</h4><pre>1: 2\n2: 2\n3: 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;map&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    map<int, int> freq;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        freq[x]++;\n    }\n    for(auto& pair : freq) cout << pair.first << ": " << pair.second << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The map automatically sorts keys and counts occurrences.</p>`
  },
  {
    id: 2003,
    title: 'Set Unique Elements',
    description: 'Find unique elements using STL set.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, store unique elements in a set, and print them.</p><h4>Sample Input:</h4><pre>5\n1 2 2 3 1</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;set&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    set<int> s;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        s.insert(x);\n    }\n    for(int x : s) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The set automatically removes duplicates and sorts elements.</p>`
  },
  {
    id: 2004,
    title: 'Deque Rotation',
    description: 'Rotate elements in a deque.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, store in a deque, rotate it by K positions, and print.</p><h4>Sample Input:</h4><pre>4 2\n1 2 3 4</pre><h4>Sample Output:</h4><pre>3 4 1 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <deque>\nusing namespace std;\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    deque<int> d;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        d.push_back(x);\n    }\n    for(int i = 0; i < k; i++) {\n        int front = d.front();\n        d.pop_front();\n        d.push_back(front);\n    }\n    for(int x : d) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The deque is rotated by moving the front element to the back K times.</p>`
  },
  {
    id: 2005,
    title: 'Stack Reverse',
    description: 'Reverse a stack using another stack.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, push into a stack, reverse using another stack, and print.</p><h4>Sample Input:</h4><pre>4\n1 2 3 4</pre><h4>Sample Output:</h4><pre>4 3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <stack>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    stack<int> s, temp;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        s.push(x);\n    }\n    while(!s.empty()) {\n        temp.push(s.top());\n        s.pop();\n    }\n    while(!temp.empty()) {\n        cout << temp.top() << " ";\n        temp.pop();\n    }\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Elements are transferred to a temporary stack to reverse the order.</p>`
  },
  {
    id: 2006,
    title: 'Queue Palindrome Check',
    description: 'Check if a queue is a palindrome.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, store in a queue, check if it’s a palindrome, and print "Yes" or "No".</p><h4>Sample Input:</h4><pre>4\n1 2 2 1</pre><h4>Sample Output:</h4><pre>Yes</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    queue<int> q;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        q.push(x);\n    }\n    bool isPalindrome = true;\n    for(int i = 0; i < n/2; i++) {\n        int front = q.front(); q.pop();\n        int back = q.back(); q.pop();\n        if(front != back) isPalindrome = false;\n        q.push(front); q.push(back);\n    }\n    cout << (isPalindrome ? "Yes" : "No") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Front and back elements are compared, preserving the queue.</p>`
  },
  {
    id: 2007,
    title: 'Pair Sum in Vector',
    description: 'Find if there exists a pair with given sum in a vector.',
    category: 'STL',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N, N integers, and a target sum, check if any two numbers sum to target, print "Yes" or "No".</p><h4>Sample Input:</h4><pre>5 9\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>Yes</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    unordered_set<int> s;\n    bool found = false;\n    for(int x : v) {\n        if(s.count(target - x)) {\n            found = true;\n            break;\n        }\n        s.insert(x);\n    }\n    cout << (found ? "Yes" : "No") << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>A set tracks seen numbers to find a complement for the target sum.</p>`
  },
  {
    id: 2008,
    title: 'Template Max Function',
    description: 'Implement a template function to find maximum.',
    category: 'Templates',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take two integers, use a template function to find the maximum, and print it.</p><h4>Sample Input:</h4><pre>5 3</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate <typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << maximum(a, b) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The template function works with any comparable type.</p>`
  },
  {
    id: 2009,
    title: 'Template Class Stack',
    description: 'Implement a template stack class.',
    category: 'Templates',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, push into a template stack, pop and print all elements.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>3 2 1</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate <typename T>\nclass Stack {\nprivate:\n    T* arr;\n    int top;\n    int capacity;\npublic:\n    Stack(int c) : capacity(c), top(-1) { arr = new T[capacity]; }\n    ~Stack() { delete[] arr; }\n    void push(T x) { arr[++top] = x; }\n    T pop() { return arr[top--]; }\n    bool isEmpty() { return top == -1; }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Stack<int> s(n);\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        s.push(x);\n    }\n    while(!s.isEmpty()) cout << s.pop() << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The template stack manages dynamic memory for any type.</p>`
  },
  {
    id: 2010,
    title: 'Exception Division',
    description: 'Handle division by zero with exceptions.',
    category: 'Exception Handling',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take two integers, divide the first by the second, throw exception for zero, and print result or error.</p><h4>Sample Input:</h4><pre>10 2</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <stdexcept>\nusing namespace std;\n\nint divide(int a, int b) {\n    if(b == 0) throw runtime_error("Division by zero");\n    return a / b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    try {\n        cout << divide(a, b) << endl;\n    } catch(const runtime_error& e) {\n        cout << e.what() << endl;\n    }\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Exception is thrown and caught for division by zero cases.</p>`
  },
  {
    id: 2011,
    title: 'Threaded Counter',
    description: 'Use threads to increment a counter.',
    category: 'Multithreading',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N, create N threads to increment a shared counter, and print the final value.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <thread>\nusing namespace std;\n\nint counter = 0;\nvoid increment() { counter++; }\n\nint main() {\n    int n;\n    cin >> n;\n    thread threads[n];\n    for(int i = 0; i < n; i++) threads[i] = thread(increment);\n    for(int i = 0; i < n; i++) threads[i].join();\n    cout << counter << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each thread increments the shared counter, joined to ensure completion.</p>`
  },
  {
    id: 2012,
    title: 'File Line Count',
    description: 'Count lines in a text file.',
    category: 'File Handling',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Read from "input.txt" and print the number of lines.</p><h4>Sample Input (input.txt):</h4><pre>Line 1\nLine 2\nLine 3</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file("input.txt");\n    int count = 0;\n    string line;\n    while(getline(file, line)) count++;\n    file.close();\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each line read increments the counter until EOF.</p>`
  },
  {
    id: 2013,
    title: 'Smart Pointer Unique Usage',
    description: 'Use unique_ptr for dynamic array.',
    category: 'Smart Pointers',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N and N integers, store in a unique_ptr array, and print them.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <memory>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    auto arr = make_unique<int[]>(n);\n    for(int i = 0; i < n; i++) cin >> arr[i];\n    for(int i = 0; i < n; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>unique_ptr automatically manages the array's memory.</p>`
  },
  {
    id: 2014,
    title: 'Binary Search with Vector',
    description: 'Implement binary search on a sorted vector.',
    category: 'Algorithms',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take N sorted integers and a target, use binary search to find it, print index or -1.</p><h4>Sample Input:</h4><pre>5 3\n1 2 3 4 5</pre><h4>Sample Output:</h4><pre>2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint binarySearch(vector<int>& v, int target) {\n    int left = 0, right = v.size() - 1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if(v[mid] == target) return mid;\n        else if(v[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int n, target;\n    cin >> n >> target;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    cout << binarySearch(v, target) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Binary search efficiently finds the target in a sorted array.</p>`
  },
  {
    id: 2015,
    title: 'Merge Sort Implementation',
    description: 'Implement merge sort on a vector.',
    category: 'Algorithms',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N integers, sort them using merge sort, and print the sorted array.</p><h4>Sample Input:</h4><pre>5\n5 2 4 1 3</pre><h4>Sample Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nvoid merge(vector<int>& v, int left, int mid, int right) {\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n    vector<int> L(n1), R(n2);\n    for(int i = 0; i < n1; i++) L[i] = v[left + i];\n    for(int i = 0; i < n2; i++) R[i] = v[mid + 1 + i];\n    int i = 0, j = 0, k = left;\n    while(i < n1 && j < n2) {\n        if(L[i] <= R[j]) v[k++] = L[i++];\n        else v[k++] = R[j++];\n    }\n    while(i < n1) v[k++] = L[i++];\n    while(j < n2) v[k++] = R[j++];\n}\n\nvoid mergeSort(vector<int>& v, int left, int right) {\n    if(left < right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(v, left, mid);\n        mergeSort(v, mid + 1, right);\n        merge(v, left, mid, right);\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    mergeSort(v, 0, n-1);\n    for(int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Merge sort divides the array, sorts subarrays, and merges them.</p>`
  },
  {
    id: 2016,
    title: 'Quick Sort Implementation',
    description: 'Implement quick sort on a vector.',
    category: 'Algorithms',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N integers, sort them using quick sort, and print the sorted array.</p><h4>Sample Input:</h4><pre>5\n5 2 4 1 3</pre><h4>Sample Output:</h4><pre>1 2 3 4 5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint partition(vector<int>& v, int low, int high) {\n    int pivot = v[high];\n    int i = low - 1;\n    for(int j = low; j < high; j++) {\n        if(v[j] <= pivot) {\n            i++;\n            swap(v[i], v[j]);\n        }\n    }\n    swap(v[i + 1], v[high]);\n    return i + 1;\n}\n\nvoid quickSort(vector<int>& v, int low, int high) {\n    if(low < high) {\n        int pi = partition(v, low, high);\n        quickSort(v, low, pi - 1);\n        quickSort(v, pi + 1, high);\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    quickSort(v, 0, n-1);\n    for(int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Quick sort uses a pivot to partition and recursively sorts subarrays.</p>`
  },
  {
    id: 2017,
    title: 'Graph DFS Traversal',
    description: 'Perform DFS on an adjacency matrix.',
    category: 'Algorithms',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N and an NxN adjacency matrix, perform DFS from node 0, and print visited nodes.</p><h4>Sample Input:</h4><pre>3\n0 1 1\n1 0 1\n1 1 0</pre><h4>Sample Output:</h4><pre>0 1 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nvoid DFS(vector<vector<int>>& adj, int v, vector<bool>& visited, vector<int>& result) {\n    visited[v] = true;\n    result.push_back(v);\n    for(int u = 0; u < adj.size(); u++) {\n        if(adj[v][u] && !visited[u]) DFS(adj, u, visited, result);\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> adj(n, vector<int>(n));\n    for(int i = 0; i < n; i++) for(int j = 0; j < n; j++) cin >> adj[i][j];\n    vector<bool> visited(n, false);\n    vector<int> result;\n    DFS(adj, 0, visited, result);\n    for(int x : result) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>DFS explores nodes recursively using an adjacency matrix.</p>`
  },
  {
    id: 2018,
    title: 'Dijkstra\'s Algorithm',
    description: 'Find shortest paths using Dijkstra\'s algorithm.',
    category: 'Algorithms',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N, edges with weights, and find shortest path from node 0 to all nodes.</p><h4>Sample Input:</h4><pre>3\n0 1 4\n0 2 2\n1 2 1\n</pre><h4>Sample Output:</h4><pre>0 3 2</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include <queue>\n#include <climits>\nusing namespace std;\n\ntypedef pair<int, int> pii;\n\nvector<int> dijkstra(vector<vector<pii>>& graph, int start) {\n    int n = graph.size();\n    vector<int> dist(n, INT_MAX);\n    priority_queue<pii, vector<pii>, greater<pii>> pq;\n    dist[start] = 0;\n    pq.push({0, start});\n    while(!pq.empty()) {\n        int u = pq.top().second;\n        pq.pop();\n        for(auto& edge : graph[u]) {\n            int v = edge.first, weight = edge.second;\n            if(dist[u] + weight < dist[v]) {\n                dist[v] = dist[u] + weight;\n                pq.push({dist[v], v});\n            }\n        }\n    }\n    return dist;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<pii>> graph(n);\n    int u, v, w;\n    while(cin >> u >> v >> w) graph[u].push_back({v, w});\n    vector<int> dist = dijkstra(graph, 0);\n    for(int d : dist) cout << d << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Dijkstra’s algorithm uses a priority queue to find shortest paths.</p>`
  },
  {
    id: 2019,
    title: 'Thread Synchronization with Mutex',
    description: 'Synchronize threads using mutex.',
    category: 'Multithreading',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N, create N threads to increment a shared counter with mutex, and print final value.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <thread>\n#include <mutex>\nusing namespace std;\n\nint counter = 0;\nmutex mtx;\nvoid increment() {\n    mtx.lock();\n    counter++;\n    mtx.unlock();\n}\n\nint main() {\n    int n;\n    cin >> n;\n    thread threads[n];\n    for(int i = 0; i < n; i++) threads[i] = thread(increment);\n    for(int i = 0; i < n; i++) threads[i].join();\n    cout << counter << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Mutex prevents race conditions during counter increments.</p>`
  },
  {
    id: 2020,
    title: 'File Word Count',
    description: 'Count words in a text file.',
    category: 'File Handling',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Read from "input.txt" and print the number of words (space-separated).</p><h4>Sample Input (input.txt):</h4><pre>Hello world this is a test</pre><h4>Sample Output:</h4><pre>5</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <fstream>\n#include &lt;string&gt;\nusing namespace std;\n\nint main() {\n    ifstream file("input.txt");\n    string line;\n    int count = 0;\n    while(file >> line) count++;\n    file.close();\n    cout << count << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Each word read increments the counter until EOF.</p>`
  },
  {
    id: 2021,
    title: 'Shared Pointer Example',
    description: 'Use shared_ptr for shared ownership.',
    category: 'Smart Pointers',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N integers, store in a shared_ptr vector, and print with use count.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>1 (2) 2 (2) 3 (2)</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <memory>\n#include &lt;vector&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<shared_ptr<int>> v;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        v.push_back(make_shared<int>(x));\n    }\n    for(auto& ptr : v) cout << *ptr << " (" << ptr.use_count() << ") ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>shared_ptr tracks multiple references to the same object.</p>`
  },
  {
    id: 2022,
    title: 'Knapsack Problem',
    description: 'Solve 0/1 Knapsack problem.',
    category: 'Dynamic Programming',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N, weights, values, and capacity, find max value using 0/1 Knapsack, print result.</p><h4>Sample Input:</h4><pre>3 4\n10 20 30\n1 2 3</pre><h4>Sample Output:</h4><pre>50</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint knapsack(int n, vector<int>& val, vector<int>& wt, int W) {\n    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));\n    for(int i = 1; i <= n; i++) {\n        for(int w = 0; w <= W; w++) {\n            if(wt[i-1] <= w) dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i-1]] + val[i-1]);\n            else dp[i][w] = dp[i-1][w];\n        }\n    }\n    return dp[n][W];\n}\n\nint main() {\n    int n, W;\n    cin >> n >> W;\n    vector<int> val(n), wt(n);\n    for(int i = 0; i < n; i++) cin >> val[i];\n    for(int i = 0; i < n; i++) cin >> wt[i];\n    cout << knapsack(n, val, wt, W) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Dynamic programming builds a table to maximize value within capacity.</p>`
  },
  {
    id: 2023,
    title: 'Longest Common Subsequence',
    description: 'Find LCS of two strings.',
    category: 'Dynamic Programming',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take two strings, find their longest common subsequence length, and print it.</p><h4>Sample Input:</h4><pre>ABCDGH\nAEDFHR</pre><h4>Sample Output:</h4><pre>3\nADH</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nint lcs(string X, string Y, string& result) {\n    int m = X.length(), n = Y.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for(int i = 1; i <= m; i++) {\n        for(int j = 1; j <= n; j++) {\n            if(X[i-1] == Y[j-1]) dp[i][j] = dp[i-1][j-1] + 1;\n            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);\n        }\n    }\n    int i = m, j = n;\n    while(i > 0 && j > 0) {\n        if(X[i-1] == Y[j-1]) {\n            result = X[i-1] + result;\n            i--; j--;\n        } else if(dp[i-1][j] > dp[i][j-1]) i--;\n        else j--;\n    }\n    return dp[m][n];\n}\n\nint main() {\n    string X, Y;\n    cin >> X >> Y;\n    string result;\n    int length = lcs(X, Y, result);\n    cout << length << endl << result << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>DP table tracks lengths, and backtracking reconstructs the subsequence.</p>`
  },
  {
    id: 2024,
    title: 'Thread Pool Example',
    description: 'Implement a simple thread pool.',
    category: 'Multithreading',
    difficulty: 'very hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Very Hard</strong></p><p>Take N tasks, create a thread pool of 2 threads, execute tasks (print task number), and print completion.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>Task 1\nTask 2\nTask 3\nDone</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <queue>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\nusing namespace std;\n\nclass ThreadPool {\nprivate:\n    vector<thread> threads;\n    queue<int> tasks;\n    mutex mtx;\n    condition_variable cv;\n    bool stop;\npublic:\n    ThreadPool(int n) : stop(false) {\n        for(int i = 0; i < n; i++) threads.emplace_back(&ThreadPool::worker, this);\n    }\n    ~ThreadPool() {\n        {\n            lock_guard<mutex> lock(mtx);\n            stop = true;\n        }\n        cv.notify_all();\n        for(auto& t : threads) t.join();\n    }\n    void addTask(int task) {\n        lock_guard<mutex> lock(mtx);\n        tasks.push(task);\n        cv.notify_one();\n    }\n    void worker() {\n        while(true) {\n            int task;\n            {\n                unique_lock<mutex> lock(mtx);\n                cv.wait(lock, [this]() { return stop || !tasks.empty(); });\n                if(stop && tasks.empty()) return;\n                task = tasks.front();\n                tasks.pop();\n            }\n            cout << "Task " << task << endl;\n        }\n    }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    ThreadPool pool(2);\n    for(int i = 1; i <= n; i++) pool.addTask(i);\n    cout << "Done" << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>The thread pool manages a queue of tasks with synchronization.</p>`
  },
  {
    id: 2025,
    title: 'Lambda with Capture',
    description: 'Use lambda with capture for calculation.',
    category: 'Modern C++',
    difficulty: 'medium',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Medium</strong></p><p>Take base and exponent, use a lambda to calculate power, and print result.</p><h4>Sample Input:</h4><pre>2 3</pre><h4>Sample Output:</h4><pre>8</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int base, exp;\n    cin >> base >> exp;\n    auto power = [base, exp]() mutable {\n        int result = 1;\n        for(int i = 0; i < exp; i++) result *= base;\n        return result;\n    };\n    cout << power() << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Lambda captures base and exp, computes power iteratively.</p>`
  },
  {
    id: 2026,
    title: 'Variadic Template Sum',
    description: 'Implement variadic template for sum.',
    category: 'Templates',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take variable number of integers, use variadic template to calculate sum, and print.</p><h4>Sample Input:</h4><pre>1 2 3 4</pre><h4>Sample Output:</h4><pre>10</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate <typename... Args>\nint sum(Args... args) {\n    return (args + ...);\n}\n\nint main() {\n    int a, b, c, d;\n    cin >> a >> b >> c >> d;\n    cout << sum(a, b, c, d) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Variadic template unfolds arguments into a sum.</p>`
  },
  {
    id: 2027,
    title: 'Move Semantics Example',
    description: 'Use move semantics for efficiency.',
    category: 'Modern C++',
    difficulty: 'hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Hard</strong></p><p>Take N integers, move a vector to a function, and print its sum.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>6</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nint calculateSum(vector<int>&& v) {\n    int sum = 0;\n    for(int x : v) sum += x;\n    return sum;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    cout << calculateSum(move(v)) << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Move semantics transfers ownership, avoiding copy overhead.</p>`
  },
  {
    id: 2028,
    title: 'Custom Allocator Vector',
    description: 'Use a custom allocator with vector.',
    category: 'STL',
    difficulty: 'very hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Very Hard</strong></p><p>Take N integers, store in a vector with a custom allocator, and print them.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include &lt;vector&gt;\n#include <memory>\nusing namespace std;\n\ntemplate <typename T>\nclass MyAllocator {\npublic:\n    typedef T value_type;\n    MyAllocator() {}\n    T* allocate(size_t n) { return static_cast<T*>(::operator new(n * sizeof(T))); }\n    void deallocate(T* p, size_t) { ::operator delete(p); }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int, MyAllocator<int>> v;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        v.push_back(x);\n    }\n    for(int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Custom allocator overrides default memory management.</p>`
  },
  {
    id: 2029,
    title: 'Coroutine Example',
    description: 'Implement a simple coroutine.',
    category: 'Modern C++',
    difficulty: 'very hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Very Hard</strong></p><p>Take N, yield numbers from 1 to N using a coroutine, and print them.</p><h4>Sample Input:</h4><pre>3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <experimental/coroutine>\nusing namespace std;\n\nstruct Generator {\n    struct promise_type {\n        int value;\n        Generator get_return_object() { return Generator{this}; }\n        suspend_always initial_suspend() { return {}; }\n        suspend_always final_suspend() noexcept { return {}; }\n        suspend_always yield_value(int v) { value = v; return {}; }\n        void return_void() {}\n        void unhandled_exception() {}\n    };\n    using handle_type = coroutine_handle<promise_type>;\n    handle_type h;\n    Generator(promise_type* p) : h(handle_type::from_promise(*p)) {}\n    ~Generator() { h.destroy(); }\n    bool move_next() { return !h.done(); }\n    int current_value() { return h.promise().value; }\n};\n\nGenerator generate(int n) {\n    for(int i = 1; i <= n; i++) co_yield i;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    auto gen = generate(n);\n    while(gen.move_next()) cout << gen.current_value() << " ";\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Coroutine yields values incrementally using co_yield.</p>`
  },
  {
    id: 2030,
    title: 'Lock-Free Queue',
    description: 'Implement a lock-free queue.',
    category: 'Multithreading',
    difficulty: 'very hard',
    problem: `<h3>Problem Statement</h3><p><strong>Difficulty: Very Hard</strong></p><p>Take N, enqueue N integers, dequeue and print them using a lock-free queue.</p><h4>Sample Input:</h4><pre>3\n1 2 3</pre><h4>Sample Output:</h4><pre>1 2 3</pre>`,
    solution: `<pre><code>#include &lt;iostream&gt;\n#include <atomic>\nusing namespace std;\n\ntemplate <typename T>\nclass LockFreeQueue {\nprivate:\n    struct Node { T data; atomic<Node*> next; Node(T d) : data(d), next(nullptr) {} };\n    atomic<Node*> head;\n    atomic<Node*> tail;\npublic:\n    LockFreeQueue() : head(new Node(T())), tail(head.load()) {}\n    ~LockFreeQueue() { while(head.load()) { Node* temp = head.load(); head.store(temp->next.load()); delete temp; } }\n    void enqueue(T data) {\n        Node* newNode = new Node(data);\n        Node* oldTail = tail.exchange(newNode);\n        oldTail->next.store(newNode);\n    }\n    bool dequeue(T& data) {\n        Node* oldHead = head.load();\n        Node* newHead = oldHead->next.load();\n        if(!newHead) return false;\n        data = newHead->data;\n        head.store(newHead);\n        delete oldHead;\n        return true;\n    }\n};\n\nint main() {\n    int n;\n    cin >> n;\n    LockFreeQueue<int> q;\n    for(int i = 0; i < n; i++) {\n        int x;\n        cin >> x;\n        q.enqueue(x);\n    }\n    for(int i = 0; i < n; i++) {\n        int x;\n        if(q.dequeue(x)) cout << x << " ";\n    }\n    cout << endl;\n    return 0;\n}</code></pre>`,
    explanation: `<h3>Explanation</h3><p>Atomic operations ensure thread-safe enqueue and dequeue without locks.</p>`
  }


];

const searchInput = document.querySelector('.search-input');
const filterTabs = document.querySelectorAll('.filter-tab');

function getExerciseById(id) {
  return exerciseDatabase.find(exercise => exercise.id === parseInt(id));
}

function renderExercises(exercises, isInitialView = true) {
  const grid = document.querySelector('.exercises-grid');
  grid.innerHTML = '';

  // Group exercises by category
  const categories = {};
  exercises.forEach(exercise => {
    if (!categories[exercise.category]) {
      categories[exercise.category] = [];
    }
    categories[exercise.category].push(exercise);
  });

  // Render categorized list
  for (const [category, exercisesList] of Object.entries(categories)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-section';
    categoryDiv.innerHTML = `<h2>${category}</h2><ul class="exercise-list"></ul>`;
    const ul = categoryDiv.querySelector('.exercise-list');

    // Limit to 10 exercises for initial or filtered view unless all are requested
    const maxDisplay = isInitialView ? Math.min(10, exercisesList.length) : exercisesList.length;
    exercisesList.slice(0, maxDisplay).forEach(exercise => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#" class="exercise-link" data-id="${exercise.id}">
          ${exercise.title}
        </a>
      `;
      ul.appendChild(li);
    });

    // Add "View all" link only if more than 10 exercises and in initial view
    if (exercisesList.length > 10 && isInitialView) {
      const viewAll = document.createElement('li');
      viewAll.innerHTML = `<a href="#" class="view-all" data-category="${category.toLowerCase()}">View all ${category} examples →</a>`;
      ul.appendChild(viewAll);
    }

    grid.appendChild(categoryDiv);
  }
}

function renderAllExercisesByCategory(category) {
  const grid = document.querySelector('.exercises-grid');
  grid.innerHTML = '';

  const filteredExercises = exerciseDatabase.filter(exercise => exercise.category.toLowerCase() === category);
  const totalContainers = Math.ceil(filteredExercises.length / 10);

  for (let i = 0; i < totalContainers; i++) {
    const start = i * 10;
    const end = Math.min((i + 1) * 10, filteredExercises.length);
    const containerExercises = filteredExercises.slice(start, end);

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-section';
    categoryDiv.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2><ul class="exercise-list"></ul>`;
    const ul = categoryDiv.querySelector('.exercise-list');

    containerExercises.forEach(exercise => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#" class="exercise-link" data-id="${exercise.id}">
          ${exercise.title}
        </a>
      `;
      ul.appendChild(li);
    });

    grid.appendChild(categoryDiv);
  }

  // Update filter tab to reflect the selected category
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    if (tab.textContent.toLowerCase() === category) {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    }
  });
}

function filterExercises(filterType, filterValue) {
  if (filterType === 'category') {
    if (filterValue === 'all') {
      return exerciseDatabase;
    }
    if (filterValue === 'advanced problems') {
      const advancedCategories = ['STL', 'Templates', 'Modern C++', 'Multithreading', 'Dynamic Programming', 'Smart Pointers', 'Algorithms', 'File Handling', 'Exception Handling'];
      return exerciseDatabase.filter(exercise => advancedCategories.includes(exercise.category));
    }
    return exerciseDatabase.filter(exercise => exercise.category.toLowerCase() === filterValue);
  } else if (filterType === 'difficulty') {
    return exerciseDatabase.filter(exercise => exercise.difficulty.toLowerCase() === filterValue);
  }
  return exerciseDatabase;
}

function searchExercises(searchTerm) {
  searchTerm = searchTerm.toLowerCase().trim();
  return exerciseDatabase.filter(exercise =>
    exercise.title.toLowerCase().includes(searchTerm) ||
    exercise.description.toLowerCase().includes(searchTerm)
  );
}

function showModal(exerciseId) {
  let currentId = parseInt(exerciseId);
  const exercise = getExerciseById(currentId);
  if (!exercise) return;

  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  function updateModal() {
    modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${exercise.title}</h2>
                <button class="close">×</button>
            </div>
            <div class="modal-body">
                <p class="modal-difficulty">Difficulty: <span class="difficulty-label">${exercise.difficulty.toUpperCase()}</span></p>
                <div class="tabs">
                    <button class="tab active" data-tab="problem">Problem</button>
                    <button class="tab" data-tab="solution">Solution</button>
                    <button class="tab" data-tab="explanation">Explanation</button>
                </div>
                <div class="tab-content active" id="problem">${exercise.problem}</div>
                <div class="tab-content" id="solution">
                    <div class="code-block">${exercise.solution}</div>
                    <button class="copy-button">Copy Solution</button>
                </div>
                <div class="tab-content" id="explanation">${exercise.explanation}</div>
            </div>`;

    modal.style.display = 'block';
    setupTabListeners();
    // Add copy button listener
    const copyButton = modalContent.querySelector('.copy-button');
    copyButton.addEventListener('click', () => {
        const solutionText = modalContent.querySelector('.code-block').textContent;
        navigator.clipboard.writeText(solutionText).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy Solution';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            copyButton.textContent = 'Copy Failed';
            setTimeout(() => {
                copyButton.textContent = 'Copy Solution';
            }, 2000);
        });
    });
  }

  updateModal();
}

function setupTabListeners() {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });
}

function initializePage() {
  // Render all exercises initially
  renderExercises(exerciseDatabase);

  // Setup filter tab listeners
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filterValue = tab.textContent.toLowerCase();
      const filterType = ['easy', 'medium', 'hard'].includes(filterValue) ? 'difficulty' : 'category';
      const filteredExercises = filterExercises(filterType, filterValue);
      renderExercises(filteredExercises, true);
    });
  });

  // Setup search input listener
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    const filteredExercises = searchExercises(searchTerm);
    renderExercises(filteredExercises);
  });

  // Setup exercise link and view all click listeners
  document.querySelector('.exercises-grid').addEventListener('click', (e) => {
    const link = e.target.closest('.exercise-link');
    if (link) {
      e.preventDefault();
      const exerciseId = link.getAttribute('data-id');
      showModal(exerciseId);
    }

    const viewAll = e.target.closest('.view-all');
    if (viewAll) {
      e.preventDefault();
      const category = viewAll.getAttribute('data-category');
      renderAllExercisesByCategory(category);
    }
  });

  // Setup modal close listener
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
      document.querySelector('.modal').style.display = 'none';
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelector('.modal').style.display = 'none';
    }
  });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);