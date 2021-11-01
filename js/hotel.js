//save the registration when you click submit
function saveReg(){
    var guest = {
        name : $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin:$('#checkin').val(),
        checkout:$('checkout').val(),
        room:$('#room').val(),
        display: function(){
            return this.name + " reserved room " + this.room + 
            " from " + this.checkin + " till " + this.checkout + " for a group of " + 
            this.numberofGuest;
        }
    };
    guestGroup.push(guest);
    console.log(guest.display());
};
$('#submit').click(saveReg);

guestGroup = []
function displayReservation(){
    for(i in guestGroup){
        var guest = guestGroup[i];
        console.log(guest.display());
    }
}
$('#lists').click(displayReservation);