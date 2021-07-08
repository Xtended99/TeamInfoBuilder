
//'use strict';

class Employee
   {
    constructor ( name = "Angel Sosa",  id = 1111, email = "soslorr@aol.com", role = "Owner")
       {
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = role;
       }

    get name_()
       {
        return( this.name );
       }

    get id_()
       {
        return( this.id );
       }

    get email_()
       {
        return( this.email );
       }

    get role_()
       {
        return( this.role );
       }

    set name_( _name_ )
       {
        console.log( this.name = _name_ );
       }

    set id_( _id_ )
       {
        console.log( this.id = _id_ );
       }

    set email_( _email_ )
       {
        console.log( this.email = _email_ );
       }

    set role_( _role_ )
       {
        console.log( this.role = _role_ );
       }
   }

let tc_1 = "";
let tc_2 = "";

m = new Employee( "Jorge Sosa", 3333, "sssoslorr@aol.com", "Mgr", 300 )
n = new Employee(  )

console.log ( "A ##################### " + Employee + "\n" )
console.log ( "B ##################### " + JSON.stringify( Employee ) + "\n" )
console.log( "D ##################### " + Employee.name + "\n" )
console.log( "E ##################### " + Employee.toString() + "\n" )
console.table( "F ################# " + Employee )
console.dir( "G ##################### " + Employee + "\n" )
//console.log( Object.entries( E ).sort( ( a, b ) => b[ 0 ].localeCompare( a[ 0 ] ) ); )

  console.log( "1 = " + ( ( tc_1 = new Employee("Angel Sosaa", 11112, "soslorr@aol.comm", "Ownerr") )) );
  console.log( "2 = " + ( tc_2 = new Employee( ) ) );
  
  let tc_3 = new Employee();
 
 console.log( "3 = " + ( tc_3.toString() + " " + tc_3.name + " " + tc_3.id + " " +  tc_3.email + " " +  tc_3.role ) );
 
 console.log( "4 = " + ( tc_3.toString() + " " + tc_3.name_ + " " + tc_3.id_ +  " " + tc_3.email_ + " " + tc_3.role_ ) );
 
 console.log( "5 = " + ( tc_3.toString() + " " + ( tc_3.name_ = "Sosa Angel" ) + " " + ( tc_3.id_ = 1111 ) + " " + ( tc_3.email_ = "sss@ss.com" ) + " " +  ( tc_3.role_ = "The Owner" ) ) );

//  console.log( "6 = " + ( tc_3.toString() + " " + tc_3.name + " " + tc_3.id + " " +  tc_3.email + " " +  tc_3.role ) );

module.exports = Employee;
