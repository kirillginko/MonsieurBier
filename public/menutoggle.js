//<!----------------- js for menu toggle ---------------->
  // var Menuitems = document.getElementById(MenuItems).onclick = function() {menutoggle()};
  // Menuitems.style.maxHeight = "0px";

  // function menutoggle(){
  //   if(MenuItems.style.maxHeight == "0px")
  //   {
  //     MenuItems.style.maxHeight = "200px"
  //   }
  //   else {
  //     MenuItems.style.maxHeight = "0px"
  //   }
  // };
// <!-------------------------------------------->
      var MenuItems = document.getElementById("MenuItems");
      MenuItems.style.maxHeight = "0px";

      function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
          MenuItems.style.maxHeight = "200px"
        }
        else {
          MenuItems.style.maxHeight = "0px"
        }
      }
