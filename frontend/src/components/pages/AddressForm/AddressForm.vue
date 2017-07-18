<template>
    <div class="yan-address-form">
        <!-- 表单 -->
        <div class="yan-address-content">
            <!-- 收件人的姓名 -->
            <div class="form-item">
                <input v-model="address.receiver" type="text" placeholder="姓名">
            </div>
    
            <!-- 收件人的手机 -->
            <div class="form-item">
                <input v-model="address.telephone" type="text" placeholder="手机号码">
            </div>
    
            <!-- 收件人的基本地址 -->
            <div class="form-item">
                <input v-model="basicAddress" type="text" placeholder="省份、城市、县区" disabled>
            </div>
    
            <!-- 收件人的详细地址 -->
            <div class="form-item">
                <input v-model="address.detail" type="text" placeholder="详细地址，如街道、楼盘号等">
            </div>
        </div>
    
        <!-- 设置默认地址 -->
        <div class="default-address">
             <i @click="toggleDefault" v-show="address.isDefault" class="fa fa-check-circle-o" aria-hidden="true"></i> 
             <i @click="toggleDefault" v-show="!address.isDefault" class="fa fa-circle-o" aria-hidden="true"></i> 
            <span>设为默认地址</span>
        </div>

        <!-- 脚注 -->
        <yan-address-form-footer :addressForm="address"></yan-address-form-footer>
    </div>
</template>

<script>
// 引入脚注
import YanAddressFormFooter from '@/components/pages/AddressForm/Footer/Footer';

export default {
    data() {
        return {
            addressForm: {
                receiver: '',
                province: '',
                city: '',
                detail: '',
                telephone: '',
                isDefault: false
            }
        }
    },
    computed: {
        isEditAddress() {
            return this.$store.getters.isEditAddress;
        },
        address() {
            return this.isEditAddress ? this.$store.getters.editAddress : this.addressForm;
        },
        basicAddress() {
            if (this.address.province === '' || this.address.city === '') {
                return '';
            }
            else {
                return `${this.address.province} ${this.address.city}`;
            }
        }
    },
    components: {
        YanAddressFormFooter
    },
    methods: {
        toggleDefault() {
            this.address.isDefault = !this.address.isDefault;
        }
    }
}
</script>

<style scoped>
.yan-address-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(244, 244, 244);
}

/* 表单的内容 */
.yan-address-content {
    background: #fff;
    padding-left: 35px;
}

/* 表单的子项 */
.form-item {
    padding: 45px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
}

.form-item input {
    width: 95%;
    outline: none;
}

/* 设置默认的地址 */
.default-address {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px 0;
    background: rgb(250, 250, 250);
    border-bottom: 1px solid rgb(200, 200, 200);
}

.default-address i {
    padding: 0 10px;
    font-size: 45px;
}

.fa-circle-o {
    color: rgb(200, 200, 200);
}

.fa-check-circle-o {
    color: #b4282d;
}
</style>
