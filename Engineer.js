
Employee = require( "./Employee" );

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

class Engineer extends Employee
   {
    constructor ( name = "Engineer Sosa",  id = 3333,  email = "enginner@aol.com", role = "Engineer", gname = "xtended99" )
       {
        super();
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = role;
        this.gname = gname;
       }
    get role_()
        {
         return( "Engineer" );
        }

    get github_()
       {
        return( this.gname );
       }

    set role_( _role_ )
        {
         console.log( this.role = _role_ );
        }
    set github_( _gname_ )
       {
        return( this.gname = _gname_ );
       }

   }

 console.log( "1 = " + ( en_0 = ( new Engineer("Engineer Sosa", 11112, "engineer@aol.comm", "Engineer") ) ) );
 console.log( "2 = " + ( en_1 = new Engineer( ) ) );
 console.log( "3 = " + ( en_2 = ( new Engineer("Engineer Sosa", 11112, "engineer@aol.comm", "Engineer") ) ) );
 
 let en_3 = new Engineer("Engineer Sosa", 11112, "engineer@aol.comm", "Engineer");

console.log( "4 = " + ( en_3.toString() + " " + en_3.github_ + " " + en_3.id + " " +  en_3.email + " " +  en_3.role ) );

console.log( "5 = " + ( en_3.toString() + " " + en_3.name_ + " " + en_3.id_ +  " " + en_3.email_ + " " + en_3.role_ ) );

console.log( "6 = " + ( en_3.toString() + " " + ( en_3.name_ = "Sosa Angel" ) + " " + ( en_3.id_ = 3333 ) + " " + ( en_3.email_ = "sss@ss.com" ) + " " +  ( en_3.role_ = "The Owner" ) ) );

module.exports = Engineer;
