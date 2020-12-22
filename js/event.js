var bl = false;

// Xử lý nút Toggle
$(document).ready(function(){
    if($(window).width() <= 1280){
        $("#large-sidebar").hide();
        $("#large-sidebar").css("margin-left", "-260px");
        $("#main").css("width", "calc(100% - 72px)");
    } else {
        $("#large-sidebar").show();
        $("#large-sidebar").css("margin-left", "0px");
        $("#main").css("width", "calc(100% - 240px)");
    }
    //bắt sự kiện khi click nút Toggle
    $("#toggle").click(function(){
        console.log($(window).width());
      if($(window).width() > 1280){
        if($("#large-sidebar").toggle()[0].offsetWidth == 0){
            $("#main").css("width", "calc(100% - 72px)");
          } else {
            $("#main").css("width", "calc(100% - 240px)");
          };
      } else {
            var x = $("#large-sidebar").css("margin-left");            
            if(x == "0px"){
                $("#large-sidebar").animate({"marginLeft": "-260px"}, 200);

                $(".blur").hide();
                $(".blur").animate({ "opacity": "0" });
                $("body").css("overflow", "auto");
            } 
            if(x == "-260px"){
                bl = true;
                $("#large-sidebar").show(); // phải show ra vì toggle lúc này đang ở trạng thái hide
                $("#large-sidebar").animate({"marginLeft": "0px"}, 200);

                //Xử lý làm mờ
                $(".blur").show();
                $(".blur").animate({ "opacity": "0.5" });
                $("body").css("overflow", "hidden"); //không cho scroll trên trình duyệt
            }
      }
    });
  });

// Hàm này sẽ tự động thực thi mỗi khi kích thước cửa sổ trình duyệt thay đổi
$(window).resize(function() {
    // $(window).height(); New height
    // $(window).width(); New width
    if($(window).width() <= 1280 && bl == false){
        $("#large-sidebar").hide();
        $("#large-sidebar").css("margin-left", "-260px"); //giấu ngoài cửa sổ trình duyệt
        $("#main").css("width", "calc(100% - 72px)");
    } else if($(window).width() > 1280) {
        bl = false;
        $("#large-sidebar").show();
        $("#large-sidebar").css("margin-left", "0px"); //hiện ra bên trong cửa sổ trình duyệt
        $("#main").css("width", "calc(100% - 240px)");

        $(".blur").hide();
        $(".blur").animate({ "opacity": "0" });
        $("body").css("overflow", "auto");
    }
});

