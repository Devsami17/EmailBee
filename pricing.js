const rangeSlider = document.getElementById("priceRange");
const selectedAmount = document.getElementById("selectedAmount");
const pricingAmount = document.getElementById("pricing-amount");
const pricingAmount2 = document.getElementById("pricing-amount-2");
const rangeTicksContainer = document.querySelector(".range-ticks");

const amounts = ['100', '200', '500', '1,000', '2,000', '5,000', '10,000', '15,000', '20,000', '50,000', '100,000', '200,000'];
const prices = [5.00, 10.00, 50.10, 22.50, 40.00, 75.00, 150.00, 220.10, 290.80, 650.00, 700.20, 1400.00];

// Initialize the range slider
rangeTicksContainer.innerHTML = "";
rangeSlider.setAttribute("max", amounts.length - 1);
amounts.forEach((e, t) => {
    let s = document.createElement("div");
    s.className = "range-tick-label";
    s.textContent = `${e}`;
    s.style.left = `${t / (amounts.length - 1) * 100}%`;
    rangeTicksContainer.appendChild(s);
});

// Event listener for range slider input
rangeSlider.addEventListener("input", function() {
    const index = parseInt(rangeSlider.value);
    selectedAmount.textContent = `${amounts[index]} - Amount Of Email`;

    // Update pricing amount based on selected index
    pricingAmount.innerHTML = `$${prices[index].toFixed(2)}`;
    pricingAmount2.innerHTML = `${amounts[index]}`;

    const percentage = index / (amounts.length - 1) * 100;
    rangeSlider.style.background = `linear-gradient(to right, #F9E00B 0%, #F9E00B ${percentage}%, #6a90b159 ${percentage}%, #6a90b159 100%)`;
});

// Initial display setup
const initialIndex = parseInt(rangeSlider.value);
const initialPercentage = initialIndex / (amounts.length - 1) * 100;
selectedAmount.textContent = `${amounts[initialIndex]} - Amount Of Email`;
pricingAmount.innerHTML = `$${prices[initialIndex].toFixed(2)}`;
pricingAmount2.innerHTML = `${amounts[initialIndex]}`;
rangeSlider.style.background = `linear-gradient(to right, #F9E00B 0%, #F9E00B ${initialPercentage}%, #6a90b159 ${initialPercentage}%, #6a90b159 100%)`;
