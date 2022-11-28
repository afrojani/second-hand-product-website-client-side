import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
    // const [categories, setCategories] = useState([]);

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(' https://assignment-12-server-car.vercel.app/categories')
            .then(res => res.json())
    })

    // useEffect(() => {

    //     fetch(' https://assignment-12-server-car.vercel.app/categories')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data);
    //         })
    // }, []);

    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-10'>Second Hand Cars Collections</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between my-5'>
                {
                    categories.map(category => <div className="card w-96 shadow-xl bg-sky-200"
                        key={category._id}>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{category.title}</h2>
                            <img className='h-36' src={category.img} alt="" />
                            <div className="card-actions justify-end">
                                <Link to={`/categories/${category.id}`}>
                                    <button className="btn btn-primary">See Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;