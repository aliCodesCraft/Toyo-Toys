$(document).ready(function(){
    $(".bars").click(function(){
        $(".mobile-container").show(300);
    })

    $(".cross-nav").click(function(){
        $(".mobile-container").hide(300);
    })
})

$(document).ready(function(){
    $(".addToCart").click(function(){
        alert("added to cart")
        $(".fa-solid fa-bag-shopping").toggleClass(".fa-solid fa-heart");
    })
})

$(document).ready(function(){
    $(".myCart").click(function(){
        $(".cart-container").toggle(150);
    })
    $(".closeCart").click(function(){
        $(".cart-container").hide(150);
    })
})
