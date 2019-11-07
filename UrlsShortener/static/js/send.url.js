$('#send_url').on('click', function(e){
    e.preventDefault();
    long_url = $('#long_url').val()
    reg = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([,-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([,-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([,-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;

    if(reg.test(url)) {
        $.get(url, function(dat, stat) {
        if(stat == "success"){
            life_span = $('#life_span').val()
                data = {
                    long_url: long_url,
                    life_span: life_span,
                }
                $.ajax({
                    type : "GET",
                    url : '/short_url' ,
                    data : data,
                    success : function(data){
                        $('#short-url').attr("href", data.short_url)
                        $('#short-url').text(data.short_url)
                        $('#label-text').hide("slow")
                        $('#short-url-text').show("slow")
                        $("#long_url").toggleClass("is-invalid", false)
                        $('#long_url').addClass('is-valid')
                        $('#life_span').addClass('is-valid')
                        $('#long_url_feedback').text()

                    }
                })
        }
        else{
            $('#long_url').addClass('is-invalid')
            $('#life_span').toggleClass('is-valid', false)
            $('#long_url_feedback').text('Invalid URL')
            $('#short-url-text').hide("slow")
            $('#label-text').show("slow")
        }
        })
    }
})


//$('#send_url').on('click', function(e){
//    e.preventDefault();
//    long_url = $('#long_url').val()
//    if (long_url != ""){
//        $.ajax({
//            type : "HEAD"
//            url: long_url,
//            success: function() {
//                life_span = $('#life_span').val()
//                data = {
//                    long_url: long_url,
//                    life_span: life_span,
//                }
//                $.ajax({
//                    type : "GET",
//                    url : '/short_url' ,
//                    data : data,
//                    success : function(data){
//                        $('#short-url').attr("href", data.short_url)
//                        $('#short-url').text(data.short_url)
//                        $('#label-text').hide("slow")
//                        $('#short-url-text').show("slow")
//                        $("#long_url").toggleClass("is-invalid", false)
//                        $('#long_url').addClass('is-valid')
//                        $('#life_span').addClass('is-valid')
//                        $('#long_url_feedback').text()
//
//                    }
//                })
//            },
//            error: function() {
//                $('#long_url').addClass('is-invalid')
//                $('#life_span').toggleClass('is-valid', false)
//                $('#long_url_feedback').text('Invalid URL')
//                $('#short-url-text').hide("slow")
//                $('#label-text').show("slow")
//            }
//        });
//    }
//})