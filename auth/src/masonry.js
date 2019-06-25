import Masonry from 'masonry-layout';
import { imagesLoaded } from 'imagesloaded';

function doMasonryLayout (delay) {
  setTimeout(function () {
    $(".elements-gride").imagesLoaded (()=>{
        var msnry = new Masonry(
          document.querySelector('.elements-gride'),
          { itemSelector: '.element-item',
            columnWidth: '.persent-size',
            percentPosition: true }
        );
        $("input").css({
          "top": $(".elements-gride").height()
        })
    })
  }, delay);
}

$(window).resize( () => doMasonryLayout(50));

export default doMasonryLayout;
