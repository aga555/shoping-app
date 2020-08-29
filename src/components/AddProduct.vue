<template>
    <b-col md="4" class="m-3">
        <b-card header="Add porduct">
            <b-card-body>
                <b-form onautocomplete="false">
                    <b-form-group
                            label="name">
                        <b-form-input v-model="form.name" id="name" name=" name" trim>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group
                            label="price">
                        <b-form-input v-model="form.price" id="price" name="price" trim>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                            label="brand">
                        <b-form-input v-model="form.brand" id="brand" name="brand" trim>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Inventory">
                        <b-form-radio v-model="form.inventoryStatus" name="inventoryStatus" value="A">In stock
                        </b-form-radio>
                        <b-form-radio v-model="form.inventoryStatus" name="inventoryStatus" value="B">Out of stock
                        </b-form-radio>
                    </b-form-group>
                </b-form>


            </b-card-body>
            <b-button href="#" variant="primary" @click="addProduct"> add product</b-button>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        name: "AddProduct",
        data() {
            return {
                form: {
                    name: '',
                    price: '',
                    brand: '',
                    inventoryStatus: ''
                }
            }
        }, methods: {
            addProduct() {
                console.log(this.form)
            }
        }
    }
</script>

<style scoped>

</style>
