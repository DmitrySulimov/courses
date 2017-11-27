$('#add_button').click(function(){
   var row = $('#new_item').html();   
  
   $('#source_wrap').append(row);

   $('#source_wrap .col-md-10:last-child .toggle_hidden').bootstrapToggle({
      on: 'PARCEL',
      off: 'PALLET',
      onstyle: 'info',
      offstyle: 'info',
      toggle: 'toggle'
   });

   $isChecked = $('#source_wrap .col-md-10:last-child input[type="checkbox"]').prop("checked");
   $('#source_wrap .col-md-10:last-child').addClass("active-_add_pallet");
  });

$("body").delegate("input[type='checkbox']" , 'change' , function () {
    if($(this).prop("checked") === false) {

        $(this).parents('.col-md-10').removeClass("active-_add_parsel").addClass("active-_add_pallet");
    } else {

        $(this).parents('.col-md-10').removeClass("active-_add_pallet").addClass("active-_add_parsel");
    }
});


$("#remove_button").click(function () {

  if($("#source_wrap .col-md-10").length > 1) {
        $("#source_wrap .col-md-10:last-child").remove()
  }
  else{
    console.log("You can't delete last item");
  }
  console.log($("#source_wrap .col-md-10").length);
});


$("#form_sender").on("submit" ,function (e) {

        var fields = $(this).serializeArray();

        jQuery.each( fields, function( i, field ) {
            if (field.value != "") {
                console.log(i,field);
            }
          
        });
   return false;
})