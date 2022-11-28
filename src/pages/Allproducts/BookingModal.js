import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { name, resale_price, imagePath } = product;
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        console.log(user.email, user.displayName, name, resale_price, phone, location);

        const booking = {
            buyerName: user.displayName,
            email: user.email,
            itemName: name,
            price: resale_price,
            imagePath: imagePath,
            phone: phone,
            location: location
        }

        console.log(booking);

        fetch(' https://assignment-12-server-car.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking Confirmed');
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold m-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="email" value={user?.email} disabled className="input input-bordered input-info w-full " />
                        <input type="text" value={user?.displayName} disabled className="input input-bordered input-info w-full " />
                        <input type="text" value={name} disabled className="input input-bordered input-info w-full " />
                        <input type="text" value={resale_price} disabled className="input input-bordered input-info w-full " />


                        <input name="phone" type="text" placeholder="Phone number" className="input input-bordered input-info w-full " />
                        <input name="location" type="text" placeholder="meeting location" className="input input-bordered input-info w-full " />
                        <br />
                        <input className='btn btn-primary w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;