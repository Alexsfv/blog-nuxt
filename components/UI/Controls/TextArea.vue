<template>
    <div class="control">
        <label>
            <span class="input-label"><slot /></span>
            <textarea
                :value="value"
                type="textarea"
                @input="$emit('input', $event.target.value)"
            >
            </textarea>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.control .input-label {
    display: inline-block;
    margin-bottom: 9px;
}