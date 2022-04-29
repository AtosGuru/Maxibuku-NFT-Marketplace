<template>
<section class="ranking-section section-space-b">
            <div class="container">
                <div class="table-responsive">
                    <table class="table mb-0 table-s1">
                        <thead>
                            <tr>
                                <th scope="col" v-for="item in SectionData.rankingData.tableHead" :key="item.id">{{ item }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item of displayedRecords" :key="item.id">
                                <th scope="row">
                                    <router-link :to="item.path" class="d-flex align-items-center text-black">
                                        <span class="me-2 fs-13">{{item.id }}</span>
                                        <div class="avatar me-2">
                                            <img :src="item.img" alt="">
                                        </div>
                                        <span>{{ item.authorName }}</span>
                                    </router-link>
                                </th>
                                <td>{{ item.numText }}</td>
                                <td class="text-success">{{ item.numTextTwo }}</td>
                                <td class="text-danger">{{ item.numTextThree }}</td>
                                <td>{{ item.numTextFour }}</td>
                                <td>{{ item.numTextFive }}</td>
                                <td>{{ item.numTextSix }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div><!-- end table-responsive -->
                <!-- pagination -->
                <div class="text-center mt-4 mt-md-5">
                    <Pagination :records="records.length" v-model="page" :per-page="perPage"></Pagination>
                </div>
            </div><!-- .container -->
        </section><!-- end ranking-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Pagination from 'v-pagination-3';

export default {
  name: 'RankingSection',
  components: {
    Pagination
  },
  data () {
    return {
      SectionData,
      page: 1,
      perPage: 6,
      records: [
      {
        id: 1,
        path: 'author',
        img: require('@/images/thumb/avatar.jpg'),
        authorName: 'Patternlicious',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 2,
        path: 'author',
        img: require('@/images/thumb/avatar-2.jpg'),
        authorName: 'Cartoonism',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 3,
        path: 'author',
        img: require('@/images/thumb/avatar-3.jpg'),
        authorName: 'Virtuland',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 4,
        path: 'author',
        img: require('@/images/thumb/avatar-3.jpg'),
        authorName: 'RockToonz',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 5,
        path: 'author',
        img: require('@/images/thumb/avatar-5.jpg'),
        authorName: 'CoolThings',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 6,
        path: 'author',
        img: require('@/images/thumb/avatar-6.jpg'),
        authorName: 'NioMedia',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 7,
        path: 'author',
        img: require('@/images/thumb/avatar.jpg'),
        authorName: 'DigiPunks',
        numText: '3,593.91',
        numTextTwo: '23.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '12.3k'
      },
      {
        id: 8,
        path: 'author',
        img: require('@/images/thumb/avatar-2.jpg'),
        authorName: 'JunakiNFT',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 9,
        path: 'author',
        img: require('@/images/thumb/avatar-3.jpg'),
        authorName: 'JulyJordan',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 10,
        path: 'author',
        img: require('@/images/thumb/avatar-4.jpg'),
        authorName: 'DigiPunks',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 11,
        path: 'author',
        img: require('@/images/thumb/avatar-5.jpg'),
        authorName: 'DigiPunks',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
      {
        id: 12,
        path: 'author',
        img: require('@/images/thumb/avatar-6.jpg'),
        authorName: 'DigiPunks',
        numText: '6,593.91',
        numTextTwo: '33.78%',
        numTextThree: '22.32%',
        numTextFour: '4.5',
        numTextFive: '6.5k',
        numTextSix: '53.3k'
      },
     ]
    }
  },
  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.records.slice(startIndex, endIndex);
    }
  },
}
</script>
