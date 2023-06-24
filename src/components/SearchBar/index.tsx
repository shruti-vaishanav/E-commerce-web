/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, ButtonBase, InputAdornment, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';
import { shouldForwardProp } from '@mui/system';
import { styled } from '@mui/material/styles';
import { searchProduct } from '../../redux/action/product';


const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 360,
    height: 45,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
        background: 'transparent !important',
        paddingLeft: '4px !important'
    },
    [theme.breakpoints.down('lg')]: {
        width: 250
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 4,
        background: '#fff'
    }
}));

// const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
//     ...theme.typography,
//     ...theme.typography,
//     // background: theme.palette.secondary.light,
//     // color: theme.palette.secondary.dark,
//     '&:hover': {
//         // background: theme.palette.secondary.dark,
//         // color: theme.palette.secondary.light
//     }
// }));

const SearchSection: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.product);

    const [searchValue, setSearchValue] = React.useState<any>();

    const Search = (event: any) => setSearchValue(event.target.value);
    useEffect(() => {
        if (searchValue) {
            dispatch(searchProduct(products, searchValue));
        }
    }, [searchValue]);

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <OutlineInputStyle
                    className='p-0'
                    id="input-search-header"
                    value={searchValue}
                    name="search"
                    onChange={Search}
                    placeholder="Search"
                    endAdornment={
                        <InputAdornment position="end">
                            <ButtonBase sx={{ borderRadius: '16px' }}>
                                <SearchIcon />
                            </ButtonBase>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{ 'aria-label': 'weight' }}
                />
            </Box>
        </>
    );
};

export default SearchSection; 