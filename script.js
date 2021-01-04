// $('.input').prop('Numbers', []).on('keydown', function (e) {
//     e.preventDefault();
//     let patern = $(this).attr('placeholder');
//     if (!isNaN(e.key) && this.Numbers.length < patern.match(/_/g).length) {
//         this.Numbers.push(e.key);
//     }
//     if (e.keyCode === 8) {
//         this.Numbers.pop();
//     }
//     this.Numbers.forEach(num => {
//         patern = patern.replace(/_/, num);
//     })
//     $(this).val(function (){
//         return this.Numbers.length >= 1 ? patern : "";
//     });
// });

$.fn.mask = function(options){
    let patern = options;
    return this.each(function () {
        let numbers = [];
        $(this).attr('placeholder', patern);
        $(this).on('keydown', function (e) {
            e.preventDefault();
            let str = patern;
            if (!isNaN(e.key) && numbers.length < str.match(/_/g).length) {
                numbers.push(e.key);
            }
            if (e.keyCode === 8) {
                numbers.pop();
            }
            numbers.forEach(num => {
                str = str.replace('_', num);
            })
            $(this).val(function (){
                return numbers.length >= 1 ? str : "";
            })
        });
    });
}

$('.input').mask('___/____/____');