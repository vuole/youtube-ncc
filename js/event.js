var bl = false;

function hideLargeMenu() {
    $("#large-sidebar").hide();
    $("#large-sidebar").css("margin-left", "-260px"); //giấu ngoài cửa sổ trình duyệt
    $("#main").css("width", "calc(100% - 72px)");
}

function showLargeMenu() {
    $("#large-sidebar").show();
    $("#large-sidebar").css("margin-left", "0px"); //hiện ra bên trong cửa sổ trình duyệt
    $("#main").css("width", "calc(100% - 240px)");
}

function blur() {
    $(".blur").show();
    $(".blur").animate({ "opacity": "0.5" });
    $("body").css("overflow", "hidden"); //không cho scroll trên trình duyệt
}

function visible() {
    $(".blur").hide();
    $(".blur").animate({ "opacity": "0" });
    $("body").css("overflow", "auto");
}

// Xử lý nút Toggle
$(document).ready(function() {
    // ready: sự kiện đc bắt ngay trước và sau khi trang html load xong (=> mỗi lần F5 chỉ thực hiện 1 lần)
    if ($(window).width() <= 1280) {
        hideLargeMenu();
    } else {
        showLargeMenu();
    }
    //bắt sự kiện khi click nút Toggle
    $("#toggle").click(function() {
        console.log($(window).width());
        if ($(window).width() > 1280) {
            visible();
            if ($("#large-sidebar").toggle()[0].offsetWidth == 0) {
                $("#main").css("width", "calc(100% - 72px)");
            } else {
                $("#main").css("width", "calc(100% - 240px)");
            };
        } else {
            var x = $("#large-sidebar").css("margin-left");
            console.log(x);
            if (x == "0px") {
                $("#large-sidebar").animate({ "marginLeft": "-260px" }, 200); //show

                visible();
            }
            if (x == "-260px") {
                bl = true;
                $("#large-sidebar").show(); // phải show ra vì toggle lúc này đang ở trạng thái hide
                $("#large-sidebar").animate({ "marginLeft": "0px" }, 200); //hide

                //Xử lý làm mờ
                blur();
            }
        }
    });
});

// Hàm này sẽ tự động thực thi mỗi khi kích thước cửa sổ trình duyệt thay đổi
// $(window).height(); New height
// $(window).width(); New width
$(window).resize(function() {
    if ($(window).width() <= 1280 && bl == false) {
        hideLargeMenu();
    } else if ($(window).width() > 1280) {
        bl = false;
        showLargeMenu();

        visible();
    }
});

//Hàm xử lý cắt chuỗi nếu vượt quá độ dài
$(document).ready(function() {
    var myElements = $(".card-title");
    // console.log(myElements);
    for (var i = 0; i < myElements.length; i++) {
        if (myElements[i].innerHTML.length > 50) {
            myElements[i].innerHTML = myElements[i].innerHTML.slice(0, 49) + "...";
        }
    }
});

// var giffImgs = ["./images/giffvideo1.webp", "./images/giffvideo2.webp", "./images/giffvideo3.webp", "./images/giffvideo4.webp",
//     "./images/giffvideo5.webp", "./images/giffvideo6.webp", "./images/giffvideo7.webp", "./images/giffvideo8.webp",
//     "./images/giffvideo9.webp", "./images/giffvideo10.webp", "./images/giffvideo11.webp", "./images/giffvideo12.webp"
// ];
// var imgs = ["./images/video1.png", "./images/video1.png", "./images/video1.png", "./images/video1.png", "./images/video1.png",
//     "./images/video1.png", "./images/video1.png", "./images/video1.png", "./images/video1.png", "./images/video1.png",
//     "./images/video1.png", "./images/video1.png"
// ];

$(document).ready(function() {
    var myElements = $('.card-img-top');
    $('.card-img-top').each(function(index) {
        $(this).hover(function() {
            var giffImg = "./images/giffvideo"+(index+1)+".webp";
            $(this).attr("src",giffImg);               
            
        }, function(){
            var img = "./images/video"+(index+1)+".png";
            $(this).attr("src",img);
        });
    });
});