(function() {
   setTimeout(() => {
      
      console.clear()
      let responsive = 'desk'
      if (window.screen.width < 530) {
         responsive = 'phone'
      } else if(window.screen.width < 767){
         responsive = 'tablet'
      } else if(window.screen.width < 992){
         responsive = 'laptop'
      }
      document.getElementById(responsive).style = 'background: rgb(255, 255, 255);'
   }, 500);
})();
   