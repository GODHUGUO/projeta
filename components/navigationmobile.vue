<template>
  <header>

<div class="mobilemenu ">

<div class="rightmensec">
    <img src="@/public/images/Frame 1597884157.png" alt="logo menu">
</div>


<Transition name="slide">
    <div class="menustyle"  v-show="isMenuOpen">
    <div class="divimg"><img src=" @/public/images/Homeicone.png" alt=""></div> 
        <div class="menuliste">
        <li v-for="item in menuItems" :key="item.id">
          <NuxtLink :to="item.path" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink>    
          <!-- <NuxtLink :to="{ path: item.path }" :class="{ active: $route.path === item.path }" class="listestyle" >{{ item.label }}</NuxtLink> -->
      </li>
    </div>
    </div>
</Transition>



    <div class="hamburgerstyle">
        <button  v-show="!isMenuOpen" @click="toggleMenu" >☰</button>
        <button v-show="isMenuOpen" @click="toggleMenu" >✕</button>
  
 </div>
      
 
</div>

  </header>
</template>

<script setup>
import { ref } from 'vue';

const  isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};


const menuItems = [

  { id: 1, label: 'About',path: '/#section3' },
  { id: 2, label: 'Projects',path: '/#section4' },
  { id: 3, label: 'Contact me',path: '/#section6' }
]

</script>

<style lang="scss" scoped>

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.menuliste{
    list-style: none;
    display: flex;
    gap:20px;
    flex-direction: column;
    align-items: center;
    background-color: #7A87FB;
    color: #292929;
}
.listestyle{
    color:#292929;
    list-style: none;
    text-decoration: none;
}

.hamburgerstyle{
  z-index:1;
  position: fixed;
  right:5px;
    border-radius: 20px; 
border: double 2px transparent;
background-image:
linear-gradient(#292929 , #292929) ,
linear-gradient(to right, #FFD49C, #7A87FB) ;
background-origin: border-box;
background-clip: content-box,border-box;
 display: flex;
    button{
        background-color: transparent;
        border: none;
        color: #ffffff;
        font-size:20px;
        width:40px ;
        
       
    }
}
.active {
// background-color: blue;
color: white;
 text-decoration: none;
list-style: none;  
background:  #7A87FB;
}

.mobilemenu{

    display: flex;
 
    justify-content: space-between;
    padding-left:4% ;
    padding-right:4% ;
 
 
    margin-top: 2%;
}


.menustyle{
    padding-top:10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    gap:20px;
    
    right: 0PX;
   
    height: 100%;
    z-index:1;
    position: fixed;
    overflow-y: hidden;
    width:40% ;
    top:9px;
    background:  #7A87FB;
}



/* Pendant l'entrée et la sortie */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease; /* Transition douce de 0.5 seconde */
}

/* Quand l'élément commence à entrer */
.slide-enter {
  transform: translateX(-100%); /* Commence à gauche, hors de l'écran */
}

/* Quand l'élément est complètement visible (fin de la transition) */
.slide-enter-to {
  transform: translateX(0); /* Arrive à sa position normale */
}

/* Quand l'élément sort */
.slide-leave-to {
  transform: translateX(100%); /* Se déplace vers la droite, hors de l'écran */
}

   </style>