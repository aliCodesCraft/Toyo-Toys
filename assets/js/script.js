// Image Chaner
let mainImage = document.getElementById("mainImage")

function changeImage(smallImage) {
    mainImage.src = smallImage.src;
}

// SearchBar
$(document).ready(function () {
    $("#sbar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".mycard").filter(function () {
            $(this).toggle($(this).find("a").text().toLowerCase().indexOf(value) > -1);
        });
    });
});

// Navbar Toggle
$(document).ready(function () {
    $(".bars").click(function () {
        $(".mobile-container").show(300);
    })

    $(".cross-nav").click(function () {
        $(".mobile-container").hide(300);
    })
})

// Cart Container
$(document).ready(function () {
    $(".myCart").click(function () {
        $(".cart-container").toggle(150);
    })
    $(".closeCart").click(function () {
        $(".cart-container").hide(150);
    })
})

// Add To Cart
$(document).ready(function () {
    let totalPrice = 0;
    let itemCount = 0;

    $(".addToCart").click(function () {
        let myCard = $(this).closest(".mycard");

        let itemPic = myCard.find("img").attr("src");
        let itemName = myCard.find("a.title").text();
        let itemPrice = parseFloat(myCard.find(".price p").text().replace("PKR", "").trim());

        let item = `        <div class="cart-content">
            <div class="cart-pic">
                <img src="${itemPic}" alt="">
            </div>
            <div class="cart-info">
                <p>${itemName}</p>
            </div>
            <div class="cart-total">
                <p>PKR ${itemPrice}</p>
            </div>
            <div class="del">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `;
        $(".cart-box").append(item)
        alert("added to cart");

        // Total Price
        totalPrice += itemPrice;
        $("#total").text(totalPrice.toFixed(2));

        itemCount++;
        $(".count").text(itemCount);

    });

    // Removing Items
    $(".cart-box").on("click", ".del", function () {
        let itemPrice = parseFloat($(this).closest(".cart-content").find(".cart-total p").text().replace("PKR", "").trim());


        totalPrice -= itemPrice;
        $("#total").text(totalPrice.toFixed(2));

        $(this).closest(".cart-content").remove();

        itemCount--;
        $(".count").text(itemCount);
    });

});

// Likes Container

$(document).ready(function () {
    $(".like").click(function () {
        $(".heart-container").toggle(150);
    })
    $(".closeHeart").click(function () {
        $(".heart-container").hide(150);
    })
})

// Likes Products
$(document).ready(function () {
    let itemCount = 0;

    $(".addLike").click(function () {
        let myCard = $(this).closest(".mycard");

        let itemPic = myCard.find("img").attr("src");
        let itemName = myCard.find("a.title").text();
        let itemPrice = parseFloat(myCard.find(".price p").text().replace("PKR", "").trim());

        let item = `        <div class="cart-content">
            <div class="cart-pic">
                <img src="${itemPic}" alt="">
            </div>
            <div class="cart-info">
                <p>${itemName}</p>
            </div>
            <div class="cart-total">
                <p>PKR ${itemPrice}</p>
            </div>
            <div class="del">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `;
        $(".heart-box").append(item)
        alert("added to like list");

        // Total count
        itemCount++;
        $(".county").text(itemCount);

    });

    // Removing Items
    $(".heart-box").on("click", ".del", function () {

        $(this).closest(".cart-content").remove();

        itemCount--;
        $(".county").text(itemCount);
    });

});


$(document).ready(function(){
    $(".night").click(function(){
        $("body, footer, .mycard, .heading, .userCard").toggleClass("dark")
    })
})
