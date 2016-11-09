$(function(){
	// 搜索框
	$('#ss').focus(function(){
		$(this).val('')
	})
	$('#ss').blur(function(){
		$(this).val('请输入关键字')

	})
// 第一个国美会员
  $(".gmhy").mouseover(function(){
    $("#dingwei1").css({display: "block"})
    $(".gmhy").css({"background":"#fff","border-left":"1px solid #ededed","border-right":"1px solid #ededed"});
  })
  $(".gmhy").mouseout(function(){
    $("#dingwei1").css({display: "none"})
    $(".gmhy").css({"background":"#f8f8f8","border":"none"});
  })




  $(".wzdh").mouseover(function(){
    $("#dingwei4").css({display: "block"})
    $(".wzdh").css('background','#fff');
  })
  $(".wzdh").mouseout(function(){
    $("#dingwei4").css({display: "none"})
    $(".wzdh").css('background','#F8F8F8');
  })




	$(".wdgm").mouseover(function(){
    $("#dingwei2").css({display: "block"})
    $(".wdgm").css('background','#fff');

  })
	$(".wdgm").mouseout(function(){
    $("#dingwei2").css({display: "none"})
    $(".wdgm").css('background','#F8F8F8');

  })



	$(".sjgm").mouseover(function(){
    $("#dingwei5").css({display: "block"})
    $(".sjgm").css('background','#fff');

  })
	$(".sjgm").mouseout(function(){
    $("#dingwei5").css({display: "none"})
    $(".sjgm").css('background','#F8F8F8');

  })


	$(".fwzx").mouseover(function(){
    $("#dingwei3").css({display: "block"})
    $(".fwzx").css('background','#fff');

  })
	$(".fwzx").mouseout(function(){
    $("#dingwei3").css({display: "none"})
    $(".fwzx").css('background','#F8F8F8');

  })

})


  $(".left-c").mouseover(function(){
    $(".gwc").css({display: "block"})
  })
  $(".left-c").mouseout(function(){
    $(".gwc").css({display: "none"})
  })

 $(".left-c").mouseover(function(){
    $(".xian").css({display: "block"})
  })
  $(".left-c").mouseout(function(){
    $(".xian").css({display: "none"})
  })

// 大banner轮播图
$(document).ready(function(){
    var flag=true;
    var n=0;
    var next=0;
    var width=$('.two-tp').width();
    function tu(){
      if(!flag){
        return false;
      }
      flag=false;
      next=n+1;
      if(next>=$('.two-tp .tp').length){
        next=0;
      };
      $('.two-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")
      $('.two-tp .tp').eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
        flag=true;
      });
      n=next;
    }
    var t=setInterval(tu,2000);
    $('.two-tp').mouseover(function(){
      clearInterval(t);
    }).mouseout(function(){
      t=setInterval(tu,2000);
    });
      $('.two-tp .bannerRight').click(function(){
        next=n-1;
        if(!flag){
        return false;
      }
      flag=false;
      if(next<0){
        next=$('.two-tp .tp').length-1;
      };
        $('.two-tp .uls .lis').removeClass("lis-first").eq(next).addClass("lis-first")
      $('.two-tp .tp').eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
        flag=true;
      });
      n=next;
      })
      $('.two-tp .bannerLeft').click(function(){
        tu();
      })
     var index=$(".two-tp .uls .lis").index();
       $(".two-tp .uls .lis").hover(function(){
         var index=$(this).index();
         if(index>n){
              if(!flag){
          return;
       }
       flag=false;
       $(".two-tp .tp").eq(n).animate({opacity:0},500);
       $(".two-tp .tp").eq(index).animate({opacity:1},500,function(){
        flag=true;
       })
             }else if(index<n){
              if(!flag){
          return;
       };
       flag=false;
       $(".two-tp .tp").eq(n).animate({opacity:0},500);
       $(".two-tp .tp").eq(index).animate({opacity:1},500,function(){
        flag=true;
       })
           };
          $(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
      },function(){
        var index=$(this).index();
         if(index>n){
              if(!flag){
          return;
       }
       flag=false;
       $(".two-tp .tp").eq(n).animate({opacity:0},1000);
       $(".two-tp .tp").eq(index).animate({opacity:1},1000,function(){
        flag=true;
       })
             }else if(index<n){
              if(!flag){
          return;
       };
       flag=false;
       $(".two-tp .tp").eq(n).animate({opacity:0},1000);
       $(".two-tp .tp").eq(index).animate({opacity:1},1000,function(){
        flag=true;
       })
           };
          $(".two-tp .uls .lis").removeClass("lis-first").eq(index).addClass("lis-first")
        n=index;
        next=index;
      })
})









