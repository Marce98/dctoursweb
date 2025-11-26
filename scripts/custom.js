(function () {
   setTimeout(() => {
      console.clear();
      let responsiveNum = 0
      let responsive = "displayDesk";
      if (window.screen.width < 767) {
         responsiveNum =3
         responsive = "displayPhone";
      }
      try {
         document.getElementById(responsive).style = "background: rgb(255, 255, 255);";
   
         // Get the existing div element
         //const existingDiv = document.getElementById('sectionHeader-'+responsiveNum);
         const existingDiv = document.getElementById(responsive);
         console.log(existingDiv);
         // Create a new div element
         const menuDiv = document.getElementById('collapseMenu-'+responsiveNum);
         console.log(menuDiv);
         // Insert the new div element after the existing div element
         existingDiv.insertAdjacentElement('afterend', menuDiv);
         //menuDiv.remove();
         
      } catch (error) {
         console.log(error);
      }
      // seleccionar todas las etiquetas <img> en la página
      const todasLasImagenes = document.querySelectorAll('img');
      // filtrar las imágenes por ID
      const imagenesFiltradas = Array.from(todasLasImagenes).filter(img => img.id === 'x');
      // hacer algo con las imágenes filtradas, por ejemplo, cambiar su atributo 'src'
      imagenesFiltradas.forEach(img => {
         img.src = 'nueva-imagen.jpg';
      });
   }, 500);
})();
function share(action) {
   let url = "#";
   switch (action) {
      case "facebook":
         url = "https://www.facebook.com/sharer/sharer.php?u=" + location.href;
         break;
      case "twitter":
         url =
            "https://twitter.com/intent/tweet?url=" + location.href + "&text=Look";
         break;
      case "linkedin":
         url =
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodeURIComponent(location.href);
         break;
      case "email":
         url = "mailto:#";
         break;
      case "link":
         navigator.clipboard.writeText(location.href);
         return;
      break;
   }
   window.open(url, "_blank").focus();
}
function contactForm(name) {
   console.log(name);
   let data = {}
   let responsive = "desk";
   if (window.screen.width < 530) {
      responsive = "phone";
   } else if (window.screen.width < 767) {
      responsive = "tablet";
   } else if (window.screen.width < 992) {
      responsive = "laptop";
   }
   try {
      console.log("contactForm-"+name+'-'+responsive);
      console.log(document.getElementById("contactForm-"+name+'-'+responsive), responsive);
      const inputs = document.getElementById("contactForm-"+name+'-'+responsive).elements;
      console.log(inputs);
      // Iterate over the form controls
      for (let i = 0; i < inputs.length; i++) {
         if (inputs[i].nodeName === "INPUT" || inputs[i].nodeName === "SELECT" || inputs[i].nodeName === "TEXTAREA") {
            data[inputs[i].id] = inputs[i].value
            inputs[i].value= ''
         }
      }
      console.log(JSON.stringify(data, null, 3));
   } catch (error) {
      console.log(error);
   }

   var myHeaders = new Headers();
   myHeaders.append("x-api-key", "da2-yhdcw5xlwjh37of6udozxunxsm");
   myHeaders.append("Content-Type", "application/json");

   var graphql = JSON.stringify({
      query: "mutation MyMutation($data: String = \"\") {\r\n  createBasicLead(data: $data, orgPK: \"\", originURL:\" "+location.host+"\") {\r\n    smd_responseP\r\n    data\r\n    }\r\n}",
      variables: { "data": "" + JSON.stringify(data).replace(/"/g, '\"') + "" }
   })
   console.log(graphql)
   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
   };

   fetch("https://4flcuyexire6xdyhh7ptk2efza.appsync-api.us-east-1.amazonaws.com/graphql", requestOptions)
      .then(response => response.json())
      .then(result => {
         
         Swal.fire({
            icon: 'success',
            title: 'Dear '+data.firstName+' '+data.lastName+',',
            html: 'Thank you for your interest in our services. You will receive an email with a confirmation as soon as our team reviews your request'
         })
         console.log(result)
      })
      .catch(error => {
         console.log('error', error)
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
         })
      });
}
function actionMenu(id){
   //$('#'+id).collapse('toggle')
   //$('#'+id).collapse('show')
   let menu = document.getElementById(id)
   console.log(document.getElementById(id));
   if (menu.classList.contains('hide')) {
      document.getElementById(id).classList.remove('hide')
   }else{
      document.getElementById(id).classList.add('hide')
   }
   console.log(document.getElementById(id));
}
