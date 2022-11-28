import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const handleAddproduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const year = form.year.value;
        const phone = form.phone.value;
        const condition = form.condition.value;
        const imagePath = form.image.value;
        const id = parseInt(form.id.value);

        // console.log(phone, location, id, condition, year, price, name);

        const product = {
            itemName: name,
            use_year: year,
            price,
            Location: location,
            id,
            phone,
            condition,
            imagePath,
            email: user.email

        }
        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product added for sale');
                }
            })
    }
    return (
        <div className="bg-base-200">
            <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handleAddproduct} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Car Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture of car</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Year of Used</span>
                        </label>
                        <input type="text" name="year" placeholder="year of used" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input type="text" name="phone" placeholder="Contact number" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select name='condition' className="select select-bordered w-full" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Choose an option ...</option>
                            <option value='Excellent'>Excellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select name='id' className="select select-bordered w-full" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Choose an option ...</option>
                            <option value='1' >American Cars</option>
                            <option value='2'>Japanese Cars</option>
                            <option value='3'>German Cars</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add product" />
                        {/* <button className="btn btn-primary">Login</button> */}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;