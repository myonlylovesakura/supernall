export default {
  addToCart(context, info) {
    // console.log(info);
    // 1.查看是否添加过
    return new Promise((resolve,reject) => {
      const oldInfo = context.state.cartList.find(item => item.iid === info.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        context.commit('add_counter',oldInfo)
        resolve('当前商品数量加一')
      } else {
        info.count = 1
        context.commit('add_to_cart',info)
        // info.checked = true
        // state.cartList.push(info)
        resolve('当前商品添加成功')
      }
    })
  }
}



