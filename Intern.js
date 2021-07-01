
Employee = require( "./Employee" )

//m = new Employee( "Jorge Sosa", 3333, "sssoslorr@aol.com", "Mgr", 300 )
//n = new Employee(  )
//
//console.log ( "A ##################### " + Employee + "\n" )
//console.log ( "B ##################### " + JSON.stringify( Employee ) + "\n" )
//console.log( "D ##################### " + Employee.name + "\n" )
//console.log( "E ##################### " + Employee.toString() + "\n" )
//console.table( "F ################# " + Employee )
//console.dir( "G ##################### " + Employee + "\n" )
////console.log( Object.entries( E ).sort( ( a, b ) => b[ 0 ].localeCompare( a[ 0 ] ) ); )

class Intern extends Employee
   {
    constructor ( name = "Intern Sosa",  id = 4444, email = "intern@aol.com", role = "Intern", school = "GeorgiaTech" )
       {
        super();
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = role;
        this.school = school;
       }

    get school_()
       {
        return( this.school );
       }

    get role_()
       {
        return( this.role );
       }

    set school_( _school_ )
       {
        console.log( this.email = _school_ );
       }

    set role_( _role_ )
       {
        console.log( this.role = "Intern" );
       }
   }

 console.log( "1 = " + ( tc_1 = new Employee("Intern Sosa", 11112, "intern@aol.comm", "Intern") ) );
 console.log( "2 = " + ( tc_2 = new Employee( ) ) );
 
 //let tc_3 = new Employee();
 tc_3 = new Intern("Intern Sosa", 11112, "intern@aol.comm", "Intern");

console.log( "3 = " + ( tc_3.toString() + " " + tc_3.name + " " + tc_3.id + " " +  tc_3.email + " " +  tc_3.role ) );

console.log( "4 = " + ( tc_3.toString() + " " + tc_3.name_ + " " + tc_3.id_ +  " " + tc_3.email_ + " " + tc_3.role_ ) );

console.log( "5 = " + ( tc_3.toString() + " " + ( tc_3.name_ = "Intern" ) + " " + ( tc_3.id_ = 4444 ) + " " + ( tc_3.email_ = "sss@ss.com" ) + " " +  ( tc_3.role_ = "The Owner" ) ) );
// 
//  console.log( "6 = " + ( tc_3.toString() + " " + tc_3.name + " " + tc_3.id + " " +  tc_3.email + " " +  tc_3.role ) );


module.exports = Intern;
