<template>
<section class="activity-section section-space-b">
            <div class="container">
                <ul class="row g-4 nav nav-tabs nav-tabs-s2 justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item col-6 col-sm-4 col-lg-2" role="presentation" v-for="list in SectionData.activityNavList" :key="list.id">
                        <button class="nav-link" :class="list.class" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">
                            <img :src="list.icon" class="icon icon-svg" alt="">
                            <span class="nav-link-title mt-3 d-block">{{ list.title }}</span>
                        </button>
                    </li>
                </ul>
                <div class="gap-2x"></div><!-- end gap -->
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyList" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                    <div class="tab-pane fade" id="art" role="tabpanel" aria-labelledby="art-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyListTwo" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                    <div class="tab-pane fade" id="virtual-worlds" role="tabpanel" aria-labelledby="virtual-worlds-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyListThree" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                    <div class="tab-pane fade" id="trending-cards" role="tabpanel" aria-labelledby="trending-cards-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyListFour" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                    <div class="tab-pane fade" id="collectibles" role="tabpanel" aria-labelledby="collectibles-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyList" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                    <div class="tab-pane fade" id="utility" role="tabpanel" aria-labelledby="utility-tab">
                        <div class="table-responsive">
                            <table class="table mb-0 table-s1 fs-13 bg-gray">
                                <thead>
                                    <tr>
                                        <th scope="col" v-for="(list, i) in SectionData.activityTableHead" :key="i">{{ list }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in SectionData.activityTableBody.tableBodyListTwo" :key="list.id">
                                        <th scope="row" class="fw-regular">{{ list.eventTitle }}</th>
                                        <td>{{ list.itemTitle }}</td>
                                        <td>{{ list.price }}</td>
                                        <td>{{ list.quantity }}</td>
                                        <td><a :href="list.fromLink" class="btn-link fw-regular">{{ list.fromText }}</a></td>
                                        <td><a :href="list.toLink" class="btn-link fw-regular">{{ list.toText }}</a></td>
                                        <td>{{ list.dateText }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- end table-responsive -->
                    </div><!-- end tab-pane -->
                </div><!-- end tab-content -->
            </div><!-- .container -->
        </section><!-- end activity-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ActivitySection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
