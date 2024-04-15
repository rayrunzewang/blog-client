import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    [
      {
        language: 'Javascript',
        articles: [
          {
            title: 'variables',
            body: 'Variables are fundamental to any programming language as they allow developers to store and manipulate data. In JavaScript, we have three primary ways to declare variables: var, let, and const.var was traditionally used to declare variables but has some drawbacks, such as variable hoisting and function scope.let and const were introduced in ES6 (ECMAScript 2015) to address the issues with var. They provide block scoping and prevent accidental reassignment.let is used to declare variables that can be reassigned, while const is used for variables that should not be reassigned.',
          },
          {
            title: 'function',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
        ]
      },
      {
        language: 'React',
        articles: [
          {
            title: 'Component',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'State',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias molestiae incidunt at sint quasi doloribus necessitatibus, nobis repudiandae eaque voluptas quod sed voluptatum aspernatur veritatis non. Praesentium, inventore neque?',
          },
          {
            title: 'Props',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis possimus voluptates aut accusantium quia libero veritatis corrupti aspernatur. Explicabo labore laboriosam assumenda temporibus vel nemo expedita nulla consequatur suscipit omnis? Praesentium repellat obcaecati eaque cumque magni in libero nesciunt eligendi modi, rem autem sequi. Neque minus nemo quia, blanditiis sed est voluptatem dolore dolorem sapiente, perferendis quisquam, iusto cupiditate necessitatibus ad explicabo veritatis tenetur nulla dolorum. Autem eveniet odio ipsum nostrum optio tenetur dolores, nihil iusto in natus quae dolorem sint minima repellat corporis voluptatem suscipit cum error distinctio, cumque omnis officiis eligendi consequatur. Error ut quas quos maxime tempore!'
          },
          {
            title: 'prototype',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis, illo a dolorem ex doloremque minima hic alias modi, tenetur nihil quidem eius adipisci soluta laborum numquam, dolor rerum repudiandae? Quia vero illo dolores enim! Provident enim iure vel, accusamus ratione possimus nesciunt alias architecto, nisi quasi dolor repellendus libero. Dignissimos optio molestias nulla in aperiam. Saepe consequuntur odio aspernatur, recusandae ratione alias. Facere perferendis doloribus numquam dolorum in obcaecati possimus assumenda, quos, earum, excepturi debitis voluptatibus optio. Tempore aut reiciendis, sed est in rerum quibusdam eos impedit corrupti molestias eaque adipisci optio pariatur possimus quidem quae magnam eius quam, at placeat molestiae! Corrupti beatae delectus ut ab eius nisi excepturi aliquam facere nemo voluptate vitae, aliquid libero consectetur expedita ducimus dolore nam hic numquam exercitationem earum mollitia velit, amet esse! Ex voluptate assumenda, pariatur totam quidem alias cumque animi culpa quasi, repellendus suscipit praesentium corporis tempora est a similique facere dolores laborum ratione itaque expedita voluptatibus. Atque totam, quibusdam voluptate delectus eligendi vel at facilis molestiae excepturi architecto illo soluta earum iste id ea molestias, quod, nihil exercitationem. Tenetur pariatur sit itaque laudantium animi, neque eaque repellat, nemo accusantium nihil incidunt amet culpa magnam deserunt unde voluptatum quaerat sed.'
          }
        ]
      },
      {
        language: 'CSS',
        articles: [
          {
            title: 'Selectors',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'FlexBox',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias molestiae incidunt at sint quasi doloribus necessitatibus, nobis repudiandae eaque voluptas quod sed voluptatum aspernatur veritatis non. Praesentium, inventore neque?',
          },
          {
            title: 'Grid',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis possimus voluptates aut accusantium quia libero veritatis corrupti aspernatur. Explicabo labore laboriosam assumenda temporibus vel nemo expedita nulla consequatur suscipit omnis? Praesentium repellat obcaecati eaque cumque magni in libero nesciunt eligendi modi, rem autem sequi. Neque minus nemo quia, blanditiis sed est voluptatem dolore dolorem sapiente, perferendis quisquam, iusto cupiditate necessitatibus ad explicabo veritatis tenetur nulla dolorum. Autem eveniet odio ipsum nostrum optio tenetur dolores, nihil iusto in natus quae dolorem sint minima repellat corporis voluptatem suscipit cum error distinctio, cumque omnis officiis eligendi consequatur. Error ut quas quos maxime tempore!'
          },
          {
            title: 'HowtoCenter',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis, illo a dolorem ex doloremque minima hic alias modi, tenetur nihil quidem eius adipisci soluta laborum numquam, dolor rerum repudiandae? Quia vero illo dolores enim! Provident enim iure vel, accusamus ratione possimus nesciunt alias architecto, nisi quasi dolor repellendus libero. Dignissimos optio molestias nulla in aperiam. Saepe consequuntur odio aspernatur, recusandae ratione alias. Facere perferendis doloribus numquam dolorum in obcaecati possimus assumenda, quos, earum, excepturi debitis voluptatibus optio. Tempore aut reiciendis, sed est in rerum quibusdam eos impedit corrupti molestias eaque adipisci optio pariatur possimus quidem quae magnam eius quam, at placeat molestiae! Corrupti beatae delectus ut ab eius nisi excepturi aliquam facere nemo voluptate vitae, aliquid libero consectetur expedita ducimus dolore nam hic numquam exercitationem earum mollitia velit, amet esse! Ex voluptate assumenda, pariatur totam quidem alias cumque animi culpa quasi, repellendus suscipit praesentium corporis tempora est a similique facere dolores laborum ratione itaque expedita voluptatibus. Atque totam, quibusdam voluptate delectus eligendi vel at facilis molestiae excepturi architecto illo soluta earum iste id ea molestias, quod, nihil exercitationem. Tenetur pariatur sit itaque laudantium animi, neque eaque repellat, nemo accusantium nihil incidunt amet culpa magnam deserunt unde voluptatum quaerat sed.'
          },
          {
            title: 'CSSWebsiteLayout',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis, illo a dolorem ex doloremque minima hic alias modi, tenetur nihil quidem eius adipisci soluta laborum numquam, dolor rerum repudiandae? Quia vero illo dolores enim! Provident enim iure vel, accusamus ratione possimus nesciunt alias architecto, nisi quasi dolor repellendus libero. Dignissimos optio molestias nulla in aperiam. Saepe consequuntur odio aspernatur, recusandae ratione alias. Facere perferendis doloribus numquam dolorum in obcaecati possimus assumenda, quos, earum, excepturi debitis voluptatibus optio. Tempore aut reiciendis, sed est in rerum quibusdam eos impedit corrupti molestias eaque adipisci optio pariatur possimus quidem quae magnam eius quam, at placeat molestiae! Corrupti beatae delectus ut ab eius nisi excepturi aliquam facere nemo voluptate vitae, aliquid libero consectetur expedita ducimus dolore nam hic numquam exercitationem earum mollitia velit, amet esse! Ex voluptate assumenda, pariatur totam quidem alias cumque animi culpa quasi, repellendus suscipit praesentium corporis tempora est a similique facere dolores laborum ratione itaque expedita voluptatibus. Atque totam, quibusdam voluptate delectus eligendi vel at facilis molestiae excepturi architecto illo soluta earum iste id ea molestias, quod, nihil exercitationem. Tenetur pariatur sit itaque laudantium animi, neque eaque repellat, nemo accusantium nihil incidunt amet culpa magnam deserunt unde voluptatum quaerat sed.'
          },
        ],
      },
      {
        language: 'Java',
        articles: [
          {
            title: 'Variables',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'DataTypes',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias molestiae incidunt at sint quasi doloribus necessitatibus, nobis repudiandae eaque voluptas quod sed voluptatum aspernatur veritatis non. Praesentium, inventore neque?',
          },
          {
            title: 'Methods',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis possimus voluptates aut accusantium quia libero veritatis corrupti aspernatur. Explicabo labore laboriosam assumenda temporibus vel nemo expedita nulla consequatur suscipit omnis? Praesentium repellat obcaecati eaque cumque magni in libero nesciunt eligendi modi, rem autem sequi. Neque minus nemo quia, blanditiis sed est voluptatem dolore dolorem sapiente, perferendis quisquam, iusto cupiditate necessitatibus ad explicabo veritatis tenetur nulla dolorum. Autem eveniet odio ipsum nostrum optio tenetur dolores, nihil iusto in natus quae dolorem sint minima repellat corporis voluptatem suscipit cum error distinctio, cumque omnis officiis eligendi consequatur. Error ut quas quos maxime tempore!'
          },
          {
            title: 'OOP',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis, illo a dolorem ex doloremque minima hic alias modi, tenetur nihil quidem eius adipisci soluta laborum numquam, dolor rerum repudiandae? Quia vero illo dolores enim! Provident enim iure vel, accusamus ratione possimus nesciunt alias architecto, nisi quasi dolor repellendus libero. Dignissimos optio molestias nulla in aperiam. Saepe consequuntur odio aspernatur, recusandae ratione alias. Facere perferendis doloribus numquam dolorum in obcaecati possimus assumenda, quos, earum, excepturi debitis voluptatibus optio. Tempore aut reiciendis, sed est in rerum quibusdam eos impedit corrupti molestias eaque adipisci optio pariatur possimus quidem quae magnam eius quam, at placeat molestiae! Corrupti beatae delectus ut ab eius nisi excepturi aliquam facere nemo voluptate vitae, aliquid libero consectetur expedita ducimus dolore nam hic numquam exercitationem earum mollitia velit, amet esse! Ex voluptate assumenda, pariatur totam quidem alias cumque animi culpa quasi, repellendus suscipit praesentium corporis tempora est a similique facere dolores laborum ratione itaque expedita voluptatibus. Atque totam, quibusdam voluptate delectus eligendi vel at facilis molestiae excepturi architecto illo soluta earum iste id ea molestias, quod, nihil exercitationem. Tenetur pariatur sit itaque laudantium animi, neque eaque repellat, nemo accusantium nihil incidunt amet culpa magnam deserunt unde voluptatum quaerat sed.'
          },
          {
            title: 'Packages&API',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum veritatis, illo a dolorem ex doloremque minima hic alias modi, tenetur nihil quidem eius adipisci soluta laborum numquam, dolor rerum repudiandae? Quia vero illo dolores enim! Provident enim iure vel, accusamus ratione possimus nesciunt alias architecto, nisi quasi dolor repellendus libero. Dignissimos optio molestias nulla in aperiam. Saepe consequuntur odio aspernatur, recusandae ratione alias. Facere perferendis doloribus numquam dolorum in obcaecati possimus assumenda, quos, earum, excepturi debitis voluptatibus optio. Tempore aut reiciendis, sed est in rerum quibusdam eos impedit corrupti molestias eaque adipisci optio pariatur possimus quidem quae magnam eius quam, at placeat molestiae! Corrupti beatae delectus ut ab eius nisi excepturi aliquam facere nemo voluptate vitae, aliquid libero consectetur expedita ducimus dolore nam hic numquam exercitationem earum mollitia velit, amet esse! Ex voluptate assumenda, pariatur totam quidem alias cumque animi culpa quasi, repellendus suscipit praesentium corporis tempora est a similique facere dolores laborum ratione itaque expedita voluptatibus. Atque totam, quibusdam voluptate delectus eligendi vel at facilis molestiae excepturi architecto illo soluta earum iste id ea molestias, quod, nihil exercitationem. Tenetur pariatur sit itaque laudantium animi, neque eaque repellat, nemo accusantium nihil incidunt amet culpa magnam deserunt unde voluptatum quaerat sed.'
          }
        ]
      },
      {
        language: 'Node',
        articles: [
          {
            title: 'variables',
            body: 'Variables are fundamental to any programming language as they allow developers to store and manipulate data. In JavaScript, we have three primary ways to declare variables: var, let, and const.var was traditionally used to declare variables but has some drawbacks, such as variable hoisting and function scope.let and const were introduced in ES6 (ECMAScript 2015) to address the issues with var. They provide block scoping and prevent accidental reassignment.let is used to declare variables that can be reassigned, while const is used for variables that should not be reassigned.',
          }
        ]
      },
      {
        language: 'Next',
        articles: [
          {
            title: 'function',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'oop',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'prototype',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          }
        ]
      },
      {
        language: 'MongoDB',
        articles: [
          {
            title: 'nosql',
            body: 'Variables are fundamental to any programming language as they allow developers to store and manipulate data. In JavaScript, we have three primary ways to declare variables: var, let, and const.var was traditionally used to declare variables but has some drawbacks, such as variable hoisting and function scope.let and const were introduced in ES6 (ECMAScript 2015) to address the issues with var. They provide block scoping and prevent accidental reassignment.let is used to declare variables that can be reassigned, while const is used for variables that should not be reassigned.',
          },
          {
            title: 'function',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'oop',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'prototype',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          }
        ]
      },
      {
        language: 'GraphQL',
        articles: [
          {
            title: 'sql',
            body: 'Variables are fundamental to any programming language as they allow developers to store and manipulate data. In JavaScript, we have three primary ways to declare variables: var, let, and const.var was traditionally used to declare variables but has some drawbacks, such as variable hoisting and function scope.let and const were introduced in ES6 (ECMAScript 2015) to address the issues with var. They provide block scoping and prevent accidental reassignment.let is used to declare variables that can be reassigned, while const is used for variables that should not be reassigned.',
          },
          {
            title: 'function',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'oop',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          },
          {
            title: 'prototype',
            body: 'Functions are blocks of reusable code that perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.Function declarations and function expressions are two common ways to define functions.Arrow functions, introduced in ES6, provide a more concise syntax for writing functions.JavaScript functions support lexical scoping, closures, and the this keyword, which can sometimes lead to unexpected behavior if not understood properly.',
          }
        ]
      }
    ]
  );
}