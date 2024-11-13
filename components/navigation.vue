<template>
 
  <header>

<div class="dekstopmenu">

<div class="rightmensec">
    <img src="@/public/images/Frame 1597884157.png" alt="logo menu">
</div>

    <div class="middlemenusec">
        
        <div class="divimg"><img src=" @/public/images/Homeicone.png" alt=""></div> 
        <div class="liste">
        <li v-for="item in menuItems" :key="item.id">
        <!-- <NuxtLink :to="{ path: item.path }" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink> -->
        <NuxtLink :to="item.path" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink>
      </li>
    </div>
    </div>
      
  <div class="leftmensec">
<button>Hire me</button>
<button class="log"><img src="@/public/images/User Rounded.png" alt=""> </button>
</div> 

</div>

  </header>
  

  
  

  
  
  
  
  
 
  </template>
  
  <script setup>

//   import { ref } from 'vue';

// const  isMenuOpen = ref(false);

// const toggleMenu = () => {
//     isMenuOpen.value = !isMenuOpen.value;
// };


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


// .menuliste{
// display: flex;
// flex-direction: column;
// background-color: #FFFFFF;
// color: #292929;
// height: 91vh;
// li{
//     list-style: none;
// }





// }
.menuhambur{ 

    border-radius: 20px; 
border: double 2px transparent;
background-image:
linear-gradient(#292929 , #292929) ,
linear-gradient(to right, #FFD49C, #7A87FB) ;
background-origin: border-box;
background-clip: content-box,border-box;
 display: flex;

 
    //  justify-content: space-between;
  
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
background-color:  #7A87FB;
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

@media (max-width: 768px){
    // .dekstopmenu{
    //     display:none;
    // }
}
</style>
  