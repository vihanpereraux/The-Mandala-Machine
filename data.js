document.getElementById('petals-count').value = localStorage.getItem('numOfPetals');
document.getElementById('removal-ammount').value = localStorage.getItem('removalAmmount');
document.getElementById('num-of-rounds').value = localStorage.getItem('numOfRounds');

function setData(){

    var numOfPetals = document.getElementById('petals-count').value;
    var removalAmmount = document.getElementById('removal-ammount').value;
    var numOfRounds = document.getElementById('num-of-rounds').value;

    localStorage.setItem("numOfPetals", numOfPetals);
    localStorage.setItem("removalAmmount", removalAmmount);
    localStorage.setItem("numOfRounds", numOfRounds);
}