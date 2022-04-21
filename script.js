// console.log("Hello, world!");

// var Airtable = require("airtable");
// var base = new Airtable({ apiKey: "keyLvcyRUc2XRsKLi" }).base(
//   "appYp1aQ6FFJ8k6rW"
// );

// base("ShoeSoles").select({}).eachPage(gotPageOfShoes, gotAllShoes);

// const shoes = [];

// function gotPageOfShoes(records, fetchNextPage) {
//   console.log("gotPageOfShoes()");
//   //add the records from this page to our seasons array
//   shoes.push(...records);
//   fetchNextPage();
// }

// function gotAllShoes(err) {
//   console.log("gotAllShoes()");
//   if (err) {
//     console.log("error loading shoes");
//     console.error(err);
//     return;
//   }
  
//   showShoes();
// }





// function showShoes() {
//   console.log("showShoes()");

//   const list = document.getElementById("list");

//   shoes.forEach((shoe) => {
//     var img = document.createElement("div");
//     img.src = shoe.fields.Title;
//     img.classList.add("navdec");

//     img.addEventListener("scroll", () => {
//       let scrollY = this.scrollY;
//       let scrollX = this.scrollX;
//       console.log(scrollY);
//       console.log(scrollX);
//       showShoe(shoe, img);
//     });

//     list.appendChild(img);
//   });
// }





// function showShoe(shoe, div) {
//   console.log("showImages()", shoe);

//   const path2 = document.getElementById("path2");

//   path2.getElementsByClassName("cover-image")[0].src =
//     shoe.fields.Image[0].url;

//   const list = document.getElementById("list");
//   const navItems = list.getElementsByClassName("active");

//   for (const navItem of navItems) {
//     navItem.classList.remove("active");
//   }

//   div.classList.add("active");

//   path2.classList.remove("hidden");
// }





$(document.getElementById('splitleft')).on('scroll', function(){
  
// var s = $(window).scrollTop(),
// d = $(document).height(),
// c = $(window).height();
 
// var scrollPercent = (s / (d - c)) * 100;
// document.getElementById('splitright').innerHTML = scrollPercent;
// console.log(scrollPercent);
  
var scrollPercentage = 100 * document.getElementById('splitleft').scrollTop / (document.getElementById('splitleft').scrollHeight-document.getElementById('splitleft').clientHeight);

if(scrollPercentage < 2.777777777777778){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-11.png?v=1650469819789')");
}
  
else if(scrollPercentage < 5.555555555555556){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-6.png?v=1650469820103')");
}
  
else if(scrollPercentage < 8.333333333333334){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-7.png?v=1650469818764')");
}
  
else if(scrollPercentage < 11.11111111111111){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-28.png?v=1650469819025')");
}
  
else if(scrollPercentage < 13.88888888888889){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-10.png?v=1650469820660')");
}
  
else if(scrollPercentage < 16.66666666666667){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-27.png?v=1650469819007')");
}
  
else if(scrollPercentage < 19.44444444444445){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-30.png?v=1650469819256')");
}
  
else if(scrollPercentage < 22.22222222222222){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-0.png?v=1650382390564')");
}
  
else if(scrollPercentage < 25){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-22.png?v=1650469819399')");
}
  
else if(scrollPercentage < 27.77777777777778){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-25.png?v=1650469821463')");
}
  
else if(scrollPercentage < 30.55555555555556){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-13.png?v=1650469821058')");
}
  
else if(scrollPercentage < 33.33333333333334){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-15.png?v=1650469820818')");
}
  
else if(scrollPercentage < 36.11111111111111){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-2.png?v=1650469820530')");
}
  
else if(scrollPercentage < 38.88888888888889){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-4.png?v=1650469820225')");
}
  
else if(scrollPercentage < 41.66666666666667){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-18.png?v=1650469819904')");
}
  
else if(scrollPercentage < 44.44444444444445){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-8.png?v=1650469819639')");
}
  
else if(scrollPercentage < 47.22222222222223){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-5.png?v=1650469820703')");
}
  
else if(scrollPercentage < 50){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-12.png?v=1650469819548')");
}
  
else if(scrollPercentage < 52.77777777777778){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-31.png?v=1650469820202')");
}
  
else if(scrollPercentage < 55.55555555555556){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-35.png?v=1650469820791')");
}
  
else if(scrollPercentage < 58.33333333333334){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-1.png?v=1650382394979')");
}
  
else if(scrollPercentage < 61.11111111111112){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-14.png?v=1650469820634')");
}
  
else if(scrollPercentage < 63.88888888888889){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-21.png?v=1650469821424')");
}
  
else if(scrollPercentage < 66.66666666666667){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-20.png?v=1650469820425')");
}
  
else if(scrollPercentage < 69.44444444444445){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-32.png?v=1650469820480')");
}
  
else if(scrollPercentage < 72.22222222222223){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-17.png?v=1650469821181')");
}
  
else if(scrollPercentage < 75){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-9.png?v=1650469820848')");
}
  
else if(scrollPercentage < 77.77777777777778){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-20.png?v=1650469820425')");
}
  
else if(scrollPercentage < 80.55555555555556){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-36.png?v=1650469821490')");
}
  
else if(scrollPercentage < 83.33333333333333){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-16.png?v=1650469820450')");
}
  
else if(scrollPercentage < 86.11111111111111){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-3.png?v=1650469820768')");
}
  
else if(scrollPercentage < 88.88888888888889){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-34.png?v=1650469820502')");
}
  
else if(scrollPercentage < 91.66666666666667){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-23.png?v=1650469819320')");
}
  
else if(scrollPercentage < 94.44444444444445){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-23.png?v=1650469819320')");
}
  
else if(scrollPercentage < 97.22222222222222){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-23.png?v=1650469819320')");
}
  
else if(scrollPercentage < 100){
$(document.getElementById('splitright')).css("background-image", "url('https://cdn.glitch.global/be2b9890-2d85-4e8e-a42d-69709297fbdf/SS%20-%20p3-23.png?v=1650469819320')");
}
  


 
  
})
// </script>





window.addEventListener('scroll', event => {
  console.log(window.scrollY)
})