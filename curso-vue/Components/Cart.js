app.component("cart-display", {
    props: ["cart"],
    setup() {

        
    },
    template: `
        <div class="cart">
            <p>Cart: {{ cart }}</p>
        </div>
    `,
});
