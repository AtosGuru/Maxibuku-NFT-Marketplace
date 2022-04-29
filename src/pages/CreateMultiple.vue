<template>
<div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
        <!-- Header main -->
        <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section section-space-b pt-4 pt-md-5 mt-md-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-head-sm">
                            <router-link :to="SectionData.createMultipleData.path" class="btn-link fw-semibold"><em class="ni ni-arrow-left"></em> {{SectionData.createMultipleData.btnText }}</router-link>
                            <h1 class="mt-2">{{ SectionData.createMultipleData.title }}</h1>
                        </div>
                    </div><!-- end col -->
                    <div class="col-lg-8">
                        <form action="#" class="form-create mb-5 mb-lg-0">
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Upload file</h5>
                                <div class="file-upload-wrap">
                                    <p class="file-name mb-4" id="file-name">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                    <input id="file-upload" class="file-upload-input" data-target="file-name" type="file" hidden>
                                    <label for="file-upload" class="input-label btn btn-primary">Choose File</label>
                                </div>
                            </div><!-- end form-item -->
                            <div class="form-item mb-4">
                                <h5 class="mb-3">Select Method</h5>
                                <ul class="row g-4 nav nav-tabs nav-tabs-s2" id="myTab" role="tablist">
                                    <li class="nav-item col-6 col-sm-4 col-lg-3" role="presentation" v-for="list in SectionData.selectMethodTabNavTwo" :key="list.id">
                                        <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">
                                            <em class="ni nav-link-icon" :class="list.icon"></em>
                                            <span class="nav-link-title mt-1 d-block">{{list.title }}</span>
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content mt-4" id="myTabContent">
                                    <div class="tab-pane fade show active" id="fixed-price" role="tabpanel" aria-labelledby="fixed-price-tab">
                                        <div class="form-create-tab-wrap">
                                            <label class="mb-2 form-label">Price</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Enter a price for item">
                                        </div><!-- end form-create-tab-wrap -->
                                    </div><!-- end tab-pane -->
                                    <div class="tab-pane fade" id="timed-auction" role="tabpanel" aria-labelledby="timed-auction-tab">
                                        <div class="form-create-tab-wrap">
                                            <label class="mb-2 form-label">Minimum bid</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Enter Minimum bid">
                                            <div class="row mt-3">
                                                <div class="col-lg-6">
                                                    <label class="mb-2 form-label">Starting date</label>
                                                    <input type="date" class="form-control form-control-s1">
                                                </div><!-- end col-lg-6 -->
                                                <div class="col-lg-6">
                                                    <label class="mb-2 form-label">Expiration date</label>
                                                    <input type="date" class="form-control form-control-s1">
                                                </div><!-- end col-lg-6 -->
                                            </div><!-- end row -->
                                        </div><!-- end form-create-tab-wrap -->
                                    </div><!-- end tab-pane -->
                                    <div class="tab-pane fade" id="open-for-bids" role="tabpanel" aria-labelledby="open-for-bids-tab">
                                        <div class="form-create-tab-wrap">
                                            <label class="mb-2 form-label">Minimum bid</label>
                                            <input type="text" class="form-control form-control-s1" placeholder="Enter Minimum bid">
                                        </div><!-- end form-create-tab-wrap -->
                                    </div><!-- end tab-pane -->
                                </div><!-- end tab-content -->
                            </div><!-- end form-item -->
                            <div class="form-item mb-3">
                                <div class="switch-wrap">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="me-2">
                                            <h5 class="mb-1">Unlock once purchased</h5>
                                            <p class="form-text">Content will be unlocked after successful transaction</p>
                                        </div>
                                        <div class="form-check form-switch form-switch-s1">
                                            <input class="form-check-input checkbox-switcher" data-target="switch-content-unlock" type="checkbox">
                                        </div><!-- end form-check -->
                                    </div><!-- end d-flex -->
                                    <div class="switch-content-unlock mt-4" id="switch-content-unlock">
                                        <input type="text" name="text" class="form-control form-control-s1" placeholder="Access key, code to redeem or link to a file...">
                                    </div>
                                </div><!-- end switch-wrap -->
                            </div><!-- end form-item -->
                            <div class="form-item mb-4">
                                <h5 class="mb-1">Choose collection</h5>
                                <p class="form-text mb-3">This is the collection where your item will appear.</p>
                                <v-select class="generic-select" v-model="selected" :options="options"></v-select>
                            </div><!-- end form-item -->
                            <div class="form-item mb-4">
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Title</label>
                                    <input type="text" class="form-control form-control-s1" placeholder="e. g. Redeemable T-Shirt with logo">
                                </div>
                                <div class="mb-4">
                                    <label class="mb-2 form-label">Description</label>
                                    <textarea name="message" class="form-control form-control-s1" placeholder="e. g. After purchasing you’ll be able to get the real T-Shirt"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="mb-2 form-label">Royalties</label>
                                    <input type="text" class="form-control form-control-s1" placeholder="e.g 10%">
                                    <p class="form-text mt-1">Suggested: 0, 10%, 20%, 30%. Maximum is 70%</p>
                                </div>
                            </div><!-- end form-item -->
                            <button class="btn btn-primary" type="button">Create Item</button>
                        </form>
                    </div><!-- endn col -->
                </div><!-- row-->
            </div><!-- container -->
        </section><!-- create-section -->
    <!-- Footer  -->
    <Footer></Footer>
</div><!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
export default {
  name: 'CreateMultiple',
  data () {
    return {
      SectionData,
      selected: 'Select Collection',
      options: [
        'Select Collection',
        'Abstraction',
        'Patternlicious',
        'Skecthify',
        'Cartoonism',
        'Virtuland',
        'Papercut'
      ]
    }
  },
  mounted () {
    /*==============File upload =============== */
    function fileUpload(selector) {
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0) {
        elem.forEach(item => {
        item.addEventListener("change", function(){
            var target = document.getElementById(item.dataset.target);
            var allowedExtensions  = ["jpg", "png", "gif", "webp", "mp4", "mp3"];
            var fileExtension  = this.value.split(".").pop();
            var lastDot = this.value.lastIndexOf('.');
            var ext = this.value.substring(lastDot + 1);
            var extTxt = target.value = ext;

            if(!allowedExtensions.includes(fileExtension)) {
            alert(extTxt + " file type not allowed, Please upload jpg, png, gif, webp, mp4 or mp3 file");
            target.innerHTML = "Please upload jpg, png, gif, webp, mp4 or mp3 file";
            }else {
            target.innerHTML = item.files[0].name;
            }
        })
        })
    }
    }

    fileUpload(".file-upload-input");

    /*  ============== Unlock once purchased Checkbox switcher ============= */
    function checkboxSwitcher(selector) {
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0) {
        elem.forEach(item => {
        item.addEventListener("change", function(){
            let target = document.getElementById(item.dataset.target);
            if(this.checked) {
            target.classList.add("is-shown");
            }else {
            target.classList.remove("is-shown");
            }
        });
        });
    }
    }

    checkboxSwitcher(".checkbox-switcher");

  }
}
</script>
