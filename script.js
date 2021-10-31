// $(document).ready(function(){
//     $(function() {
//         $(".night-btn").click(function() {
//           $("nav").toggleClass("nav-dark");
//           $("main").toggleClass ("main-dark");
//           $("body").toggleClass("body-dark");
//           $("container").toggleClass("container-dark");
//           $(".night-btn").toggleClass("night-btn-dark");
//         });
//       });

//     //   $('div').click(function(){
//     //     if($(this).attr("trigger")==="0"){
//     //         $(this).animate({"left":"0px"},700);
//     //         $(this).attr("trigger","1");
//     //     }
//     //     else{
//     //         $(this).animate({"left":"-20px"},700);
//     //         $(this).attr("trigger","0");
//     //     }
//     // });

//     $(".tab-exp").click(function(){
//         if ( $(".main-exp").css("visibility") == "hidden" )
//             $(".main-exp").css("visibility", "visible"),
//             $(".tab-exp").css("left", "0"),
//             $(".main-hopes").css("visibility", "hidden"),
//             $(".tab-hopes").css("left", "-20px"),
//             $(".main-future").css("visibility", "hidden"),
//             $(".tab-future").css("left", "-20px");
//         else
//             $(".main-exp").css("visibility", "hidden"),
//             $(".tab-exp").css("left", "-20px");
//     });

//     $(".tab-hopes").click(function(){
//         if ( $(".main-hopes").css("visibility") == "hidden" )
//             $(".main-exp").css("visibility", "hidden"),
//             $(".tab-exp").css("left", "-20px"),
//             $(".main-hopes").css("visibility", "visible"),
//             $(".tab-hopes").css("left", "0"),
//             $(".main-future").css("visibility", "hidden"),
//             $(".tab-future").css("left", "-20px");
//         else
//             $(".main-hopes").css("visibility", "hidden"),
//             $(".tab-hopes").css("left", "-20px");
//     });

//     $(".tab-future").click(function(){
//         if ( $(".main-future").css("visibility") == "hidden" )
//             $(".main-exp").css("visibility", "hidden"),
//             $(".tab-exp").css("left", "-20px"),
//             $(".main-hopes").css("visibility", "hidden"),
//             $(".tab-hopes").css("left", "-20px"),
//             $(".tab-future").css("left", "0"),
//             $(".main-future").css("visibility", "visible");
//         else
//             $(".main-future").css("visibility", "hidden"),
//             $(".tab-future").css("left", "-20px");
//     });

//     $(".portrait").click(function(){
//         var portrait = $(".portrait");
//         portrait.animate({height: '300px', width: '300px', opacity: '0.4'}, "slow");
//         portrait.animate({height: '150px', width: '150px', opacity: '1'}, "slow");
//       });
// })