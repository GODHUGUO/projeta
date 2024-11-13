<template>
    <div>
 
<navigationmobile v-if="isMobile"  />
<navigation v-else   class="ABCD"/> 
<slot/>    
  
  <footer></footer>
  
</div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';

const  isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};



const isMobile = ref(false); // Initialise isMobile sans accès à window

const handleResize = () => {
    if (window.innerWidth < 768) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}
 //ici on verifie la taillle de l"ecran avec handleResize
};



onMounted(() => {
  handleResize(); // Appelle handleResize pour initialiser isMobile .Mais notons que cette lign est facultative.
  window.addEventListener('resize', handleResize); // Ajoute l'écouteur d'événement pour le redimensionnement
});

onUnmounted(() => {
   window.removeEventListener('resize', handleResize); // Retire l'écouteur lorsque le composant est démonté
 });


  </script>
  
  <style lang="scss">

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

@media (max-width: 768px) {

.ABCD{
 display: none;
}
}
.menuhambur{ 
border-radius: 20px; 
border: double 2px transparent;
background-image:
linear-gradient(#292929 , #292929) ,
linear-gradient(to right, #FFD49C, #7A87FB) ;
background-origin: border-box;
background-clip: content-box,border-box;
display: flex;
align-items: center;
border-radius: 20px;  






    button{
        font-size: 25px;
        width:45PX ;
        // background-color: #696868c4;
        background-color: transparent;
        border: none;
        color: #FFFFFF;

    }
}

   .active {
background-color: blue;
color: white;
 text-decoration: none;
list-style: none;  
}
.er{
    list-style: none;
    text-decoration: none;
    color: #FFFFFF; 
}

nav ul li{
    list-style-type: none;
    text-decoration:none;

}


.middlemenusec{
border-radius: 20px; 
border: double 2px transparent;
background-image:
linear-gradient(#292929 , #292929) ,
linear-gradient(to right, #FFD49C, #7A87FB) ;
background-origin: border-box;
background-clip: content-box,border-box;
 display: flex;

    width:40% ;
    //  justify-content: space-between;
  
    align-items: center;
    border-radius: 20px;  
   
li{
    list-style: none;
    display: flex;
    color: #FFFFFF;
    background-color: transparent;

}
.divimg {
    display: flex;
    align-items: center;
    justify-content: center;
  border-radius: 20px;  
  background-color: #696868c4;
  padding: 5PX 15PX;
 margin-top:4px;
margin-bottom:4px;
margin-left: 5px;
    img{
  background-color: transparent;
   height: 27px;
   width:27px ;
}
}
.liste{

    display: flex;
    justify-content: space-around;
    width:90% ;
}
}

.dekstopmenu{
    display: flex;
 
    justify-content: space-around;
 
    margin-top: 2%;
}

.rightmensec{
   

    width: 95PX;

    display: flex;

    align-items: center;
    img{
        width: 100%;
       
    }
}


.leftmensec{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        background: linear-gradient(to right, #7A87FB, #FFD49C);
        border-radius: 20PX;
        border: none;
        padding: 10PX;
        font-weight: bold;
    }



    .log{

        border-radius: 50%;
        height:40px ;
        width:40px ;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
        background-color: transparent;
        width: 100%;

    }
    }
    
}
</style>
  