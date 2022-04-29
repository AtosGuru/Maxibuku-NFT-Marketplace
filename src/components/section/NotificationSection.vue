<template>
<div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.notificationData.title }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.notificationData.notificationTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{list.title }}</button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4" id="myTabContent">
                                <div class="tab-pane fade show active" id="email-alerts" role="tabpanel" aria-labelledby="email-alerts-tab">
                                    <div class="profile-setting-panel">
                                        <input class="check-all btn btn-sm btn-sm-2 btn-primary mb-4" type="button" value="Uncheck All">
                                        <div class="row g-gs">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="notification-item mb-4">
                                                    <h5 class="mb-3">Offers:</h5>
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="receiveBidOffer" checked>
                                                        <label class="form-check-label form-check-label-s1" for="receiveBidOffer"> I receive a bid/offer on a Enfty I own </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="makeOffer">
                                                        <label class="form-check-label form-check-label-s1" for="makeOffer"> I make an offer for a Nifty </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="bidAccepted" checked>
                                                        <label class="form-check-label form-check-label-s1" for="bidAccepted"> A bid I placed is accepted </label>
                                                    </div><!-- end form-check -->
                                                </div><!-- end notification-item -->
                                                <div class="notification-item">
                                                    <h5 class="mb-3">Sending and Receiving Enfties:</h5>
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="sendSomeoneEnfty" checked>
                                                        <label class="form-check-label form-check-label-s1" for="sendSomeoneEnfty"> I send someone a Enfty </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="SomeoneSendsEnfty">
                                                        <label class="form-check-label form-check-label-s1" for="SomeoneSendsEnfty"> Someone sends me a Enfty </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="depositEnftySuccessfully">
                                                        <label class="form-check-label form-check-label-s1" for="depositEnftySuccessfully"> I deposit a Enfty successfully </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="NityDepositFails" checked>
                                                        <label class="form-check-label form-check-label-s1" for="NityDepositFails"> My Nity deposit fails </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="withdrawEnfty">
                                                        <label class="form-check-label form-check-label-s1" for="withdrawEnfty"> I withdraw a Enfty </label>
                                                    </div><!-- end form-check -->
                                                </div>
                                            </div><!-- end col -->
                                            <div class="col-lg-6 col-md-6">
                                                <div class="notification-item mb-4">
                                                    <h5 class="mb-3">Purchases:</h5>
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="successfullyPurchase" checked>
                                                        <label class="form-check-label form-check-label-s1" for="successfullyPurchase"> I successfully complete a purchase </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="EnftyMartPurchaseFails">
                                                        <label class="form-check-label form-check-label-s1" for="EnftyMartPurchaseFails"> EnftyMart Purchase Fails </label>
                                                    </div><!-- end form-check -->
                                                </div><!-- end notification-item -->
                                                <div class="notification-item mb-4">
                                                    <h5 class="mb-3">Sales:</h5>
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="successfullySell">
                                                        <label class="form-check-label form-check-label-s1" for="successfullySell"> I successfully sell a Enfty </label>
                                                    </div><!-- end form-check -->
                                                    <div class="form-check mb-2">
                                                        <input class="form-check-input check-all-input" type="checkbox" id="somethingforSale" checked>
                                                        <label class="form-check-label form-check-label-s1" for="somethingforSale"> I place something up for sale </label>
                                                    </div><!-- end form-check -->
                                                </div><!-- end notification-item-->
                                            </div><!-- end col -->
                                        </div>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="price-alerts" role="tabpanel" aria-labelledby="price-alerts-tab">
                                    <div class="profile-setting-panel">
                                        <p class="mb-3">Enter a price below and get an email whenever an edition of Take another look is listed at or below the specified price</p>
                                        <ul class="btns-group">
                                            <li>
                                                <input type="text" class="form-control form-control-s1" placeholder="Alert Price ($)">
                                            </li>
                                            <li>
                                                <button class="btn btn-primary">Create Alert</button>
                                            </li>
                                        </ul>
                                        <p class="fs-13 mt-3">You can also remove or adjust your price alerts in your <a href="#" class="btn-link">Account preferences</a></p>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end profile-setting-panel-wrap-->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'NotificationSection',
  data () {
    return {
      SectionData
    }
  },
  mounted () {
    /*  ================================================
        Check/Uncheck all checkboxes  with single click
    ===================================================== */
    function checkboxAllToggle (selector, selectorInputText) {
      let checkAllBtn = document.querySelectorAll(selector)
      let checkAllInput = document.querySelectorAll(selectorInputText)

      if (checkAllBtn.length > 0) {
        checkAllBtn.forEach(item => {
          item.addEventListener('click', function (e) {
            if (e.target.value === 'Check All') {
              checkAllInput.forEach(function (checkbox) {
                checkbox.checked = true
              })
              e.target.value = 'Uncheck All'
            } else {
              checkAllInput.forEach(function (checkbox) {
                checkbox.checked = false
              })
              e.target.value = 'Check All'
            }
          })
        })
      }
    }

    checkboxAllToggle('.check-all', '.check-all-input')
  }
}
</script>
