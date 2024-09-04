const slider = document.getElementById('priceRange');
const sliderAmount = document.getElementById('slider-amount');
const price  = document.getElementById('price');

const pricePoints = ['10,000', '20,000', '30,000', '40,000', '50,000','60,000','70,000','80,000','90,000','100,000'];

// Function to update the slider amount display
function updateSliderAmount() {
    const value = slider.value;
    const amount = pricePoints[value - 1]; // Get the amount corresponding to the slider position
    sliderAmount.textContent = amount;
    if(amount == "10,000"){
        price.textContent="$1,000.00"
    }
  else if(amount == "20,000"){
        price.textContent="$2,000.00"
    }
    else  if(amount == "30,000"){
        price.textContent="$3,000.00"
    }
    else if(amount == "40,000"){
        price.textContent="$4,000.00"
    }
    else if(amount == "50,000"){
        price.textContent="$5,000.00"
    }
    else if(amount == "60,000"){
        price.textContent="$6,000.00"
    }
    else if(amount == "70,000"){
        price.textContent="$7,000.00"
    }
    else if(amount == "80,000"){
        price.textContent="$8,000.00"
    }
    else if(amount == "80,000"){
        price.textContent="$9,000.00"
    }
    else if(amount == "100,000"){
        price.textContent="$10,000.00"
    }else{
        price.textContent="$1,000.00"

    }

}

// Initialize with the default value
updateSliderAmount();

// Update the amount display on slider input
slider.addEventListener('input', updateSliderAmount);
