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
function share(action) {
   let url = '#'
   switch (action) {
      case 'facebook':
         url = 'https://www.facebook.com/sharer/sharer.php?u='+location.href
      break;
      case 'twitter':
         url = 'https://twitter.com/intent/tweet?url='+location.href+'&text=Look'
      break;
      case 'linkedin':
         url = 'https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(location.href)
      break;
      case 'email':
         url = 'mailto:#'
      break;
      case 'link':
         navigator.clipboard.writeText(location.href);
         return
      break;
   }
   window.open(url, '_blank').focus();
}