function increment(id) {

    //html for html file
     //   <textarea class="counter" disabled="disabled"></textarea>
     //   <button class="btn" id="incrementBtn">Increment</button>
     //   <button class="btn" id="addBtn">Add</button>
     //   <ul class="results"></ul>

    let incrementBtn = $("#incrementBtn");
    let textArea = $(".counter");
    let list = $(".results");
    let addBtn = $("#addBtn");
    let currentValue;
    if(!textArea.val()) {
        textArea.val(0);
        currentValue = 0;
    }
    incrementBtn.on("click", function () {
        textArea.val(++currentValue);
    });

    addBtn.on("click", function () {
      let li = $(`<li>${currentValue}<\li>`);
       li.appendTo(list);
    });


}