// $(document).ready(function(){
//     var flag=true;
//     var n=0;
//     var next=0;
//     var width=$(".phone-c .phone-CC-a").width();
//     // console.log(width);
//     function tu(){
//       if(!flag){
//         return false;
//       }
//       flag=false;
//       next=n+1;
//       if(next>=$(".phone-CC-a .lunbotu").length){
//         next=0;
//       };
//       $(".phone-CC-a .phone-CC-a-b .phone-CC-a-c").removeClass("phone-CC-a-c-a").eq(next).addClass("phone-CC-a-c-a")
//       $(".phone-CC-a .lunbotu").eq(next).css("left",570).end().eq(n).animate({left:-570},1000).end().eq(next).animate({left:0},1000,function(){
//         flag=true;
//       });
//       n=next;
//     }
//     var t=setInterval(tu,2500);
   
//       $(".phone-CC-a .phone-right").click(function(){
//         next=n-1;
//         if(!flag){
//         return false;
//       }
//       flag=false;
//       if(next>=$(".phone-CC-a .lunbotu").length){
//         next=0;
//       };
//         $(".phone-CC-a .phone-CC-a-b .phone-CC-a-c").removeClass("phone-CC-a-c-a").eq(next).addClass("phone-CC-a-c-a")
//       $(".phone-CC-a .lunbotu").eq(next).css("left",-570).end().eq(n).animate({left:570},1000).end().eq(next).animate({left:0},1000,function(){
//         flag=true;
//       });
//       n=next;
//       })
//       $(".phone-CC-a .phone-left").click(function(){
//         tu();
//       })
//        var index=$(".phone-CC-a .phone-CC-a-b .phone-CC-a-c").index();
//        $(".phone-CC-a .phone-CC-a-b .phone-CC-a-c").click(function(){
//          var index=$(this).index();
//          if(index>n){
//               if(!flag){
//           return;
//        }
//        flag=false;
//        $(".phone-CC-a .lunbotu").eq(index).css("left",570)
//        $(".phone-CC-a .lunbotu").eq(n).animate({left:-570},1000);
//        $(".phone-CC-a .lunbotu").eq(index).animate({left:0},1000,function(){
//         flag=true;
//        })
//              }else if(index<n){
//               if(!flag){
//           return;
//        };
//        flag=false;
//        $(".phone-CC-a .lunbotu").eq(index).css("left",-570)
//        $(".phone-CC-a .lunbotu").eq(n).animate({left:570},1000);
//        $(".phone-CC-a .lunbotu").eq(index).animate({left:0},1000,function(){
//         flag=true;
//        })
//            };
//           $(".phone-CC-a .phone-CC-a-b .phone-CC-a-c").removeClass("phone-CC-a-c-a").eq(index).addClass("phone-CC-a-c-a")
//          n=index;
//          next=index;
//        })


// })


// $(document).each(function(){
//   $(".phone-a-b .wz a").mouseover(function(){
//   $(".phone-c").eq($(".phone-a-b .wz a").index(this)).addClass("on").siblings().removeClass('on'); 
//   });
// });

  // function obj(type){
  // var box=type;
  // $(box).find(".WZ").on("mouseover",function(){
  //   var index=$(this).index();
  //   $(this).removeClass('jxtm').eq(index).addClass('jxtm')
  //   $(box).find('.phone-c'),removeClass("").eq(index).addClass('.phone-c')
  // })
  // }



  // 选项卡
// $(document).ready(function(){
//   $(".WZ").mouseover(function(){
//     var qq=$(this).index();
//     // console.log(index)
//     $(".phone .WZ").removeClass("jxtm").eq(qq).addClass("jxtm")
//     $(".phone .phone-c").removeClass("phone-CC").eq(qq).addClass("phone-CC")
//   })
// })



$(document).ready(function(){
  $('.LEFT').hover(function(){
    var aa=$(this).index();
    $('.wz-A').eq(aa).css("display","block")
  },function(){
    var aa=$(this).index();
    $('.wz-A').eq(aa).css("display","none")
  })
})








// 猜你喜欢
$(document).ready(function(){
    var guess=$(".link-a")[0];
    var change=$(".hyp")[0];
    var guess_main=$(".hyp-a");
    var kuan=$(".link-a").width();
    // console.log(kuan)

    var now=0;
    var next=0;
    var tt=setInterval(run1,5000);

    function run1(){
        next=now+1;
        if(next>=guess_main.length){
            next=0;
        }
        guess_main.eq(next).css("left",kuan+"px").end().eq(now).animate({left:-kuan}).end().eq(next).animate({left:0});
        now=next;
    }
    guess.onmouseover=function(){
        clearInterval(tt);
    }
    guess.mouseout=function(){
            tt=setInterval(run,2000);
    }
    change.onclick=function(){
        run1();
    }

})



