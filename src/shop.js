class Shop {

    getOrder(orderId) {
        /*jshint unused: false */
        return Promise.resolve({userId:3});
    }

    getUser(userId) {
        /*jshint unused: false */
        return Promise.resolve({companyId: 10});
    }

    getCompany(companyId) {
        /*jshint unused: false */
        return Promise.resolve({name :'iNivaran'});
    }

    getProduct(productId) {
        let products = new Map([
            [1, {name: 'Sennheiser'}],
            [2, {name: 'Beats'}],
            [3, {name: 'Bose'}],
        ]);

        return Promise.resolve(products.get(productId));
    }
}

export default Shop;