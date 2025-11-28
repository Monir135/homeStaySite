
const chooseRooms = [
    {
        roomImage: `deluxe-room.jpg`,
        roomName: 'Deluxe Room',
        roomDescription: 'Spacious and elegant room with modern interiors and a private balcony overlooking the garden.',
        roomAmenities: {
            bedType: 'Queen Bed',
            airType: 'Air Conditioning',
            internetType: 'Free Wi-Fi',
            breakfastType: 'Complimentary Breakfast'
        },
        roomPrice: '₹2,500 / night',

    },
    {
        roomImage: `private-cottage.jpg`,
        roomName: 'Cozy Cottage',
        roomDescription: 'A charming, private cottage with comfortable interiors and scenic views — perfect for a peaceful getaway.',
        roomAmenities: {
            bedType: 'Double Bed',
            airType: 'Air Conditioning',
            internetType: 'Free Wi-Fi',
            breakfastType: 'Complimentary Breakfast'
        },
        roomPrice: '₹3,000 / night',
    },
    {
        roomImage: `mountanious-room.jpg`,
        roomName: 'Mountain View Room',
        roomDescription: 'Relax in comfort and enjoy beautiful views of the surrounding mountains.',
        roomAmenities: {
            bedType: 'Double Bed',
            airType: 'Air Conditioning',
            internetType: 'Free Wi-Fi',
            breakfastType: 'Complimentary Breakfast'
        },
        roomPrice: '₹3,500 / night',
    },
    {
        roomImage: `premiumSuite.jpg`,
        roomName: 'Signature Suite',
        roomDescription: 'Spacious and elegant suite with modern comforts and amenities for a luxurious stay.',
        roomAmenities: {
            bedType: 'Double Bed',
            airType: 'Air Conditioning',
            internetType: 'Free Wi-Fi',
            breakfastType: 'Complimentary Breakfast'
        },
        roomPrice: '₹4,000 / night',
    }
];
let roomsHTML = ``;
chooseRooms.forEach((room) => {
    roomsHTML += ` 
  <div class="grid-element">
      <img src="${room.roomImage}" alt="Deluxe Room" class="room-image">
      <h4 class="room-name">${room.roomName}</h4>
      <p class="room-description">${room.roomDescription}</p>
      <ul class="room-amenities">
        <li>${room.roomAmenities.bedType}</li>
        <li>${room.roomAmenities.airType}</li>
        <li>${room.roomAmenities.internetType}</li>
        <li>${room.roomAmenities.breakfastType}</li>
      </ul>
      <p class="room-price">${room.roomPrice}</p>
    <button class="button-to-book js-button-to-book" data-room="${room.roomName}"><a class="cta-button"></a>Book Now</button>
      </div>
    `;
});
document.querySelector('.rooms-grid')
    .innerHTML = roomsHTML;
let isHovered = false;
document.querySelectorAll('.room-image')
    .forEach((roomImage) => {
        if (!isHovered) {
            roomImage.addEventListener('mouseenter', () => {
                roomImage.classList.add('bring-up')
                isHovered = true;
            });
        } else {
            roomImage.addEventListener('mouseenter', () => {
                roomImage.classList.remove('bring-up')
                isHovered = false;
            });
        }
    });

