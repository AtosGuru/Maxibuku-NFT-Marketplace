<template>
<div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.paymentMethodData.title }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.paymentMethodData.paymentMethodTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }} </button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4" id="myTabContent">
                                <div class="tab-pane fade show active" id="balances" role="tabpanel" aria-labelledby="balances-tab">
                                    <div class="profile-setting-panel">
                                        <div class="mb-3 text-black balance-wrap">
                                            <span class="me-3 fw-semibold fs-12">{{SectionData.balanceData.title }}</span>
                                            <span class="fw-medium fs-10">{{SectionData.balanceData.price }}</span>
                                        </div>
                                        <div class="mb-2 text-black balance-wrap">
                                            <span class="me-3 fw-semibold fs-12">{{SectionData.balanceData.titleTwo }}</span>
                                            <span class="fw-medium fs-10">{{SectionData.balanceData.priceTwo }}</span>
                                        </div>
                                        <p class="fs-13 mb-4">{{SectionData.balanceData.content }}</p>
                                        <a href="#" class="fs-13 mb-2 d-inline-block" data-bs-toggle="modal" data-bs-target="#addBankAccountModal">{{ SectionData.balanceData.btnText }} <em class="ni ni-chevron-right ms-1"></em></a>
                                        <ul class="btns-group d-flex">
                                            <li v-for="(btn, i) in SectionData.balanceData.btns" :key="i">
                                                <router-link :to="btn.path" class="btn" :class="btn.btnClass">{{ btn.title }}</router-link>
                                            </li>
                                        </ul>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="credit-cards" role="tabpanel" aria-labelledby="credit-cards-tab">
                                    <div class="profile-setting-panel">
                                        <div class="alert alert-info mt-4 d-flex mb-5" role="alert">
                                            <svg class="flex-shrink-0 me-3" width="30" height="30" viewBox="0 0 24 24" fill="#75ddf3">
                                                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                                            </svg>
                                            <p class="fs-14">{{SectionData.creditCardData.alertText }}</p>
                                        </div><!-- end alert -->
                                        <h5 class="mb-4">{{SectionData.creditCardData.title }}</h5>
                                        <div class="row g-gs">
                                            <div class="col-md-6" v-for="item in SectionData.creditCardList" :key="item.id">
                                                <div class="card card-credit card-full">
                                                    <div class="card-header d-flex align-items-center">
                                                        <img :src="item.img" alt="" class="me-3 flex-shrink-0">
                                                        <div>
                                                            <span>{{ item.title }}</span>
                                                            <span class="text-secondary smaller">{{ item.timeText }}</span>
                                                        </div>
                                                    </div><!-- card-header -->
                                                    <div class="card-body">
                                                        <h6 class="mb-2">{{ item.titleTwo }}</h6>
                                                        <p class="fs-14">{{ item.addressText }}</p>
                                                    </div><!-- card-body -->
                                                    <div class="card-footer">
                                                        <ul class="btns-group btn-group-2">
                                                            <li><a href="#" class="btn btn-sm bg-danger-dim" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</a></li>
                                                        </ul>
                                                    </div><!-- card-footer -->
                                                </div><!-- card -->
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                        <a href="#" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addNewCardModal">{{SectionData.creditCardData.btnText }}</a>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="prepaid-eth" role="tabpanel" aria-labelledby="prepaid-eth-tab">
                                    <div class="profile-setting-panel">
                                        <h5 class="mb-2">{{ SectionData.prepaidData.title }}</h5>
                                        <p class="mb-3 fs-14">{{ SectionData.prepaidData.content }}</p>
                                        <p class="mb-3 fs-14">{{ SectionData.prepaidData.contentTwo }}</p>
                                        <div class="d-flex align-items-center">
                                            <div class="me-5 text-black" v-for="item in SectionData.prepaidData.balances" :key="item.id">
                                                <span class="fw-semibold fs-12 d-block mb-2">{{ item.title }}</span>
                                                <span class="fw-medium fs-9 mb-2">{{ item.price }}</span>
                                                <span class="d-block">{{ item.priceTwo }}</span>
                                            </div>
                                        </div>
                                        <p class="mt-1 fs-13 mb-4"><a href="#">Refresh balance</a></p>
                                        <p class="mb-2 fw-medium">Deposit Address</p>
                                        <p class="mb-1 text-uppercase fw-semibold text-black">Do not send Nifties to this address</p>
                                        <div class="d-flex align-items-center border p-3 rounded-3">
                                            <input type="text" class="copy-input copy-input-s1" v-model="message" id="copy-input" readonly>
                                            <div class="tooltip-s1">
                                                <button v-clipboard:copy="message" v-clipboard:success="onCopy" class="copy-text" type="button">
                                                    <span class="tooltip-s1-text tooltip-text">Copy</span>
                                                    <em class="ni ni-copy"></em>
                                                </button>
                                            </div>
                                        </div>
                                        <p class="my-1 fs-13">(New deposits will be credited after 6 confirmations)</p>
                                        <p class="fs-13"><a href="#">View address on etherscan</a></p>
                                        <button class="btn btn-primary mt-3" type="button">Withdraw</button>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                            </div><!-- end tab-content -->
                        </div><!-- end profile-setting-panel-wrap-->
                         <!-- Modal -->
                        <div class="modal fade" id="addBankAccountModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add Bank Account</h4>
                                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                            <em class="ni ni-cross"></em>
                                        </button>
                                    </div><!-- end modal-header -->
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label class="form-label">Bank Name</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Bank name">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Branch Name</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Branch name">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Bank Location</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Bank location">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Account Number</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Account number">
                                        </div>
                                        <p class="small mb-2">Make sure your name and bank information match your bank account. Otherwise, your transactions won't go through and you'll be charged a fee.</p>
                                        <p class="small mb-3">By continue, you agree to the EnftyMart's Terms and Service and Privacy Policy</p>
                                        <a href="#" class="btn btn-primary w-100">Add Account</a>
                                    </div><!-- end modal-body -->
                                </div><!-- end modal-content -->
                            </div><!-- end modal-dialog -->
                        </div><!-- end modal-->
                        <!-- Modal -->
                        <div class="modal fade" id="addNewCardModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add New Card</h4>
                                        <button type="button" class="btn-close icon-btn" data-bs-dismiss="modal" aria-label="Close">
                                            <em class="ni ni-cross"></em>
                                        </button>
                                    </div><!-- end modal-header -->
                                    <div class="modal-body">
                                        <div class="credit-card-form mb-4">
                                            <h5 class="mb-3">Credit Card Info</h5>
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Credit card number">
                                            <div class="row g-3">
                                                <div class="col-lg-8">
                                                    <input type="text" class="form-control form-control-s1" placeholder="Exp. Date">
                                                </div><!-- end col -->
                                                <div class="col-lg-4">
                                                    <input type="text" class="form-control form-control-s1" placeholder="CVC">
                                                </div><!-- end col -->
                                            </div><!-- end row -->
                                        </div><!-- end credit-card-form -->
                                        <div class="billing-form-wrap">
                                            <h5 class="mb-3">Billing Info</h5>
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 1">
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Address line 2">
                                            <div class="row g-3">
                                                <div class="col-lg-6">
                                                    <input type="text" class="form-control form-control-s1" placeholder="City">
                                                </div><!-- end col -->
                                                <div class="col-lg-6">
                                                    <input type="text" class="form-control form-control-s1" placeholder="State">
                                                </div><!-- end col -->
                                            </div><!-- end row -->
                                            <input type="text" class="form-control form-control-s1 my-3" placeholder="Zip code">
                                            <input type="text" class="form-control form-control-s1 mb-3" placeholder="Country">
                                            <button class="btn btn-primary w-100" type="button">Save Card</button>
                                        </div><!-- end billing-form-wrap -->
                                    </div><!-- end modal-body -->
                                </div><!-- end modal-content -->
                            </div><!-- end modal-dialog -->
                        </div><!-- end modal-->
                        <!-- Modal -->
                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body text-center">
                                        <img :src="SectionData.deleteModal.img" alt="" class="mb-3">
                                        <h4 class="modal-tilte mb-2">{{ SectionData.deleteModal.titleTwo }}</h4>
                                        <p class="modal-text">{{ SectionData.deleteModal.content}}</p>
                                    </div><!-- end modal-body -->
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-sm" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnText }}</button>
                                        <button type="button" class="btn btn-sm btn-danger" data-bs-dismiss="modal">{{ SectionData.deleteModal.btnTextTwo }}</button>
                                    </div>
                                </div><!-- end modal-content -->
                            </div><!-- end modal-dialog -->
                        </div><!-- end modal-->
                        <!-- Modal -->
                    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'PaymentMethodSection',
  data () {
    return {
      SectionData
    }
  },
  setup() {
     const message = '0x01948694c481cd38231261095f606c0a9444ce0e';
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
