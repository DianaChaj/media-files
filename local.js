$(document).ready(function () {
    $.each($('.rating-render'), function (x, y) {
        $(y).width($(y).attr('rating'));
    });
})
$(document).ready(function () {
    $.each($('.form-item'), function (x, y) {
        y.classList.add("views-exposed-widget", "views-widget-filter-title");
    });

    var btn = document.getElementById("edit-submit-products-search");
    btn.classList.add("btn", "btn-success", "btn-md");
    btn.classList.remove("form-submit");
    var form = document.getElementById("views-exposed-form-products-search-page");
    form.classList.add("form");
    $( "#edit-field-rating-wrapper" ).insertBefore( ".tabs" );

    var sort = document.getElementById("edit-field-rating");
    sort.classList.add("btn-group");
    $("input").addClass("form-control");
    $("select").addClass("form-control");
    $("tr").addClass("well");
    $("#edit-field-rating-field-price-value-asc") .wrap("<div class='btn btn-default'></div>") ;
    $("#edit-field-rating-field-price-value-desc") .wrap("<div class='btn btn-default'></div>") ;
    $("#edit-field-rating-created-asc") .wrap("<div class='btn btn-default'></div>") ;
    $("#edit-field-rating-created-desc") .wrap("<div class='btn btn-default'></div>") ;
    $("#edit-field-rating-field-rating-value-asc") .wrap("<div class='btn btn-default'></div>") ;
    $("#edit-field-rating-field-rating-value-desc") .wrap("<div class='btn btn-default'></div>") ;

    //$('.column').prepend( $( "#edit-field-rating-wrapper" ) );
    })
