document.getElementById('petals-count').value = localStorage.getItem('numOfPetals');
document.getElementById('removal-amount').value = localStorage.getItem('removalAmount');
document.getElementById('num-of-rounds').value = localStorage.getItem('numOfRounds');

function setData(){

    var numOfPetals = document.getElementById('petals-count').value;
    var removalAmount = document.getElementById('removal-amount').value;
    var numOfRounds = document.getElementById('num-of-rounds').value;

    localStorage.setItem("numOfPetals", numOfPetals);
    localStorage.setItem("removalAmount", removalAmount);
    localStorage.setItem("numOfRounds", numOfRounds);
}