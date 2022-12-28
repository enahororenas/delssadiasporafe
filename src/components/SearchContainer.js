import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { Select, MenuItem } from "@mui/material";

const SearchContainer = () => {
  const {isLoading,search,handleChange,clearFilters,sort,sortOptions,searchCountry} = useAppContext()
  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });
  countryArr.push({label: 'ALL', value: 'ALL'})
  
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('Searching for',search)
    clearFilters()
  }

  return (
    <Wrapper>
      <div className='dashboard-page'>
      <form className='form' style={{marginTop:'0'}}>
        <h4 style={{fontWeight:'bold'}}>search form</h4>
        <div className='form-center'>
          {/* search position */}

          <FormRow type='text' name='search' value={search}  handleChange={handleSearch}/>
          <FormRowSelect name='sort' value={sort}  handleChange={handleSearch}  list={sortOptions}/>

          <div className='form-row'>
        <label htmlFor="ann-month" className='form-label'>Country</label>
        <Select className='form-input form-prop' name='searchCountry' value={searchCountry} onChange={handleSearch}>
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
      </Select>
      </div>
          
          <button className='btn btn-block btn-danger' disabled={isLoading} style={{marginTop:'20px'}}
          onClick={handleSubmit}>clear filters</button>
          
        </div>
      </form>
      </div>
    </Wrapper>
  )
}

export default SearchContainer
