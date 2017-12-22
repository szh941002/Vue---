state: {
    shopcartTotal: 0
}

// 获取状态, 记住以属性的方式使用
getters: {
    // 计算购物车商品总数
    shopcartTotal(state) {
        return state.shopcartTotal;
    }
}

// 修改状态, 记住要commit方法调用
mutations: {
    // 添加数量
    upShopcartTotal(state, number) {
        state.shopcartTotal += number;
    }
}