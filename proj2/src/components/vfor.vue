<template>
    <div>
        <table>
            <tr> 
                <th>name</th>
                <th>index</th>
                <th>description</th>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.index}}</td>
                <td>{{item.description}}</td>
            </tr>
        </table> 
        <li v-for="item in items" :key="item.id">{{item.name}}:{{ item.index}}
       </li>
    </div>
        
</template>
<script>
export default {
    name:'EleM',
    data(){
        return{
            items:[
              { name:'Agile CRM', description: 'A company of excellence',index:0},

              { name:'mantra technologies', description: '500apps',index:1},

              { name:'500apps Python', description: 'Backend built using python',index:2},

              { name:'500apps infinity', description: 'Builtusing vue JS',index:3}
            ]
        }
    }
}

</script>
