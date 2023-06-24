// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// ==============================|| SKELETON - PRODUCT_DETAIL ||============================== //

const EarningCard = () => (
    <Card>
        {/* <CardContent> */}

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block">
                <Skeleton variant="rectangular" width="100%" height={478} animation="wave">
                    <div style={{ paddingTop: '7%' }} />
                </Skeleton>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">product information</h2>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {/* {productDetails.title} */}
                    <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                </h1>
                <p className="text-lg tracking-tight text-gray-900 pt-1 d-flex font-semibold">
                    <Skeleton animation="wave" height={30} width="80%" />
                </p>
                <div className=" items-center rating mt-2">
                    <Skeleton variant='text' animation="wave" height={30} width="80%" />
                </div>
                <div className="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-8 lg:pr-4 lg:pt-6">
                    {/* Description and details */}
                    <div className="space-y-6">
                        <Skeleton animation="wave" height={20} width="80%" />
                        <Skeleton animation="wave" height={20} width="80%" />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }} className='quantity'>
                    <Skeleton animation="wave" variant='rectangular' height={50} width="80%" />
                </div>
                <Skeleton animation="wave" variant='rectangular' height={50} width="40%" />
            </div>
        </div>
        {/* </CardContent> */}
    </Card>
);

export default EarningCard;
