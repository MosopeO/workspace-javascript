$('a').each(function(){
    var linkaddress = $(this).attr('href');
    //console.log('link', linkaddress);
    $(this).attr('href','https://www.google.com');
});

$('img').each(function(){
    var addr = $(this).attr('src');
    //console.log("addr: ", addr)
    $(this).attr('src', 'img/'+addr)
});