<template>
    <section class="contact-section section-space-b">
            <div class="container">
                <div class="row section-space-b">
                    <div class="col-lg-7">
                        <div class="contact-form-wrap">
                            <div class="section-head-sm">
                                <h2 class="mb-2">{{ SectionData.contactData.title }}</h2>
                                <p>{{ SectionData.contactData.subTitle }}</p>
                            </div>
                            <form action="#">
                                <div class="row g-gs">
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputName" placeholder="Name">
                                            <label for="floatingInputName">Your name</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                                            <label for="floatingInputEmail">Email address</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputPhoneNumber" placeholder="Username">
                                            <label for="floatingInputPhoneNumber">Phone number</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">Type message here...</label>
                                        </div><!-- end form-floating -->
                                    </div><!-- end col -->
                                    <div class="col-lg-12">
                                        <button class="btn btn-primary" type="submit">{{ SectionData.contactData.btnText }}</button>
                                    </div><!-- end col -->
                                </div><!-- end row -->
                            </form>
                        </div><!-- end card -->
                    </div><!-- end col-lg-7 -->
                    <div class="col-lg-5">
                        <div class="contact-info ps-lg-4 ps-xl-5">
                            <div class="section-head-sm">
                                <h2 class="mb-2">{{ SectionData.contactData.titleTwo }}</h2>
                                <p>{{ SectionData.contactData.content }}</p>
                            </div>
                            <ul class="contact-details">
                                <li class="d-flex align-items-center" v-for="list in SectionData.contactData.contactList" :key="list.id">
                                    <em class="ni icon-btn icon-btn-s1" :class="list.icon"></em>
                                    <div class="ms-4">
                                        <strong class="d-block text-black">{{ list.title }}</strong>
                                        <span>{{ list.subTitle }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
                <!-- google map -->
                <GoogleMap></GoogleMap>
            </div><!-- end container -->
        </section><!-- end contact-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
  name: 'ContactSection',
  data () {
    return {
      SectionData
    }
  }
}
</script>
