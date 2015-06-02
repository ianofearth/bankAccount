describe ("Account", function() {
  it("will display the name of the bank account", function() {
    var testAccount = new Account("Bruce Wayne", 100000000);
    expect(testAccount.accountName).to.equal("Bruce Wayne");
    expect(testAccount.amount).to.equal(100000000);
  });

  it("will add to the amount inside of the object", function(){
    var testAccount = new Account("Bruce Wayne", 10);
    testAccount.deposit(5);
    expect(testAccount.amount).to.equal(15);
  });

  it("will decrease the amount inside of the object", function(){
    var testAccount = new Account("Bruce Wayne", 10);
    testAccount.withdraw(5);
    expect(testAccount.amount).to.equal(5);
  });
});