// bannerxiao
jQuery.extend({
  banner:function(box,tp,lis,left,right){
    $(document).ready(function(){
      var flag=true;
      var n=0;
      var next=0;
      var width=box.width();
      function tu(){
        if(!flag){
          return false;
        }
        flag=false;
        next=n+1;
        if(next>=tp.length){
          next=0;
        };
        lis.removeClass("phone-CC-a-c-a").eq(next).addClass("phone-CC-a-c-a")
        tp.eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
          flag=true;
        });
        n=next;
      }
      var t=setInterval(tu,2500);
      box.mouseover(function(){
        clearInterval(t);
        right.animate({width:30},0)
        left.animate({width:30},0)
      }).mouseout(function(){
        t=setInterval(tu,2500);
        right.animate({width:0},0)
        left.animate({width:0},0)
      });
        right.click(function(){
          next=n-1;
          if(!flag){
          return false;
        }
        flag=false;
        if(next<0){
          next=tp.length-1;
        };
          lis.removeClass("phone-CC-a-c-a").eq(next).addClass("phone-CC-a-c-a")
        tp.eq(n).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000,function(){
          flag=true;
        });
        n=next;
        })
        left.click(function(){
          tu();
        })
         var index=lis.index();
         lis.click(function(){
           var index=$(this).index();
           if(index>n){
                if(!flag){
            return;
         }
         flag=false;
         tp.eq(n).animate({opacity:0},1000);
         tp.eq(index).animate({opacity:1},1000,function(){
          flag=true;
         })
               }else if(index<n){
                if(!flag){
            return;
         };
         flag=false;
         tp.eq(n).animate({opacity:0},1000);
         tp.eq(index).animate({opacity:1},1000,function(){
          flag=true;
         })
             };
            lis.removeClass("phone-CC-a-c-a").eq(index).addClass("phone-CC-a-c-a")
           n=index;
           next=index;
         })
    })
  }
})

$(document).ready(function(){
  $.banner($(".phone:eq(0) .phone-CC-a"),$(".phone:eq(0) .phone-CC-a .lunbotu"),$(".phone:eq(0) .phone-CC-a .phone-CC-a-b .phone-CC-a-c"),$(".phone:eq(0) .phone-CC-a .phone-left"),$(".phone:eq(0) .phone-CC-a .phone-right"))
  $.banner($(".phone:eq(1) .phone-CC-a"),$(".phone:eq(1) .phone-CC-a .lunbotu"),$(".phone:eq(1) .phone-CC-a .phone-CC-a-b .phone-CC-a-c"),$(".phone:eq(1) .phone-CC-a .phone-left"),$(".phone:eq(1) .phone-CC-a .phone-right"))
  $.banner($(".phone:eq(2) .phone-CC-a"),$(".phone:eq(2) .phone-CC-a .lunbotu"),$(".phone:eq(2) .phone-CC-a .phone-CC-a-b .phone-CC-a-c"),$(".phone:eq(2) .phone-CC-a .phone-left"),$(".phone:eq(2) .phone-CC-a .phone-right"))
  $.banner($(".phone:eq(3) .phone-CC-a"),$(".phone:eq(3) .phone-CC-a .lunbotu"),$(".phone:eq(3) .phone-CC-a .phone-CC-a-b .phone-CC-a-c"),$(".phone:eq(3) .phone-CC-a .phone-left"),$(".phone:eq(3) .phone-CC-a .phone-right"))
  $.banner($(".phone:eq(4) .phone-CC-a"),$(".phone:eq(4) .phone-CC-a .lunbotu"),$(".phone:eq(4) .phone-CC-a .phone-CC-a-b .phone-CC-a-c"),$(".phone:eq(4) .phone-CC-a .phone-left"),$(".phone:eq(4) .phone-CC-a .phone-right"))
})




// bb选项卡

