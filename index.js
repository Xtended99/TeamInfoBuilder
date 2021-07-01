

inquirer = require( "inquirer" )
const { promisify } = require("util");
fs = require( "fs" )

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const promisedWriteFile = promisify(fs.writeFile);

Employee = require( "./Employee" );
Manager  = require( "./Manager" );
Engineer = require( "./Engineer" );
Intern   = require( "./Intern" );

let first_time_message = "\n\n\n\tHello you are about to build a team of developers with TeamBuilder.\n\tTo move forward simply press return to exit type \"n\" to exit";
answered = ""

async function redo ()
 {
  let a = "";

  let license = "";

  // process.stdout.write('\033c');

  console.log ( "\x1b[36m\x1b[1m" );
  console.log ( "\n   *****************************************************************************\n" );
  console.log ( "    Welcome please read the following details and follow the instructions below:\n\n");
  console.log ( "\x1b[0m", "\
        This tool will help fascilitate the collection of data about your team \n\
          and its members in regards to the following artifiacts:\n\n\
  \
          1. Manager in charge of the team.\n\
            2. The team members name.\n\
            3. The team members employment status - Engineer or Intern.\n\
            4. The email address for each team member.\n\
            5. The engineers GitHub profile link.\n\
            5. Or the school the intern attended.\n\n\
  \
        Via a series of questions a web page will be created based on the information\n\
        provided. The web page will provide a summary for each team memeber. There \n\
        will also be an email link under the team members name. This link will\n\
        start the default email application that is defined email client for your device.\n\
        In addtion for your convenience a link to each team memebers GitHub profile will  \n\
        placed on the web page so that you can access the team members git hub profile.\n\
      ");
      console.log("\x1b[36m\x1b[1m");
      console.log("\x1b[36m\x1b[1m", "     Thanks and Enjoy\n\n\
               Angel Sosa\
      ");
  console.log ( "\x1b[36m\x1b[1m" );
  console.log ( "\n   *****************************************************************************\n" );
  console.log ( "\x1b[0m" );

  await inquirer.prompt(
     [
      {
       name: "ask",
       type: "confirm",
       message: "Would you like to proceed",
      },
      {
       name: "proceed",
       type: "confirm",
       message: "Would you like to proceed",
       when: (answers) => 
          {
           if ( answers.ask === false )
             {
              console.log( "Come Again !!" )
              process.exit()
             }
          }
      },
      {
       name: "m_anager",
       type: "input",
       message: "Managers Name",
      },
      {
       name: "m_emp",
       type: "input",
       message: "Mangers Employee ID",
      },
      {
       name: "m_email",
       type: "input",
       message: "Mangers email address",
      },
      {
       name: "m_offn",
       type: "input",
       message: "Mangers office number",
      },
      {
       type: 'loop',
       message: 'Add a new user ?',
       name: 'u_sers',
       questions:
          await [
           {
            name: 'n_ame',
            type: 'input',
            message: 'What is user\'s name?',
            validate: function (value) 
               {
                if ( ( /.+/ ).test( value ) )
                  {
                   return true;
                  }
                return 'name is required';
               }
           },
           {
            name: "e_mployee_type",
            type: "list",
            message: "Is the team member an Engineer or an Intern",
            choices: [ 'Engineer', 'Intern' ],

             filter(val)
               {
                return val.toLowerCase();
               },
           },
           {
            name: "g_ithub",
            type: "input",
            message: "Enter your github username:",
            when: ( answers ) =>
              {
               if (answers.e_mployee_type === "engineer")
                 {
                  return true;
                 }
              }
           },
           {
            name: "i_ntern",
            type: "input",
            message: "Enter your school username:",
            when: ( answers ) =>
              {
               if (answers.e_mployee_type === "intern")
                 {
                  return true;
                 }
              }
           },
           {
            name: 'i_d',
            type: 'input',
            message: 'The workers ID?',
            validate: function ( value ) 
               {
                var digitsOnly = /\d+/;

                if ( digitsOnly.test( value ) )
                  {
                   return true;
                  }
                return 'Invalid age! Must be a number genius!';
              }
           },
           {
            name: 'e_m',
            type: 'input',
            message: 'The workers Email Address?',
            validate: function ( value ) 
               {
                var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if ( email.test( value ) )
                  {
                   return true;
                  }
                return 'Invalid Email address';
              }
           },
           {
            name: 'o_n',
            type: 'input',
            message: 'Employees Office Number Digits Only?',
            validate: function ( value ) 
               {
                var office_number = /\d+/;;

                if ( office_number.test( value ) )
                  {
                   return true;
                  }
                return 'Invalid Office Number Digits Only';
              }
           },
          ]
      }
     ]
                 )
       .then( function(answers)
         {
          console.log( JSON.stringify( answers ) );
          console.log( answers.users );
          answered = answers;
        }
      );
 }

async function repeat_me ()
  {
   for ( i = 0; i < 10; i++ )
      {
//       process.stdout.write('\033c');
       await inquirer.prompt(
          [
           {
            name: "ask",
            type: "confirm",
            message: `${first_time_message}`,
           },
           {
            name: "proceed",
            type: "confirm",
            message: "Would you like to proceed",
            when: (answers) => 
              {
               if ( answers.ask === false )
                 {
                  console.log( "Come Again !!" )
                  process.exit()
                 }
              }
           },
          ]
                      )
            .then( function(answers)
              {
               console.log( "1 ==== " + JSON.stringify( answers ) );
               console.log( "2 ==== " + answers.users );
               
              }
           );
       await redo()
       first_time_message = "Would you like to run this again?"
       await build_html()
      }
  }

