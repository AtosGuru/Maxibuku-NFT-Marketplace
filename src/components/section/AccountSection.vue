<template>
  <div class="col-lg-9 ps-xl-5">
                        <div class="user-panel-title-box">
                            <h3>{{SectionData.editProfileData.title }}</h3>
                        </div><!-- end user-panel-title-box -->
                        <div class="profile-setting-panel-wrap">
                            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation" v-for="list in SectionData.editProfileData.editProfileTabNav" :key="list.id">
                                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab" :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                                </li>
                            </ul>
                            <div class="tab-content mt-4" id="myTabContent">
                                <div class="tab-pane fade show active" id="account-information" role="tabpanel" aria-labelledby="account-information-tab">
                                    <div class="profile-setting-panel">
                                        <h5 class="mb-4">Edit Profile</h5>
                                        <div class="d-flex align-items-center">
                                            <div class="image-result-area avatar avatar-3">
                                                <img id="image-result" :src="require('@/images/thumb/avatar-9.jpg')" alt="">
                                            </div>
                                            <input class="upload-image" data-target="image-result" id="upload-image-file" type="file" hidden>
                                            <label for="upload-image-file" class="upload-image-label btn">Update Photo</label>
                                        </div><!-- end d-flex -->
                                        <div class="row mt-4">
                                            <div class="col-lg-6 mb-3">
                                                <label for="displayName" class="form-label">Dispaly Name</label>
                                                <input type="text" id="displayName" class="form-control form-control-s1" value="Kamran Ahmed">
                                            </div><!-- end col -->
                                            <div class="col-lg-6 mb-3">
                                                <label for="displayUserName" class="form-label">Username</label>
                                                <input type="text" id="displayUserName" class="form-control form-control-s1" value="kamran_ahmed">
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                        <div class="mb-3">
                                            <label for="bio" class="form-label">Bio</label>
                                            <textarea class="form-control form-control-s1" placeholder="Leave a comment here" id="bio">I make art with the simple goal of giving you something pleasing to look at for a few seconds.</textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="emailAddress" class="form-label">Email</label>
                                            <input type="email" id="emailAddress" class="form-control form-control-s1" value="kamran@gmail.com">
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 mb-3">
                                                <label for="facebookLink" class="form-label">Facebook Link</label>
                                                <input type="text" id="facebookLink" class="form-control form-control-s1" value="https://facebook.com/">
                                            </div><!-- end col -->
                                            <div class="col-lg-6 mb-3">
                                                <label for="twitterLink" class="form-label">Twiiter Link</label>
                                                <input type="text" id="twitterLink" class="form-control form-control-s1" value="https://twitter.com/">
                                            </div><!-- end col -->
                                            <div class="col-lg-6 mb-3">
                                                <label for="instagramLink" class="form-label">Instagram Link</label>
                                                <input type="text" id="instagramLink" class="form-control form-control-s1" value="https://facebook.com/">
                                            </div><!-- end col -->
                                            <div class="col-lg-6 mb-3">
                                                <label for="webLink" class="form-label">Web Link</label>
                                                <input type="text" id="webLink" class="form-control form-control-s1" value="https://kamran.bd.com/">
                                            </div><!-- end col -->
                                        </div><!-- end row -->
                                        <button class="btn btn-primary mt-3" type="button">Update Profile</button>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                                    <div class="profile-setting-panel">
                                        <h5 class="mb-4">Change Password</h5>
                                        <div class="mb-3">
                                            <label for="oldPassword" class="form-label">Old Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control form-control-s1" id="oldPassword" placeholder="Old password">
                                                <a href="oldPassword" class="password-toggle" title="Toggle show/hide pasword">
                                                    <em class="password-shown ni ni-eye-off"></em>
                                                    <em class="password-hidden ni ni-eye"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="newPassword" class="form-label">New Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control form-control-s1" id="newPassword" placeholder="New password">
                                                <a href="newPassword" class="password-toggle" title="Toggle show/hide pasword">
                                                    <em class="password-shown ni ni-eye-off"></em>
                                                    <em class="password-hidden ni ni-eye"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control form-control-s1" id="confirmNewPassword" placeholder="Confirm new password">
                                                <a href="confirmNewPassword" class="password-toggle" title="Toggle show/hide pasword">
                                                    <em class="password-shown ni ni-eye-off"></em>
                                                    <em class="password-hidden ni ni-eye"></em>
                                                </a>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary mt-3" type="button">Update Password</button>
                                    </div><!-- end profile-setting-panel -->
                                </div><!-- end tab-pane -->
                                <div class="tab-pane fade" id="validate-profile" role="tabpanel" aria-labelledby="validate-profile-tab">
                                    <div class="profile-setting-panel">
                                        <h5 class="mb-4">Verify your profile</h5>
                                        <p class="mb-3 fs-14">Verify your unique identity by linking your phone number with your account. Once your profile is validated, you will be approved to participate in all drops that require profile validation to purchase.</p>
                                        <p class="mb-4 fs-14">(Please note, profile validation is not 2fa and not used for security purposes.)</p>
                                        <hr class="my-4">
                                        <h6 class="mb-3 fw-semibold">Enter phone number to receive code</h6>
                                        <ul class="btns-group">
                                            <li>
                                                <input type="text" class="form-control form-control-s1 phone-number" placeholder="Phone number">
                                            </li>
                                            <li>
                                                <button class="btn btn-primary" type="button">Submit</button>
                                            </li>
                                        </ul>
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
  name: 'AccountSection',
  data () {
    return {
      SectionData,
    }
  },
  mounted () {
    /*===========SHOW UPLOADED IMAGE ================== */
    function uploadImage (selector) {
      let elem = document.querySelectorAll(selector)
      if (elem.length > 0) {
        elem.forEach(item => {
          item.addEventListener('change', function () {
            if (item.files && item.files[0]) {
              let img = document.getElementById(item.dataset.target)
              img.onload = function () {
                URL.revokeObjectURL(img.src)
              }
              img.src = URL.createObjectURL(item.files[0])

              let allowedExtensions = ['jpg', 'JPEG', 'JPG', 'png']
              let fileExtension = this.value.split('.').pop()
              var lastDot = this.value.lastIndexOf('.')
              var ext = this.value.substring(lastDot + 1)
              var extTxt = img.value = ext
              if (!allowedExtensions.includes(fileExtension)) {
                alert(extTxt + ' file type not allowed, Please upload jpg, JPG, JPEG, or png file')
                img.src = ' '
              }
            }
          })
        })
      }
    }

    uploadImage('.upload-image')

    /* =========== Show/Hide passoword ============== */
    function showHidePassword(selector){
    let elem = document.querySelectorAll(selector);
    if(elem.length > 0){
        elem.forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            let target = document.getElementById(item.getAttribute("href"));
            if(target.type == "password") {
            target.type = "text";
            item.classList.add("is-shown");
            }else{
            target.type = "password";
            item.classList.remove("is-shown");
            }
        });

        });
    }
    }

    showHidePassword(".password-toggle");

  }
}
</script>
