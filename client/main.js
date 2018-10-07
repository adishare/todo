$(document).ready(function () {
    let user = localStorage.getItem('token')

    if(!user){
        $("#content").hide();

        $('#loginBtn').click(function (e) { 
            $.ajax({
                type: "post",
                url: "http://localhost:3000/api/auths/login",
                data: {
                    email : $('#email').val(),
                    password : $('#password').val(),
                },
            })
            .done(result=>{
                console.log(result);
                $('#loginForm').hide();
                $("#content").show()

                localStorage.setItem('token',result.token)
            })
            .fail(err=>{
                console.log(err)
            })
            
        });
    }
});


function deleteTask(id){
    $.ajax({
        type: "delete",
        url: `http://localhost:3000/api/me/todos/${id}`,
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ"},
    })
    .done((result)=>{
        console.log('deleted');
        $('.detail').empty()
        requestTrigger()
    })
    .fail(err=>{
        console.log(err);
        
    })
}

function requestTrigger(){
    $('.task').empty()
    $('.detail').empty()
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
                <div class='postCard' onclick="getTaskDetail('${val.title}','${val.created_at}','${val.deadline}','${val.notes}','${val.priority}','${val._id}')">
                <h1>${val.title}</h1>
                </div>
            `)
        });
    })
    .fail(err=>{
        console.log(err)
    }) 
}

function getTaskDetail(title,created_at,deadline,notes,priority,id){
    $('.detail').empty()
    $('.detail').append(`
        <div class='taskDetail'>
            <h1>${title}</h1>
            <p>deadline : ${deadline}</p>
            <p>notes : ${notes}</p>
            <p>priority : ${priority}</p>
            <p>created at : ${created_at}</p>
            <input type="button" id="deleteTask" onclick="deleteTask('${id}')" value="delete">
            <input type="button" id="editTask" onclick="editTask('${id}','${title}','${notes}','${deadline}','${priority}')" value="edit">
        </div>
    `);
}

function editTask(id,title,notes,deadline,priority){
    $('.taskDetail').hide();
    $('.detail').append(`
        <form id="editTaskForm">
            <input id="title" type="text" name="title" placeholder="Task Title" value="${title}">
            <input id="notes" type="text" name="notes" placeholder="Notes" value="${notes}">
            <input id="priority" type="text" name="priority" placeholder="priority" value="${priority}">
            <input id="deadline" type="date" name="deadline" placeholder="Deadline" value="${deadline.slice(0,10)}">
            <div id="editTask" class="button" type="submit" onclick="save('${id}')" > Save </div>  
        </form>
    `);

    console.log($('#editTaskForm #deadline').val(),'askjdsakdjaskdjask')
    // console.log(new Date('#editTaskForm #deadline').val())
}

function save(id) { 
    console.log($('#editTaskForm #deadline').val())
    $.ajax({
        type: "patch",
        url: `http://localhost:3000/api/me/todos/${id}`,
        headers: {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ"
        },
        data : {
            title : $('#editTaskForm #title').val(),
            notes : $('#editTaskForm #notes').val(),
            priority : $('#editTaskForm #priority').val(),
            deadline : $('#editTaskForm #deadline').val()
        }
    })
    .done(result=>{
        console.log(result)
        requestTrigger()
    })
    .fail(err=>{
        console.log(fail)
    })
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
                <div class='postCard' onclick="getTaskDetail('${val.title}','${val.created_at}','${val.deadline}','${val.notes}','${val.priority}','${val._id}')">
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
    console.log($('#priority').val())
    console.log($('#deadline').val())
    $.ajax({
        type: "post",
        url: "http://localhost:3000/api/me/todos",
        data: {
            title : $('#title').val(),
            notes : $('#notes').val(),
            priority: $('#priority').val(),
            deadline: $('#deadline').val()
        },
        headers: {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjhjNTYyZTBlZDk4MmM4ZDZlMGRhOSIsImlhdCI6MTUzODgzNTgyNSwiZXhwIjoxNTM4OTIyMjI1fQ.gA5GMqFC-jPH1HJWCddMCZyOQ6IsZgWYNcmQWPEpRaQ"},
    })
    .done(result=>{
        console.log(result)
        $('.categories').show()
        $('#newTaskForm').hide()
        $('.addTask').show()
        
        requestTrigger()
    })
    .fail(err=>{
        console.log(err)
    })
    
});