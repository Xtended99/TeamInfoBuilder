const sum = require('./sum');
const Emplyee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test( 'mc_1 = new Manager( "Manager Sosa", 11112, "manager@aol.comm", "Manager" )', ( ) =>
  {
   expect( mc_1 = new Manager( "Manager Sosa", 11112, "manager@aol.comm", "Manager" ) ).toBe( mc_1 );
  }
 );

test( 'tc_1 = new Employee( "Angel Sosaa", 11112, "soslorr@aol.comm", "Owner" )', ( ) =>
  {
   expect( tc_1 = new Employee( "Angel Sosaa", 11112, "soslorr@aol.comm", "Owner" ) ).toBe( tc_1 );
  }
 );

test( 'en_0 = new Engineer( "Engineer Sosa", 11112, "engineer@aol.comm", "Engineer" )', ( ) =>
  {
   expect( en_0 = new Engineer( "Engineer Sosa", 11112, "engineer@aol.comm", "Engineer" ) ).toBe( en_0 );
  }
 );

test( 'tc_3 = new Intern( "Intern Sosa", 11112, "intern@aol.comm", "Intern" )', ( ) =>
  {
   expect( tc_3 = new Intern( "Intern Sosa", 11112, "intern@aol.comm", "Intern" ) ).toBe( tc_3 );
  }
 );

test( 'mc_1 = new Manager( "" )', ( ) =>
  {
   expect( mc_1 = new Manager( "" ) ).toBe( mc_1 );
  }
 );

test( 'tc_1 = new Employee( "" )', ( ) =>
  {
   expect( tc_1 = new Employee( "" ) ).toBe( tc_1 );
  }
 );

test( 'en_0 = new Engineer( "" )', ( ) =>
  {
   expect( en_0 = new Engineer( "" ) ).toBe( en_0 );
  }
 );

test( 'tc_3 = new Intern( "" )', ( ) =>
  {
   expect( tc_3 = new Intern( "" ) ).toBe( tc_3 );
  }
 );
