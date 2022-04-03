# Project and Portfolio 3
## Application Description
I havent decided yet.

### Installation
```
npm install
npm start
```

## Errors:

### App.js
- [] Delete the line import Routes from './components/Routes'
- [] Change Route path from /Settings to / <Route path='/Settings' element={<Settings />} /> 

### Header.js
- [] Changes Men to Mens on line <Link to="/Mens" style={styles.padding}>Men</Link>
- [] Change src from logo to avatar <img style={styles.logo} src={logo} alt="Logo" />
- [] Change logo width from 50 to 500
- [] Add link to Shoes, which does not exist and should be removed -  <Link to="/Shoes" style={styles.padding}>Shoes</Link>


### Women.js
- [] added a limit to the get url, which makes it return only 1 item.    axios.get(`https://fakestoreapi.com/products/category/women's%20clothing?limit=1`)
- [] Change price to item.rating.rate, so nothing is the correct price, price={item.rating.rate}


### Settings.js
- [] Changed city and state to just location instead of location.city  & location.state.  Gives [object Object]

### SettingsForm.js
- [] Changed labels for first and last name to just name - Name: <input type='text' style={styles.myInput} value={props.fName} placeholder='First Name' />


### index.html
- [] Changed title to Shoopify. <title>Shoopify</title>

### index.js
- [] Changed path of app import App from './App'; to import App from 'App';


### CardItem.js
- [] Changed flexDirection from column to row.   flexDirection:'column',


### MyBtn.js
- [] This is never used and should be deleted

### Nav.js
- [] Add page for Shoes, which does not exist.  Should be removed





