function Account(accountName, amount) {
  this.accountName = accountName;
  this.amount = amount;
}

Account.prototype.deposit = function(depositAmount) {
  this.amount = this.amount + depositAmount;
  return this.amount;
}

Account.prototype.withdraw = function(withdrawAmount) {
  this.amount = this.amount - withdrawAmount;
  return this.amount;
}

$(function() {
  var allAccounts = [];

  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var accountName = $("input#account-name").val();
    var amount = parseInt($("input#account-amount").val());

    var newAccount = new Account(accountName, amount);
    allAccounts.push(newAccount);

    $("ul.account-names").append("<li class='account'>" + newAccount.accountName + "</li>");

    $(".account").last().click(function() {
      var index = allAccounts.indexOf(newAccount);
      $(".account-info").html("<p>Name: " + newAccount.accountName + "</p><p>Amount: " + newAccount.amount.toString() + "</p>");

      $("form#alter-amount").data("id", index);
    });
  });

  $("button#withdraw-amount").click(function(event) {
    event.preventDefault();
    var index = $("form#alter-amount").data("id");
    var findAccount = allAccounts[index];
    var amount = parseInt($("input#change-amount").val());
    findAccount.withdraw(amount);
    $(".account-info").html("<p>Name: " + findAccount.accountName + "</p><p>Amount: " + findAccount.amount.toString() + "</p>");

  });

  $("button#deposit-amount").click(function(event) {
    event.preventDefault();
    var index = $("form#alter-amount").data("id");
    var findAccount = allAccounts[index];
    var amount = parseInt($("input#change-amount").val());
    findAccount.deposit(amount);
    $(".account-info").html("<p>Name: " + findAccount.accountName + "</p><p>Amount: " + findAccount.amount.toString() + "</p>");

  });
});
