<template>
    <div>
        <button @click="ordinal">click</button>
    </div>
</template>
<script>
export default{
    name:"MahI",
    data(){
        return{
             }
    },
methods:{
 Ordinal(n)
 {
  const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
 const o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 

for(n = 0; n < color.length; n++){
 const  ordinal = n + 1;

 const output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

document.write(output);
}
 }
}
}
</script>
