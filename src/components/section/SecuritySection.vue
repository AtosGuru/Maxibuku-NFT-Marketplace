 <template>
  <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.securityData.title }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <h5 class="mb-2">{{ SectionData.securityData.titleTwo }}</h5>
                            <p class="fs-14 mb-4" v-html="SectionData.securityData.content"></p>
                            <ul class="btns-group">
                                <li v-for="(logo, i) in SectionData.securityData.logos" :key="i">
                                    <router-link :to="logo.path"><img :src="logo.img" alt=""></router-link>
                                </li>
                            </ul>
                            <p class="fs-14 my-3">In cases where authy cannot be installed, sms messaging can be used for 2fa. <strong>This is a last case scenario </strong> as sms provides a <strong>less secure</strong> experience and will prevent you from enabling advanced 2fa settings within the site. </p>
                            <h6 class="mb-3 fw-semibold">Input your phone number below to enroll</h6>
                            <ul class="btns-group">
                                <li>
                                    <input type="password" id="phoneNumber" class="form-control form-control-s1 phone-number" placeholder="Phone number">
                                </li>
                                <li>
                                    <button class="btn btn-primary w-100" type="button">Enroll Number</button>
                                </li>
                            </ul>
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'SecuritySection',
  data () {
    return {
      SectionData,
      
    }
  },
}
</script>