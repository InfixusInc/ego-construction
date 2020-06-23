$(document).ready(function (){
    $('.submit').click(function (event) {
        var statusElm = $('.status')
        statusElm.empty()
        
        var name = $('.name').val()
        if(name != '' && name != null){
            if(name.length > 4) {
                statusElm.append(<div> </div>)
            } else {
                statusElm.append(<div>Name is too short</div>)
            }
        } else {
            alert("Please Enter Your Name");
        }  
        
        var service = $('.service').val()
        if(service != '' && service != null){
            // do some
        } else {
            alert("Please Select A Service of Choice!");
        }  

        var email = $('.email').val()
        if(email != '' && email != null){
            if(email.length > 5 && email.includes('@') && email.includes('.')) {
                statusElm.append(<div> </div>)
            } else {
                event.preventDefault()
                statusElm.append(<div>Email is invalid</div>)
            }
        } else {
            alert("Please Enter Your Email!");
        }  
                
        var message = $('.message').val()
        if(email != '' && email != null){
            if(message.length > 12 ) {
                statusElm.append(<div> </div>)
            } else {
                event.preventDefault()
                statusElm.append(<div>Message is too short</div>)
            }
        } else {
            alert("Please Write Something!");
        }
    })

    function getData() {
        
    }
})