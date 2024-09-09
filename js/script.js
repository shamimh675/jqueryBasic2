$(function(){
  $("#hide").click(function(){
    $(".box").hide(1000)
  })

  $("#show").click(function(){
    $(".box").show(1000)
  })
  
  $("#hideshow").click(function(){
    $(".box").toggle(1000)
  })
  
  $("#fadeIn").click(function(){
    $(".box").fadeIn(1000)
  })

  $("#fadeOut").click(function(){
    $(".box").fadeOut(1000)
  })

  $("#fadeInOut").click(function(){
    $(".box").fadeToggle(1000)
  })

  $("#slideUp").click(function(){
    $(".box").slideUp(1000)
  })

  $("#slideDown").click(function(){
    $(".box").slideDown(1000)
  })

  $("#slideDownUp").click(function(){
    $(".box").slideToggle(1000)
  })

  $("#newBoxCome").click(function(){
    $(".box").addClass("new-box")
  })

  $("#newBoxGo").click(function(){
    $(".box").removeClass("new-box")
  })
})