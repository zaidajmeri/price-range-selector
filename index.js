//take variable with DOM queryselector and take slider-container and price slider
var rangevalue = document.querySelector('.slider-container .price-slider')
//take another variable for input value
var rangevalueInput = document.querySelector('.range-input input')

//set the price gap
let priceGap = 500;

//adding eventlistener to price input element
const priceInputValue = document.querySelectorAll('.price-input input');
for (i = 0; i < priceInputValue.length; i++) {
    priceInputValue[i].addEventListener('input', e => {
        //parse minimum and maximum value of the range input
        let minPrice = parseInt(priceInputValue[0].value);
        let maxPrice = parseInt(priceInputValue[1].value);
        let diffPrice = minPrice - maxPrice;

        if (minPrice < 0) {
            alert("Minimum Price cannot be less than 0");
            priceInputValue[0].value = 0;
            minPrice = 0;
        }
        if (maxPrice > 100000) {
            alert("Maximum Price cannot be greator than 100000");
            priceInputValue[1].value = 0;
            maxPrice = 0;
        }
        if (minPrice > maxPrice - priceGap) {
            priceInputValue[0].value = maxPrice - priceGap;
            minPrice = maxPrice - priceGap
        }
        if (minPrice < 0) {
            priceInputValue[0].value = 0;
            minPrice = 0
        }

        //check if the price gap is met and maximum price withing the range
        if (diffPrice >= priceGap && maxPrice <= rangevalueInput) {
            if (e.target.classnName === 'min-input') {
                rangevalueInput[0].value = minPrice;
                let val1 = rangevalueInput[0].max;
                rangevalue.style.left = `${(minPrice / val1) * 100}%`;
            }
            else {
                rangevalueInput[1].value = maxPrice;
                let val2 = rangevalueInput[1].max;
                rangevalue.style.right = `${(maxPrice / val2) * 100}%`;
            }
        }
    });
    //add event listner to range input element
    for (i = 0; i < rangevalueInput.length; i++) {
        rangevalueInput[i].addEventListener('input', e => {
            let minVal = parseInt(rangevalueInput[i].value);
            let maxVal = parseInt(rangevalueInput[i].value);
            let diffPrice = maxVal - minVal;

            //check if the PriceGap is exceeded
            if(diffPrice < priceGap){
                if(e.target.classnName ==='min-range'){

                    rangevalueInput[0].value = maxVal - priceGap;
                }
                else
                {
                    rangevalueInput[1].value = minVal + priceGap;
                }
            
            }
            else{
                //update price input range and progres
             priceInputValue[0].value = maxVal - priceGap;
             priceInputValue[1].value = minVal + priceGap;
             rangevalue.style.left = `${(minVal/rangevalueInput[0].max) * 100}%`
             rangevalue.style.left = `${100 - (maxVal/rangevalueInput[0].max) * 100}%`
            
            }
        })
    }
}