const formHTML = `    <form class="booking-form js-booking-form" id="bookingForm">
            <span class="close-form" title="Close">&#10006;</span>
            <h2 class="form-heading">Book Your Stay</h2>
            <div class="complete-form-container">
                <div class="label-container">
                    <label>Full Name:</label>
                </div>
                <div>
                    <input type="text" name="fullName" class="form-input" placeholder="Name" required>
                </div>
                <div class="label-container">
                    <label>Email:</label>
                </div>
                <div>
                    <input type="email" name="email" class="form-input" placeholder="Email" required>
                </div>
                <div class="label-container">
                    <label>Phone:</label>
                </div>
                <div>
                    <input type="tel" name="phone" class="form-input" placeholder="Phone" required>
                </div>
                <div class="label-container"><label>Number of Guests:</label>
                </div>
                <div>
                    <select name="Guests" class="select-guest" required>
                        <option value="" disabled selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                </div>
                <div class="label-container">
                    <label>Room Type:</label>
                </div>
                <div>
                    <select name="roomType" class="select-room" required>
                        <option class="room-option" value="" disabled selected></option>
                          <option value="Deluxe Room">Deluxe Room</option>
  <option value="Cozy Cottage">Cozy Cottage</option>
  <option value="Mountain View Room">Mountain View Room</option>
  <option value="Signature Suite">Signature Suite</option>
                    </select>
                </div>
                <div class="label-container">
                    <label>Check-in Date:</label>
                </div>
                <div>
                    <input type="date" name="Check-in" class="form-input" required>
                </div>
                <div class="label-container">
                    <label>Check-out Date:</label>
                </div>
                <div>
                    <input type="date" name="Check-out" class="form-input" required>
                </div>
                <div class="label-container">
                    <label>Special Requests:</label>
                </div>
                <div>
                    <textarea placeholder="Any requests or notes..." name="guestRequest" class="form-input"></textarea>
                </div>
                <div class="label-container">
                    <label><input type="checkbox" name="agreed" value="yes" required> I agree to the terms &
                        conditions</label>
                </div>
                <button type="submit" class="confirm-button">Confirm Booking</button>
            </div>
        </form>`;
document.querySelector('.form-container')
    .innerHTML = formHTML;


const formElement = document.querySelector('.js-booking-form');
console.log(formElement)
const overlay = document.querySelector('.js-popup-overlay');

document.querySelectorAll('.js-button-to-book').forEach((button) => {
    button.addEventListener('click', () => {
        const selectedRoom = button.getAttribute('data-room'); // get room name
        const selectElement = document.querySelector('.select-room');

        // Open the form
        formElement.classList.add('appeared-form');
        overlay.classList.add('overlay-active');

        // Set the correct room in dropdown
        selectElement.value = selectedRoom;

    })
})



function removeFormFromPage() {
    formElement.classList.remove('appeared-form');
    overlay.classList.remove('overlay-active');
}

// Close popup if overlay is clicked
overlay.addEventListener('click', () => {
    removeFormFromPage();
});

document.querySelector('.close-form')
    .addEventListener('click', () => {
        removeFormFromPage();
    });




document.querySelector('#bookingForm')
    .addEventListener("submit", function (e) {
        e.preventDefault(); // prevent normal page reload

        // Collect form data
        const name = document.querySelector("[name='fullName']").value;
        const email = document.querySelector("[name='email']").value;
        const phone = document.querySelector("[name='phone']").value;
        const guests = document.querySelector("[name='Guests']").value;
        const roomType = document.querySelector("[name='roomType']").value;
        const checkIn = document.querySelector("[name='Check-in']").value;
        const checkOut = document.querySelector("[name='Check-out']").value;
        const requests = document.querySelector("[name='guestRequest']").value;

        // Construct message
        const message =
            `📩 *New Booking Request* %0A` +
            `━━━━━━━━━━━━━━%0A` +
            `👤 *Name:* ${name}%0A` +
            `📧 *Email:* ${email}%0A` +
            `📞 *Phone:* ${phone}%0A` +
            `👥 *Guests:* ${guests}%0A` +
            `🏠 *Room Type:* ${roomType}%0A` +
            `📅 *Check-in:* ${checkIn}%0A` +
            `📆 *Check-out:* ${checkOut}%0A` +
            `📝 *Special Requests:* ${requests || "None"}%0A` +
            `━━━━━━━━━━━━━━%0A` +
            `_Sent from Yours Homestays website_`;

        // Replace with your WhatsApp number (with country code, no + or 0)
        const phoneNumber = "918822030323"; // example for India
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");
    });