jQuery.extend({
    qq:function(obj,tp,left){
      obj.hover(function(){
        var index=$(this).index();
        tp.removeClass("phone-CC").eq(index).addClass("phone-CC");
        obj.removeClass("jxtm").eq(index).addClass("jxtm");
        console.log(index)
      },function(){
        var index=$(this).index();
        tp.removeClass("phone-CC").eq(index).addClass("phone-CC");
        obj.removeClass("jxtm").eq(index).addClass("jxtm");
      })
      var n=0;
      var next=0;
      left.click(function(){
        next=n+1;     
        if(next>=obj.length){
          next=0;
        };
          obj.removeClass("jxtm").eq(next).addClass("jxtm");
        tp.removeClass("phone-CC").eq(next).addClass("phone-CC");
        n=next;
      })
    }
})
$(document).ready(function(){
  $.qq($(".phone:eq(0) .phone-a .phone-a-b .WZ"),$(".phone:eq(0) .phone-A .phone-c"),$(".phone:eq(0) .phone-A .phone-yj"));
  $.qq($(".phone:eq(1) .phone-a .phone-a-b .WZ"),$(".phone:eq(1) .phone-A .phone-c"),$(".phone:eq(1) .phone-A .phone-yj"));
  $.qq($(".phone:eq(2) .phone-a .phone-a-b .WZ"),$(".phone:eq(2) .phone-A .phone-c"),$(".phone:eq(2) .phone-A .phone-yj"));
  $.qq($(".phone:eq(3) .phone-a .phone-a-b .WZ"),$(".phone:eq(3) .phone-A .phone-c"),$(".phone:eq(3) .phone-A .phone-yj"));
  $.qq($(".phone:eq(4) .phone-a .phone-a-b .WZ"),$(".phone:eq(4) .phone-A .phone-c"),$(".phone:eq(4) .phone-A .phone-yj"));
})









// 楼层跳转
$(document).ready(function($) {
    $(".louceng-a").click(function(event) { 
      var index=this.title
      var id='#'+'floor'+index
     $("html,body").animate({scrollTop: $(id).offset().top}, 1000);

    });
    function a(x){
      l = $(window).height()
    w = $('.louceng').height();
    $('.louceng').css('left',88 + 'px');
    $('.louceng').css('top',((l - w )/2 + x) + 'px');
    }//获取#tbox的div距浏览器底部和页面内容区域右侧的距离函数#main为页面的可视宽度
    $(function() {  
    $(window).scroll(function(){
    t = $(document).scrollTop();
    if(t>1200){
      $('.louceng').show();
    }else{
      $('.louceng').hide();
    }    
    })   
    a(0);//#tbox的div距浏览器底部和页面内容区域右侧的距离
    $('.louceng .top-lis').click(function(){ 
        $('body,html').animate({
            scrollTop: 0
        },
        800);
        return false;  
    })
    $('.louceng .bottom-lis').click(function(){ 
        $('body,html').animate({
            scrollTop: 4400
        },
        800);
        return false;  
    })
    });
    var now;
    $(window).scroll(function(){
    t = $(document).scrollTop();
       for (var i = 0; i < $(".five").length; i++) {
      var h=$(".five").eq(i).offset().top;
      console.log(h)
      if(t>= h-500){
        for(var j = 0; j< $(".louceng .louceng-a").length; j++){
          $(".jiao").eq(j).css("display","none")
          $(".front span").eq(j).css("color","#777")
          $(".front p").eq(j).css("color","#777")
        }
          $(".jiao").eq(i).css("display","block")
          $(".front span").eq(i).css("color","red")
          $(".front p").eq(i).css("color","red")
        now=i;
      };
    };
    })  
    $(".louceng .louceng-a").click(function(){
      var index=$(this).index();
      $(".jiao").each(function(){
        $(".front span").css("color","#777")
        $(".front p").css("color","#777")
      })
      $(".front span").eq(index-1).css("color","red")
      $(".front p").eq(index-1).css("color","red")
            
    })
    $(".louceng .louceng-a").hover(function(){
      var index=$(this).index();
      $(".front span").eq(index-1).css("color","red")
      $(".front p").eq(index-1).css("color","red")
    },function(){
      var index=$(this).index();
      if(index-1==now){
        $(".front span").eq(index-1).css("color","red")
        $(".front p").eq(index-1).css("color","red")
        return
      }
      $(".front span").eq(index-1).css("color","#777")
      $(".front p").eq(index-1).css("color","#777")
    })
});



// 右导航
$(document).ready(function(){
  $('.back .back-one').hover(function(){
    $('.back-one .tu1 .backOne').stop(true)
    $('.back-one .tu1 .backOne').delay(200).animate({width:140},400)
  },function(){
    $('.back-one .tu1 .backOne').stop(true)
    $('.back-one .tu1 .backOne').delay(200).animate({width:0},400)
  })

  $('.back .back-two').hover(function(){
    $('.back-two .backTwo').stop(true)
    $('.back-two .backTwo').delay(200).animate({width:100},400)
  },function(){
    $('.back-two .backTwo').stop(true)
    $('.back-two .backTwo').delay(200).animate({width:0},400)
  })

  $('.back .back-three').hover(function(){
    $('.back-three .backThree').stop(true)
    $('.back-three .backThree').delay(200).animate({width:100},400)
  },function(){
    $('.back-three .backThree').stop(true)
    $('.back-three .backThree').delay(200).animate({width:0},400)
  })
})