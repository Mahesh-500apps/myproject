<template>

  <b-container fluid>
    <b-row>
        <div>
    <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
  </div>
      <b-col cols="4">
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          
        </b-list-group>
      </b-col>

      <b-col cols="8">
          <div :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
      style="overflow-y: scroll;"
    >
        <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:300px">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text1 }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text2 }}</p>
          
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text3 }}</p>
                    <h4 id="list-item-3" v-b-visible="handleVisibility">item4</h4>

          <p>{{ text4 }}</p>
        </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
      name:"MsHi",
    data() {
      return {
        isVisible: false,
        text1: 'Chiranjeevi (born Konidela Siva Sankara Vara Prasad; 22 August 1955) is an Indian actor and former politician, who predominantly works in Telugu cinema. Chiranjeevi starred in over 150 feature films in Telugu, as well as some films in Hindi, Tamil and Kannada. In a film career spanning over four decades, he won three Andhra Pradesh State Nandi Awards, a Raghupathi Venkaiah Award, and nine Filmfare Awards South. In 2006, he was honoured with the Padma Bhushan, Indias third-highest civilian award, for his contributions to Indian cinema and was presented with an honorary doctorate from Andhra University.[6] He served as the Minister of Tourism for the Government of India from 2012 and 2014.[7]',

        text2:  'Chiranjeevi began his acting career in 1978 with Punadhirallu.[8] However, Pranam Khareedu was released earlier at the box office.[9] He is the first Indian actor to start a personal website on internet.[10] In 1987, he starred in Swayamkrushi which was dubbed into Russian and was screened at the Moscow International Film Festival.[11] Chiranjeevi won the 1988 Indian Express Best Actor Award and the state Nandi Award for Best Actor awards for his performance in the film.[12][13][14][15] In 1988, he co-produced Rudraveena which won the National Film Award for Best Feature Film on National Integration.[16]',
        text3: 'Chiranjeevi 1992 film Gharana Mogudu, directed by K. Raghavendra Rao, is the first south Indian film to collect over ₹10 crore (equivalent to ₹65 crore or US$8.6 million in 2020)[17] at the box office.[18][19] The film was screened at the 1993 International Film Festival of India in the mainstream section.[20] It made Chiranjeevi the highest-paid actor in India at the time catapulting him to the cover pages of national weekly magazines in India.[21] The entertainment magazines Filmfare and India Today named him "Bigger than Bachchan", a reference to BollywooDs Amitabh Bachchan.',
        text4: '[22] News magazine The Week hailed him as "the new money machine".[23] He was paid ₹1.25 crore (equivalent to ₹8.2 crore or US$1.1 million in 2020), the highest fee for any Indian actor, for the 1992 film Aapadbandhavudu.[19] In 2002, Chiranjeevi was given the Samman Award for being the highest Income Tax payer for the 1999–2000 assessment year by the Minister of State for Finance.[24] A poll conducted by CNN-IBN in 2006 named Chiranjeevi the most popular star of the Telugu film industry.[25]'

      }
    },
    methods:{
    handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    }
  }
</script>