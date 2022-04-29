<template>
<div class="col-lg-8">
        <div class="user-panel-title-box">
            <h3>{{SectionData.depositData.mainTitle }}</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <p class="mb-4" v-html="SectionData.depositData.content"></p>
            <a :href="SectionData.depositData.btnLink" class="btn btn-outline-dark"><em class="ni ni-plus"></em> {{ SectionData.depositData.btnText }}</a>
            <p class="fs-14 mt-3" v-html="SectionData.depositData.contentTwo"></p>
        </div><!-- end profile-setting-panel-wrap-->
        <!-- Modal -->
        <div class="modal fade" id="depositNiftyModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ SectionData.depositNiftyModal.title }}</h4>
                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                            <em class="ni ni-cross"></em>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-3 fs-14">{{ SectionData.depositNiftyModal.content }}</p>
                        <div class="input-group mb-4">
                            <input type="text" class="form-control form-control-s1" placeholder="Enter Enfty Contact Address">
                            <button class="btn btn-outline-secondary" type="button">{{ SectionData.depositNiftyModal.btnText }}</button>
                        </div>
                        <div class="qrcode-wrap d-flex align-items-center mb-4">
                            <img :src="SectionData.depositNiftyModal.img" alt="" class="me-3 flex-shirnk-0">
                            <p class="fs-14">{{ SectionData.depositNiftyModal.contentTwo }}</p>
                        </div>
                        <div class="d-flex align-items-center">
                            <input type="text" class="copy-input" v-model="message" id="copy-input" readonly>
                            <div class="tooltip-s1">
                                <button v-clipboard:copy="message" v-clipboard:success="onCopy" class="copy-text ms-2" type="button">
                                    <span class="tooltip-s1-text tooltip-text">Copy</span>
                                    <em class="ni ni-copy"></em>
                                </button>
                            </div>
                        </div>
                        <h6 class="text-uppercase mt-3 fw-medium">{{ SectionData.depositNiftyModal.contentThree }}</h6>
                    </div><!-- end modal-body -->
                </div><!-- end modal-content -->
            </div><!-- end modal-dialog -->
        </div><!-- end modal-->
</div><!-- end col-lg-8 -->
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'DepositSection',
  data () {
    return {
      SectionData
    }
  },
  setup() {
     const message = '0x76669f...a0e9ca52fa'
     const onCopy = (e) => {
        let target = e.trigger.querySelector(".tooltip-text");
        let prevText = target.innerHTML;
        target.innerHTML = "Copied";
        setTimeout(function(){
            target.innerHTML = prevText;
        }, 1000)
    }
    return { message, onCopy }
  }
}
</script>
