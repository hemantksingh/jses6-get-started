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
}

export default Shop;