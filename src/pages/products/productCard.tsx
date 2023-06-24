/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FC, Dispatch } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct } from '../../redux/action/cart'
import { setDataToSession } from "../../utils/localstorage";

type productType = {
    id: number;
    title: string;
    href: string;
    images: string;
    imageAlt: string;
    price: string;
    color: string;
}
type propStype = {
    product: productType
}

const ProductCard: FC<propStype> = ({ product }: propStype) => {
    const { cartList } = useSelector((state: any) => state.cart);
    const { loginUser } = useSelector((state: any) => state.user);
    const { currentPath } = useSelector((state: any) => state.window);

    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();

    const addTOCart = () => {
        if (loginUser.token) {
            dispatch(addProduct({ ...product, quantity: 1 }, cartList));
        } else {
            navigate("/login");
        }
    }
    return (
        <>
            <div key={product.id} className="group relative">
                <a onClick={() => navigate(`/product-detail/${product.id}`, { state: product })}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                        <img
                            src={product.images[1]}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                </a>
                <div className="mt-4 flex justify-between">
                    <div className="text-lg text-gray-700 text-left">
                        <h3 className="font-semibold">
                            <Link to={product.href}>
                                <span aria-hidden="true" className="absoluste inset-0 " />
                                {/* {product?.title} */}
                                {product?.title.length > 5 ? (product?.title.substring(0, 25) + "...") : null}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="pt-5">
                    <Button
                        variant="contained"
                        sx={{ background: '' }}
                        className="d-flex w-full pt-5"
                        onClick={addTOCart}
                        endIcon={<AddShoppingCartIcon />}
                    >
                        Add To Cart
                    </Button>
                </div>
            </div>
        </>
    );
}
export default ProductCard;