function getTaskDetail(title,created_at,deadline,notes,priority){
    $('.detail').empty()
    $('.detail').append(`
        <h1>${title}</h1>
        <p>deadline : ${deadline}</p>
        <p>notes : ${notes}</p>
        <p>priority : ${priority}</p>
        <p>created at : ${created_at}</p>

    `);
}




$(document).ready(function () {

    $(document).ready(function(){
        $("#search").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".postCard").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    
      
    $.ajax({
        type: "get",
        url: "http://localhost:3000/api/me",
        data : {
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ'
        },
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ"},
    })
    .done(data=>{
        console.log(data)
        $.each(data.data.userTodos, function (i, val) {
            $('.task').append(`
                <div class='postCard' onclick="getTaskDetail('${val.title}','${val.created_at}','${val.deadline}','${val.notes}','${val.priority}')">
                <h1>${val.title}</h1>
                </div>
            `)
        });
        $('.linkBar').append(`<p>${data.data.name}</p>`);
    })
    .fail(err=>{
        console.log(err)
    })  

    


});


$('.addTask').click(function (e) { 
    $('.categories').hide()
    $(this).hide()
    $('#newTaskForm').show();
});

$('#submitTask').click(function (e) { 
    $.ajax({
        type: "post",
        url: "http://localhost:3000/api/me/todos",
        data: {
            title : $('#title').val(),
            notes : $('#notes').val()
        },
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ"},
    })
    .done(result=>{
        console.log(result)
        $('.categories').show()
        $('#newTaskForm').hide()
        $('.addTask').show()
        $('.task').append(`
            <div class='postCard' onclick="getTaskDetail('${result.data.title}','${result.data.created_at}','${result.data.deadline}','${result.data.notes}','${result.data.priority}')">
            <h1>${result.data.title}</h1>
            </div>
        `)
    })
    .fail(err=>{
        console.log(err)
    })
    
});