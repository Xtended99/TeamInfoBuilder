
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

 class Manager extends Employee
    {
     constructor ( name = "Manager Sosa",  id = 2222, email = "manager@aol.com", role = "Manager", office = 300 )
        {
         super();
         this.name   = name;
         this.id     = id;
         this.email  = email;
         this.role   = role;
         this.office = office;
        }
 
    get school_()
        {
         return( this.school );
        }
 
    get role_()
        {
         return( "Intern" );
        }

    set role_( _role_ )
        {
         console.log( this.role = _role_ );
        }
 
    set school_( _school_ )
        {
         console.log( this.office = _office_ );
        }
    }
 
 
 let mc_1 = "";
 let mc_2 = "";
 
  console.log( "1 = " + ( mc_1 = new Manager("Manager Sosa", 11112, "manager@aol.comm", "Manager") ) );
  console.log( "2 = " + ( mc_2 = new Manager( ) ) );
  
  let mc_3 = new Manager();
 
 console.log( "3 = " + ( mc_3.toString() + " " + mc_3.name + " " + mc_3.id + " " +  mc_3.email + " " +  mc_3.role ) );
 
 console.log( "4 = " + ( mc_3.toString() + " " + mc_3.name_ + " " + mc_3.id_ +  " " + mc_3.email_ + " " + mc_3.role_ ) );
 
 console.log( "5 = " + ( mc_3.toString() + " " + ( mc_3.name_ = "Manger Sosa" ) + " " + ( mc_3.id_ = 2222 ) + " " + ( mc_3.email_ = "sss@ss.com" ) + " " +  ( mc_3.role_ = "The Owner" ) ) );
 // 
 //  console.log( "6 = " + ( mc_3.toString() + " " + mc_3.name + " " + mc_3.id + " " +  mc_3.email + " " +  mc_3.role ) );
 
module.exports = Manager;
