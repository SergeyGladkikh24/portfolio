// let parallaxMouseMove = (() => {
//     let parallaxContainer = document.querySelector('.parallax'),
//         layers = parallaxContainer.querySelectorAll('parallax__layer');
//     return {
//         init: function init() {
//             window.addEventListener('mousemove', (e) => {
//                 let pageX = e.pageX,
//                     pageY = e.pageY,
//                     initialX = (window.innerWidth / 2) - pageX,
//                     initialY = (window.innerHeight / 2) - pageY;
//                 [].slice.call(layers).forEach((layer, i) => {
//                     let divider = (i + 1) / 100,
//                         positionX = initialX * divider,
//                         positionY = initialY * divider,
//                         layerStyle = layer.style,
//                         transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';
//                     layerStyle.transform = transformString;
//                     layerStyle.msTransform = transformString;
//                     layerStyle.webkitTransform = transformString;
//                     layerStyle.oTransform = transformString;
//                     layerStyle.mozTransform = transformString;
//                 });
//             })
//         }
//     }
// })();

(function(){

    var parallaxContainer = document.querySelector('.parallax'),
        layer = parallaxContainer.querySelector('.parallax__layer');

    window.addEventListener("mousemove", function(e){
        let pageX = e.pageX,
            pageY = e.pageY,
            initialX = (window.innerWidth / 2) - pageX,
            initialY = (window.innerHeight / 2) - pageY;
        let divider = 1 / 100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            layerStyle = layer.style,
            transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';
        layerStyle.transform = transformString;
        layerStyle.msTransform = transformString;
        layerStyle.webkitTransform = transformString;
        layerStyle.oTransform = transformString;
        layerStyle.mozTransform = transformString;
    })

})();