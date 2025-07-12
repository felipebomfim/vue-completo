app.component("product-display", {
    setup() {
        const message = ref("Olá Vue 3!");
        const image = ref("assets/t-shirt-blue.png");
        const imgProduct = ref("T-Shirt Azul");
        const productTitle = ref("T-Shirt");
        const brand = "Marconyu";
        const inStock = ref(9);
        const details = ref(["50% cotton", "20% polyester", "30% rayon"]);

        const titleWithBrand = computed(() => {
            return `${productTitle.value} - ${brand.value}`;
        });


        const changeImage = (variantImage) => {
            image.value = variantImage;
            imgProduct.value = variantImage.split("/").pop().split(".")[0];
        };

        const variants = ref([
            {
                id: 1,
                color: "blue",
                image: "assets/t-shirt-blue.png",
            },
            {
                id: 2,
                color: "green",
                image: "assets/t-shirt-green.png",
            },
        ]);

        const stockMessage = computed(() => {
            if (inStock.value >= 10) {
                return "In Stock";
            } else if (inStock.value < 10 && inStock.value > 0) {
                return "Almost Out of Stock";
            } else {
                return "Out of Stock";
            }
        });

        return {
            message,
            image,
            imgProduct,
            productTitle,
            inStock,
            details,
            variants,
            changeImage,
            titleWithBrand,
            stockMessage,
        };
    },
    template: `
            <div class="product-display">
                <div class="product-container">
                    <div class="product-image">
                        <!-- IMAGEM DO PRODUTO -->
                        <img v-bind:src="image" :alt="imgProduct" />
                    </div>
                    <div class="product-info">
                        <h1>{{ titleWithBrand }}</h1>
                        <p>{{ stockMessage}}</p>
                        <!-- INFO DO PRODUTO -->
                        <ul>
                            <li v-for="detail in details" :key="detail">
                                {{ detail }}
                            </li>
                        </ul>

                        <div
                            v-for="variant in variants"
                            :key="variant.id"
                            @mouseover="changeImage(variant.image)"
                            class="color-circle"
                            :style="{
                                backgroundColor: variant.color
                            }"
                        ></div>
                        <button
                            class="button"
                            @click="$emit('add-to-cart')"
                            :class="{
                                disabledButton: inStock <= 0
                            }"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
    `,
});
