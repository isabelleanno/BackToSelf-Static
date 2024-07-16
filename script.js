//Isabelle Anno, 7/10/2024

/*On window resize to 768px (the breakpoint for the mobile menu)
change the container for the nav menu to container-fluid */

const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleResize(event) {
  const element = document.getElementById("nav-container");
  if (event.matches || window.innerWidth <= 768) {
    element.classList.remove("container");
    element.classList.add("container-fluid");
  }
  if (!event.matches || window.innerWidth > 769) {
    element.classList.remove("container-fluid");
    element.classList.add("container");
  }
}

// Attach the listener function to the media query
mediaQuery.addEventListener("change", handleResize);

//JQuery
(function ($) {
  "use strict";

  // Submenu dropdown toggler

  if (
    $(".main-menu li.menu-item-has-children ul").length ||
    $(".main-menu li.menu-item-has-children a").length
  ) {
    $(".main-menu li.menu-item-has-children").append(
      '<div class="dropdown-btn"><i class="fa-solid fa-caret-down"></i></div>'
    );

    // Dropdown Button
    $(".main-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).prev("ul").slideToggle(500);
      }
    );

    // Disable dropdown parent link
    $(
      ".main-menu .navigation li.menu-item-has-children > a, .hidden-bar .side-menu li.menu-item-has-children > a"
    ).on("click", function () {
      e.preventDefault();
    });
  }

  // mobile nav hide / show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $("#top-navigation .navigation").html();

    $(".mobile-menu .navigation").append(mobileMenuContent);

    $(".sticky-header .navigation").append(mobileMenuContent);

    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });

    // Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        //Grab <i>
        let child = $(this)[0].children[0];
        //Toggle up & down arrows depending on if menu is hidden or shown
        if (child.classList.contains("fa-caret-down")) {
          $(child).removeClass("fa-caret-down");
          $(child).addClass("fa-caret-up");
        } else {
          $(child).removeClass("fa-caret-up");
          $(child).addClass("fa-caret-down");
        }
        //Slide toggle the ul
        $(this).prev("ul").slideToggle(500);
      }
    );

    // Menu Toggle button
    $(".navbar-open").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    // Menu Toggle button
    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }
})(jQuery);
