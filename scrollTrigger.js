//io 为 IntersectionObserver对象 - 由IntersectionObserver()构造器创建
var io = new IntersectionObserver((entries) => {
    //entries 为 IntersectionObserverEntry对像数组
    entries.forEach((item) => {
        //item 为 IntersectionObserverEntry对像
        // isIntersecting是一个Boolean值，判断目标元素当前是否可见
        if (item.isIntersecting) {
            //div 可见时 进行相关操作
            console.log(item.target.innerText);
            item.target.className = "animate__animated animate__fadeInUp"
            // io.unobserve(item.target); //停止监听该div DOM节点
        } else {
            item.target.className = ""
        }
    });
}); //不传options参数，默认根元素为浏览器视口

export default {
    install(app) {
        app.directive('scroll-trigger', (el, binding) => {
            io.observe(el)// 监听div DOM节点
        })
    }
}