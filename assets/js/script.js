let mainImage = document.getElementById("mainImage")

function changeImage(smallImage) {
    mainImage.src = smallImage.src;
}



$(document).ready(function () {
    $(".bars").click(function () {
        $(".mobile-container").show(300);
    })

    $(".cross-nav").click(function () {
        $(".mobile-container").hide(300);
    })
})

$(document).ready(function () {
    $(".myCart").click(function () {
        $(".cart-container").toggle(150);
    })
    $(".closeCart").click(function () {
        $(".cart-container").hide(150);
    })
})

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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {  // For small screens (mobile)
            slidesPerView: 1,
        },
        480: {  // Slightly larger screens
            slidesPerView: 1,
        },
        768: {  // Tablets
            slidesPerView: 2,
        },
        1024: { // Laptops
            slidesPerView: 3,
        },
        1200: { // Large screens
            slidesPerView: 4,
        }
    }

});