async function build_html ()
   {
    a = [ "Angel", "Jorge", "Nicolas" ]
    
    for ( i = 0; i < a.length; i++ )
       {
        console.log( a[ i ] )
       }
    
    fd_1  = fs.openSync( 'first_half.html', "as+", 0o666 )
    fd_2  = fs.openSync( 'last_half.html', "as+", 0o666 )
    fd_3  = fs.openSync( 'index.html', "as+", 0o666 )
    
    console.log( fs.statSync( 'first_half.html' ).size )
    console.log( fs.statSync( 'last_half.html' ).size )
    
    buffer_1 = Buffer.alloc( fs.statSync( 'first_half.html' ).size );
    buffer_2 = Buffer.alloc( fs.statSync( 'last_half.html' ).size );
    buffer_3 = Buffer.alloc( JSON.stringify( answered ).length, 'utf8' )
    
    fs.readSync( fd_1, buffer_1, 0, ( fs.statSync( 'first_half.html' ).size ), 0 )
    fs.readSync( fd_2, buffer_2, 0, ( fs.statSync( 'last_half.html' ).size ), 0 )
    buffer_3 = Buffer.from( JSON.stringify( answered ) )

    // box_array = [ "            <div>\n", "              <h2>", "Manager", answered.m_anager, "</h2>", "\n               <p class=\"info\">", answered.u_sers[0].n_ame, "</p>","\n               <p class=\"info\">", answered.u_sers[0].e_m, "</p>", "\n               <p class=\"info\">", answered.u_sers[0].o_n, "   </p>","\n               <p class=\"info\">", answered.u_sers[0].e_mployee_type, "</p>","\n               <p class=\"info\">", "Blank 2", "</p>", "\n            </div>\n\n" ]
    // buffer_3 = Buffer.from( box_array.join( " " )  )
    // b = "<div><h2></h2";b.substring( 0, 4 ) + " asdfas " + b.substring( 4, 9 )


    console.log( buffer_1.toString( 'utf8' ) )
    console.log( buffer_3.toString( 'utf8' ) )
    console.log( buffer_2.toString( 'utf8' ) )
    
    fs.appendFileSync( fd_3, buffer_1, )

       for ( i = 0; i < answered.u_sers.length; i++ )
          {
           switch( answered.u_sers[ i ].e_mployee_type )
              {
               case "engineer":
                 box_array = [ "            <div id=\"man\">\n", "              <h4>", "Manager = ", answered.m_anager, "<br>MGR EMP:", answered.m_emp, "<br>MGR Email:", answered.m_email, "<br>MGR Office:", answered.m_offn, "</h4>", "\n               <p class=\"info\">", "Emp Name:", answered.u_sers[ i ].n_ame, "</p>", "\n               <p class=\"info\">", "ID:", answered.u_sers[ i ].i_d, "</p>", "\n               <p class=\"info\">", "Emp:", answered.u_sers[ i ].e_m, "</p>", "\n               <p class=\"info\">", "Office:", answered.u_sers[ i ].o_n, "   </p>","\n               <p class=\"info\">", "Emp Type:", answered.u_sers[ i ].e_mployee_type, "</p>","\n               <p class=\"info\">", "Git TAG:", answered.u_sers[ i ].g_ithub, "</p>", "\n            </div>\n\n" ]
                break;
               case "intern":
                 box_array = [ "            <div id=\"man\">\n", "              <h4>", "Manager = ", answered.m_anager, "<br>MGR EMP:", answered.m_emp, "<br>MGR Email:", answered.m_email, "<br>MGR Office:", answered.m_offn, "</h4>", "\n               <p class=\"info\">", "Emp Name:", answered.u_sers[ i ].n_ame, "</p>", "\n               <p class=\"info\">", "ID:", answered.u_sers[ i ].i_d, "</p>", "\n               <p class=\"info\">", "Emp:", answered.u_sers[ i ].e_m, "</p>", "\n               <p class=\"info\">", "Office:", answered.u_sers[ i ].o_n, "   </p>","\n               <p class=\"info\">", "Emp Type:", answered.u_sers[ i ].e_mployee_type, "</p>","\n               <p class=\"info\">", "School:", answered.u_sers[ i ].i_ntern, "</p>", "\n            </div>\n\n" ]
                break;
               default:
              }
//           box_array = [ "            <div>\n", "              <h2>", "Manager", answered.m_anager, "</h2>", "\n               <p class=\"info\">", answered.u_sers[ i ].n_ame, "</p>","\n               <p class=\"info\">", answered.u_sers[ i ].e_m, "</p>", "\n               <p class=\"info\">", answered.u_sers[ i ].o_n, "   </p>","\n               <p class=\"info\">", answered.u_sers[ i ].e_mployee_type, "</p>","\n               <p class=\"info\">", "Blank 2", "</p>", "\n            </div>\n\n" ]
           buffer_3 = Buffer.from( box_array.join( " " )  )
           fs.appendFileSync( fd_3, buffer_3, )
          }

    fs.appendFileSync( fd_3, buffer_2, )
    
    console.log( fs.statSync( 'first_half.html' ).size )
    console.log( fs.statSync( 'last_half.html' ).size )
    console.log( JSON.stringify( answered ).length )
    
    fs.closeSync( fd_1 )
    fs.closeSync( fd_2 )
    fs.closeSync( fd_3 )

//     proc = require('child_process')
//    
//     proc.spawn( "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [], 
//        {
//         stdio: 'inherit'
//        }
//       )
   }

repeat_me()
