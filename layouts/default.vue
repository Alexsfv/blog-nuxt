<template>
    <div>
        <div class="wrapper">
            <Header />
            <Nuxt />
        </div>
    </div>
</template>

<script>
import Header from "@/components/system/Header";

export default {
    components: {
        Header
    },
};
</script>