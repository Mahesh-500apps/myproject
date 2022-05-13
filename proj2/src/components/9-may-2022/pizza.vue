<template>
<div>
    <button @click="sortedArray">sort</button>
    {{sortedRecipes}}
</div>
</template>
<script>
export default{

    name:"MahI",
    data() {
    return {
        sortedRecipes:[],
      recipes: [
        {title: 'Pizza',
         description: 'Yummy pizza for those lazy days', 
         ingredients: ['Dough', 'Tomato Paste', 'Cheese', 'Bell Pepper', 'Onion'],
         cookingTime: 60},
      {title: 'Burritos', 
       description: 'Healthy yet very tasty burritos', 
       ingredients: ['Burritos', 'Kidney beans', 'Onion', 'Tomato', 'Bell Pepper'], 
        cookingTime: 30},
       {title: 'Tomato Soup', 
        description: 'A tasty tomato soup for the cold winter',
        ingredients: ['Tomatoes', 'Onion', 'Oregano'], 
        cookingTime: 45},
        {title: 'Ice Cream', 
         description: 'Just because... Ice Cream', 
         ingredients: ['Whole milk', 'Cream', 'Eggs', 'Sugar'],
         cookingTime: 120}
      ]
  }
    },
    computed: {
	sortedArray() {
		let sortedRecipes = this.recipes;
    sortedRecipes = sortedRecipes.sort((a,b) => {
			let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
            document.write(sortedRecipes)
			if (fa < fb) {
				return -1
			}
			if (fa > fb) {
				return 1
			}
			return 0
		})
        return sortedRecipes
	}
}

}
 </script> 