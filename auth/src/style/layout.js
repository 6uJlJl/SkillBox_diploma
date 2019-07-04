
function order3Columns (items) {
  let col1=0;
  let col2=0;  
  let col3=0;
  let contWidth = $(".elements-gride").width()*0.32;

  for (let i=0; i<items.length; i++) {
    if (col1 <= col2) {
      if (col1 <= col3) {
        items[i].order = "-1";
        col1 = col1 + items[i].height/(items[i].width/contWidth) + 66; }
      else {
        items[i].order = "1";
        col3 = col3 + items[i].height/(items[i].width/contWidth) + 66; }
    } else {
      if (col2 <= col3) {
        items[i].order = "0";
        col2 = col2 + items[i].height/(items[i].width/contWidth) + 66; }
      else {
        items[i].order = "1";
        col3 = col3 + items[i].height/(items[i].width/contWidth) + 66; }
    }
  }
  
  let height = Math.round( Math.max (col1, col2, col3) );
  $(".elements-gride").height(height);
  return items;
}

function order2Columns(items) {
  let col1=0;
  let col2=0;
  let contWidth = $(".elements-gride").width()*0.49;

  for (let i=0; i<items.length; i++) {
    if (col1 <= col2) {
        items[i].order = "-1";
        col1 = col1 + items[i].height/(items[i].width/contWidth) + 66; }
    else {
        items[i].order = "0";
        col2 = col2 + items[i].height/(items[i].width/contWidth) + 66; }
  };
  let height = Math.round( Math.max (col1, col2) );
  $(".elements-gride").height(height);
  return items;
}

function order1Column (items) {
  let contWidth = $(".elements-gride").width()*0.98;
  let height = 0;
  for (let i=0; i<items.length; i++) {
    height = height + items[i].height/(items[i].width/contWidth) + 66;
  }
  $(".elements-gride").height(height);
  return items;
}

export const orderPhotos = (items) => {
  let width = $(window).width();
  let orderedItems;
  if ( width >= 1200 )
    { orderedItems = order3Columns(items); }
  else
    if ( width >= 768 )
      { orderedItems = order2Columns(items); }
    else { orderedItems = order1Column(items); }
  return orderedItems;
};
