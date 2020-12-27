<template>
    <div class="control" :class="classes">
        <label>
            <span class="input-label"><slot /></span>
            <input
                v-bind="$attrs"
                :value="value"
                :type="type"
                :required="required"
                @input="$emit('input', $event.target.value)"
            />
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        classes: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            type: true
        }
    }
}
</script>

<style lang="scss" scoped>
.control .input-label {
    display: inline-block;
    margin-bottom: 9px;
}
</style>